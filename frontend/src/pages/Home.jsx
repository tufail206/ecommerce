import React from 'react'
import Slider from '../components/Slider'
import { useAuth } from '../context/Auth-context'


const Home = () => {
let {isLoggedIn,LoginUserData}=useAuth()
  return (
    <div>
      <h1>{isLoggedIn&& LoginUserData.name}</h1>
      <Slider/>

    </div>
  )
}

export default Home
