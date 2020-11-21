import React from 'react'
import './App.css'

const GOOGLE_API = "https://www.googleapis.com/books/v1/volumes?q=search-terms"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      bookshelf:[]
    }
  }
  componentDidMount() {
    fetch(GOOGLE_API)
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.items})
      
      })

  }
  handleClick = (obj) => {
    console.log('ADD to favorites', obj)
    
        const updatedBooks = [...this.state.bookshelf, obj]
    this.setState({
          bookshelf: updatedBooks
        })
        console.log('bookshelf', this.state.bookshelf)
      }
    handleRemoveClick = (obj) => {
        console.log('REMOVE FUNCTION', obj)
        const removedItemFromBookshelf = this.state.bookshelf.filter(bookshelf => {
          return bookshelf.id !== obj.id
        })
        this.setState({
          bookshelf: removedItemFromBookshelf
        })
      }

  // handleDescription(id) {
  //  this.state.books.find(b=><div>b.id=id b.volumeInfo.description</div>)
  //   // this.setState({ description: this.state.description })
  //   console.log(this.setState.books.find(b=><div>b.id=id b.volumeInfo.description</div>));
  // }
  
  render() {
    return (
      <div className="main">
        <h1 id="home">  Google Books </h1>
        <div className="parent">

          {this.state.books.map(b =>
            <div key={b.id}>
              <div className="child-1">
                <img src={b.volumeInfo.imageLinks.thumbnail} alt="books" />
              </div>
              <div className="child-2">
                {b.volumeInfo.title} by {b.volumeInfo.authors}
              </div>
              <div className="child-3">
              <a href="#details">
                <button
                  onClick={()=>console.log(b.volumeInfo.description)}>
                  read more
                </button>
                <button
                  onClick={this.handleClick}>
                  add to favorites
                </button>
            </a>
              </div>
            </div>
          )}
            <div>
              <h2>Book Details</h2>
              <p id="details">
              {this.state.bookshelf.map(b=>
                <div key={b.id}>
              {b.id}
              </div>
              )}
              </p>
            </div>
        </div >
      </div>
    )
  }

}

export default App
