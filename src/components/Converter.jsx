import React, { useState } from 'react'
import '../css/containers.css'
import { morseCodeReverseMap } from './morse-alphabet/morseCodeReverseMap'
import { morseCodeMap } from './morse-alphabet/morseCodeMap'

export default function Converter() {
	const [inputMorse, setInputMorse] = useState('')
	const [convertedWords, setConvertedWords] = useState('')
	const [inputText, setInputText] = useState('')
	const [convertedMorse, setConvertedMorse] = useState('')

	const convertToWords = morseInput => {
		const morseArray = morseInput.split(' ')
		const wordsResult = morseArray
			.map(morse => morseCodeReverseMap[morse] || '')
			.join('')
		setConvertedWords(
			wordsResult.charAt(0).toUpperCase() + wordsResult.slice(1).toLowerCase()
		)
	}

	const convertToMorse = textInput => {
		const upperCaseInput = textInput.toUpperCase()
		const morseResult = Array.from(upperCaseInput)
			.map(char => morseCodeMap[char] || '')
			.join(' ')
		setConvertedMorse(morseResult)
	}

	const handleInputChangeWords = inputedWords => {
		const inputValue = inputedWords.target.value
		setInputMorse(inputValue)
		convertToWords(inputValue)
		setInputText('')
	}

	const handleInputChangeMorse = inputedMorse => {
		const inputValue = inputedMorse.target.value
		setInputText(inputValue)
		convertToMorse(inputValue)
		setInputMorse('')
	}

	const handleCopy = content => {
		const textarea = document.createElement('textarea')
		textarea.value = content
		document.body.appendChild(textarea)
		textarea.select()
		document.execCommand('copy')
		document.body.removeChild(textarea)
	}

	const handleDelete = () => {
		setInputMorse('')
		setInputText('')
		setConvertedWords('')
		setConvertedMorse('')
	}

	return (
		<>
			<div className='container'>
				<div className='options'>
					<h3>Text</h3>
					<div className='option-buttons'>
						<button
							className='copy-button'
							onClick={() => handleCopy(convertedWords)}
						>
							<i className='fa-regular fa-clipboard'></i>
						</button>
						<button className='reset-button' onClick={handleDelete}>
							<i className='fas fa-trash-alt'></i>
						</button>
					</div>
				</div>
				<textarea
					id='words-to-morse-input'
					value={inputText}
					onChangeCapture={handleInputChangeMorse}
					placeholder={convertedWords}
				/>
			</div>
			<div className='container'>
				<div className='options'>
					<h3>Morse code</h3>
					<div className='option-buttons'>
						<button
							className='copy-button'
							onClick={() => handleCopy(convertedMorse)}
						>
							<i className='fa-regular fa-clipboard'></i>
						</button>
						<button className='reset-button' onClick={handleDelete}>
							<i className='fas fa-trash-alt'></i>
						</button>
					</div>
				</div>
				<textarea
					id='words-to-morse-input'
					value={inputMorse}
					onChangeCapture={handleInputChangeWords}
					placeholder={convertedMorse}
				/>
			</div>
		</>
	)
}
