import React, { useState } from 'react'
import './containers.css'
import { morseCodeMap } from './morse-alphabet/morseCodeMap'

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
