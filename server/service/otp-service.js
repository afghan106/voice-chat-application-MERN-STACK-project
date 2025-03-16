const crypto=require("crypto");
const hashServices = require("./hash-services");

class OtpService {

    async genrateOtp() {
        const otp = await crypto.randomInt(1000, 9999);
        return otp;

    }


    // sendSms() {
    //     // Implement your logic to send SMS here
    //     // here we are going to use the twilio librar where i set the variable for the (SMS_SID,SMS_AUTH_TOKEN,SMS_FROM_NUMBER)
        
    //     const accountSid = process.env.SMS_SID;
    //     const authToken = process.env.SMS_AUTH_TOKEN;
    //     const from = process.env.SMS_FROM_NUMBER;
       

    //     const otp = this.genrateOtp(otp);
    //     const client = require('twilio')(accountSid, authToken);
    //     client.messages
    //         .create({
    //             body: `Your OTP is ${otp}`,
    //             from: from,
    //             to: "+764616473"
    //         })
    //         .then(message => console.log(message.sid))
    //         .done();
    // }

    verify_Otp(hashotp, data) {
        let computedHash = hashServices.hashOtp(data);

        //verify the computedhash with the hashotp
        if (computedHash === hashotp) {
            return computedHash === hashotp;
        console.log('the otp has been computed and the hash has been computed');
        
        }
    
        
        
 
    }
}
   



module.exports = new OtpService