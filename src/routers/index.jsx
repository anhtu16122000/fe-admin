import React from 'react'
import MainLayout from '../layout/MainLayout'
import ClientGuard from './ClientGuard'
import DashboardRouters from './DashboardRouters'
import AuthRouters from './AuthRouters'

const Routers = () => {

    return (
        <React.Fragment>
            <MainLayout>
                <DashboardRouters/>
            </MainLayout>
            <ClientGuard>
                <AuthRouters/>
            </ClientGuard>
        </React.Fragment>
    )
}

export default Routers