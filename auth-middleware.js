const jwt = require('jsonwebtoken')
const config = require('../lib/config')
const User = require('../models/User')
const Base64 = require('js-base64')
const { decodeString } = require('../_helpers')

// const authMiddleware = async (req, res, next) => {
//   //Pull the token value from the header on any requests that come in. If the token isn't present, reject access to the route
//   const registered = await User.count()
//   if (!registered) return next('Empty user')

//   try {
//     let token = req.body?.token
//     if (token) {
//       token = Base64.decode(token)
//       const email = decodeString(token)
//       const user = await User.findOne({ where: { email } })
//       if (user === null) return next('User does not exist')
//       req.user = user
//       req.requireToken = true
//       next()
//     } else {
//       token = req.header('authorization')
//       if (!token) return next('Access Denied')
//       token = token.replace('Bearer ', '')
//       const auth = jwt.verify(token, config['token-secret'])
//       const user = await User.findByPk(auth.id)
//       if (user === null) return next('User does not exist')

//       req.user = user
//       next()
//     }
//   } catch (e) {
//     return next('Invalid credentials')
//   }
// }

// module.exports = authMiddleware
