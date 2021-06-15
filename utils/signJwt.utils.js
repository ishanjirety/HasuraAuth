const jwt = require('jsonwebtoken');

const signJwt = (id,name) => {
    const JWT_DATA = {
        "sub": id,
        "name": name,
        "admin": false,
        "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": id,
            "x-hasura-org-id": id,
            "x-hasura-custom": "custom-value"
        }
    }
    try{
   return jwt.sign(JWT_DATA, process.env.SECRET, {expiresIn: '24h' })
    }catch(e){
      return false
    }
}
module.exports = signJwt
