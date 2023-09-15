/* eslint-disable react/prop-types */

import { useContext } from 'react'
import Footer from '../Components/Footer'
import { ContextGlobal } from '../components/utils/global.context.jsx'
import Navbar from '../components/Navbar.jsx'

const Layout = ({children}) => {
    const { theme } = useContext(ContextGlobal)

    return (
        <div>
            <Navbar />
            <main className={ theme === "dark" ? "dark" : ""}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout