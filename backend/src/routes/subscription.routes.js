import { Router } from "express";
import {
  toggleSubscription,
  getChannelSubscribers,
  getUserSubscriptions,
  getMySubscriptionInfo,
  getMySubscribers
} from "../controllers/subscription.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";


const router = Router();

router.use(verifyJWT);

// Subscribe / unsubscribe
router.post("/c/:channelId", toggleSubscription);

// Subscribers of a specific channel
router.get("/channel/:channelId", getChannelSubscribers);

// Channels a user has subscribed to
router.get("/user", getUserSubscriptions);//logged-in user     
router.get("/user/:userId", getUserSubscriptions); //any user

// Logged-in user's subscription info
router.get("/info", getMySubscriptionInfo);

// Logged-in user's subscribers
router.get("/my-subscribers", getMySubscribers);

export default router;
