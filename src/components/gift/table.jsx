import React from "react";

const GiftTable = ({ data, group }) => (
  <>
    <h2>{group}</h2>
    <table class='table table-bordered'>
      <thead>
        <th>Já ganhou?</th>
        <th>Item</th>
        <th>Grupo</th>
      </thead>
      <tbody>
        {console.log({ data })}
        {Object.values(data).map(({ id, name, done, group, presenter }) => (
          <tr key={`item-${id}`}>
            <td>
              <input type='checkbox' name='done' id='done' checked={done} />
            </td>
            <td>{name}</td>
            <td>{group}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default GiftTable;
