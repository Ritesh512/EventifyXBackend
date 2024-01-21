const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  addUserInterest,
  registerUserForEvent,
  userRegisteredEvents,
  deleteUser ,
  getUserInterests,
  removeUserInterest,
  unregisterUserForEvent,
  getUsersRegisteredForAnEvent,
  getUserFriends,
  changePassword,
  getUserRegistrationEventID,
  addFriend
} = require("../controllers/userControllers");
const {protect} = require('../middlewares/authMiddleware');


router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/addInterest/:userId").put(protect,addUserInterest);
router.route("/removeInterest/:userId").put(protect,removeUserInterest);
router.route("/userInterest/:userId").get(protect,getUserInterests);
router.route("/registerEvent/:userId").post(protect,registerUserForEvent);
router.route("/deleteUser/:userId").delete(protect,deleteUser);
router.route("/userRegisteredEvents/:userId").get(protect,userRegisteredEvents);
router.route("/cancelUserRegistration/:userId").delete(protect,unregisterUserForEvent);
router.route("/userInterest/:userId").get(protect,getUserInterests);
router.route("/getRegisteredUsers/:eventId").get(protect,getUsersRegisteredForAnEvent);
router.route("/getUserFriends/:userId").get(getUserFriends);
router.route("/changePassword/:userId").get(changePassword);
router.route("/getEventIdofUser/:userId").get(getUserRegistrationEventID);
router.route("/addFriend/:userId").post(addFriend);


module.exports = router;