import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
	const auth = { token: false }

	return auth.token ? <Outlet /> : <Navigate to='/login' />
}
