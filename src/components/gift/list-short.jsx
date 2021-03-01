import React, { useEffect, useState } from "react";
import GiftService from "../../services/GiftService";
import GiftTableShort from "./table-short";

const GiftListShort = () => {
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

  console.log({ data });

  return (
    <>
      {data.map(({ group, items }) => (
        <GiftTableShort data={items} group={group} />
      ))}
    </>
  );
};

export default GiftListShort;
