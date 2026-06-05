import { useQuery } from "@tanstack/react-query";
import { getVideoComments } from "../services/comment.service";

export const useComments = (videoId) => {
    return useQuery({
        queryKey: ["comments", videoId],
        queryFn: () => getVideoComments(videoId),
        enabled: !!videoId,
    });
};