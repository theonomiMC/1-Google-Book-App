import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const GOOGLE_API = "https://www.googleapis.com/books/v1/volumes?q=subject:mystery&langRestrict=en"

const Home = () => {
	const [books, setBooks] = useState([])
	const [favorites, setFavorites] = useState([])
	const [clicked, setClicked] = useState(false)


	useEffect(() => {
		axios.get(GOOGLE_API)
			.then(response => {
				setBooks(response.data.items)
			})

	}, [])

	// handle favorite books
	// const addFavorite = favBook => {
	// 	if (!favorites.find(book => book.id === id)) {
	// 		setFavorites([...favorites, favBook])
	// 		console.log(favorites)
	// 		toggleClass()
	// 	}
	// }
	const toggleClass = () => {
		setClicked(!clicked)

	}

	const getBook = (id) => {
		axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
			.then(res => {
				setFavorites(favorites.concat(res.data))
			})
		toggleClass()
	}
	const bookList = (data) => {
		let bookArray = data.map(b => {
			return (
				<div className="wrapper" key={b.id}>
					<section className="img-box">
						<img
							className="thumbnail"
							src={b.volumeInfo.imageLinks.thumbnail}
							alt="book-cover" />
					</section>
					<section className="fav-content">
						<h3>{b.volumeInfo.title.substring(0, 50)}</h3>
						<p>{b.volumeInfo.description.substring(0, 85)}</p>
						<Link to={`/details/${b.id}`}>...<strong>read more</strong>
						</Link>
					</section>
					<section className="content">
						<button
							className="details-btn"
							onClick={() => console.log('remove', b.id)}>
							Remove
              				</button>
					</section>
				</div>
			)
		})
		return bookArray
	}
	return (
		<div>
			{/* show on home page 10 books */}
			<div className="container">
				{books.map((b) =>
					<div>
						<div className="img-content" key={b.id}>
							<img
								className="thumbnail"
								src={b.volumeInfo.imageLinks.thumbnail}
								alt="book-cover" />
						</div>
						<div className="content-header">
							<h3>{b.volumeInfo.title.substring(0, 50)}</h3>
						</div>
						<div className="content">
							{b.volumeInfo.description.substring(0, 75)}
							<Link to={`/details/${b.id}`}>
								... <strong>read more</strong>
							</Link>
						</div>
						<div className="content">
							<button
								className={clicked ? "details-btn" : null}
								onClick={() => b.id = b.id ? getBook(b.id) : console.log('added')}>
								Add to Favorites
							</button>
						</div>
					</div>
				)}
			</div>
			<h1>Favorite Books</h1>
			<div className="container">
				{bookList(favorites)}
			</div>
		</div>
	)
}

export default Home