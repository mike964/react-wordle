import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
	return (
		<div className='modal'>
			<div className='modal-body'>
				{isCorrect && (
					<>
						<h1>You Win!</h1>
						<p className='solution'>{solution}</p>
						<p>You found the solution in {turn} guesses :)</p>
					</>
				)}
				{!isCorrect && (
					<>
						<h1>Nevermind</h1>
						<p className='solution'>{solution}</p>
						<p>Better luck next time :)</p>
					</>
				)}
				<button className='x'>
					Play Again <i className='fa-solid fa-rotate-right' />
				</button>
			</div>
		</div>
	)
}
