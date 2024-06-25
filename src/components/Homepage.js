import React from 'react'
import homepage from '../img/homepage.png'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

const Homepage = () => {

    const navigate = useNavigate();
    function clickHandler(){
        navigate("/play");
    }


  return (
    <div>
        <div className='flex w-full  h-[100vh] items-center px-10 pl-20 justify-between'>
            <img src={homepage} className='w-[50vw] mt-20 h-[84vh] '></img>
            <div className='w-[50vw]  flex flex-col text-center'>
                <div className='text-9xl font-bold mt-32'>
                    DICE GAME
                </div>
                    <Link to="/play">
                    <button className='flex w-[86%] flex-row-reverse ' >
                    <div className='text-white bg-black w-[40%] rounded-lg mt-8'>
                    <div className='py-[5%] '>Play Now</div></div>
                </button>
                    </Link>           
                    
            </div>
        </div>
    </div>
  )
}

export default Homepage
