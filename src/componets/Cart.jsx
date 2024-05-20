import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Cart = () => {
    const { carts, refetch } = useCart()
    const AxiosSecure = useAxiosSecure()
    const totalPrice = carts.reduce((total, item) => total + item.price, 0)
    const handelDeleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.delete(`/deleteCart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <div className="flex justify-between text-3xl mt-3">
                <h3>Total Price:{totalPrice.toFixed(2)}</h3>
                <h3>Total Orders:{carts.length}</h3>
                <button className="btn bg-orange-300">Pay</button>
            </div>
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase">
                                <th>item image</th>
                                <th>item Name</th>
                                <th>item price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                carts.map(item => <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{item.name}</p>
                                    </td>
                                    <td>
                                        <p>{item.price}</p>
                                    </td>
                                    <th>
                                        <button onClick={() => handelDeleteItem(item._id)} className="btn btn-ghost"><MdDelete className="text-xl text-red-500"></MdDelete></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;