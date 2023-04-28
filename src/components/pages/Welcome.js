import React from 'react'
import EmailForm from './EmailForm'
import Sentbox from './Sentbox' 
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { authAction } from '../store/AuthSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const history = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        dispatch(authAction.Logout())
        history('/')
    }
  return (
    <div>
    <div>
      <h4>welcome to mail box client</h4>
    <hr/>
    {<Button variant='outline-primary'><Link to='/sentbox'>sent box</Link></Button>}
      {<Button variant='outline-primary' style={{marginLeft:'20px'}}><Link to='/inbox'>Inbox</Link></Button>}
      <Button variant='danger' onClick={logoutHandler} style={{marginLeft:'20px'}}>Logout</Button>

    </div>
    <EmailForm/>
   </div>
  )
}

export default Welcome;