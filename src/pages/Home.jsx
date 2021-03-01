import React from "react";
import GiftListShort from "../components/gift/list-short";
import "./Home.css";

const Home = () => (
  <div className='container-fluid'>
    <div className='box p-2 mt-4 mb-4'>
      <h1>Leandro e Lorena</h1>
      <GiftListShort />
    </div>
  </div>
);

export default Home;
