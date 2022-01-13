import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout: React.FC = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>crear footer</footer>
        </div>

)
}

export default Layout
