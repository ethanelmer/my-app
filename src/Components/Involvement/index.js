import './index.css';
import Sidebar from '../Sidebar';


const Portfolio = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className = 'page'>
                <div className = 'general'>
                    <h1>Club Involvement</h1>
                    <h3>I take great pride in being involved in campus, and am currently heavily involved in Student Government and BridgeUSA.</h3>
                </div>
                <div className = 'studentgov'>
                    <a href = 'https://www.lsu.edu/sg/index.php'>
                        <h1>Student Government</h1>
                    </a>
                    <h3>I have been involved with Student Government since my Freshman year as a Student Senator. I have served on 
                        several committees, but currently serve as the Vice Chair of the Rules Committee. My role as an effective 
                        Senator requires a lot of communication and research. I have authored and co-authored several bills, addressing
                        several issues on campus.</h3>
                </div>
                <div className = 'bridgeUSA'>
                <a href = 'https://www.bridgeusa.org/'>
                        <h1>BridgeUSA</h1>
                </a>
                <h3>BridgeUSA is a current events discussion organization. I serve as the Vice President of BridgeLSU, and work to 
                    ensure the smooth operation of our meetings and support the President in their duties. I will also be representing our
                    chapter in July 2024 at the BridgeUSA National Conference in Chicago.
                </h3>
                </div>
            </div>
        </div>
        )
}

export default Portfolio;