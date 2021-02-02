import {Icon, Input, Menu} from "semantic-ui-react";
import React, {useState} from "react";
import style from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import { logOut} from "../../actions/auth/action";
import {Redirect} from "react-router-dom";

const Header = (props) => {


    const [activeItem, setActiveItem] = useState({activeItem: 'home'})
    const handleItemClick = (e, {name}) => setActiveItem({activeItem: name})
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector((state) => state.auth);

    const handleLogOut = () => {
        dispatch(logOut())
    }


    return (
        <div>
            <Menu stackable size='large'>
                <Menu.Item>
                    <img src='/logo.png'/>
                    <p><h3>Hipstagramm</h3></p>
                </Menu.Item>
                <Menu.Item name='home'
                           active={activeItem === 'home'}
                           onClick={handleItemClick}>Profile</Menu.Item>
                <Menu.Item name='home'
                           active={activeItem === 'message'}
                           onClick={handleItemClick}>Message</Menu.Item>
                <Menu.Item name='setting'
                           active={activeItem === 'home'}
                           onClick={handleItemClick}>Setting</Menu.Item>
                <Menu.Item position='right'> <Input icon='search' placeholder='Search...'/> </Menu.Item>
                <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={handleLogOut}><Icon name='log out' color="red"/> </Menu.Item>
            </Menu>

        </div>
    )
}

export default Header