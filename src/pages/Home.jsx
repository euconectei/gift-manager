import React from "react";
import GiftListShort from "../components/gift/list-short";
import "./Home.css";

const Home = () => (
  <div className='container'>
    <div className='box p-2 mt-4 mb-4'>
      <div className='text mt-4'>Com a benção de Deus e seus amados pais</div>
      <h1 className='mt-2 mb-2'>Leandro e Lorena</h1>
      <div className='text mt-2 mb-2'>
        Convidam para a celebração de sua união juntamente com seu chá de panela{" "}
        <br /> A ser realizado no dia:
      </div>
      <div className='info mt-2 mb-2'>
        13 de Março de 2021 | 12h <br />
        Espaço Tiapira
        <br />
        Rua Tiapira, 320 - Realengo, RJ
        <br />
        <a href='https://goo.gl/maps/gxXioZr8x99cediv5'>Como chegar</a>
      </div>
      <div className='convite mt-2 mb-2'>
        Venha celebrar conosco essa nova fase das nossas vidas!!!
      </div>
      <GiftListShort />
    </div>
  </div>
);

export default Home;
