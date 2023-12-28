import './App.css'
import MorseToWords from './components/MorseToWords'
import WordsToMorse from './components/WordsToMorse'

export default function App() {
	return (
		<>
			<h1>Morse Code converter</h1>
			<div className='converters'>
				<WordsToMorse />
				<MorseToWords />
			</div>
		</>
	)
}
