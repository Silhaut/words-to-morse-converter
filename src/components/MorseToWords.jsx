import React, { useState } from 'react'
import './containers.css'

const morseCodeReverseMap = {
	'.-': 'A',
	'-...': 'B',
	'-.-.': 'C',
	'-..': 'D',
	'.': 'E',
	'..-.': 'F',
	'--.': 'G',
	'....': 'H',
	'..': 'I',
	'.---': 'J',
	'-.-': 'K',
	'.-..': 'L',
	'--': 'M',
	'-.': 'N',
	'---': 'O',
	'.--.': 'P',
	'--.-': 'Q',
	'.-.': 'R',
	'...': 'S',
	'-': 'T',
	'..-': 'U',
	'...-': 'V',
	'.--': 'W',
	'-..-': 'X',
	'-.--': 'Y',
	'--..': 'Z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
	'/': ' ',
}

export default function MorseToWords() {
	const [inputMorse, setInputMorse] = useState('')
	const [convertedWords, setConvertedWords] = useState('')

	const convertToWords = () => {
		const morseArray = inputMorse.split(' ')
		const wordsResult = morseArray
			.map(morse => morseCodeReverseMap[morse] || '')
			.join('')

		setConvertedWords(
			wordsResult.charAt(0).toUpperCase() + wordsResult.slice(1).toLowerCase()
		)
	}

	const handleInputChange = event => {
		setInputMorse(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		convertToWords()
	}

	return (
		<div className='container'>
			<h1>Words to Morse Code Converter</h1>
			<form onSubmit={handleSubmit}>
				<textarea
					id='morse-code-input'
					placeholder='Enter Morse code here...'
					value={inputMorse}
					onChange={handleInputChange}
				/>
				<button type='submit'>Convert to Words</button>
			</form>
			<p>
				Converted words: <strong>{convertedWords}</strong>
			</p>
		</div>
	)
}
