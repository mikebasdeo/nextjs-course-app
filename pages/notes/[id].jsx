import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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
      console.log(`#ofUpdates${myState[0]}`)
      console.log(`#ofUpdates${myState[1]}`)
      console.log(`#ofUpdates${myState[2]}`)
    }
  }, [myState])

  const showStuff = () => {
    return (
      <>
        <h1>{myState[0]}</h1>
        <h1>{myState[1]}</h1>
        <h1>{myState[2]}</h1>
      </>
    )
  }

  return myState ? showStuff() : <h1>Fuck you</h1>
}

export default IDGuy
