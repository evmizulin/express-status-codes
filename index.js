module.exports = {

  f200Id: (req, res, log) => (entity => {
    const body = req.body
    const url = req.url
    const method = req.method
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 200, id: ${entity._id}`)
    }
    res.status(200).send({ id: entity._id })
  }),

  f200Entity: (req, res, log) => (entity => {
    const body = req.body
    const url = req.url
    const method = req.method
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 200, entity:`, entity)
    }
    res.status(200).send(entity)
  }),

  f204: (req, res, log) => (() => {
    const body = req.body
    const url = req.url
    const method = req.method
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 204, no content`)
    }
    res.status(204).send()
  }),

  f400: (req, res, log) => (err => {
    const body = req.body
    const url = req.url
    const method = req.method
    const error = err || { error: 'bad request' }
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 400, error:`, error)
    }
    res.status(400).send(error)
  }),

  f403: (req, res, log) => (err => {
    const body = req.body
    const url = req.url
    const method = req.method
    const error = err || { error: 'forbidden' }
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 403, error:`, error)
    }
    res.status(403).send(error)
  }),

  f404: (req, res, log) => (err => {
    const body = req.body
    const url = req.url
    const method = req.method
    const error = err || { error: 'not found' }
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 404, error:`, error)
    }
    res.status(404).send(error)
  }),

  f500: (req, res, log) => (err => {
    const body = req.body
    const url = req.url
    const method = req.method
    const error = err || { error: 'internal server error' }
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 500, error:`, error)
    }
    res.status(500).send(error)
  })
}
