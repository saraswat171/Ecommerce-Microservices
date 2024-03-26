import React, { useState } from 'react';
import './filter.css'
interface props { onFilterChange: (OrderStatus: string) => void; }
function OrderStatusFilter(props: props) {
    const [selectedOrderStatus, setSelectedOrderStatus] = useState('');

    const OrderStatuss = ['Pending', 'Delivered', 'Cancelled'];

    const handleOrderStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        console.log('selectedValue: ', selectedValue);
        setSelectedOrderStatus(selectedValue);
        props.onFilterChange(selectedValue);
    };

    return (
        <>

            <select className='select formss' value={selectedOrderStatus} onChange={(e) => handleOrderStatusChange(e)}  >
            <option  value="">Change Status</option>
                {OrderStatuss.map((OrderStatus) => (
                    <option key={OrderStatus} value={OrderStatus}>
                        {OrderStatus}
                    </option>
                ))}
            </select>
        </>
    );
};

export default OrderStatusFilter;

// function onFilterChange(selectedValue: string) {
//     throw new Error('Function not implemented.');
// }
