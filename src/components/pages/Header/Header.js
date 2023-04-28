import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Nav>
      <Link to = 'sentbox'>sentbox</Link>
      </Nav>
    </div>
  )
}

export default Header