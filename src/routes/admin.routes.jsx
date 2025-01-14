import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { NotFound } from '../pages/NotFound';
import { Suppliers } from '../pages/Suppliers';
import { SalesReport } from '../pages/SalesReport';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/add' element={<AddDish/>}/>
      <Route path='/edit' element={<EditDish/>}/>
      <Route path='/dishadmin' element={<DishAdminUser/>}/>
      <Route path='/admin' element={<MenuAdminUser/>}/>
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}