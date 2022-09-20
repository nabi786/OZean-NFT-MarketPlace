const otpGenerator = require('otp-generator')
var otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });


const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: process.env.API_KEY2,
  apiSecret: process.env.API_Secret2
})


// send Message
const sendOTP = ()=>{

    const from = "Vonage APIs"
    const to = "923423597787"
    const text = 'Hi Dear, How are you, this message is just test purpose, so please do not take it serous'

    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
    
}


module.exports = sendOTP

