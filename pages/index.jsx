import React from 'react'
import Link from 'next/link'

const Page = () => (
  <>
    <h1>Hello Again</h1>
    <p>Lorem Ipsum</p>

    <Link href='/notes'>
      <a>Hello</a>
    </Link>
  </>
)

export default Page
