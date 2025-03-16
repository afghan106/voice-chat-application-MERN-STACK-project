const otpService = require("../service/otp-service");
const OtpService = require("../service/otp-service")
const HashService = require("../service/hash-services");
const crypto=require("crypto")
const userService = require("../service/user-service");
const tokenServices = require("../service/token-services");




class AuthController {
    async sendOtp(req, res) {
        
        // now here is the full logic for the otp send request
        const { phone } = req.body;

        // check if there is no phone number in the front end 
        if (!phone) {
            res.status(400).json({ message: "phone field is required" });
        }

        const otp = await OtpService.genrateOtp();

        console.log({ otp: `this is the otp : ${otp}` });

        
       
        //hash the otp

        // time to live till the time it wil validation
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;

        const data = `${phone}.${otp}.${expires}`
        //the bellow hashing is gona create from the above combination
        
        const hash = HashService.hashOtp(data);


        res.json({ hash: hash });


        //SEND THE OTP TO THE PHONE NUMBER with twilio
       
     

         
    }

    async verify_Otp(req, res) {
        //this is the logic of the verification
         
        
        const { phone, otp, hash } = req.body;

        res.json({ phone, otp, hash })

        if (!otp || !phone || hash) {
            res.status(400).json({ message: "all field are required" })
        }

        const [hashOtp, expires] = hash.split(".");

        if (Date.now() > +expires) {
            res.status(400).json({ message: "OTP is expired " })
            
        }

        const data = `${phone}.${otp}.${expires}`;

        const isValid = otpService.verify_Otp(data, hashOtp);


        if (!isValid) {
            res.status(400).json({
                message: "Invlaid otp"
            });
        }

        let user;
      
        try {
            user = await userService.findUser({ phone: phone });
            if (!user) {
                createuser = await userService.createUser({ phone: phone });
            }

        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "mongodb server error" });
        }
    
        //create the jwt toke
        const { accesstoken, refreshtoken } = tokenServices.generateToken({ _id: user._id,activated:false });
      res.cookie('refreshtoken', refreshtoken, { maxAge:1000*60*60*24*30, httpOnly: true});    
      res.json({accesstoken});
    };

}

module.exports = new AuthController();