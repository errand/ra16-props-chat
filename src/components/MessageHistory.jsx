import PropTypes from "prop-types";

export default function MessageHistory({list}) {

  if(!list) {
    return
  }

  const renderList = list.map(item =>
    <li
      key={item.id}
      className={item.id === active ? 'active' : ''}
      onClick={() => setActiveState(item.id)}
    >
      <a href={item.value.link}>{item.value.text}</a>
    </li>)

  return (
    <ul data-id="dropdown" className="dropdown">
      {list}
    </ul>

  )
}

MessageHistory.propTypes = {
  items: PropTypes.array.isRequired
}
