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
      log(`response 200, entity: `, entity)
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
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 400`)
    }
    res.status(400).send(err || { error: 'bad request' })
  }),

  f403: (req, res, log) => (err => {
    const body = req.body
    const url = req.url
    const method = req.method
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 403`)
    }
    res.status(403).send(err || { error: 'forbidden' })
  }),

  f404: (req, res, log) => (err => {
    const body = req.body
    const url = req.url
    const method = req.method
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 404`)
    }
    res.status(404).send(err || { error: 'not found' })
  }),

  f500: (req, res, log) => (err => {
    const body = req.body
    const url = req.url
    const method = req.method
    if (log) {
      log(`request ${method} ${url}`, body)
      log(`response 500`)
    }
    res.status(500).send(err || { error: 'internal server error' })
  })
}
