// pages/api/notes/
import notes from '../../../src/data/data'

import nc from 'next-connect'
import cors from 'cors'

const handler = nc()
  // add middleware to handler
  .use(cors())

  // get all notes => GET /api/notes/
  .get((req, res) => {
    res.json({ data: notes })
  })

  // create note => POST /api/note
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now(),
    }
    notes.push(note)
    res.json({ data: note })
  })

export default handler
