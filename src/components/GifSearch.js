import React from 'react'

class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.searchTerm + " was searched")
    this.props.setQuery(this.state.searchTerm)
  }


  render() {
  return (
    <div>
    <form onSubmit={e => this.handleSubmit(e)} >
      <input type="text" 
              name="search" placeholder="Search GIFs Here" 
              value={this.state.searchTerm} 
              onChange={(e) => this.handleSearch(e)} />
      <button type="submit">Search</button>
      </form>
    </div>
  )}
}

export default GifSearch
