import React from 'react'

import { render, screen } from '@testing-library/react'

import { App } from './App'

describe('Render the app', () => {
	it('should contains the heading 1', () => {
		render(<App />)
		const heading = screen.getAllByTestId('app-title')
		expect(heading).toHaveLength(1)
	})
})
