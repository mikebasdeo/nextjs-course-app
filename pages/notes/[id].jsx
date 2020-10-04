/** @jsx jsx */

import { useEffect, useState } from 'react'
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const IDGuy = () => {
  const [myState, setMyState] = useState('please pass an id')

  const router = useRouter()
  const { id } = router.query
  // console.log(id)

  // if (params !== myState) {
  //   setMyState(params)
  // }

  useEffect(() => {
    console.log(id)
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
        <h1>id: {myState} </h1>
      </div>
    )
  }

  return myState ? showStuff() : <h1>Fuck you</h1>
}

export default IDGuy
