import {useNavigate, useLocation} from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

  return (
    <>
    <nav className="navbarNav">
        <ul className="navbarListItemsContainer">
            <li className="navbarListItem" onClick={() => navigate('/')}>
                <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Work In Progress</p>  
            </li>
            <li className="navbarListItem" onClick={() => navigate('/projects')}>
                <p className={pathMatchRoute('/projects') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Projects</p>
            </li>
            <li className="navbarListItem" onClick={() => navigate('/about')}>
                <p className={pathMatchRoute('/about') ? 'navbarListItemNameActive' : 'navbarListItemName'}>About</p>
            </li>
        </ul>
    </nav>
    </>
  )
}
export default Navbar