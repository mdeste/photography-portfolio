import NavLinks from "./NavLinks";
import { useState } from "react";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const toggleClass = (e) => {
        e.currentTarget.classList.toggle('opened')
        setOpen(!open)
    } 

    const closeMobileMenu = () => setOpen(false)

    return (
        <nav className="navbarMobileNav">
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
            <label className="hamburger" for="hamburgerMenu" onClick={toggleClass}>
                <svg width="100" height="100" viewBox="0 0 100 100">
					<path className="line line1" 
                        d="M20,30.95c6.932,-7.933 13.653,-11.9 20.164,-11.9c3.044,-0 7.166,1.795 12.365,5.385c5.199,3.591 9.134,5.386 11.804,5.386c4.824,0 10.046,-3.359 15.667,-10.076c-0,-0 1.543,4.397 3.673,10.759c4.663,13.928 12.141,37.268 12.416,44.496c0.236,6.222 -9.316,11.011 -13.69,7.92c-11.242,-7.943 -53.761,-55.581 -53.761,-55.581" />
					<path className="line line2" 
                        d="M20,55.95c6.932,-7.933 13.653,-11.9 20.164,-11.9c3.044,-0 7.166,1.795 12.365,5.385c5.199,3.591 9.134,5.386 11.804,5.386c4.824,0 10.046,-3.359 15.667,-10.076" />
					<path className="line line3"
                        d="M20,80.95c6.932,-7.933 13.653,-11.9 20.164,-11.9c3.044,-0 7.166,1.795 12.365,5.385c5.199,3.591 9.134,5.386 11.804,5.386c4.824,0 10.046,-3.359 15.667,-10.076l8.136,-19.745c-0,0 8.909,-18.934 7.953,-24.305c-0.956,-5.371 -11.144,-9.329 -15.985,-5.939c-11.219,7.858 -51.329,53.083 -51.329,53.083" />
                </svg>
            </label>
        </nav>
    );
}

export default MobileNavigation 