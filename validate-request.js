const options = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true, // remove unknown props
}

const validateRequest = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, options)

  if (error) {
    next({ errors: error.details })
  } else {
    req.body = value
    next()
  }
}

module.exports = validateRequest
