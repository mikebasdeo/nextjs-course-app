// pages/notes/index.jsx
/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import Link from 'next/link'

const NotesPage = ({ notes }) => {
  const [loading, setLoading] = useState(false)

  // const notes = new Array(15)
  //   .fill(1)
  //   .map((e, i) => ({ id: i, title: `This is my note ${i}` }))

  const showStuff = () => {
    return (
      <div sx={{ variant: 'containers.page' }}>
        <h1>My Notes</h1>

        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {notes.map((note) => (
            <div key={note.id} sx={{ width: '33%', p: 2 }}>
              <Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`}>
                <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                  <div sx={{ variant: 'containers.card' }}>
                    <strong>{note.title}</strong>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return loading ? <h1>Fuck you</h1> : showStuff()
}

export default NotesPage

// 🏋 this only runs on the server. it gets extracted out by nextJS
export async function getServerSideProps() {
  // environment variable here
  const res = await fetch(`http://localhost:3000/api/notes`)
  const { data } = await res.json()
  console.log(data)
  return { props: { notes: data } }
}
