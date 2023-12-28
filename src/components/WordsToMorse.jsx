import React, { useState } from 'react'
import './containers.css'

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

export default function WordsToMorse() {
	const [inputText, setInputText] = useState('')
	const [convertedMorse, setConvertedMorse] = useState('')

	const convertToMorse = () => {
		const upperCaseInput = inputText.toUpperCase()
		const morseResult = Array.from(upperCaseInput)
			.map(char => morseCodeMap[char] || '')
			.join('')
		setConvertedMorse(morseResult)
	}

	const handleInputChange = inputed => {
		setInputText(inputed.target.value)
		convertToMorse()
	}

	return (
		<div className='container'>
			<h1>Morse Code Converter</h1>
			<form>
				<textarea
					id='words-to-morse-input'
					placeholder='Enter words here...'
					value={inputText}
					onChange={handleInputChange}
				/>
			</form>
			<div className='converted-morse'>
				<p>
					Converted Morse code: <strong>{convertedMorse}</strong>
				</p>
			</div>
		</div>
	)
}
