// pages/api/data
import nc from 'next-connect'
import cors from 'cors'

// create note => POST /api/note
// update note => PATCH /api/note/:id
// delete note => DELETE /api/note/:id
// get one note => DELETE /api/note/:id
// get all notes => DELETE /api/note/

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send('Hello world2')
  })
  .post((req, res) => {
    res.json({ hello: 'world' })
  })
  .put(async (req, res) => {
    res.end('hello')
  })

export default handler
