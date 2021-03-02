import React from "react";
import "./gift.css";
import PresenterForm from "./presenter-form";

const GiftTableShort = ({ data, group }) => (
  <>
    <h2>{group}</h2>
    <table className='table table-bordered table-striped table-hover'>
      <tbody>
        {Object.values(data).map(({ id, name, done, group, presenter }) => (
          <tr
            key={`item-${id}`}
            className={done ? "table-secondary text-muted" : ""}>
            <td>
              <div className='row'>
                <div className='col-lg-6 col-md-12'>{name}</div>
                <div className='col-lg-6 col-md-12'>
                  {done ? (
                    <span className='badge bg-success'>Já foi escolhido</span>
                  ) : (
                    <PresenterForm giftId={id} name={name} />
                  )}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default GiftTableShort;
