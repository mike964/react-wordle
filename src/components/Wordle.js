import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution, setRandomWord }) {
	const {
		currentGuess,
		setCurrentGuess,
		guesses,
		showModal,
		setShowModal,
		turn,
		isCorrect,
		usedKeys,
		handleKeyup,
		resetGame,
	} = useWordle(solution)

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup)

		if (isCorrect) {
			setTimeout(() => setShowModal(true), 2000)
			window.removeEventListener('keyup', handleKeyup)
		}
		if (turn > 5) {
			setTimeout(() => setShowModal(true), 2000)
			window.removeEventListener('keyup', handleKeyup)
		}

		return () => window.removeEventListener('keyup', handleKeyup)
	}, [handleKeyup, isCorrect, turn, setShowModal])

	// set new game
	const setNewGame = () => {
		resetGame()
		setRandomWord()
	}

	return (
		<div>
			<Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
			<Keypad
				usedKeys={usedKeys}
				currentGuess={currentGuess}
				setCurrentGuess={setCurrentGuess}
			/>
			{showModal && (
				<Modal
					isCorrect={isCorrect}
					turn={turn}
					solution={solution}
					resetGame={setNewGame}
				/>
			)}
		</div>
	)
}
