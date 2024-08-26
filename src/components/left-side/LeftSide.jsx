import ContactList from './ContactList/ContactList.jsx';
import './LeftSide.css'; 
import { Link } from 'react-scroll';

const LeftSide = () => {
    return (
        <div className="left">
            <div className="about-me">
                <h1>Brittany Chiang</h1>
                <h2>Senior Frontend Engineer</h2>
                <h3>I build pixel-perfect, engaging and accessible digital experiences.</h3>
            </div>
            
            <div className="src-list">
                <ul>
                    <li><Link
                        to="section1"
                        smooth={true}
                        duration={800}
                        activeClass="active"
                        className="menu-link"
                        spy={true} 
                        offset={-200}
                    >
                        ABOUT ME
                    </Link></li>
                    <li><Link
                        to="section2"
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        className="menu-link"
                        spy={true} 
                        offset={-130}
                    >
                        EXPERIENCE
                    </Link></li>
                    <li><Link
                        to="section3"
                        smooth={true}
                        duration={1500}
                        activeClass="active"
                        className="menu-link"
                        spy={true} 
                        offset={-150}
                    >
                        PROJECTS
                    </Link></li>
                </ul>
            </div>
            <ContactList/>
        </div>
    );
}

export default LeftSide;
