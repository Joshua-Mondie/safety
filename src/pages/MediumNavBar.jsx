import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { MdMenu } from "react-icons/md";
import safetylogo from "../assets/safetylogo.jpg.svg";
import { Link } from "react-router-dom";
import { navLinks } from "../data";

const MediumNavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Navbar expand="md" className="justify-center flex lg:hidden w-full border h top-0 h-24 fixed container z-20 bg-white">
      <div className="flex w-full items-center justify-between px-4">
        <Navbar.Brand href="#">
          <img src={safetylogo} alt="" className="h-14" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu}>
          <MdMenu />
        </Navbar.Toggle>
      </div>
      <Navbar.Collapse className={open ? "show w-full mt-3 h-[25rem] overflow-y-scroll" : ""}>
        <Nav className="navbar-nav justify-content-end flex-grow-1  ">
          {navLinks.map((link, index) => (
            <div key={index} className="h-full bg-white">
              {link.children ? (
                <NavDropdown title={link.link} id={`nav-dropdown-${index}`}>
                  {link.children.map((child, childIndex) => (
                    <NavDropdown.Item key={childIndex} as={Link} to={child.route}>
                      {child.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to={link.path}>
                  {link.link}
                </Nav.Link>
              )}
            </div>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MediumNavBar;
