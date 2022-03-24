import React, { useEffect } from 'react'
import DashboardRouters from './DashboardRouters' 
import AuthRouters from './AuthRouters' 
import AuthGuard from './AuthGuard'
import ClientGuard from './ClientGuard'

const Routers = () => {

    return (
        <React.Fragment>
            <AuthGuard>
                <DashboardRouters/>
            </AuthGuard>
            <ClientGuard>
                <AuthRouters/>
            </ClientGuard>
        </React.Fragment>
    )
}

export default Routers