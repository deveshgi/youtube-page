import { useQuery } from "@tanstack/react-query";
import {
    getLikedVideos,
    getLikedComments,
    getLikedTweets
} from "../services/like.service";

export const useLikedVideos = () => {
    return useQuery({
        queryKey: ["likedVideos"],
        queryFn: getLikedVideos,
    });
};

export const useLikedComments = () => {
    return useQuery({
        queryKey: ["likedComments"],
        queryFn: getLikedComments,
    });
};

export const useLikedTweets = () => {
    return useQuery({
        queryKey: ["likedTweets"],
        queryFn: getLikedTweets,
    });
};