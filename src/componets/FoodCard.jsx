import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const { user } = useAuth()
    const { image, price, name, recipe } = item
    const naviget = useNavigate()
    const handerCart = (item) => {
        if (user?.email) {
            console.log(item)
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
                    naviget("/login")
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