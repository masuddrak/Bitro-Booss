import { Elements } from "@stripe/react-stripe-js";
import SectionTitel from "../../componets/SectionTitel";
import CheckOut from "../../componets/CheckOut";
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);


const Payment = () => {
    return (
        <section>
            <SectionTitel subHeading={"----Payment Create Now---"} heading={"Payment"}></SectionTitel>
            <Elements stripe={stripePromise} >
                <CheckOut></CheckOut>
            </Elements>
        </section>
    );
};

export default Payment;