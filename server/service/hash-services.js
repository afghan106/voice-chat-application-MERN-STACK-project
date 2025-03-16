const crypto = require("crypto");



class HashService{

  hashOtp(data) {
      
    // here you can use any hashing algorithm you want
        // here we use the crypto library for the hasing which syntax is crypto.createHmac("shah256", secret).update("here what we hash").digest('hex');

    return crypto.createHmac("sha256", process.env.HASH_SECRET).update(data).digest("hex");



  }
  
}
module.exports = new HashService;