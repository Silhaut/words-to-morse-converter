import React, { useState } from 'react'

const morseCodeMap = {
	A: '.- ',
	B: '-... ',
	C: '-.-. ',
	D: '-.. ',
	E: '. ',
	F: '..-. ',
	G: '--. ',
	H: '.... ',
	I: '.. ',
	J: '.--- ',
	K: '-.- ',
	L: '.-.. ',
	M: '-- ',
	N: '-. ',
	O: '--- ',
	P: '.--. ',
	Q: '--.- ',
	R: '.-. ',
	S: '... ',
	T: '- ',
	U: '..- ',
	V: '...- ',
	W: '.-- ',
	X: '-..- ',
	Y: '-.-- ',
	Z: '--.. ',
	1: '.---- ',
	2: '..--- ',
	3: '...-- ',
	4: '....- ',
	5: '..... ',
	6: '-.... ',
	7: '--... ',
	8: '---.. ',
	9: '----. ',
	0: '----- ',
	' ': '  /  ',
}

export default function App() {
	const [inputText, setInputText] = useState('')
	const [convertedMorse, setConvertedMorse] = useState('')

	const convertToMorse = () => {
		const upperCaseInput = inputText.toUpperCase()
		const morseResult = Array.from(upperCaseInput)
			.map(char => morseCodeMap[char] || '') // If the character is not in the map, ignore it
			.join('')
		setConvertedMorse(morseResult)
	}

	const handleInputChange = inputed => {
		setInputText(inputed.target.value)
	}

	const handleSubmit = inputed => {
		inputed.preventDefault()
		convertToMorse()
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='morse-code-input'></label>
				<input
					type='text'
					id='morse-code-input'
					placeholder='Enter here...'
					value={inputText}
					onChange={handleInputChange}
				/>
				<button type='submit'>Convert to morse</button>
			</form>
			<p>Converted morse code: {convertedMorse}</p>
		</>
	)
}
