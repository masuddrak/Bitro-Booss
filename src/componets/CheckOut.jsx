import {
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useCart from '../hooks/useCart';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
const {user}=useAuth()
    const [errorMessage, setErrorMessage] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const AxiosSecure = useAxiosSecure()
    const { carts } = useCart()
    const totalPrice = carts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    useEffect(() => {
        AxiosSecure.post("/create-payment-intent", { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [AxiosSecure, totalPrice]);

    // handel form
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrorMessage(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErrorMessage("")
        }
        // consfirempayment paymentIntent
        const { paymentIntent, error: errorConfirem } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "anonymus",
                    email: user?.email || "anonymus",
                },
            }
        });
        if (errorConfirem) {
            console.log(errorConfirem)
            // Handle error here
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            // Handle successful payment here
            console.log(paymentIntent)
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',

                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='px-4 py-1 bg-orange-300 mt-3' type="submit" disabled={!stripe || !clientSecret}>
                    Checkout
                </button>
                <p className='text-red-500'>{errorMessage}</p>
            </form>
        </div>
    );
};

export default CheckOut;