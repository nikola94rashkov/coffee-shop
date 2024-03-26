import { Children, type FC, isValidElement } from 'react'

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
		if (isValidElement(child)) {
			const { isTrue } = child.props

			if (isTrue === undefined) {
				otherwise = child
			} else if (!when && isTrue) {
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
