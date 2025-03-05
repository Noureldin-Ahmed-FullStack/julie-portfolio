import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const BaseURL = import.meta.env.VITE_BASE_URL;
export const fetchArt = async (artType: string, title?: string, tag?: string) => {
    const response = await axios.get(BaseURL + "Art" + `?title=${title}&type=${artType}&tags=${tag}`);
    return response.data;
}

export const fetchFavs = async (user_ID: string | undefined) => {

    if (user_ID != null || user_ID != undefined) {
        const response = await axios.get(BaseURL + "favourites/" + user_ID);
        console.log(response);
        return response.data;
    } else {
        return []
    }

};

export const useFavs = (user_ID: string | undefined) => {
    return useQuery({
        queryKey: ['favourites/' + user_ID],
        queryFn: () => fetchFavs(user_ID),
        enabled: !!user_ID,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
}
const fetchFieldDetails = async (fieldID: string | undefined) => {
    if (fieldID != null || fieldID != undefined) {
        try {
            const response = await axios.get(BaseURL + "fieldDetails/" + fieldID);
            return response.data;
        } catch (error) {
            console.error(error);
            return "error"
        }
    } else {
        return null
    }


};
export const useArt = (artType: string, title?: string | undefined, tag?: string | undefined) => {
    return useQuery({
        queryKey: ['art', artType, title, tag],
        queryFn: () => fetchArt(artType, title, tag),
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
}
export const useFieldDetails = (fieldID: string | undefined) => {
    return useQuery({
        queryKey: ['FieldDetails' + fieldID, fieldID],
        queryFn: () => fetchFieldDetails(fieldID),
        enabled: !!fieldID,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
}