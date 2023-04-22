// Write your code here
import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {id, name, imgUrl} = item
  return (
    <li className="listitem">
      <img className="itemimg" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
