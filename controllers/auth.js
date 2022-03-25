const {OAuth2Client} = require('google-auth-library')

const client = new OAuth2Client("450824895681-6uar4cut594oj6lfcttojh7l4aqfup7l.apps.googleusercontent.com");

exports.googlelogin = (req, res, next)=>{

  const {tokenId} = req.body;

  console.log(tokenId)

  client.verifyIdToken({idToken:tokenId, audience: "450824895681-6uar4cut594oj6lfcttojh7l4aqfup7l.apps.googleusercontent.com"}).then(res =>{
      const {email_verified, email, name} = res.payload;
      console.log(res)
  })

  
}