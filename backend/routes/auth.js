const { Router } = require('express');
const {
    getAllUsers,
    getAllUserInfo,
    register,
    login,
    protected,
    logout,
    getUsersAuthorized,
    getUsersUnauthorized,
    getUserId,
    getUserBasicInfo,
    getUserAuthorized,
    updateCompletedSteps,
    updateCompletedPhases,
    getCompletedPhases,
    updateCompletedChallenges,
    getCompletedChallenges,
    updateDiagnosis,
    getDiagnosis,
    updateName,
    updateIdeaName,
    updateEmail,
    updateCompletedTopics,
    getCompletedTopics,
    updatePitchForm,
    getPitchForm,
    updatePropriedadeForm,
    getPropriedadeForm,
    getUserEvents,
    createUserEvent,
    deleteUserEvent,
    getUserNextEvent,
    getUserTodayEvent
} = require('../controllers/auth');

const { validationMiddleware } = require('../middlewares/validations-middleware');

const { registerValidation, loginValidation } = require('../validators/auth');

const { userAuth } = require('../middlewares/auth-middleware');

const router = Router();

router.get('/getUsers', getAllUsers);
router.get('/getUser/:email', getAllUserInfo);
router.get('/getUserId/:email', getUserId);
router.get('/getUserAuthorized/', userAuth, getUserAuthorized);
router.patch('/updateCompletedSteps/', userAuth, updateCompletedSteps);
router.patch('/updateCompletedPhases/', userAuth, updateCompletedPhases);
router.get('/getCompletedPhases/', userAuth, getCompletedPhases);
router.patch('/updateCompletedChallenges/', userAuth, updateCompletedChallenges);
router.get('/getCompletedChallenges/', userAuth, getCompletedChallenges);
router.patch('/updateDiagnosis/', userAuth, updateDiagnosis);
router.get('/getDiagnosis/', userAuth, getDiagnosis);
router.patch('/updateCompletedTopics/', userAuth, updateCompletedTopics);
router.get('/getCompletedTopics/', userAuth, getCompletedTopics);
router.patch('/updatePitchForm/', userAuth, updatePitchForm);
router.get('/getPitchForm/', userAuth, getPitchForm);
router.patch('/updatePropriedadeForm/', userAuth, updatePropriedadeForm);
router.get('/getPropriedadeForm/', userAuth, getPropriedadeForm);
router.patch('/updateName/', userAuth, updateName);
router.patch('/updateIdeaName/', userAuth, updateIdeaName);
router.patch('/updateEmail/', userAuth, updateEmail);
router.get('/getUserInfo/:email', getUserBasicInfo);
router.get('/getUsersAuthorized', getUsersAuthorized);
router.get('/getUsersUnauthorized', getUsersUnauthorized);
router.get('/getUserEvents', userAuth, getUserEvents);
router.get('/getUserNextEvent', userAuth, getUserNextEvent);
router.get('/getUserTodayEvent', userAuth, getUserTodayEvent);
router.post('/createUserEvent', userAuth, createUserEvent);
router.delete('/deleteUserEvent', userAuth, deleteUserEvent);
router.get('/protected', userAuth, protected);
router.post('/register', registerValidation, validationMiddleware, register);
router.post('/login', loginValidation, validationMiddleware, login);
router.get('/logout', logout);

module.exports = router;