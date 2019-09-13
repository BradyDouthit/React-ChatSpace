import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <div id="channels-header-div">
                <h1 id="channels-header">Channels:</h1>
            </div>
            <ul>
                <li><a href='/'>Channel 1</a></li>
                <li><a href='/'>Channel 2</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;