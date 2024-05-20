import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const FoodCard = ({ item }) => {
    const { user } = useAuth()
    const { image, price, name, recipe, _id } = item
    const naviget = useNavigate()
    const location = useLocation()
    const AxiosSecure=useAxiosSecure()
    const {refetch}=useCart()
    

    const handerCart = () => {
        if (user?.email) {
            const itemId = _id
            const orderEmail = user?.email
            const cartIfo = { itemId, orderEmail, price, image, name }
            AxiosSecure.post("/carts", cartIfo)
                .then(res => {
                    console.log(res.data)
                    if (res?.data?.acknowledged) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added Cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                refetch()
        }
        else {
            Swal.fire({
                title: "Please Login?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    naviget("/login", { state: { from: location } })
                }
            });
        }

    }
    return (

        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} className="object-cover" alt="Shoes" /></figure>
            <p className="absolute right-0 bg-black px-2 text-white m-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handerCart(item)} className="btn btn-primary">Add Card</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;