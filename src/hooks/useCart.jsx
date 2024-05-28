import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const AxiosSecure = useAxiosSecure()
    const {user,loading}=useAuth()
    const { data: carts = [], isPending,refetch } = useQuery({
        queryKey: ['carts',user?.email],
        enabled:!loading&&!!user?.email,
        queryFn: async () => {
            const res = await AxiosSecure(`/carts?email=${user?.email}`)
            return res.data
        }
    })

    return {carts, isPending,refetch}
};

export default useCart;