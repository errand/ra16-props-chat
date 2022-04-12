import PropTypes from "prop-types";

export default function Response({from, time, message}) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">
        {message}
      </div>
    </li>
  )
}

Response.propTypes = {
  from: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}
