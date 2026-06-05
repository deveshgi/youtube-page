import { useQuery } from "@tanstack/react-query";
import {
    getChannelSubscribers,
    getUserSubscriptions,
} from "../services/subscription.service";

export const useSubscribers = (channelId) => {
    return useQuery({
        queryKey: ["subscribers", channelId],
        queryFn: () => getChannelSubscribers(channelId),
    });
};

export const useSubscriptions = (userId) => {
    return useQuery({
        queryKey: ["subscriptions", userId],
        queryFn: () => getUserSubscriptions(userId),
    });
};