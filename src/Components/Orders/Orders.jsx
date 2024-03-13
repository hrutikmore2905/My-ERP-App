import React, { useState } from 'react';
import './Orders.css';

const Orders = () => {
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Losy', orderDate: '2024-03-08', status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-07', status: 'Shipped' },
    { id: 3, customerName: 'Lizy Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 4, customerName: 'Fathima Zuber', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 5, customerName: 'Lizy Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 6, customerName: 'Alyza Moler', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 7, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 8, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 9, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 10, customerName: 'Fathima Zuber', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 11, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 12, customerName: 'Fathima Zuber', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 13, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 14, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 16, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 17, customerName: 'Fathima Zuber', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 18, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 19, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 20, customerName: 'Alyza Moler', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 21, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 23, customerName: 'Alyza Moler', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 24, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    { id: 25, customerName: 'Alice Johnson', orderDate: '2024-03-06', status: 'Delivered' },
    
  ]);

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  // Calculate indexes of the first and last record on the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentOrders = orders.slice(indexOfFirstRecord, indexOfLastRecord);

  // Function to update order status
  const updateStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const deleteOrder = orderId => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  // Function to handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="orders-container">
      <h1>Orders Management</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td className="orders-actions">
                <button onClick={() => updateStatus(order.id, 'Shipped')}>Update Status</button>
                <button onClick={() => deleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(orders.length / recordsPerPage) }).map((_, index) => (
          <button key={index + 1} className={currentPage === index + 1 ? 'active' : ''} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Orders;