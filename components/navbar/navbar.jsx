import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'

export default function Navbar() {
  const [ session, loading ] = useSession()
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-xl">
    {/* <Link href="/">
    GyanBlog
    </Link> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        {/* <li className="nav-item active">
          <Link href="/">
          Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/articles">
            Articles
          </Link>
        </li> */}
        {/* <li className="nav-item">
          <Link href="/write">
            Write
          </Link>
        </li> */}
      </ul>
      <ul className="navbar-nav px-3" style={{display : "flex", gap : "2em"}}>
          <li className="nav-item text-nowrap">
          <Link href="/write">
              <Button >Write</Button>
          </Link>
          </li>
          <li className="nav-item text-nowrap">
            {!session && 
              <Button onClick={() => signIn()}>Sign in (미구현)</Button>
            }
            {session && 
              <Button className="nav-link" onClick={() => signOut()}>
                Sign out
              </Button>
            }
          </li>
      </ul>
    </div>
  </div>
</Nav>
  )
}
