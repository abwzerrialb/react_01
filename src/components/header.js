import React from 'react';

const getTheYear = () => {
    const newDate = new Date.getFullYear(); 
    return newDate
}

const Header = () =>{
    return <div>Header { getTheYear() }</div>
}

export default Header;