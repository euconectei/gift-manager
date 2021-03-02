import React from "react";
import GiftListShort from "../components/gift/list-short";
import "./Home.css";
import logoAmericanas from "../assets/logos/americanas-logo.png";
import logoPontoFrio from "../assets/logos/pontofrio-logo.png";
import logoCamicado from "../assets/logos/camicado-logo.png";

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
      <hr />
      <h2>Listas de presentes online:</h2>
      <ul className='list-unstyled logos-sites p-4'>
        <li>
          <a
            href='http://americanas.com'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src={logoAmericanas}
              alt='americanas.com'
              className='img-fluid'
            />
          </a>
        </li>
        <li>
          <a
            href='http://americanas.com'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={logoCamicado} alt='Camicado' className='img-fluid' />
          </a>
        </li>
        <li>
          <a
            href='http://americanas.com'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={logoPontoFrio} alt='Ponto Frio' className='img-fluid' />
          </a>
        </li>
      </ul>
      <hr />
      <h2>Lista de presentes avulsos:</h2>
      <GiftListShort />
    </div>
  </div>
);

export default Home;
