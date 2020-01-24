module.exports= {
  getProduct: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.get_product(id).then(result => {
      res.status(200).send(result)
    }).catch(err => res.status(500).send(err))
  },
  getProducts: (req, res) => {
    const db = req.app.get('db')
    db.get_products().then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  postProduct: (req, res) => {
    const db = req.app.get('db')
    const {name, price, img} = req.body
    console.log(req.body)
    db.post_product([name, price, img]).then(results => {
      res.sendStatus(200)
    }).catch(err => res.status(500).send(err))
  },
  putProduct: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {name, price, img} = req.body
    db.put_product([id, name, price, img]).then(results => {
      res.sendStatus(200)
    }).catch(err => res.status(500).send(err))
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_product(id).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  }
}