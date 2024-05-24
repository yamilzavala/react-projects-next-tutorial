import React from 'react'
import Link from 'next/link'

const AboutInfoPage = () => {
  return (
    <div>
      <h1 className="text-7xl">
        AboutInfoPage
      </h1>
      <Link href='/about' className="text-2xl btn btn-accent">
        back to about page
      </Link>
      <br/>
      <Link href='/' className="mt-5 text-2xl btn btn-primary">
        back to home
      </Link>
    </div>
  )
}

export default AboutInfoPage