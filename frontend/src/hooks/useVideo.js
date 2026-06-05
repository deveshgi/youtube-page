import { useQuery } from "@tanstack/react-query";
import { getVideoById } from "../services/video.service";

export const useVideo = (videoId) => {
  return useQuery({
    queryKey: ["video", videoId],
    queryFn: () => getVideoById(videoId),
    enabled: !!videoId
  });
};