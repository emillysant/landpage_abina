import React from 'react';
import SiteHeader from '../../components/header/SiteHeader';
import SiteFooter from '../../components/footer/SiteFooter';

import './MainPage.css';
import { Breadcrumb, Layout, theme } from 'antd';
import abnadabCorrendo from '../../assets/imgs/abinadabCorredor.jpeg';
import abnadab_fundoPreto from '../../assets/imgs/abnadab_fundoPreto.jpeg';
import notavel_logo from '../../assets/logo/notavel_logo.png';
import fiorello_logo from '../../assets/logo/fiorello_logo.jpg';
import vitoria_colchoes_logo from '../../assets/logo/vitoria_colchoes_logo.JPG'
import benicio_logo from '../../assets/logo/benicio_logo.JPG';
import '@fontsource/raleway'; // Importe a fonte Raleway


const { Content } = Layout; 


function MainPage() {
  const NotavelPDF = 'notavel2023.pdf';
  const FiorelloPDF = 'fiorello2023.pdf';
  const BenicioPDF = 'benicio2021.pdf';
  const VitoriaPDF = 'colchoes_victoria.pdf'

  const { token: { colorBgContainer }, } = theme.useToken();

  return (
    <div style={{ fontFamily: 'Raleway, sans-serif' }}>
        <SiteHeader />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
          </Breadcrumb>
          {/* APRESENTAÇÃO */}
          <section style={{ background: colorBgContainer, height: '70vh', padding: '0 50px' }}>
            <div className='main-content-page'>
              <div className='foto-apretentacao-container'>
                <img className='foto-apresentação' src={abnadab_fundoPreto} alt='foto apresentação'/>
              </div>
              <div className='text-apresentacao-container'>
                <div> 
                  <h1 style={{fontWeight: 'bolder'}}>Representante Comercial</h1>
                  <h3 style={{fontWeight: 'bolder'}}>Setor Moveleiro</h3>
                </div>
              </div>
            </div>
          </section>
          {/* QUEM SOU? */}
          <section style={{ background: colorBgContainer, height: '90vh' }}>
            <div className="quemSou-content">
              <div className='texto-quemSou'>
                <h1 className='titulo-quemSou'>Quem Sou ?</h1>
                <p>
                  Representante comercial há 36 anos, pai de cinco filhos e mestre no que faz,
                  Abinadab impacta sua clientela pela simplicidade e compromisso com a profissão 
                  que abraçou. Ele cresceu dentro do universo moveleiro, já que seu pai criou 
                  os filhos sendo um marceneiro de mão cheia. Abinadab começou a trabalhar aos 
                  16 anos de idade no ramo e seu desempenho já lhe rendeu incontáveis vezes prêmios 
                  de melhor represente da região NE e de Pernambuco. Isso se deve pela incrível 
                  capacidade de bater metas, buscando sempre o melhor para a fábrica e para seus 
                  clientes lojistas. Hoje ele está se reinventando, buscando canais de comunicação 
                  mais ágeis e práticos, condizentes com a realidade do mundo digital, mantendo,
                  é claro, a responsabilidade de sempre.
                </p>
              </div>
              <div className='img-quemSou'>
                  <img src={abnadabCorrendo} width={'400px'} alt='foto_abina'/>
              </div>
            </div>
          </section>
          {/* CATALOGOS */}
          <section  style={{ background: colorBgContainer, height: '90vh'}}>
            <div className='catalogo-container'>
              <div className='titulo-catalogo'>
                <h1 style={{fontWeight: 'bolder'}}>Catálogos dos Produtos</h1>
                <h3>Click em uma das empresas para fazer o download do catálogo atualizado</h3>
              </div>
              <div className="catalogo-content">
                <div className='catalogo-item-content'>
                  <a href={process.env.PUBLIC_URL + 'catalogos/' + NotavelPDF} download>
                    <img src={notavel_logo} width={'200px'} alt='logo da Notável'/>
                  </a>
                </div>
                <div className='catalogo-item-content'>
                  <a href={process.env.PUBLIC_URL + 'catalogos/' + FiorelloPDF} download>
                    <img src={fiorello_logo} width={'200px'} alt='logo da Notável'/>
                  </a>
                </div>
                <div className='catalogo-item-content'>
                  <a href={process.env.PUBLIC_URL + 'catalogos/' + BenicioPDF} download>
                    <img src={benicio_logo} width={'200px'} alt='logo da Notável'/>
                  </a>
                </div> 
                <div className='catalogo-item-content'>
                  <a href={process.env.PUBLIC_URL + 'catalogos/' + VitoriaPDF} download>
                    <img src={vitoria_colchoes_logo} width={'200px'} alt='logo da Notável'/>
                  </a>
                </div> 
              </div>
            </div>
          </section>
        </Content>
        <SiteFooter/>
    </div>
  );
}

export default MainPage;