import { type Tboolean, type TChild, type TNull } from '../../types'

export type ShowProps = {
	children: TChild
}

export type ShowWhenProps = {
	isTrue: Tboolean
	children: TChild
}

export type ShowElseProps = {
	render?: TChild
	children?: TChild
}

export type TShow = TChild | TNull
