import './App.css';
import MessageHistory from "./components/MessageHistory";
import messages from "./data/messages";

function App() {
  return (
    <MessageHistory list ={messages} />
  );
}

export default App;
