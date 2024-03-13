import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./OrderCalendar.css";

const OrderCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [orders, setOrders] = useState([
        { id: 1, date: new Date("2024-03-11"), customer: 'Customer A', items: ['Item 1', 'Item 2'] },
        { id: 2, date: new Date("2024-03-12"), customer: 'Customer B', items: ['Item 3', 'Item 4'] },
        { id: 3, date: new Date("2024-03-09"), customer: 'Customer C', items: ['Item 5'] },
        { id: 3, date: new Date("2024-03-13"), customer: 'Customer D', items: ['Item 6'] },
        { id: 3, date: new Date("2024-03-07"), customer: 'Customer E', items: ['Item 7'] },
        { id: 3, date: new Date("2024-03-13"), customer: 'Customer F', items: ['Item 6'] },
        { id: 3, date: new Date("2024-03-12"), customer: 'Customer G', items: ['Item 5'] },
        { id: 3, date: new Date("2024-03-08"), customer: 'Customer H', items: ['Item 5'] },
    ]);

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const filteredOrders = selectedDate ? orders.filter(order => order.date.toDateString() === selectedDate.toDateString()) : [];

    return (
        <div className="order-calendar">
            <h1>Orders Calendar View</h1>
            <div className="container">
                <div className="calendar-container">
                    <Calendar
                        value={selectedDate}
                        onClickDay={Date_Click_Fun}
                        tileClassName={({ date }) =>
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : orders.some(
                                    (order) =>
                                        order.date.toDateString() ===
                                        date.toDateString()
                                )
                                ? "event-marked"
                                : ""
                        }
                    />
                </div>
                {filteredOrders.length > 0 && (
                    <div className="order-list">
                        <h2>Orders Due for {selectedDate.toDateString()}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.customer}</td>
                                        <td>{order.items.join(', ')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderCalendar;