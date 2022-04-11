import React from 'react'
import MainLayout from '../layout/MainLayout'
import ClientGuard from './ClientGuard'
import DashboardRouters from './DashboardRouters'
import AuthRouters from './AuthRouters'

const Routers = () => {

    return (
        <React.Fragment>
            <ClientGuard>
                <AuthRouters/>
            </ClientGuard>
            <MainLayout>
                <DashboardRouters/>
            </MainLayout>
        </React.Fragment>
    )
}

export default Routers