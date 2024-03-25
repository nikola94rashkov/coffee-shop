import React from 'react'

import { Show, ShowElse, ShowWhen } from './components/utils'

export const App = () => {
	return (
		<>
			<h1 data-testid='app-title'>Custom React Theme</h1>

			<Show>
				<ShowWhen isTrue={true}>
					<h1>when</h1>
				</ShowWhen>

				<ShowElse>
					<h1>else</h1>
				</ShowElse>
			</Show>
		</>
	)
}
