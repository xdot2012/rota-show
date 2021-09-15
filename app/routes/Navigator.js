
import React, { useContext } from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import AuthContext from '../context/auth';


function Navigator() {
  const { signed } = useContext(AuthContext);
    return (
        signed == false ? 
        <PublicRoutes />
         :
        <PrivateRoutes />
        )
}

export default Navigator;