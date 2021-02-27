import React, { useState } from "react";
import GiftService from "../../services/GiftService";

const GiftCreate = () => {
  const [done, setDone] = useState(false);
  const [group, setGroup] = useState(null);
  const [item, setItem] = useState(null);
  const [presenter, setPresenter] = useState(null);

  const SaveHandler = async () => {
    const res = await GiftService.addItem(item, done, group, presenter);
    console.log({ res });
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
        <label htmlFor='group'>Grupo</label>
        <input
          type='text'
          id='group'
          name='group'
          onChange={(ev) => {
            setGroup(ev.target.value);
          }}
        />
        <input
          type='checkbox'
          name='done'
          id='done'
          onChange={(ev) => {
            console.log({ ev });
            setDone(ev.target.checked);
          }}
        />
        <label htmlFor='done'>Já ganhou</label>
        <label htmlFor='presenter'>Presenteador</label>
        <input
          type='text'
          id='presenter'
          name='presenter'
          onChange={(ev) => {
            setPresenter(ev.target.value);
          }}
        />
        <input type='button' value='Salvar' onClick={SaveHandler} />
      </form>
    </div>
  );
};

export default GiftCreate;
