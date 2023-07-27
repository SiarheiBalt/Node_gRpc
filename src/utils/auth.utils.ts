const jwt = require('jsonwebtoken');
const config = require('../../config/default');

function createToken (id: number) {
  const {jwtSecret, tokenTerm} = config

  return jwt.sign(
    { id },
    jwtSecret, 
    { expiresIn: "16h" }
  )
};


export default createToken;