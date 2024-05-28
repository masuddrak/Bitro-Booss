import useAuth from "../../hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="border-b-2 my-3">
                <h2 className="text-4xl font-bold py-2">{user?.displayName}</h2>
            </div>
        </div>
    );
};

export default AdminHome;