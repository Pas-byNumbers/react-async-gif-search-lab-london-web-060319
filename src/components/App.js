import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer';

// the App component should render out the GifListContainer component 

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      query: "",
      gifs: []
    }
  }

  getGIFs = () => {
    console.log("started fetching");
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())   
  }

  componentDidMount() {
    this.getGIFs()
    .then(resolve => {this.setState({
      gifs: resolve.data
    })});
    console.log('component re-mounted')
  }
   
  searchRun = (searchTerm) => {
    this.setQuery(searchTerm);
    this.getGIFs();
    setTimeout(() => this.componentDidMount(), 0)
  }

  setQuery = (searchTerm) => {
    
    this.setState({
      query: searchTerm
    });
    console.log('query set!');
  }
  
  render() {

  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer setQuery={this.searchRun} gifs={this.state.gifs}/>
    </div>
  )}
}

export default App
