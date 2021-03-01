import React from "react";
import "./gift.css";

const GiftTableShort = ({ data, group }) => (
  <>
    <h2>{group}</h2>
    <table class='table table-bordered table-striped table-hover'>
      <tbody>
        {console.log({ data })}
        {Object.values(data).map(({ id, name, done, group, presenter }) => (
          <tr
            key={`item-${id}`}
            className={done ? "table-secondary text-muted" : ""}>
            <td>
              {name}{" "}
              {done && <span class='badge bg-success'>Já foi escolhido</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default GiftTableShort;
