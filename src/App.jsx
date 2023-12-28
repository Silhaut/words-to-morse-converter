import './css/App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Converter from './components/Converter'

export default function App() {
	return (
		<>
			<h1>Morse Code converter</h1>
			<div className='converters'>
				<Converter />
			</div>
		</>
	)
}
