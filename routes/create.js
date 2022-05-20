const router = require('express').Router()
const Conn = require('../database/db')

router.post('/', (req, res) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content
    }

    Conn.create(newPost, (err, result) => {
        if (err) {
            return res
                     .status(400)
                     .json({ msg: 'Something\'s gone wrong!' })
        }

        res
          .status(201)
          .json({ msg: 'created!' })
    })
})

module.exports = router