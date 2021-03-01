import React, { useEffect, useState } from "react";
import GiftService from "../../services/GiftService";

const GiftList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(await GiftService.listItem());
    };
    getData();
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='card'>
      <h2>List Items</h2>
      <table class='table table-bordered'>
        <thead>
          <th>Já ganhou?</th>
          <th>Item</th>
          <th>Grupo</th>
          <th>Presenteador</th>
          <th>Ações</th>
        </thead>
        <tbody>
          {Object.values(data).map(({ id, name, done, group, presenter }) => (
            <tr key={`item-${id}`}>
              <td>
                <input
                  type='checkbox'
                  name='done'
                  id='done'
                  defaultChecked={done}
                />
              </td>
              <td>{name}</td>
              <td>{group}</td>
              <td>{presenter}</td>
              <td>
                <a href={`/admin/gift/${id}/edit`}>Editar</a>{" "}
                <input type='button' value='Apagar' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GiftList;
