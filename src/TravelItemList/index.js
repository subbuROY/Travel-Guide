import './index.css'

const TravelItemList = props => {
  const {travelDetailsList} = props
  const {name, imageUrl, description} = travelDetailsList
  return (
    <li className="list-items">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default TravelItemList
