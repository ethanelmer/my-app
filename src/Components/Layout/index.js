import './index.css';
import Sidebar from '../Sidebar';
import EthanElmer from '../../Assets/IMG_4835.jpg';

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className="page">
            <div className = "about-me-box">
                    <span className="middle-text"> 
                    Hi! My name is Ethan Elmer. I am a student at Louisiana State University graduating in Spring of 2026. 
                    I am studying Computer Science with a Second Concentration in Economics. 
                    I currently research Coastal Erosion with Dr. Giulio Mariotti with the Department of Oceanography and Coastal Sciences.
                    Some of my interests include web design, data science, and economics.
                    I am currently looking for a Summer Internship. 
                    </span>
            </div>
            <div className = "picture-box">
                <img src={EthanElmer} alt="Ethan Elmer" />
            </div>
            <div className = "contact-box">
                <san className="middle-text">
                Contact me at the following:
                    <ul className = 'ul-contact'> 
                        <br/>
                        <li>ethankelmer@gmail.com</li>
                        <br/>
                        <li>eelmer2@lsu.edu</li>
                        <br/>
                        <li>(318) 664-7362</li>
                    </ul>
                </san>
            </div>
        </div>
    </div>
    )
}

export default Layout