import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Info from "../../../images/dashboard/info.png";
import Library from "../../../images/dashboard/Library.png";
import { initialPlanData } from "../../../constants/MyLibraryScreen";

import 'animate.css';


export default function MyLibrary({ completedTopics }) {
    function insertLineBreaks(title) {
        if (!title) return '';
        const words = title.split(" ");
        if (words.length > 3) {
            words.splice(3, 0, "\n");
        }
        return words.join(" ");
    }

    const planData = initialPlanData;
    const totalFlags = 3;
    const animationDuration = 5000; // Duração da animação (5 segundos)

    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Iniciar a animação de entrada
            setVisibleIndex((prevIndex) => (prevIndex + 1) % totalFlags);

            // Agendar o início da animação de saída após 10 segundos
            setTimeout(() => {
                // Agendar o reset da visibilidade após 10 segundos (após a animação de saída)
                setVisibleIndex((prevIndex) => (prevIndex + 1) % totalFlags);
            }, animationDuration); // A duração total é de 10 segundos para cada animação

        }, animationDuration * 2); // 2 vezes a duração para alternar entre os elementos

        return () => {
            clearInterval(interval);
        };
    }, []);
    const flags = [
        planData.map((data) => data.title).slice(0, 3),
        planData.map((data) => data.title).slice(3, 6),
        planData.map((data) => data.title).slice(6, 9),
    ];

    /*
    if (!completedTopics || completedTopics.length === 0) {
        const orangePlanData = [planData[0].title, planData[1].title, planData[2].title];
        console.log("orangePlanData:", orangePlanData);
        return (
            <>
                <p className="px-2 pt-3 pb-2 border-light-gray-bottom">
                    <Row>
                        <Col md={10}>My Library</Col>
                        <Col md={1} className="">
                            <img src={Info} className="settingsImage pointer pl-3" alt="" />
                        </Col>
                    </Row>
                </p>
                <div className="text-white text-left my-5">
                    <Row>
                        <Col md={9}>
                            {orangePlanData.map((title, index) => (
                                <p key={index} className="text-orange">
                                    {insertLineBreaks(title)}
                                </p>
                            ))}
                        </Col>
                        <Col>
                            <img src={Library} className="py-5" alt="" />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
    */
    //console.log("completedTopics:", completedTopics);
    //console.log("completedTopics.length:", completedTopics.length);
    //const completedTitles = completedTopics.map((index) => planData[index]?.title);
    //console.log("completedTitles:", completedTitles);
    //const missingTopics = planData.filter((_, index) => !completedTopics.includes(index)).map((data) => data.title);
    //console.log("missingTopics:", missingTopics);
    /*
    if (completedTitles.length > 1) {
        smallestCompletedTitles = smallestCompletedTitles.sort((a, b) => {
            const indexA = completedTopics.find((topicIndex) => planData[topicIndex]?.title === a);
            const indexB = completedTopics.find((topicIndex) => planData[topicIndex]?.title === b);
            return indexA - indexB;
        });
    }
    */

    //const titlesToDisplay = [firstMissingTopic, ...smallestCompletedTitles.slice(0, 2)];
    /*
    let titlesToDisplay = [];

    if (missingTopics.length === 0) {
        console.log("if");
        titlesToDisplay = [completedTitles[0], completedTitles[1], completedTitles[2]];
    } else if (completedTopics.length === 1) {
        console.log("else if");
        titlesToDisplay = [missingTopics[0], missingTopics[1], completedTitles[0]];
    } else {
        console.log("else");
        titlesToDisplay = [missingTopics[0], completedTitles[0], completedTitles[1]];
    }

    console.log("titlesToDisplay", titlesToDisplay);
    */
    /*
    return (
        <>
            <p className="px-2 pt-3 pb-2 border-light-gray-bottom">
                <Row>
                    <Col md={10}>My Library</Col>
                    <Col md={1} className="">
                        <img src={Info} className="settingsImage pointer pl-3" alt="" />
                    </Col>
                </Row>
            </p>
            <div className="text-white text-left my-5">
                <Row>
                    <Col md={9}>
                        {titlesToDisplay.map((title, index) => (
                            <p key={index} className={missingTopics.includes(title) ? "text-orange" : "text-green"}>
                                {insertLineBreaks(title)}
                            </p>
                        ))}
                    </Col>
                    <Col>
                        <img src={Library} className="py-5" alt="" />
                    </Col>
                </Row>
            </div>
        </>
    );
    */


    return (
        <>
            <p className="px-2 pt-3 pb-2 border-light-gray-bottom">
                <Row>
                    <Col md={10}>My Library</Col>
                    <Col md={1} className="">
                        <img src={Info} className="settingsImage pointer pl-3" alt="" />
                    </Col>
                </Row>
            </p>
            <div className="text-white text-left my-5">
                <Row>
                    <Col md={9}>
                        {flags.map((flag, index) => (
                            <div
                                key={index}
                                className={`title-group animate__animated ${visibleIndex === index ? "animate__fadeInLeft" : "animate__fadeOutRight"}`}
                            >
                                {flag.map((title, i) => (
                                    <p
                                        key={i}
                                        className={`${completedTopics && completedTopics.includes(index * 3 + i) ? "text-green" : "text-orange"}`}
                                    >
                                        {insertLineBreaks(title)}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </Col>
                    <Col>
                        <img src={Library} className="py-5" alt="" />
                    </Col>
                </Row>
            </div>
        </>
    );
}