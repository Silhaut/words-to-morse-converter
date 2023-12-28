import React, { useState } from 'react'
import './containers.css'
import { morseCodeReverseMap } from './morse-alphabet/morseCodeReverseMap'

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
