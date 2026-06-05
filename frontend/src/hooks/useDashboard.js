import { useQuery } from "@tanstack/react-query";
import {
    getChannelStats,
    getChannelVideos,
} from "../services/dashboard.service";

export const useChannelStats = (channelId) => {
    return useQuery({
        queryKey: ["channelStats", channelId],
        queryFn: () => getChannelStats(channelId),
    });
};

export const useChannelVideos = (channelId) => {
    return useQuery({
        queryKey: ["channelVideos", channelId],
        queryFn: () => getChannelVideos(channelId),
    });
};