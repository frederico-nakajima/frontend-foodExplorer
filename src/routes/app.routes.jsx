import {Routes,Route} from 'react-router-dom'

import { AddDish } from '../pages/AddDish'
import { EditDish } from '../pages/EditDish'
import { Meal } from '../pages/Meal'
import { MealUser } from '../pages/MealUser'
import { MenuUser } from '../pages/MenuUser'
import {Home} from '../pages/Home'
import {Details} from '../pages/Details'
import {Profile} from '../pages/Profile'




export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<AddDish/>}/>
            <Route path='/edit' element={<EditDish/>}/>
            <Route path='/meal' element={<Meal/>}/>
            <Route path='/mealuser' element={<MealUser/>}/>
            <Route path='/menuser' element={<MenuUser/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/details/:id' element={<Details/>}/>
        </Routes>
    )
}