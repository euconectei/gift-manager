import React, { useState } from "react";
import GiftService from "../../services/GiftService";

const PresenterForm = ({ giftId, name }) => {
  const [presenter, setPresenter] = useState("");

  const saveHandler = async () => {
    if (!presenter.trim()) {
      window.alert("Digite seu nome para reservar este presente.");
      return false;
    }

    window.confirm(`Você confirma que deseja reservar o presente: ${name}`);
    const res = await GiftService.addPresenter(giftId, presenter);
    console.log({ res });
  };

  return (
    <form action='#' onSubmit={saveHandler}>
      <div className='input-group'>
        <input
          aria-describedby='button-save-presenter'
          className='form-control'
          type='text'
          name='presenter'
          id='presenter'
          placeholder='Seu nome para reservar'
          onChange={(ev) => setPresenter(ev.target.value)}
        />
        <input
          type='submit'
          value='Salvar'
          className='btn btn-outline-dark'
          id='button-save-presenter'
        />
      </div>
    </form>
  );
};

export default PresenterForm;
