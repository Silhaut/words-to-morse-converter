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
		setConvertedWords(wordsResult)
	}

	const handleInputChange = event => {
		const inputValue = event.target.value
		setInputMorse(inputValue)
		convertToWords()
	}

	return (
		<div className='container'>
			<h1>Words to Morse Code Converter</h1>
			<form>
				<textarea
					id='words-to-morse-input'
					placeholder='Enter Morse code here...'
					value={inputMorse}
					onChange={handleInputChange}
				/>
			</form>
			<div className='converted-text'>
				<p>
					Converted words: <strong>{convertedWords}</strong>
				</p>
			</div>
		</div>
	)
}
