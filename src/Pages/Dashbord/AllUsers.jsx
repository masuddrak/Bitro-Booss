import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitel from "../../componets/SectionTitel";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
    const AxiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const data = await AxiosSecure("/users")
            return data.data
        }
    })
    // handel create admin user
    const handelCreatAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Create This User In Admin Request",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        refetch()
                        console.log(res)
                    })
                Swal.fire({
                    title: "Yeas",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    // handel delete users
    const handelDeleteUser = (id) => {
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
                AxiosSecure.delete(`/users/${id}`)
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
            <SectionTitel subHeading={"---Hurry Up!---"} heading={"MANAGE ALL ITEMS"}></SectionTitel>
            <div>
                <h2 className="text-3xl font-semibold">All Users {users.length}</h2>
                {/* user tabile */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No:</th>
                                <th>Name</th>
                                <th>Emial</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user.role === "admin" ? "admin" : <button onClick={() => handelCreatAdmin(user._id)} className="btn btn-ghost"><FaUsers className="text-xl text-red-500"></FaUsers></button>}</td>
                                    <td>  <button onClick={() => handelDeleteUser(user._id)} className="btn btn-ghost"><MdDelete className="text-xl text-red-500"></MdDelete></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;