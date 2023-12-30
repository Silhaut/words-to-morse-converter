import { morseCodeMap } from '../morse-alphabet/morseCodeMap'

export default function Letters() {
	const keys = Object.keys(morseCodeMap)
	const values = Object.values(morseCodeMap)

	return (
		<tbody>
			<tr>
				<th>{keys[0]}</th>
				<td>{values[0]}</td>
				<th>{keys[1]}</th>
				<td>{values[1]}</td>
				<th>{keys[2]}</th>
				<td>{values[2]}</td>
			</tr>
			<tr>
				<th>{keys[3]}</th>
				<td>{values[3]}</td>
				<th>{keys[4]}</th>
				<td>{values[4]}</td>
				<th>{keys[5]}</th>
				<td>{values[5]}</td>
			</tr>
			<tr>
				<th>{keys[6]}</th>
				<td>{values[6]}</td>
				<th>{keys[7]}</th>
				<td>{values[7]}</td>
				<th>{keys[8]}</th>
				<td>{values[8]}</td>
			</tr>
			<tr>
				<th>{keys[9]}</th>
				<td>{values[9]}</td>
			</tr>
		</tbody>
	)
}
