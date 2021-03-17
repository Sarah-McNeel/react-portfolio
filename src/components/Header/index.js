import React from 'react';

function Header(props) {

    return (
        <header>
            <hi>Sarah Mcneel</hi>
            {props.children}
        </header>
    )
}

export default Header;