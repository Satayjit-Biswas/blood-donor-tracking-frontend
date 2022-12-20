import React from 'react'
import Profile from '../components/Account/Profile'
import Page_header from '../components/Public/Page_header'

function profile() {
  return (
    <div>      
        <Page_header text="Your Profile"></Page_header>
        <Profile></Profile>
    </div>
  )
}

export default profile