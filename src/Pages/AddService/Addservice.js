import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addservice.css';

const Addservice = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services',data)
        .then(res => {
            if(res.data.insertedId){
                alert("Insert Successfully")
                reset();
            }
        })
    };
    return (
        <div className="add-service">
            <h1>Please Add service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name" />
                <textarea {...register("description")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;