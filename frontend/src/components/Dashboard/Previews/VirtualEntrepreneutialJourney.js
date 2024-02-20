import React, { useState } from "react";
import JourneyBtn from "../../../images/materialpisopitch/botão_start-46.png";

export default function JourneyPlanner() {
    const [showJourney, setShowJourney] = useState(false); // State variable to control visibility of journey content

    // Function to handle the "Virtual Entrepreneurial Journey" button click
    const handleJourneyClick = () => {
        setShowJourney(true);
        // Perform any other actions you want when the button is clicked
    };

    return (
        <>
            <p className="px-3 pt-4">
                <strong>VIRTUAL ENTREPRENEUTIAL JOURNEY</strong>
            </p>
            <div className="text-center mt-4 mb-4">
                <img src={JourneyBtn}
                    alt="journeys"
                    className="pointer"
                    style={{ width: 150 }}
                    onClick={() => {
                        //handleJourneyClick();
                    }} />
            </div>
        </>
    );
};