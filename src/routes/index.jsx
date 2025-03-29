import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { api} from "../services/api";
import { useAuth } from "../hooks/auth";
import {USER_ROLE} from "../utils/roles"
import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes';
import { AuthRoutes } from './auth.routes';
import { useEffect } from 'react';

export function AppRoutes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    if (!user) return;
    api
    .get('/users/validated')
    .catch((error) =>  {
      if(error.response?.status === 401){
      signOut();
    }
    })
},[user]);

  function AccessRoute(){
    if (!user) return <AuthRoutes />;    
    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes/>;
      default:
        return <CustomerRoutes/>
    }
  }

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/*" element={<AccessRoute />} />
      </Routes>
    </BrowserRouter>
  );
}