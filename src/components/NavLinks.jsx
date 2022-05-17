import {useNavigate, useLocation} from 'react-router-dom'   
import {motion} from 'framer-motion'

const NavLinks = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const animateFrom = {opacity: 0, x: 50}
    const animateTo = {opacity: 1, x: 0}

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
            className="navbarListItem" onClick={() => navigate('/')}>
                <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'} onClick={() => props.isMobile && props.closeMobileMenu()}>Work In Progress</p>  
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            className="navbarListItem" onClick={() => navigate('/projects')}>
                <p className={pathMatchRoute('/projects') ? 'navbarListItemNameActive' : 'navbarListItemName'} onClick={() => props.isMobile && props.closeMobileMenu()}>Projects</p>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            className="navbarListItem" onClick={() => navigate('/about')}>
                <p className={pathMatchRoute('/about') ? 'navbarListItemNameActive' : 'navbarListItemName'} onClick={() => props.isMobile && props.closeMobileMenu()}>About</p>
            </motion.li>
        </ul>
    );
}

export default NavLinks