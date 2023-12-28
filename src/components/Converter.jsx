import React, { useState } from 'react'
import '../css/containers.css'
import { morseCodeReverseMap } from './morse-alphabet/morseCodeReverseMap'
import { morseCodeMap } from './morse-alphabet/morseCodeMap'
import InputTextArea from './InputTextArea'

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

	const handleInputChangeWords = inputWordsEvent => {
		const inputValue = inputWordsEvent.target.value
		setInputMorse(inputValue)
		convertToWords(inputValue)
		setInputText('')
	}

	const handleInputChangeMorse = inputMorseEvent => {
		const inputValue = inputMorseEvent.target.value
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
			<InputTextArea
				value={inputText}
				onChange={handleInputChangeMorse}
				onCopy={() => handleCopy(convertedWords)}
				onReset={handleDelete}
				placeholder={convertedWords}
				buttonText='Text'
			/>
			<InputTextArea
				value={inputMorse}
				onChange={handleInputChangeWords}
				onCopy={() => handleCopy(convertedMorse)}
				onReset={handleDelete}
				placeholder={convertedMorse}
				buttonText='Morse Code'
			/>
		</>
	)
}
