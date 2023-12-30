import React from 'react'
import '../css/table.css'
import Letters from './alphabet-parts/Letters'
import Numbers from './alphabet-parts/Numbers'
import Punctuations from './alphabet-parts/Punctuations'

export default function AlphabetTable() {
	return (
		<table className='morse-code-table'>
			<tbody>
				<tr>
					<h3>Letters</h3>
				</tr>
				<div className='letters'>
					<Letters />
				</div>

				<tr>
					<h3>Numbers</h3>
				</tr>
				<div className='numbers'>
					<Numbers />
				</div>

				<tr>
					<h3>Punctuations</h3>
				</tr>
				<div className='punctuations'>
					<Punctuations />
				</div>
			</tbody>
		</table>
	)
}
