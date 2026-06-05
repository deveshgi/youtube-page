import { useQuery } from "@tanstack/react-query";
import { getAllVideos } from "../services/video.service";

export const useVideos = (params) => {
  return useQuery({
    queryKey: ["videos", params],
    queryFn: () => getAllVideos(params)
  });
};