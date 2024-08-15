import { useState } from "react";
import Card from "./Card";


export const Form = () => {
  const [customer, setCustomer] = useState({
    name: "",
    favoriteSong: "",
  });

  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isFormEditable, setIsFormEditable] = useState(true)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer((customer) => ({
      ...customer,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, favoriteSong } = customer;

    if (
      name.trim().length >= 3 && 
      !name.startsWith(' ') && 
      favoriteSong.length >= 6 
    ) {
      setError(false);
      setIsFormEditable(false)
      setShowCard(true)
    } else {
      setError(true);
      setShowCard(false)
    }
  };

  const reset = () => {
    setCustomer({
      name: "",
      favoriteSong: "",
    });
    setShowCard(false)
    setIsFormEditable(true)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Nombre: </label>
      <input 
        type="text" 
        name="name"
        value={customer.name}
        readOnly={!isFormEditable}
        onChange={handleChange}
      />
      <label>Canción favorita </label>
      <input 
        type="text" 
        name="favoriteSong"
        value={customer.favoriteSong}
        readOnly={!isFormEditable}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
    <button onClick={reset}>Reset</button>      

      {error && (
        <h4 style={{ color: "red" }}>Por favor, verifique su información</h4>
      )}

      {showCard && <Card customer={customer} />}
    </>
  )
}
