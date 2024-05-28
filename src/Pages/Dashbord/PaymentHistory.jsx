import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitel from "../../componets/SectionTitel";

const PaymentHistory = () => {
    const { user } = useAuth()
    const AxiosSecure = useAxiosSecure()
    const { data: payments = [] } = useQuery({
        queryKey: ["payments", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await AxiosSecure(`/payment/${user?.email}`)
            return res.data
        }
    })
    console.log(payments)
    return (
        <div>
            <SectionTitel subHeading={"---At a Glance!---"} heading={"PAYMENT HISTORY"}></SectionTitel>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Price</th>
                            <th>Transaction id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {payments.map((payment,index) => <tr key={payment._id} className="bg-base-200">
                            <th>{index+1}</th>
                            <td>{payment.price}</td>
                            <td>{payment.transactionID}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;