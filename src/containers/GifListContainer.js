import React, { Component } from 'react'
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
  

  render() {
    return (
      <div>
        <GifSearch setQuery={this.props.setQuery} />
        <GifList gifArr={this.props.gifs} />
      </div>
    )
  }
}

export default GifListContainer
