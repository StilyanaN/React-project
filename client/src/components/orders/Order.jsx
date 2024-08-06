import { useEffect, useState } from 'react';
import * as orderService from '../../services/orderService';
import Loader from '../loader/Loader';
import { useLoading } from '../../hooks/useLoading';
import './Order.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, executeWithLoading] = useLoading(); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userOrders = await orderService.getOrdersByUserId();
        setOrders(userOrders);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    executeWithLoading(fetchOrders); 
  }, [executeWithLoading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="order-history">
      <h2 className='order-h'>Order History</h2>
      {orders.length === 0 ? (
        <p className='no-found'>No orders found.</p>
      ) : (
        <ul>
          {Array.isArray(orders) && orders.map(order => (
            <li key={order._id} className="order-item">
              <div className="order-id">№ {order._id}</div>
              <div className="order-date">{new Date(order._createdOn).toLocaleString()}</div>
              <div className="order-total">Total: ${order.totalPrice.toFixed(2)}</div> 
              <div className="order-details">
                {Array.isArray(order.items) && order.items.map((item, index) => ( 
                  <div key={index} className="items">
                    <img src={item.imageUrl} alt={item.name} />
                    <div>{item.name} x {item.quantity}</div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
