import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth()
    const AxiosSecure = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access_token'),
        queryFn: async () => {
            const { data } = await AxiosSecure(`/users/admin/${user?.email}`)

            return data.isAdmin
        }
    })
    return [isAdmin, isAdminLoading]
};


export default useAdmin;