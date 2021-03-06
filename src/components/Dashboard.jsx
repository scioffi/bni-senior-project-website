import React from "react";
import styled from "styled-components";
import { 
    Row,
    Col
} from "react-bootstrap";
import EndOfSemesterVideo from "../assets/EndofSemesterVideo.mp4";
import EndOfYearVideo from "../assets/EndOfYearVideo.mp4";

const ScCenter = styled.div`
    text-align: center;
`;

const Dashboard = () => {
    return (
        <React.Fragment>
            <ScCenter>
                <h1>Beta Rotation</h1>
                <p className="lead">Team Index Fun[ds]!</p>
            </ScCenter>
            <Row>
                <Col md="9">
                    <h2>Project Synopsis</h2>
                    <p>
                        The Beta Rotation project will provide a web application and stock market monitoring service which uses an algorithm to predict when a 
                        portfolio should be rotated between the S&P 500 general US Market and the Utilities sector. By monitoring real-time stock data and 
                        implementing a Beta Rotation strategy, the project will be able to consistently out-perform the traditional investment strategy of 
                        "buy and hold", where shares are purchased and held for long-term gain. Beta Rotation itself involves tracking the relative strengths 
                        of the S&P 500 general US Market and the Utilities sector. When one of the index's relative strengths is greater than the other, a signal 
                        or notification will be sent from the application. Financial advisors will be able to use the signal to notify their investors when to 
                        rotate parts of their investment portfolio between the two indexes. To prove the effectiveness of the algorithm, the Index Fun[ds] 
                        team will utilize historical market data to run simulations. In these simulations, the application will be able to consistently identify 
                        the best time to rotate an investor's portfolio between the Utilities sector and the S&P 500 general US Market. In addition to sending 
                        a signal to a financial advisor, the application will present a dashboard view which allows advisors to view the Beta Rotation strategy 
                        numbers in or close to real-time.
                    </p>
                        <br /><hr /><br />
                    <h2>Semester Videos</h2>
                        <br />
                    <Row>
                        <Col md="6">
                            <h4>End of First Semester</h4>
                            <video src={EndOfSemesterVideo} controls width="100%" />
                        </Col>
                        <Col md="6">
                            <h4>End of Final Semester</h4>
                            <video src={EndOfYearVideo} controls width="100%" />
                        </Col>
                    </Row>
                </Col>
                <Col md="3">
                    <h4>Project Sponsor:</h4>
                    <p><a href="https://beltz-ianni.com/" target="_blank" rel="noopener noreferrer">Beltz Ianni &amp; Associates</a></p>
                        <br />
                    <h4>Team Members:</h4>
                    <div>Stephen Cioffi</div>
                    <div>Ian Clare</div>
                    <div>Catherine Osadciw</div>
                    <div>Kyle Rohde</div>
                        <br />
                    <h4>Project Coach:</h4>
                    <p><a href="https://www.se.rit.edu/~tjr/" target="_blank" rel="noopener noreferrer">Professor Reichlmayr</a></p>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Dashboard