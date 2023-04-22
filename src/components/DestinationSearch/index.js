// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchinput: ''}

  Searcher = event => {
    this.setState({searchinput: event.target.value})
  }

  getNewList = () => {
    const {searchinput} = this.state
    const {destinationsList} = this.props
    const newList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchinput.toLowerCase()),
    )
    return newList
  }

  render() {
    const {destinationsList} = this.props
    const {searchinput} = this.state
    const updatedList = this.getNewList()

    return (
      <div className="container">
        <div className="content">
          <h1>Destination Search</h1>
          <div className="inboxcontainer">
            <input
              onChange={this.Searcher}
              placeholder="Search"
              type="search"
              className="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="logo"
            />
          </div>
          <ul className="unorder">
            {updatedList.map(each => (
              <DestinationItem item={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
