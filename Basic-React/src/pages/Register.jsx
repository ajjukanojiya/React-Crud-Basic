import "../styles/auth.css";
import Input from "../components/Input";
import { useState } from "react";
import Ajay from "../components/Modal";

function Register() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''  

  });

  const [image, setImage] = useState(null);
  
   const [errors, setErrors] = useState({});
  
   const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {     
   
    const { name, value } = e.target;
        console.log(name, value);
   setFormData(prevData => ({     
      ...prevData,                   
      [name]: value
    }));
  
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const valiateForm = (formdata,imageFile) => {
   
    let error={};

    if(!formdata.name){
      error.name = "Name is required";
    }
    if(!formdata.email){
      error.email = "Email is required";
    }
    if(!formdata.password){
      error.password = "Password is required";
    } 
    if (!imageFile) {
      error.image = "Image is required";

      if (imageFile) {
  if (!imageFile.type.startsWith("image/")) {
    error.image = "Only image files allowed";
  }

  if (imageFile.size > 2 * 1024 * 1024) {
    error.image = "Image size must be less than 2MB";
  }
}
}

    return error;
  }

  const handleSubmit = (e) => {
       e.preventDefault();
    const errors = valiateForm(formData, image);   
    if (Object.keys(errors).length > 0) {         //object built in method hain javascript ka, ye check karta hain ki errors object ke andar koi key hain ya nahi, agar hain to iska matlab hain ki form me kuch error hain  
      setErrors(errors);
      e.preventDefault();
      return;
    }

    // alert("form submit ho gya"); // Ab iski zaroorat nahi hai, hum modal dikhayenge
    
     setShowModal(true);
    
   
    console.log(formData);
  }
 
  return (
    <div className="container">
       <form onSubmit={handleSubmit}>
      <div className="card">
        <h2 className="title">Register</h2>
          
        <Input label="Name" placeholder="Enter name" onChange={handleChange} value={formData.name} name="name" />
           <p>{errors.name}</p>
        <Input label="Email" type="email" placeholder="Enter email" onChange={handleChange} value={formData.email} name="email" />
           <p>{errors.email}</p>
        <Input label="Password" type="password" placeholder="Enter password" onChange={handleChange} value={formData.password} name="password"/>
       <p>{errors.password}</p>
       
       <input type="file" accept="image/*" onChange={handleImage} />

        <p>{errors.image}</p>
        <button className="btn">Register</button>
           
      </div>
       </form>
       
       {/* Yahan par hum Modal add kar rahe hain */}
       <Ajay isOpen={showModal}>
         <h3>Registration Successful!</h3>


        {image && (     // && ka use karne par  sirf ture par he show hota hian ise hum conditional rendering kehte hain, iska matlab hain ki agar image state me koi file hain to hi ye block execute hoga, aur image ka preview dikhayega 
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            width="100"
          />
        )}

       

         <button onClick={() => setShowModal(false)} className="btn" style={{marginTop: "10px"}}>Close</button>
       </Ajay>
  </div>
  );
}

export default Register;