import { Routes, Route } from 'react-router-dom';
import { AddDish } from '../pages/AddDish'
import { EditDish } from '../pages/EditDish'
import { DishAdminUser } from '../pages/DishAdminUser'
import { MenuAdminUser } from '../pages/MenuAdminUser'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/add' element={<AddDish/>}/>
      <Route path='/edit' element={<EditDish/>}/>
      <Route path='/dishadmin/:id' element={<DishAdminUser/>}/>
      <Route path='/' element={<MenuAdminUser/>}/>      
    </Routes>
  );
}