// Write your code here
import {Component} from 'react'

import DestinationItems from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )
    console.log(searchResults)
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearch}
            className="search-bar"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="img"
          />
        </div>
        <ul className="cards-container">
          {searchResults.map(each => (
            <DestinationItems itemDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
