import React from 'react'
import Home from './Home'

export default class Favorites extends React.Component {
    constructor(props) {
      super(props);  
      this.state = {};
    }
    render() {
        const { favorites } = this.props;
       
        return (
          <div className="container">
          <h1> my favorite books</h1>
          
          </div>
        
        )
    }
  }