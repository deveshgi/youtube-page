import { useQuery } from "@tanstack/react-query";
import { getWatchHistory } from "../services/user.service";

export const useHistory = () => {
    return useQuery({
        queryKey: ["history"],
        queryFn: getWatchHistory,
    });
};