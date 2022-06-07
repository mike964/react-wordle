import React, { useEffect, useState } from 'react'
import data from '../data.json'

export default function Keypad({ usedKeys, currentGuess, setCurrentGuess }) {
	const [letters, setLetters] = useState(null)

	useEffect(() => {
		// fetch('http://localhost:3001/letters')
		//   .then(res => res.json())
		//   .then(json => {
		//     setLetters(json)
		//   })
		setLetters(data.letters)
	}, [])

	function handleKeyPress(key) {
		console.log('onKeyDown.')
		// console.log(e.key)
		// console.log(e.keyCode)
		// console.log('onKeyDown.')
		// console.log(key)
		if (currentGuess.length < 5) {
			setCurrentGuess(prev => prev + key)
		}
		// console.log(e.keyCode)
	}

	return (
		<div className='keypad'>
			{letters &&
				letters.map(lt => {
					const color = usedKeys[lt.key]

					return (
						<div
							key={lt.key}
							className={`single-key ${color}`}
							onClick={() => {
								handleKeyPress(lt.key)
							}}>
							{lt.key}
						</div>
					)
				})}
		</div>
	)
}
