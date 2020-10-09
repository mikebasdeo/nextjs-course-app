import { useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const IDGuy = ({ note }) => {
  const [myState, setMyState] = useState('please pass an id')

  const router = useRouter()

  useEffect(() => {
    const { id } = note
    // console.log(id)
    setMyState(id)
  }, [router])

  useEffect(() => {
    if (myState !== undefined) {
      console.log(`state: {${myState}} `)
    }
  }, [myState])

  const showStuff = () => {
    return (
      <div sx={{ variant: 'containers.page' }}>
        <h1>{note.title} </h1>
        <h1>{note.id} </h1>
      </div>
    )
  }

  return myState ? showStuff() : <h1>Fuck you</h1>
}
export default IDGuy

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/notes/${params.id}`)

  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return { props: {} }
  }

  const { data } = await response.json()

  if (data) {
    return { props: { note: data } }
  }
}
