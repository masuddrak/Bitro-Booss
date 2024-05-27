import { MdDelete } from "react-icons/md";
import SectionTitel from "../../componets/SectionTitel";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menus,,refetch] = useMenu()
    const AxiosSecure=useAxiosSecure()
     // handel delete users
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
                AxiosSecure.delete(`/menu/${id}`)
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
        <section>
            <SectionTitel heading={"---Hurry Up!---"} subHeading={"MANAGE ALL ITEMS"}></SectionTitel>
            <div>
                <h2 className="text-3xl font-semibold">All Menus {menus.length}</h2>
                {/* user tabile */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No:</th>
                                <th>image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menus.map((menu, index) => <tr key={menu._id} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-14 rounded">
                                            <img src={menu?.image} />
                                        </div>
                                    </div></td>
                                    <td>{menu?.name}</td>
                                    <td>${menu?.price}</td>
                                    <td><Link to={`/dashboard/updateItem/${menu._id}`} className="btn btn-ghost"><FaRegEdit className="text-xl text-red-500"></FaRegEdit></Link></td>
                                    <td>  <button onClick={()=>handelDeleteItem(menu?._id)} className="btn btn-ghost"><MdDelete className="text-xl text-red-500"></MdDelete></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageItems;