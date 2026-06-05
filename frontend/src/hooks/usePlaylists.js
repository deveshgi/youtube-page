import { useQuery } from "@tanstack/react-query";
import {
    getUserPlaylists,
    getPlaylistById
} from "../services/playlist.service";

export const usePlaylists = (userId) => {
    return useQuery({
        queryKey: ["playlists", userId],
        queryFn: () => getUserPlaylists(userId),
    });
};

export const usePlaylist = (playlistId) => {
    return useQuery({
        queryKey: ["playlist", playlistId],
        queryFn: () => getPlaylistById(playlistId),
        enabled: !!playlistId,
    });
};