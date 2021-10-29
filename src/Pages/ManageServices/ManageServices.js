import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/services/')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])


    const handelDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert('SuccessFully Deleted');
                const remaining= services.filter(service =>service._id !== id);
                setServices(remaining);
            }
        })
    }

    return (
        <div>
            <h2>Manage Services</h2><br />
            {
            services.map(service => <div key={service._id}>
                <h3>Name: {service.name}</h3>
                <h3>Price: {service.price}</h3>
                <button onClick={() => handelDelete(service._id)}>Delete</button>
            </div>)
            }
        </div>
    );
};

export default ManageServices;