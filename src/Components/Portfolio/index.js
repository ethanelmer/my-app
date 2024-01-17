import './index.css';
import Sidebar from '../Sidebar';
import Resume from '../../Assets/Resume (8).pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
} from '@fortawesome/free-brands-svg-icons';


const Portfolio = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className = 'page'>
                <div className = 'github'>
                    <icon>
                        <a
                            href="https://github.com/ethanelmer"
                            target="_blank"
                            rel="noreferrer"
                        >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#FFFFFF"
                            size="2x"
                            className="github" 
                        />
                        </a>
                        <h3>My GitHub</h3>
                    </icon>
                </div>
                <div className = 'resumeLink'>
                    <h1>My Resume</h1>
                    <object 
                        data= {Resume}
                        width="100%"
                        height="100%"> 
                    </object> 
                </div>
            </div>
        </div>
    )
}

export default Portfolio;