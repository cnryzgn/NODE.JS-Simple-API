const router = require('express').Router()
const Conn = require('../database/db')

router.get('/:id', (req, res) => {
    const postId = req.params.id

    Conn.findById(postId, (err, data) => {
        if (err) {
            return res
                     .status(404)
                     .json({ msg: 'Not Found!' })
        }

        res
          .status(200)
          .json(data)
    })
})

module.exports = router