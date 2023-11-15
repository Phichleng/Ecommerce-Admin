import {useEffect, useState} from "react";
import axios from "axios";
import SpinnerLogo from "@/components/SpinnerLogo";
import {subHours} from "date-fns";
import React from "react";
import HomeStatsModal from "@/components/HomeStatsModal";

export default function HomeStats() {
    const [orders,setOrders] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/orders').then(res => {
            setOrders(res.data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <div className="my-4">
                <SpinnerLogo fullWith={true}/>
            </div>
        );
    }

    function ordersTotal(orders) {
        let sum = 0;
        orders.forEach(order => {
            const {line_items} = order;
            line_items.forEach(li => {
                const lineSum = li.quantity * li.price_data.unit_amount / 100;
                sum += lineSum;
            });
        });
        return new Intl.NumberFormat('sv-SE').format(sum);
    }

    const ordersToday = orders.filter(o => new Date(o.createdAt) > subHours(new Date, 24));
    const ordersWeek = orders.filter(o => new Date(o.createdAt) > subHours(new Date, 24*7));
    const ordersMonth = orders.filter(o => new Date(o.createdAt) > subHours(new Date, 24*30));




    
    return(
        <div>
            <h2 className="font-bold">Orders</h2>
            <div className="tiles-grid">
                <div className="tile1" >
                    <div className="modal" onClick={() => setShowModal(true)}>
                        <h3 className="tile-header">Today</h3>
                        <div className="tile-number">{ordersToday.length}</div>
                        <div className="tile-desc">{ordersToday.length} orders today</div>
                    </div>

                    {showModal ? (
                        <>
                          <div
                            className="justify-center items-center flex fixed inset-0 z-50"
                          >
                            <div onClick={() => setShowModal(false)} className="relative w-auto my-6 mx-auto max-w-sm">
                                <div className="bg-white p-20" >
                                    <h1>Hello</h1>
                                </div>

                              </div>
                            </div>
                
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                </div>


                <div className="tile2">
                    <h3 className="tile-header">This week</h3>
                    <div className="tile-number">{ordersWeek.length}</div>
                    <div className="tile-desc">{ordersWeek.length} orders this week</div>
                </div>
                <div className="tile3">
                    <h3 className="tile-header">This month</h3>
                    <div className="tile-number">{ordersMonth.length}</div>
                    <div className="tile-desc">{ordersMonth.length} orders this month</div>
                </div>
            </div>
            <h2 className="font-bold">Revenue</h2>
            <div className="tiles-grid">
                <div className="tile4">
                    <h3 className="tile-header">Today</h3>
                    <div className="tile-number">$ {ordersTotal(ordersToday)}</div>
                    <div className="tile-desc">{ordersToday.length} orders today</div>
                </div>
                <div className="tile5">
                    <h3 className="tile-header">This week</h3>
                    <div className="tile-number">$ {ordersTotal(ordersWeek)}</div>
                    <div className="tile-desc">{ordersWeek.length} orders this week</div>
                </div>
                <div className="tile6">
                    <h3 className="tile-header">This month</h3>
                    <div className="tile-number">$ {ordersTotal(ordersMonth)}</div>
                    <div className="tile-desc">{ordersMonth.length} orders this month</div>
                </div>
            </div>
        </div>
    );
}