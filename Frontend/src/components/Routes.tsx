import Home from '@/pages'
import LogIn from '@/pages/login'
import Rents from '@/pages/rents'
import Rooms from '@/pages/rooms'
import { FC } from 'react'
import { Route, Routes as RRoutes } from 'react-router-dom'

export const Routes: FC = () => {
  return (
    <>
      <RRoutes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<LogIn />}></Route> */}
        <Route path="rents" element={<Rents />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="login" element={<LogIn />} />
      </RRoutes>
    </>
  )
}
