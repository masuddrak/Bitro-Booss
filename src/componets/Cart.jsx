import useCart from "../hooks/useCart";

const Cart = () => {
    const { carts } = useCart()
    const totalPrice = carts.reduce((total, item) => total + item.price, 0)
    console.log(totalPrice)
    console.log(carts)
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
                                        <button className="btn btn-ghost btn-xs">details</button>
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