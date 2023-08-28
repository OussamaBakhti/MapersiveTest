import { useState } from "react";

import { Menu, MenuItem } from '@mui/material';
import { DropDownButton, NavLink, Icon } from "./NavbarElements.styles";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ id, title, elements }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <DropDownButton aria-controls={open ? id : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : 'false'}
            onMouseEnter={handleClick}
            onMouseLeave={handleClose}
        >
            {title}
            <Icon icon={faCaretDown} />
            <Menu
                id={id}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {elements.map(elem => (
                    <MenuItem>
                        <NavLink to={elem.to}> {elem.title} </NavLink>
                    </MenuItem>
                ))}
            </Menu>
        </DropDownButton>
    );
};


export default Dropdown;