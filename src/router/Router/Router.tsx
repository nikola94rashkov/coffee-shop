import React from 'react'

import {
	Cart,
	Dashboard,
	Favorite,
	Home,
	Login,
	NotFound,
	Product,
	Products,
	Settings,
} from '@pages'
import { PrivateRoutes } from '@router'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/cart',
			element: <Cart />,
		},
		{
			path: '/product/:productId',
			element: <Product />,
		},
		{
			path: '/products',
			element: <Products />,
		},
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
			path: '*',
			element: <NotFound />,
		},
	])

	return <RouterProvider router={router} />
}
