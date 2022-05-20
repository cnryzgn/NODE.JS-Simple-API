const router = require('express').Router()
const Conn = require('../database/db')

router.get('/', (req, res) => {
    Conn.find((err, data) => {
        if (err) throw err
        
        if (data.length === 0) {
            return res
                     .status(404)
                     .json({ msg: 'No data found!' })
        }

        res
          .status(200)
          .json(data)
    })
})

module.exports = router