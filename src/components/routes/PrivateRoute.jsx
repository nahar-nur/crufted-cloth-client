import React from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children

    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;