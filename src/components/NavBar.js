import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import IconGithub from "../assets/images/icon-github.svg";
import IconLinkedin from "../assets/images/icon-linkedin.svg";

    export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" /> Maibelline Quilliet
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link
                href="#home"
                className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
                >
                Home
                </Nav.Link>
                <Nav.Link
                href="#skills"
                className={
                    activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
                >
                Compétences
                </Nav.Link>
                <Nav.Link
                href="#projects"
                className={
                    activeLink === "projects" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
                >
                Portfolio
                </Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                <a href="#">
                    <img src={IconGithub} alt="Twitter" />
                </a>
                <a href="#">
                    <img src={IconLinkedin} alt="Youtube" />
                </a>
                </div>
                <button href="#contact" className="vvd">
                <span>Me contacter</span>
                </button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}