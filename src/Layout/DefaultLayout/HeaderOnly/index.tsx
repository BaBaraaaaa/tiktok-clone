import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HeaderOnly = () => {
  return (
    <div>
      <div>HeaderOnly</div>
      <Outlet/>
    </div>
  )
}

export default HeaderOnly