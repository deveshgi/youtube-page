import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/user.service";

export const useCurrentUser = () => {
    return useQuery({
        queryKey: ["currentUser"],
        queryFn: getCurrentUser,
    });
};