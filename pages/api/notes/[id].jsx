// pages/api/notes/
import notes from '../../../src/data/data'
import { useRouter } from 'next/router'
import nc from 'next-connect'
import cors from 'cors'

const router = useRouter()
const { id } = router.query
console.log(id)

const handler = nc()
  // add middleware to handler
  .use(cors())
  // get one note => DELETE /api/note/:id
  .get((req, res) => {
    res.json(notes[id])
  })

export default handler
