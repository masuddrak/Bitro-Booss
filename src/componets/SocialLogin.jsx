import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import useAxiosCommon from "../hooks/useAxiosCommon";

const SocialLogin = () => {
    const axiosCommon = useAxiosCommon()
    const { handelGoolesign } = useAuth()

    const submitSignIn = async () => {
        await handelGoolesign()
            .then(async (result) => {
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                }
                try {
                    await axiosCommon.post("/users", userInfo)
                        .then(data => {
                            console.log(data)
                        })
                } catch (error) {
                    console.log(error.message)
                }
            })
    }
    return (
        <button onClick={submitSignIn} className="btn m-3">
            <FcGoogle className="text-2xl"></FcGoogle>
            Login
        </button>
    );
};

export default SocialLogin;