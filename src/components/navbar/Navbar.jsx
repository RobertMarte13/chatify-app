
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/profile' >Profile</Link>
                </li>
                <li>
                    <Link to='/create_profile' >Create Profile</Link>
                </li>
            </ul>
        </header>
    );
}

export default Navbar;
