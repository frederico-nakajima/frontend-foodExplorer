import {Routes,Route} from 'react-router-dom'
import { AddDish } from '../pages/AddDish'
import { EditDish } from '../pages/EditDish'
import { DishCommonUser } from '../pages/DishCommonUser'
import { MenuCommonUser } from '../pages/MenuCommonUser'
import { DishAdminUser } from '../pages/DishAdminUser'
import { MenuAdminUser } from '../pages/MenuAdminUser'


export function AppRoutes(){
    return(
        <Routes>            
            <Route path='/' element={<MenuCommonUser/>}/>
            <Route path='/dishuser' element={<DishCommonUser/>}/>
            <Route path='/dishadmin' element={<DishAdminUser/>}/>
            <Route path='/admin' element={<MenuAdminUser/>}/>
            <Route path='/add' element={<AddDish/>}/>
            <Route path='/edit' element={<EditDish/>}/>           
        </Routes>
    )
}
            
            