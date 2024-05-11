import React from 'react'
import Link from 'next/link'

const AboutInfoPage = () => {
  return (
    <div>
      <h1 className="text-7xl">
        AboutInfoPage
      </h1>
      <Link href='/about' className="text-2xl">
        about page
      </Link>
      <br/>
      <Link href='/' className="text-2xl">
        home page
      </Link>
    </div>
  )
}

export default AboutInfoPage