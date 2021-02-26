import React, { useState } from "react";
import GiftService from "../../services/GiftService";

const GiftCreate = () => {
  const [item, setItem] = useState(null);

  const SaveHandler = async () => {
    GiftService.addItem(item)
      .then((res) => console.log({ res }))
      .catch((err) => console.log({ err }));
  };

  return (
    <div className='card'>
      <h2>Add Item</h2>
      <form action='#' method='post'>
        <label htmlFor='item'>Item</label>
        <input
          type='text'
          id='item'
          name='item'
          onChange={(ev) => {
            setItem(ev.target.value);
          }}
        />
        <input type='button' value='Salvar' onClick={SaveHandler} />
      </form>
    </div>
  );
};

export default GiftCreate;
