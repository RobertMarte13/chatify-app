import { useState } from 'react';
import { useChatContext } from '../../hooks/useChatContext';
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')

    const { createUsers } = useChatContext()

    const handleSubmit = (evt) => {
        evt.preventDefault()

        createUsers(name)
        navigate('/chatify-app/profile')
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={evt => setName(evt.target.value)} />
        </form>
        </div>
    );
}

export default CreateProfile;
