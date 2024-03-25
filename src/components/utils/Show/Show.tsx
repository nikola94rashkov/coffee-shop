import React, { Children, type FC } from 'react'

import {
	type ShowProps,
	type ShowWhenProps,
	type ShowElseProps,
	type TShow,
} from './types'

export const Show: FC<ShowProps> = ({ children }) => {
	let when: TShow = null
	let otherwise: TShow = null

	Children.forEach(children, (child) => {
		if (React.isValidElement(child)) {
			const { isTrue } = child.props

			if (isTrue === undefined) {
				otherwise = child
			} else if (!when && child.props.isTrue === true) {
				when = child
			}
		}
	})

	return when ?? otherwise
}

export const ShowWhen: FC<ShowWhenProps> = ({ isTrue, children }) =>
	isTrue ? children : null

export const ShowElse: FC<ShowElseProps> = ({ render, children }) =>
	render ?? children
