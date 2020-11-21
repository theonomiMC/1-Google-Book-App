import React from 'react'
import './App.css'

const GOOGLE_API = "https://www.googleapis.com/books/v1/volumes?q=search-terms"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      thumbnail: "",
      books: [],
      favorites:[]
    }

    // this.handleDescription = this.handleDescription.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch(GOOGLE_API)
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.items })
      
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
                  onClick={()=>console.log(b.volumeInfo.description)}>
                  add to favorites
                </button>
            </a>
              </div>
            </div>
          )}
            <div>
              <h2>Book Details</h2>
              <p id="details">
              
              </p>
            </div>
        </div >
      </div>
    )
  }

}

export default App
