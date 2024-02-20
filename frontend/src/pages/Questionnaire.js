import React, { useState } from "react";

import {
    Row,
    Col,
    Container
} from "react-bootstrap";

import SideBar from "../components/SideBar";
import Title from "../components/Title";
import QuestionnairePages from "../components/QuestionnairePages";

export default function Questionnaire() {
    const [currentPage, setCurrentPage] = useState(1);

    const [pageScores, setPageScores] = useState(Array(3).fill(0)); // Assuming 3 pages

    const handlePageScoreChange = (pageIndex, score) => {
        const newPageScores = [...pageScores];
        newPageScores[pageIndex] = score;
        setPageScores(newPageScores);
    };


    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const questionnairePages = [
        [
            "Our market is characterized by: Few competitors / Many competitors",
            "Our competitors: Are not as strong as we are / Are powerful and highly organized",
            "To fulfill the functionalities of our product, there are: No substitute products / Many substitute products",
            "Our market is characterized by: Difficulty for new competitors to enter / Ease of entry for new competitors",
            "Our market is characterized by: Low Turbulence / The entry and exit of companies in our market is common",
            "Consumers: Are forced to consume our product due to lack of alternatives / Have many alternatives to our product",
            "Our customers have: Low buying power / High buying power",
            "In establishing the price of our product: We impose our prices on our customers / We lower the price to the values they are willing to pay",
            "The price of our product includes: Only the basic features / Other extra benefits",
            "Our prices: Are not under much pressure; in fact, the price is not a very important factor at the moment / Are constantly under enormous pressure",
        ],
        [
            "Our product is defined by having: Standard attributes for the product / Many added special attributes",
            "In terms of innovation, our product is: Inferior to competitors' products / Innovative and superior to competitors' products",
            "We believe that what we offer to our customers is: Inferior to competitors' products / Superior to competitors' products",
            "Our product depends on: No protection / Patent protection/copyright/special knowledge",
            "Our product: Is not difficult to replicate if we do nothing else / Is not easy to replicate",
            "The brand of our product is a factor: Of little significance to the customer / Of great significance to the customer",
            "Our products have: Less prestige than those of competitors / More prestige than those of competitors",
            "The type of people we need is: Easy to recruit and does not require much qualification / Difficult to recruit and requires additional training",
            "To maintain our position in the market: Large investments in technology or personnel are not necessary / We have to constantly invest in new ideas and technology to maintain our market leadership",
            "Our customers pay for our product: Less than for competitor products / More than for competitor products",
        ],
        [
            "Our market share: Is low and under significant pressure / We have a considerably high market share",
            "Our position in the market: Is under high pressure / We are constantly growing",
            "Regarding new markets: Currently, our objective is to try to survive / We are always trying to expand and find new opportunities in the market",
            "Our customers pay for our product: Less than for competitor products / More than for competitor products",
            "Our prices: Are not under much pressure; in fact, the price is not a very important factor at the moment / Are constantly under enormous pressure",
            "Our margins before taxes: Are small and under pressure / Are comfortable and above the industry average",
            "Regarding our investment: We invest little and there are no changes in our market position / We invest heavily and are satisfied with the return on investment",
            "Regarding our sales: We are concerned about low sales / We are satisfied with the regular increments in sales",
            "Our products have: Less prestige than our rivals / More prestige than our competitors",
            "Our customers' perception of our products is: Disappointed with our products and easily switch their choices / They are really satisfied",
        ],
    ];

    const totalScore = pageScores.reduce((total, score) => total + score, 0)
    console.log(totalScore);

    return (
        <Row className="">
            <Col md={1}>
                <SideBar />
            </Col>
            <Col>
                <Title title={"Your project"} back={false} />
                <div className="dashboard-questionnaire-bg bg-dark-gray p-3 text-white ">
                    <Row className="px-3">
                        <Col md={4}>
                            <Row className="dashboard-questionnaire m-2 py-4 px-2">
                                <Container>
                                    <span>
                                        So that our algorithm can make an accurate diagnosis of
                                        your entrepreneurial profile, you should answer 30
                                        quick-fill questions. This information will allow us to
                                        outline a precise profile of the level of innovation in
                                        your idea or project and compare it with your direct
                                        competitors at the international level.
                                        <br />
                                        <br />
                                        To proceed, please fill in the fields indicated on the
                                        side based on the current status of your idea or project.
                                    </span>
                                </Container>
                            </Row>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Container className="m-2">
                                    {currentPage === 1 && (
                                        <QuestionnairePages
                                            pageNumber={currentPage}
                                            onPageScoreChange={handlePageScoreChange}
                                            onNextPage={handleNextPage}
                                            onPreviousPage={handlePreviousPage}
                                            questions={questionnairePages[currentPage - 1]}
                                            totalScore={totalScore}
                                        />
                                    )}
                                    {currentPage === 2 && (
                                        <QuestionnairePages
                                            pageNumber={currentPage}
                                            onPageScoreChange={handlePageScoreChange}
                                            onNextPage={handleNextPage}
                                            onPreviousPage={handlePreviousPage}
                                            questions={questionnairePages[currentPage - 1]}
                                            totalScore={totalScore}
                                        />
                                    )}
                                    {currentPage === 3 && (
                                        <QuestionnairePages
                                            pageNumber={currentPage}
                                            onPageScoreChange={handlePageScoreChange}
                                            onNextPage={handleNextPage}
                                            onPreviousPage={handlePreviousPage}
                                            questions={questionnairePages[currentPage - 1]}
                                            totalScore={totalScore}
                                        />
                                    )}
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </div >
            </Col >
        </Row >
    );
}