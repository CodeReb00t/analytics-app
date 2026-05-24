import { Outlet } from '@tanstack/react-router'
import React from 'react'

const PrivateLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PrivateLayout
