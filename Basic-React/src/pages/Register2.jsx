import "../styles/auth.css";
import Input from "../components/Input";
import { useState } from "react";
import Ajay from "../components/Modal";
import { useForm } from "react-hook-form";

function Register() {


  const { register, handleSubmit, formState: { errors } } = useForm(); 
   
  
   const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setShowModal(true);
  }



 
  return (
    <div className="container">
       <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card">
        <h2 className="title">Register</h2>
          
        <Input {...register("name",{required:"Name is required"})} label="Name" placeholder="Enter name"  name="name" />
          <p>{errors.name?.message}</p>
        <Input {...register("email",{required:"Email is required"})} label="Email" type="email" placeholder="Enter email"  name="email" />
         <p>{errors.email?.message}</p>
        <Input {...register("password",{required:"Password is required"})}   label="Password" type="password" placeholder="Enter password"  name="password"/>
           <p>{errors.password?.message}</p>
       
       <input type="file" accept="image/*" {...register("image",{required:"Image is required"})} />

        <p>{errors.image?.message   }</p>
        <button className="btn">Register</button>
           
      </div>
       </form>
       
       {/* Yahan par hum Modal add kar rahe hain */}
       <Ajay isOpen={showModal}>
         <h3>Registration Successful!</h3>


      

       

         <button onClick={() => setShowModal(false)} className="btn" style={{marginTop: "10px"}}>Close</button>
       </Ajay>
  </div>
  );
}

export default Register;