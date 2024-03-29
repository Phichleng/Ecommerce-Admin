import Layout from "@/components/Layout";
import {useEffect, useState} from "react";
import axios from "axios";
import SpinnerLogo from "@/components/SpinnerLogo";

export default function OrdersPage() {
    const [orders,setOrders] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/orders').then(response => {
            setOrders(response.data);
            setIsLoading(false);
        });
    }, []);
    return(
        <Layout>
            <h1>Orders</h1>
            <table className="basic">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Paid</th>
                        <th>Recipient</th>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                {isLoading && (
                    <tr>
                        <td colSpan={4}>
                            <div className="py-4">
                                <SpinnerLogo fullWith={true}/>
                            </div>
                        </td>
                    </tr>
                )}
                {orders.length > 0 && orders.map(order => (
                    // eslint-disable-next-line react/jsx-key
                    <tr>
                        <td>{(new Date(order.createdAt))
                            .toLocaleString()}
                        </td>
                        <td className={order.paid ? 'text-green-500' : 'text-red-600'} >
                            {order.paid ? 'YES' : 'NO'}
                        </td>
                        <td>
                            {order.name}<br/> {order.email}<br />
                            {order.city} {order.postalCode}<br/>
                            {order.province}<br />
                            {order.streetAddress}<br />
                            {order.phoneNumber}
                        </td>
                        <td>
                            {order.line_items.map(l => (
                                <>
                                    {l.price_data?.product_data?.name} x
                                    {l.quantity}<br />
                                </>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Layout>
    );
}