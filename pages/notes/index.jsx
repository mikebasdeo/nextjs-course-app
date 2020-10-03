import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Notes = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }))

  useEffect(() => {
    console.log('notes heartbeat')
    console.log(notes)
  }, [])

  return (
    <>
      <div>
        <h1>Notes</h1>
        {notes.map((note) => (
          <div key={note.id}>
            <Link href='/notes[id]' as={`/notes/${note.id}`}>
              <a>
                <strong>{note.title}</strong>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Notes
