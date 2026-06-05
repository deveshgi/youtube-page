import { useQuery } from "@tanstack/react-query";
import { getUserTweets } from "../services/tweet.service";

export const useTweets = (userId) => {
    return useQuery({
        queryKey: ["tweets", userId],
        queryFn: () => getUserTweets(userId),
    });
};