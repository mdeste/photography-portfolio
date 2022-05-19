import {useNavigate, useLocation} from 'react-router-dom'   
import {motion} from 'framer-motion'

const NavLinks = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const animateFrom = {opacity: 0, x: 50}
    const animateTo = {opacity: 1, x: 0}

    const navLink1 = () => {
        navigate('/')
        props.isMobile && props.closeMobileMenu()
    }
    
    const navLink2 = () => {
        navigate('/projects')
        props.isMobile && props.closeMobileMenu()
    }

    const navLink3 = () => {
        navigate('/about')
        props.isMobile && props.closeMobileMenu()
    }

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

    return (
        <ul className="navbarListItemsContainer">
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.05}}
            className="navbarListItem" 
            onClick={navLink1}>
                <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'} >Recent Work</p>  
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            className="navbarListItem" 
            onClick={navLink2}>
                <p className={pathMatchRoute('/projects') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Projects</p>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            className="navbarListItem" 
            onClick={navLink3}>
                <p className={pathMatchRoute('/about') ? 'navbarListItemNameActive' : 'navbarListItemName'}>About</p>
            </motion.li>
        </ul>
    );
}

export default NavLinks