import { NavLink } from 'react-router-dom';
import menu from '../../constants/menu';

const Navbar: React.FC = () => {
    return (<div className="navbar">
        <ul>
            { Object.keys(menu).map((key) => {
                let item = menu[key];

                return (
                    <li key={key}>
                        <NavLink exact to={item.to ? item.to : {pathname: item.href}} activeClassName='is-active' target={item.target}>{item.name}</NavLink>
                    </li>
                )
            }) }
        </ul>
    </div>)
};

export default Navbar;