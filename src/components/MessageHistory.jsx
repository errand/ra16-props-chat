import PropTypes from "prop-types";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({list}) {

  if(!list) {
    return
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {list.map(item => {
        if (item.type === 'message') {
          return <Message key={item.id} from={item.from} time={item.time} message={item.text} />
        } else if (item.type === 'response') {
          return <Response key={item.id} from={item.from} time={item.time} message={item.text} />
        } else {
          return <Typing key={item.id} from={item.from} time={item.time} />
        }
      })}
    </ul>

  )
}

MessageHistory.propTypes = {
  list: PropTypes.array.isRequired
}
