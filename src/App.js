import './App.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelItemList from './TravelItemList'

// Replace your code here
class App extends Component {
  state = {travelListGuide: [], isLoading: true}

  componentDidMount() {
    this.getTravelGuideList()
  }

  getTravelGuideList = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const formattedData = data.packages.map(each => ({
        description: each.description,
        id: each.id,
        imageUrl: each.image_url,
        name: each.name,
      }))
      this.setState({travelListGuide: formattedData, isLoading: false})
    }
  }

  renderTravelGuide = () => {
    const {travelListGuide} = this.state
    return (
      <ul className="travel-guide-list">
        {travelListGuide.map(each => (
          <TravelItemList travelDetailsList={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Travel Guide</h1>
        <div className="sub-container">
          {isLoading ? this.renderLoading() : this.renderTravelGuide()}
        </div>
      </div>
    )
  }
}

export default App
