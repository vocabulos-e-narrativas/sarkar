import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'typeface-poppins';

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import Dashboard from "./pages/Dashboard";
import Questionnaire from "./pages/Questionnaire";
import QuestionnaireResults from './pages/QuestionnaireResults';


import PitchHall from "./pages/phases/pitch/PitchHall";
import PitchEstudio1Opening from "./pages/phases/pitch/estudio1/Opening";
import PitchEstudio2Opening from "./pages/phases/pitch/estudio2/Opening";
import PitchEstudio3Opening from "./pages/phases/pitch/estudio3/Opening";
import PitchEstudio1Far from "./pages/phases/pitch/estudio1/Far";
import PitchEstudio2Puzzle from "./pages/phases/pitch/estudio2/Puzzle";
import PitchEstudio3Form from "./pages/phases/pitch/estudio3/Form";
import PitchEstudio1Transition1 from "./pages/phases/pitch/estudio1/Transition1";
import PitchEstudio1Transition2 from "./pages/phases/pitch/estudio1/Transition2";
import PitchEstudio1Puzzle1 from "./pages/phases/pitch/estudio1/Puzzle1";
import PitchTutorial1 from "./pages/phases/pitch/estudio1/Tutorial1";
import PitchTutorial2 from "./pages/phases/pitch/estudio1/Tutorial2";
import PitchChallenge1 from "./pages/phases/pitch/estudio1/Challenge1";
import PitchNarrativaA from "./pages/phases/pitch/estudio1/NarrativaA";
import PitchNarrativaB from "./pages/phases/pitch/estudio1/NarrativaB";
import PitchNarrativaC from "./pages/phases/pitch/estudio1/NarrativaC";
import PitchQuizz1 from "./pages/phases/pitch/estudio1/Quizz1";
import PitchQuizz2 from "./pages/phases/pitch/estudio1/Quizz2";
import PitchAnagram1 from "./pages/phases/pitch/estudio1/Anagram1";
import PitchAnagram2 from "./pages/phases/pitch/estudio1/Anagram2";
import PitchEstudio1Transition3 from "./pages/phases/pitch/estudio1/Transition3";
import PitchEstudio1Transition4 from "./pages/phases/pitch/estudio1/Transition4";
import PitchQuizz3 from "./pages/phases/pitch/estudio1/Quizz3";
import PitchQuizz4 from "./pages/phases/pitch/estudio1/Quizz4";
import PitchQuizz5 from "./pages/phases/pitch/estudio1/Quizz5";
import PitchQuizz6 from "./pages/phases/pitch/estudio1/Quizz6";
import PitchEstudio1Transition5 from "./pages/phases/pitch/estudio1/Transition5";
import PitchPuzzle2 from "./pages/phases/pitch/estudio1/Puzzle2";
import PitchEstudio1Exit from "./pages/phases/pitch/estudio1/Exit";

import PropriedadeHall from "./pages/phases/propriedade/PropriedadeHall";
import PropriedadeEstudio1Opening from "./pages/phases/propriedade/estudio1/Opening";
import PropriedadeEstudio1Far from "./pages/phases/propriedade/estudio1/Far";
import PropriedadeEstudio1Puzzle1 from "./pages/phases/propriedade/estudio1/Puzzle1";
import PropriedadeEstudio1Transition1 from "./pages/phases/propriedade/estudio1/Transition1";
import PropriedadeEstudio1Transition2 from "./pages/phases/propriedade/estudio1/Transition2";
import PropriedadeEstudio1Tutorial1 from "./pages/phases/propriedade/estudio1/Tutorial1";
import PropriedadeEstudio1Challenge1 from "./pages/phases/propriedade/estudio1/Challenge1";
import PropriedadeEstudio1Quizz1 from "./pages/phases/propriedade/estudio1/Quizz1";
import PropriedadeEstudio1Quizz2 from "./pages/phases/propriedade/estudio1/Quizz2";
import PropriedadeEstudio1Tutorial2 from "./pages/phases/propriedade/estudio1/Tutorial2";
import PropriedadeEstudio1Quizz3 from "./pages/phases/propriedade/estudio1/Quizz3";
import PropriedadeEstudio1Quizz4 from "./pages/phases/propriedade/estudio1/Quizz4";
import PropriedadeEstudio1Quizz5 from "./pages/phases/propriedade/estudio1/Quizz5";
import PropriedadeEstudio1Puzzle2 from "./pages/phases/propriedade/estudio1/Puzzle2";
import PropriedadeEstudio2Opening from "./pages/phases/propriedade/estudio2/Opening";
import PropriedadeEstudio2Far from "./pages/phases/propriedade/estudio2/Far";
import PropriedadeEstudio2Transition1 from "./pages/phases/propriedade/estudio2/Transition1";
import PropriedadeEstudio2Challenge1 from "./pages/phases/propriedade/estudio2/Challenge1";
import PropriedadeEstudio2Quizz1 from "./pages/phases/propriedade/estudio2/Quizz1";
import PropriedadeEstudio2Challenge2 from "./pages/phases/propriedade/estudio2/Challenge2";
import PropriedadeEstudio2Quizz2 from "./pages/phases/propriedade/estudio2/Quizz2";
import PropriedadeEstudio2Challenge3 from "./pages/phases/propriedade/estudio2/Challenge3";
import PropriedadeEstudio2Quizz3 from "./pages/phases/propriedade/estudio2/Quizz3";
import PropriedadeEstudio2Transition2 from "./pages/phases/propriedade/estudio2/Transition2";
import PropriedadeEstudio2Transition3 from "./pages/phases/propriedade/estudio2/Transition3";
import PropriedadeEstudio2Transition4 from "./pages/phases/propriedade/estudio2/Transition4";
import PropriedadeEstudio2Puzzle1 from "./pages/phases/propriedade/estudio2/Puzzle1";
import PropriedadeEstudio2Transition5 from "./pages/phases/propriedade/estudio2/Transition5";
import PropriedadeEstudio2Exit from "./pages/phases/propriedade/estudio2/Exit";
import PropriedadeEstudio3Opening from "./pages/phases/propriedade/estudio3/Opening";
import PropriedadeEstudio3Form from "./pages/phases/propriedade/estudio3/Form";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverPassword" element={<RecoverPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/questionnaire/results" element={<QuestionnaireResults />} />

        <Route path="/phases/pitch/pitchHall" element={<PitchHall />} />

        <Route path="/phases/pitch/estudio1/opening" element={<PitchEstudio1Opening />} />
        <Route path="/phases/pitch/estudio1/far" element={<PitchEstudio1Far />} />
        <Route path="/phases/pitch/estudio1/transition1" element={<PitchEstudio1Transition1 />} />
        <Route path="/phases/pitch/estudio1/puzzle1" element={<PitchEstudio1Puzzle1 />} />
        <Route path="/phases/pitch/estudio1/transition2" element={<PitchEstudio1Transition2 />} />
        <Route path="/phases/pitch/estudio1/tutorial1" element={<PitchTutorial1 />} />
        <Route path="/phases/pitch/estudio1/tutorial2" element={<PitchTutorial2 />} />
        <Route path="/phases/pitch/estudio1/challenge1" element={<PitchChallenge1 />} />
        <Route path="/phases/pitch/estudio1/narrativaA" element={<PitchNarrativaA />} />
        <Route path="/phases/pitch/estudio1/narrativaB" element={<PitchNarrativaB />} />
        <Route path="/phases/pitch/estudio1/narrativaC" element={<PitchNarrativaC />} />
        <Route path="/phases/pitch/estudio1/quizz1" element={<PitchQuizz1 />} />
        <Route path="/phases/pitch/estudio1/quizz2" element={<PitchQuizz2 />} />
        <Route path="/phases/pitch/estudio1/anagram1" element={<PitchAnagram1 />} />
        <Route path="/phases/pitch/estudio1/transition3" element={<PitchEstudio1Transition3 />} />
        <Route path="/phases/pitch/estudio1/transition4" element={<PitchEstudio1Transition4 />} />
        <Route path="/phases/pitch/estudio1/quizz3" element={<PitchQuizz3 />} />
        <Route path="/phases/pitch/estudio1/quizz4" element={<PitchQuizz4 />} />
        <Route path="/phases/pitch/estudio1/quizz5" element={<PitchQuizz5 />} />
        <Route path="/phases/pitch/estudio1/quizz6" element={<PitchQuizz6 />} />
        <Route path="/phases/pitch/estudio1/anagram2" element={<PitchAnagram2 />} />
        <Route path="/phases/pitch/estudio1/transition5" element={<PitchEstudio1Transition5 />} />
        <Route path="/phases/pitch/estudio1/puzzle2" element={<PitchPuzzle2 />} />
        <Route path="/phases/pitch/estudio1/exit" element={<PitchEstudio1Exit />} />
        <Route path="/phases/pitch/estudio2/opening" element={<PitchEstudio2Opening />} />
        <Route path="/phases/pitch/estudio2/puzzle" element={<PitchEstudio2Puzzle />} />
        <Route path="/phases/pitch/estudio3/opening" element={<PitchEstudio3Opening />} />
        <Route path="/phases/pitch/estudio3/form" element={<PitchEstudio3Form />} />

        <Route path="/phases/propriedade/propriedadeHall" element={<PropriedadeHall />} />

        <Route path="/phases/propriedade/estudio1/opening" element={<PropriedadeEstudio1Opening />} />
        <Route path="/phases/propriedade/estudio1/far" element={<PropriedadeEstudio1Far />} />
        <Route path="/phases/propriedade/estudio1/puzzle1" element={<PropriedadeEstudio1Puzzle1 />} />
        <Route path="/phases/propriedade/estudio1/transition1" element={<PropriedadeEstudio1Transition1 />} />
        <Route path="/phases/propriedade/estudio1/transition2" element={<PropriedadeEstudio1Transition2 />} />
        <Route path="/phases/propriedade/estudio1/tutorial1" element={<PropriedadeEstudio1Tutorial1 />} />
        <Route path="/phases/propriedade/estudio1/challenge1" element={<PropriedadeEstudio1Challenge1 />} />
        <Route path="/phases/propriedade/estudio1/quizz1" element={<PropriedadeEstudio1Quizz1 />} />
        <Route path="/phases/propriedade/estudio1/quizz2" element={<PropriedadeEstudio1Quizz2 />} />
        <Route path="/phases/propriedade/estudio1/tutorial2" element={<PropriedadeEstudio1Tutorial2 />} />
        <Route path="/phases/propriedade/estudio1/quizz3" element={<PropriedadeEstudio1Quizz3 />} />
        <Route path="/phases/propriedade/estudio1/quizz4" element={<PropriedadeEstudio1Quizz4 />} />
        <Route path="/phases/propriedade/estudio1/quizz5" element={<PropriedadeEstudio1Quizz5 />} />
        <Route path="/phases/propriedade/estudio1/puzzle2" element={<PropriedadeEstudio1Puzzle2 />} />
        <Route path="/phases/propriedade/estudio2/opening" element={<PropriedadeEstudio2Opening />} />
        <Route path="/phases/propriedade/estudio2/far" element={<PropriedadeEstudio2Far />} />
        <Route path="/phases/propriedade/estudio2/transition1" element={<PropriedadeEstudio2Transition1 />} />
        <Route path="/phases/propriedade/estudio2/challenge1" element={<PropriedadeEstudio2Challenge1 />} />
        <Route path="/phases/propriedade/estudio2/quizz1" element={<PropriedadeEstudio2Quizz1 />} />
        <Route path="/phases/propriedade/estudio2/challenge2" element={<PropriedadeEstudio2Challenge2 />} />
        <Route path="/phases/propriedade/estudio2/quizz2" element={<PropriedadeEstudio2Quizz2 />} />
        <Route path="/phases/propriedade/estudio2/challenge3" element={<PropriedadeEstudio2Challenge3 />} />
        <Route path="/phases/propriedade/estudio2/quizz3" element={<PropriedadeEstudio2Quizz3 />} />
        <Route path="/phases/propriedade/estudio2/transition2" element={<PropriedadeEstudio2Transition2 />} />
        <Route path="/phases/propriedade/estudio2/transition3" element={<PropriedadeEstudio2Transition3 />} />
        <Route path="/phases/propriedade/estudio2/transition4" element={<PropriedadeEstudio2Transition4 />} />
        <Route path="/phases/propriedade/estudio2/puzzle1" element={<PropriedadeEstudio2Puzzle1 />} />
        <Route path="/phases/propriedade/estudio2/transition5" element={<PropriedadeEstudio2Transition5 />} />
        <Route path="/phases/propriedade/estudio2/exit" element={<PropriedadeEstudio2Exit />} />
        <Route path="/phases/propriedade/estudio3/opening" element={<PropriedadeEstudio3Opening />} />
        <Route path="/phases/propriedade/estudio3/form" element={<PropriedadeEstudio3Form />} />



      </Routes>
    </Router>
  );
}
