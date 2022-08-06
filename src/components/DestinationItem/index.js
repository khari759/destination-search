// Write your code here
import './index.css'

const DestinationItems = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails
  return (
    <li className="item-card">
      <img className="item-img" src={imgUrl} alt={name} />
      <p className="item-name">{name}</p>
    </li>
  )
}
export default DestinationItems
