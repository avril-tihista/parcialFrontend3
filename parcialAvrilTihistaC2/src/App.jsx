import { useState } from 'react'
import Card from './Components/Card'
import appStyles from "./Styles/App.module.css"

function App() {
  const [show, setShow] = useState(false);

  const [error, setError] = useState(false);

  const [customer, setCustomer] = useState({
    anime: "",
    character: ""
});

const handleChange = (event) => {
    setCustomer ({...customer, [event.target.name] : event.target.value});
    setError(false);
}

const handleSubmit = (event) => {
    event.preventDefault();
    if(customer.anime.trim().length >= 3 && customer.character.trim().length >= 6){
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
}
  return (
    <>
     <h1>Anime</h1>
     <div>
        <form className={appStyles.formContainer} onSubmit={handleSubmit}>
            <label>Anime favorito:</label>
            <input name="anime" type="text" value={customer.anime} onChange={handleChange}/>
            <label>Personaje favorito:</label>
            <input name="character" type="text" value={customer.character} onChange={handleChange}/>
            <button className={appStyles.button}>Enviar</button>
        </form>
     </div>
     {show && <Card customer={customer}/>}
     {error && <h4 style={{color: "red", textAlign: "center"}}>Por favor chequea que la información sea correcta</h4>}
    </>
  )
}

export default App
