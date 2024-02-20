import React, { useContext, useState, useEffect } from "react";

import {
    Col,
    Container,
    Row
} from "react-bootstrap";

import SideBar from "../components/SideBar";
import Title from "../components/Title";
import Profile from "../components/Dashboard/Profile";
import Notifications from "../components/Dashboard/Notifications";
import UserImage from "../images/materialpisopitch/userPhoto.png";

import CustomersScreen from "../components/Dashboard/Screens/CustomersScreen";
import BusinessPlanScreen from "../components/Dashboard/Screens/BusinessPlanScreen";
import FundingProgrammesScreen from "../components/Dashboard/Screens/FundingProgrammesScreen";
import JourneyPlannerScreen from "../components/Dashboard/Screens/JourneyPlannerScreen";
import MyLibraryScreen from "../components/Dashboard/Screens/MyLibraryScreen";
import VirtualEntrepreneutialJourneyScreen from "../components/Dashboard/Screens/VirtualEntrepreneutialJourneyScreen";
import ProfileScreen from "../components/Dashboard/Screens/ProfileScreen";

import Customers from "../components/Dashboard/Previews/Customers";
import MyLibrary from "../components/Dashboard/Previews/MyLibrary";
import BusinessPlan from "../components/Dashboard/Previews/BusinessPlan";
import JourneyPlanner from "../components/Dashboard/Previews/JourneyPlanner";
import FundingProgrammes from "../components/Dashboard/Previews/FundingProgrammes";
import VirtualEntrepreneutialJourney from "../components/Dashboard/Previews/VirtualEntrepreneutialJourney";

import axios from "axios";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const [currentScreen, setCurrentScreen] = useState("Dashboard");
    const [userData, setUserData] = useState({});
    const [userNextEvent, setUserNextEvent] = useState({});
    const [userTodayEvent, setUserTodayEvent] = useState({});
    const token = localStorage.getItem('token');

    const handleComponentClick = (componentName) => {
        setCurrentScreen(componentName);
    };

    const handleBackClick = () => {
        setCurrentScreen("Dashboard");
    };


    const getData = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getUserAuthorized', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log("Dashboard - res.data: ", res.data);
                    setUserData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    navigate('/login');
                });
        }
    };

    const getNextEvent = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getUserNextEvent', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log("NextEvent - res.data: ", res.data);
                    setUserNextEvent(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const getTodayEvent = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getUserTodayEvent', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log("TodayEvent - res.data: ", res.data);
                    setUserTodayEvent(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        getData();
        getNextEvent();
        getTodayEvent();
    }, [auth, token]);

    return (
        <Row className="">
            <Col md={1}>
                <SideBar />
            </Col>
            <Col>
                <Title title={currentScreen} back={currentScreen !== "Dashboard"} handleBackClick={handleBackClick} />
                <div className={`bg-dark-gray p-3 text-white ${currentScreen === "Dashboard" ? "dashboard" : "widgets"}`}>
                    {currentScreen === "Dashboard" && (
                        <Row className="px-3">
                            <Col md={4}>
                                <Row className="dashboard-user-infos m-2 p-2">
                                    <Container>
                                        <Profile
                                            image={UserImage}
                                            name={userData.name}
                                            idea={userData.idea_name}
                                            email={userData.email}
                                            diagnosis={userData.diagnosis}
                                            completedChallenges={userData.completed_challenges}
                                            action={() => handleComponentClick("Profile")}
                                        />
                                    </Container>
                                </Row>
                                <Row className="dashboard-user-notifications mt-4 m-2 p-3">
                                    <Container>
                                        <Notifications />
                                    </Container>
                                </Row>
                            </Col>
                            <Col md={8} className="dashboard-panel">
                                <Row>
                                    <Col className="dashboard-square m-2" onClick={() => handleComponentClick("JourneyPlanner")}>
                                        <JourneyPlanner
                                            todayStart={userTodayEvent.start}
                                            todayEnd={userTodayEvent.end}
                                            nextTitle={userNextEvent.title}
                                            nextStart={userNextEvent.start}
                                            nextEnd={userNextEvent.end}
                                        />
                                    </Col>
                                    <Col className="dashboard-square m-2" onClick={() => handleComponentClick("FundingProgrammes")}>
                                        <FundingProgrammes />
                                    </Col>
                                    <Col className="dashboard-square m-2" onClick={() => handleComponentClick("BusinessPlan")}>
                                        <BusinessPlan completedSteps={userData.completed_steps} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="dashboard-square m-2" onClick={() => handleComponentClick("Customers")}>
                                        <Customers />
                                    </Col>
                                    <Col className="dashboard-square m-2" onClick={() => handleComponentClick("MyLibrary")}>
                                        <MyLibrary completedTopics={userData.completed_topics} />
                                    </Col>
                                    <Col className="dashboard-square m-2" onClick={() => handleComponentClick("VirtualEntrepreneutialJourney")}>
                                        <VirtualEntrepreneutialJourney />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )}
                    {currentScreen === "JourneyPlanner" && (
                        <JourneyPlannerScreen
                            image={UserImage}
                            name={userData.name}
                            idea={userData.idea_name}
                            email={userData.email}
                            diagnosis={userData.diagnosis}
                            completedChallenges={userData.completed_challenges}
                            action={() => handleComponentClick("Profile")}
                        />
                    )}
                    {currentScreen === "FundingProgrammes" && (
                        <FundingProgrammesScreen
                            image={UserImage}
                            name={userData.name}
                            idea={userData.idea_name}
                            action={() => handleComponentClick("Profile")}
                        />
                    )}
                    {currentScreen === "BusinessPlan" && (
                        <BusinessPlanScreen
                            image={UserImage}
                            name={userData.name}
                            idea={userData.idea_name}
                            completedSteps={userData.completed_steps}
                            action={() => handleComponentClick("Profile")}
                        />
                    )}
                    {currentScreen === "MyLibrary" && (
                        <MyLibraryScreen
                            image={UserImage}
                            name={userData.name}
                            idea={userData.idea_name}
                            completed_topics={userData.completed_topics}
                            action={() => handleComponentClick("Profile")}
                        />
                    )}
                    {currentScreen === "Customers" && (
                        <CustomersScreen
                            image={UserImage}
                            name={userData.name}
                            idea={userData.idea_name}
                            email={userData.email}
                            diagnosis={userData.diagnosis}
                            completedChallenges={userData.completed_challenges}
                            action={() => handleComponentClick("Profile")}
                        />
                    )}
                    {currentScreen === "VirtualEntrepreneutialJourney" && (
                        <VirtualEntrepreneutialJourneyScreen
                            image={UserImage}
                            name={userData.name}
                            idea={userData.idea_name}
                            diagnosis={userData.diagnosis}
                            completedChallenges={userData.completed_challenges}
                            completed_phases={userData.completed_phases}
                            action={() => handleComponentClick("Profile")}
                        />
                    )}
                    {currentScreen === "Profile" && (
                        <ProfileScreen
                            image={UserImage}
                            name={userData.name}
                            idea={userData.idea_name}
                            email={userData.email}
                            diagnosis={userData.diagnosis}
                            completedChallenges={userData.completed_challenges}
                            action={() => handleComponentClick("Profile")}
                        />
                    )}
                </div>
            </Col>
        </Row>
    );
}