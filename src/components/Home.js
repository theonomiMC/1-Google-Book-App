import React, { useState, useEffect } from 'react'
import { ResultCard } from './ResultCard'


const Home = () => {
	const [results, setResults] = useState([])

	// -----get books from api------
	useEffect(() => {
		fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:mystery&&langRestrict=en&${process.env.API_KEY}`)
			.then(res => res.json())
			.then(data => {
				setResults(data.items)
				localStorage.setItem('books', JSON.stringify(data.items))
				console.log(localStorage);
			})

	}, [])

	return (
		<div className='main'>
			<div className='container'>
				{results.map(book =>
					<ResultCard book={book} key={book.id} />

				)}
				</div>
		</div>
	)
}

export default Home