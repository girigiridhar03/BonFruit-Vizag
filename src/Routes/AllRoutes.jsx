import Home from '../Pages/Home/Home'
import MainLayout from '../Layouts/MainLayout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About/About'
import Gallery from '../Pages/Gallery/Gallery'
import Contact from '../Pages/Contact/Contact'
import TermsAndConditions from '../Pages/TermsAndConditions/TermsAndConditions'
import AdminLayout from '../Layouts/AdminLayout'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Orders from '../Pages/Orders/Orders'
import AdminOrderDetails from '../components/AdminOrdersComponents/AdminOrderDetails'
import Menu from '../Pages/Menu/Menu'
import EditMenu from '../Pages/Menu/EditMenu'
import ViewMenu from '../Pages/Menu/ViewMenu'
import AllMenu from '../Pages/Menu/AllMenu'
const AllRoutes = () => {
  return (
   <Routes>
    {/* Client Routes */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/termsandconditions' element={<TermsAndConditions />} />
        <Route path="/contactus" element={<Contact />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<AdminLayout />}>
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/orders' element={<Orders />} />
         <Route path='/orderDetails/:id' element={<AdminOrderDetails />} />
         <Route path='/allmenu' element={<AllMenu />} />
         <Route path='/addmenu' element={<Menu />} />
         <Route path='/editmenu' element={<EditMenu />} />
         <Route path='/viewmenu' element={<ViewMenu />} />
      </Route>
   </Routes>
  )
} 

export default AllRoutes
