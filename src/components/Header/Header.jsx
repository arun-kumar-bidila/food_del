import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>Order Your favourite Food Here</h2>
                <p>
                    I see the issue in your code. The main problem is that you’re trying to call useState outside the component.
                </p>
                <button>View Menu</button>

            </div>

        </div>
    )
}

export default Header
