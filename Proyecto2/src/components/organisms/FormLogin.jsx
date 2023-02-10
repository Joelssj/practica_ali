import { Link } from "react-router-dom"; 
import Label from "../atoms/Label";
import Image from "../atoms/Image";
import "../../assets/styles/FormLogin.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const Form = useRef();
  const endPoint = "http://34.225.239.102/api/iniciar";

  const clickHandler = (e) => {
    e.preventDefault();
    const newForm = new FormData(Form.current);
    if(newForm.get("usuario") === "" || newForm.get("contrasenia") === ""){
      alert("Revise sus campos");
   }else{
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: newForm.get("usuario"),
        contrasenia: newForm.get("contrasenia"),
      }),
    };

    fetch(endPoint, options)
      .then((response) => response.json())

      .then((data) => {
        if(data.status === true){
          alert("Usuario correcto, bienvenido")
          navigate("/busRegister");
        }else{
          alert("Datos incorrectos")
        }
      });
    }
  };

  return (
    <div className="container">
          <Image />
          <form ref={Form}>
            <Label msj={"Username"} />
            <input type="text" name ="usuario" className="input" />

            <Label msj={"Password"} />
            <input type="password" name ="contrasenia" className="input"/>

           {/* <button onClick={clickHandler} >Login</button>*/}
           <button className="button" onClick={clickHandler} >Login</button>
              
          
          </form>
          <h4>You do not have an account?</h4>
          <Link to="/Register">Create Account</Link>
    </div>
  );
}

export default FormLogin;