import React from 'react'
import "./Header.scss"
const Header = ({text}) => {
    return (
        <h1 className="header">
            {text}
        </h1>
    )
}

export default Header
