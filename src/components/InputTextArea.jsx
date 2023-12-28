import React from 'react'

export default function InputTextArea({
	value,
	onChange,
	onCopy,
	onReset,
	placeholder,
	buttonText,
}) {
	return (
		<div className='container'>
			<div className='options'>
				<h3>{buttonText}</h3>
				<div className='option-buttons'>
					<button className='copy-button' onClick={onCopy}>
						<i className='fa-regular fa-clipboard'></i>
					</button>
					<button className='reset-button' onClick={onReset}>
						<i className='fas fa-trash-alt'></i>
					</button>
				</div>
			</div>
			<textarea value={value} onChange={onChange} placeholder={placeholder} />
		</div>
	)
}
