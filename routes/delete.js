const router = require('express').Router()
const Conn = require('../database/db')

router.delete('/:id', (req, res) => {
    const postId = req.params.id

    Conn.findByIdAndDelete(postId, (err, result) => {
        if (err) {
            return res
                     .status(404)
                     .json({ msg: 'Not Found!' })
        }
            
        res
          .status(200)
          .json({ msg: 'deleted!' })
    })
})

module.exports = router