import { useState, useEffect } from "react";
import { Navbar, container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg'; /* colocar a imagem da logo */
import NavIcon1 from '../assets/img/nav-icon1.svg';  /* colocar a imagem da NavIcons*/
import NavIcon2 from '../assets/img/nav-icon2.vsg'; /* colocar a imagem da NavIcons */
import NavIcon3 from '../assets/img/nav-icon3.vsg';/* colocar a imagem da NavIcons */

export const NavBar = () =>{
    const {activeLink, setActiveLink} = useState('home');
    const {scrolled, seScrolled} = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Router>
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                  </div>
                  <HashLink to='#connect'>
                    <button className="vvd"><span>Let’s Connect</span></button>
                  </HashLink>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
      )
    }