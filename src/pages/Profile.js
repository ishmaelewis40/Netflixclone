import React from 'react'
import '../components/Profile.css'
import Nav from '../components/Nav'
import avatar from '../images/avatar.png'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import Plans from './Plans'

function Profile() {
    const user = useSelector(selectUser);

  return (
    <div className='profile'>
        <Nav/>
        <div className='profile_body'>
            <h1>Edit Profile</h1>
            <div className='profile_info'>
                <img src={avatar}/>
            <div className='profile_details'>
                <h2>{user.email}</h2>
                <div className='profile_plans'>
                    <h3>Plans </h3>
                    <Plans />
                    <div>basic</div>
                    <button  onClick={() => {auth.signOut()}} className='profile_signout'>Sign Out</button>
                    
                    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile