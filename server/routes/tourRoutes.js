const express = require("express");
const {
  createTour,
  deleteTour,
  getAllTours,
  getTour,
  updateTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require("../controllers/toursController");
const { protect, restrictTo } = require("../controllers/authController");
const { createReview } = require("../controllers/reviewsController");
const reviewRouter = require("./reviewRoutes");

const router = express.Router();

// POST / tour/234fad4/reviews
// GET /tour/234fad4/reviews

router.use("/:tourId/reviews", reviewRouter);

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);

router.route("/tour-stats").get(getTourStats);
router.route("/monthly-plan/:year").get(getMonthlyPlan);

router.route("/").get(getAllTours).post(protect, createTour);

router
  .route("/:id")
  .get(getTour)
  .patch(protect, updateTour)
  .delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

module.exports = router;
