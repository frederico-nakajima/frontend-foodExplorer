import {Routes,Route} from 'react-router-dom'
import { AddDish } from '../pages/AddDish'
import { EditDish } from '../pages/EditDish'
import { Meal } from '../pages/Meal'
import { DishCommonUser } from '../pages/DishCommonUser'
import { MenuCommonUser } from '../pages/MenuCommonUser'
import { DishAdminUser } from '../pages/DishAdminUser'
import { MenuAdminUser } from '../pages/MenuAdminUser'
import {Details} from '../pages/Details'
import {Profile} from '../pages/Profile'




export function AppRoutes(){
    return(
        <Routes>            
            <Route path='/add' element={<AddDish/>}/>
            <Route path='/edit' element={<EditDish/>}/>
            <Route path='/meal' element={<Meal/>}/>
            <Route path='/dishuser' element={<DishCommonUser/>}/>
            <Route path='/' element={<MenuCommonUser/>}/>
            <Route path='/dishadmin' element={<DishAdminUser/>}/>
            <Route path='/admin' element={<MenuAdminUser/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/details/:id' element={<Details/>}/>
        </Routes>
    )
}