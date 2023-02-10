import { Link } from "react-router-dom";
import Image from "../atoms/Image";
import "../../assets/styles/FormRegister.css";
import Label from "../atoms/Label";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();
  const Form = useRef();
  const endPoint = 'http://34.225.239.102/api/registrar/usuario'



  const clickHandler = (e) => {
    e.preventDefault();
    const newForm = new FormData(Form.current);

    if(newForm.get("nombre") === "" || newForm.get("usuario") === "" || newForm.get("correo") === "" || newForm.get("contrasenia") === ""){
        alert("campos vacios");
     }else{
        
    const options = {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        nombre: newForm.get("nombre"),
        usuario: newForm.get("usuario"),
        correo: newForm.get("correo"),
        contrasenia: newForm.get("contrasenia"),
      }),
    };
    fetch(endPoint, options)

      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
        if(data.status === true){
            navigate("/");
          }else{
            alert("No se pudo agregar")
          }
      });
    }
  };
  return ( 
    <div className="container-3">
      <Image />
      <form ref={Form}>
        <Label msj="Name" />
        <input name = {"nombre"} type="text" className="input"/>

        <Label msj="Email" />
        <input name = {"usuario"} type="text" className="input"/>

        <Label msj="Username" />
        <input name = {"correo"} type="text" className="input"/>

        <Label msj="Password" />
        <input name = {"contrasenia"} type="password" className="input"/>
        
        <button className="button" onClick={clickHandler} >Register</button>
      </form>
      <Link to="/">Salir</Link>
    </div>


  );
}

export default FormRegister;
