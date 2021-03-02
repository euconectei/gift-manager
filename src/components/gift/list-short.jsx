import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import GiftService from "../../services/GiftService";
import GiftTableShort from "./table-short";

const GiftListShort = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(await GiftService.listItemGrouped());
    };

    db.on("child_changed", async (snapshot) => {
      console.log("mudou");
      setData(await GiftService.listItemGrouped());
    });
    getData();
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {data.map(({ group, items }) => (
        <GiftTableShort
          data={items}
          group={group}
          key={`gift-table-${group}`}
        />
      ))}
    </>
  );
};

export default GiftListShort;
