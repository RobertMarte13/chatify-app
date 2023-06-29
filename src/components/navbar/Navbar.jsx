
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/chatify-app' >Home</Link>
                </li>
                <li>
                    <Link to='/chatify-app/profile' >Profile</Link>
                </li>
                <li>
                    <Link to='/chatify-app/create_profile' >Create Profile</Link>
                </li>
            </ul>
        </header>
    );
}

export default Navbar;
