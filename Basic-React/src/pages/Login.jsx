import "../styles/auth.css";
import Input from "../components/Input";

function Login() {

  console.log(1111);
  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>

        <Input label="Email" type="email" placeholder="Enter email" />
        <Input label="Password" type="password" placeholder="Enter password" />

        <button className="btn">Login</button>
      </div>
    </div>
  );
}

export default Login;