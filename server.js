const express = require('express')
const app = express()
const PORT = 8000

// Routes
const readRoute = require('./routes/read')
const searchRoute = require('./routes/search')
const createRoute = require('./routes/create')
const updateRoute = require('./routes/update')
const deleteRoute = require('./routes/delete')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/posts', readRoute)    // /posts      -GET-     -READ-
app.use('/api/posts', searchRoute)  // /posts/:id  -GET-     -SEARCH-
app.use('/api/posts', createRoute)  // /posts      -POST-    -CREATE-
app.use('/api/posts', updateRoute)  // /posts/:id  -PUT-     -UPDATE-
app.use('/api/posts', deleteRoute)  // /posts/:id  -DELETE-  -DELETE-

app.listen(PORT, () => console.log(`Server Online : http://localhost:${PORT}/`))