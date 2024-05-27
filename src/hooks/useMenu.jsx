import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";


const useMenu = () => {
    const axiosCommon = useAxiosCommon()
    const { data: menus = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
            const res = await axiosCommon("/menu")
            return res.data
        }
    })
    return [menus, loading, refetch]
};

export default useMenu;