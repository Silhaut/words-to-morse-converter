import './css/App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Converter from './components/Converter'
import AlphabetTable from './components/AlphabetTable'

export default function App() {
	return (
		<>
			<h1>Morse Code converter</h1>
			<main>
				<div className='converters'>
					<Converter />
				</div>
				<div className='table-part'>
					<h2>Morse Alphabet</h2>
					<hr />
					<AlphabetTable />
				</div>
			</main>
		</>
	)
}
