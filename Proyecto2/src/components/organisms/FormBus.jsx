import { Link } from "react-router-dom";
import Image from "../atoms/Image";
import Label from "../atoms/Label";
import "../../assets/styles/FormBus.css"; 
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormBus = () => {
  const navigate = useNavigate();
  const Form = useRef();
  const endPoint = " http://34.225.239.102/api/autobus/register";
 
  const clickHandler = (e) => {
    e.preventDefault();
    const newForm = new FormData(Form.current);
    if(newForm.get("clave") === "" || newForm.get("placa") === "" || newForm.get("numasientos") === "" || newForm.get("fecha") === "" || newForm.get("tipo") === ""|| newForm.get("nombre") === ""){//el simbolo de pesos despues se nombra la variable
        alert("Uno de los campos está vacios");
     }else{
        
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clave: newForm.get("clave"),
        placa: newForm.get("placa"),
        numasientos: newForm.get("number"),
        fecha: newForm.get("fecha"),
        tipo: newForm.get("tipo"),
        nombre: newForm.get("nombre"),
        licencia: parseInt(10000 + Math.random() * 90000),
      }),
    };

    fetch(endPoint, options)
      .then((response) => response.json())
      .then((data) => {
       
        if(data.status === true){
            navigate("/");
          }
      });
    }
  };
  return (
    <div className="container-2">
       <Image />
      <form ref={Form}>
        <Label msj="Bus Key"></Label>
        <input type="text" className="input" name={"clave"}/>

        <Label msj="Bus Plate"/>
        <input type="text" className="input" name={"placa"}/>

        <Label msj="Number of seats"></Label>
        <input type="text" className="input" name={"number"}/>

        <Label msj={"Discharge Date"} />
        <input type="date" name="fecha" />
        <Label msj="Type"/>
        <select className="input"  name="tipo">
          <option value="turismo">Tourism</option>
          <option value="lujo" >Luxe</option>
        </select>

        <Label msj="Driver's Name" />
        <input type="text" className="input" name={"nombre"}/>

        {/*<button onClick={clickHandler} >Registtt</button>*/}

        {/*<Button onClick={clickHandler} msj={"Register"} />*/}

        <button className="button" onClick={clickHandler} >Register</button>
    
      </form>
      <Link to="/">Salir</Link>
    </div>
          
  );
}

export default FormBus;