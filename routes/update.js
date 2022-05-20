const router = require('express').Router()
const Conn = require('../database/db')

router.put('/:id', (req, res) => {
    const postId = req.params.id
    const newPost = {
        title: req.body.title,
        content: req.body.content
    }

    Conn.findByIdAndUpdate(postId, newPost, (err, result) => {
        if (err) {
            return res
                     .status(404)
                     .json({ msg: 'Not Found!' })
        }
        
        res
          .status(200)
          .json({ msg: 'updated!' })
    })
})

module.exports = router