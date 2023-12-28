import './App.css'
import MorseToWords from './components/MorseToWords'
import WordsToMorse from './components/WordsToMorse'

export default function App() {
	return (
		<>
			<div className='converters'>
				<WordsToMorse />
				<MorseToWords />
			</div>
		</>
	)
}
