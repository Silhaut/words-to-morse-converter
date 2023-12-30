import { morseCodeMap } from '../morse-alphabet/morseCodeMap'

export default function Letters() {
	const keys = Object.keys(morseCodeMap)
	const values = Object.values(morseCodeMap)

	return (
		<tbody>
			<tr>
				<th>{keys[36]}</th>
				<td>{values[36]}</td>
				<th>{keys[37]}</th>
				<td>{values[37]}</td>
				<th>{keys[38]}</th>
				<td>{values[38]}</td>
			</tr>
			<tr>
				<th>{keys[39]}</th>
				<td>{values[39]}</td>
				<th>{keys[40]}</th>
				<td>{values[40]}</td>
				<th>{keys[41]}</th>
				<td>{values[41]}</td>
			</tr>
			<tr>
				<th>{keys[42]}</th>
				<td>{values[42]}</td>
				<th>{keys[43]}</th>
				<td>{values[43]}</td>
				<th>{keys[44]}</th>
				<td>{values[44]}</td>
			</tr>
			<tr>
				<th>{keys[45]}</th>
				<td>{values[45]}</td>
				<th>{keys[46]}</th>
				<td>{values[46]}</td>
				<th>{keys[47]}</th>
				<td>{values[47]}</td>
			</tr>
			<tr>
				<th>{keys[48]}</th>
				<td>{values[48]}</td>
				<th>{keys[49]}</th>
				<td>{values[49]}</td>
				<th>{keys[50]}</th>
				<td>{values[50]}</td>
			</tr>
			<tr>
				<th>{keys[51]}</th>
				<td>{values[51]}</td>
				<th>{keys[52]}</th>
				<td>{values[52]}</td>
				<th>{keys[53]}</th>
				<td>{values[53]}</td>
			</tr>
			<tr>
				<th>' '</th>
				<td>{values[54]}</td>
			</tr>
		</tbody>
	)
}
