import React from 'react'
import { FaRegUser } from "react-icons/fa";
import {BiStore} from 'react-icons/bi'
import {BsSuitHeart} from 'react-icons/bs'

const AccountDropdown = () => {
  const  h4Style = {
    fontSize: '0.85rem',
    lineHeight: 'normal',
    fontWeight: '400',
  }

  return (
    <div className='topNav-Dropdown-shadow  bg-[--secondary-bg-color] rounded-md flex flex-col   w-full'>
      <button className='normal text-[.9rem]  mx-4 my-5'>
        SIGN IN
      </button>

      <li className=' px-4 py-3 hover:bg-[--bg-color] border-t-[2px] border-[--bg-color] flex gap-5'>
        <span className="topNavbar"><FaRegUser /></span>
        <h4 className='topNavbar' style={h4Style}>My Account</h4>
      </li>
      <li className=' px-4 py-3 hover:bg-[--bg-color] flex gap-5'>
        <span className="topNavbar"><BiStore /></span>
        <h4 className='topNavbar' style={h4Style}>Orders</h4>
      </li>
      <li className=' px-4 py-3 hover:bg-[--bg-color] flex gap-5'>
        <span className="topNavbar"><BsSuitHeart /></span>
        <h4 className='topNavbar' style={h4Style}>Saved Items</h4>
      </li>
    </div>
  )
}

export default AccountDropdown