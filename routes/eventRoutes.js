const express = require("express");
const router = express.Router();
const {protect} = require("../middlewares/authMiddleware")

const {
  getAllEvents,
  getEventByCity,
  getEventByInterest,
  getEventByCityAndInterest,
  searchEventByEventName,
} = require("../controllers/eventControllers");


router.route("/").get(protect,getAllEvents);
router.route("/city/:cityName/").get(protect,getEventByCity);
router.route("/interest/:interestName/").get(protect,getEventByInterest);

router
  .route("/search/city/:cityName/interest/:interestName/")
  .get(protect,getEventByCityAndInterest);

router
  .route("/search/eventByName")
  .get(protect,searchEventByEventName);

module.exports = router ;

