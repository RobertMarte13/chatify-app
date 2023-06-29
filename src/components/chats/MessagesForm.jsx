import { useState } from "react";
import { useChatContext } from '../../hooks/useChatContext'


// eslint-disable-next-line react/prop-types
const MessagesForm = ({id}) => {

  
  const { createMessages, getMessages } = useChatContext();

  const [message, setMess] = useState('')
  // const [input, setInput] = useState('')
  
  const handleMessages = async (evt) => {
    evt.preventDefault()
    getMessages()
    createMessages( message, id)
  }

  return (
    <div>
      <form onSubmit={handleMessages}>
        <input  type="text" name="message" onChange={(evt) => setMess(evt.target.value)}/>
        <button>Send</button>
      </form>
    </div>
  );
};

export default MessagesForm
