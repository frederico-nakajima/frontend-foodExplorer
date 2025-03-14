import {Routes,Route} from 'react-router-dom';
import { DishCommonUser } from '../pages/DishCommonUser';
import { MenuCommonUser } from '../pages/MenuCommonUser';

export function CustomerRoutes(){
    return(
        <Routes>            
            <Route path='/' element={<MenuCommonUser/>}/>
            <Route path='/dishuser/:id' element={<DishCommonUser/>}/>
        </Routes>
    )
}
            
            