import React from 'react'

import { Dashboard, Favorite, Home, Login, NotFound, Settings } from '@pages'
import { PrivateRoutes } from '@router'
import { createBrowserRouter } from 'react-router-dom'

const auth = false
export const router = createBrowserRouter([
	{
		element: <PrivateRoutes />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/settings',
				element: <Settings />,
			},
			{
				path: '/favorite',
				element: <Favorite />,
			},
		],
	},
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: !auth ? <Login /> : <Dashboard />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])
