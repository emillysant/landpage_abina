import React from 'react';
import instagram from '../../assets/icons/instagram-brands.svg'
import whatsapp from '../../assets/icons/whatsapp-black.png'

import logo from '../../assets/logo/logo_abinadab_branco_sem_fundo.png'
import {Link} from 'react-router-dom'
import { Layout } from 'antd';
import './SiteFooter.css';
const {Footer} = Layout;

function SiteFooter() {

  return (
    <Layout className="layout">
        <Footer  style={{backgroundColor: '#001529', zIndex: '1'}}>
          <div className='container-footer' >
            <div>
              <img src={logo} width={'200px'} alt="logo abnadab"/>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}} >
              <div className='contato-container'>
                <h4>Links</h4>
                <Link to="/">Home</Link>
      
                <Link to="/Clientes">Clientes</Link>
              </div>
              <div className='contato-container'>
                <h4>Contatos</h4>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <a target="_blank;" href="https://www.instagram.com/abinadabrepresenta">
                    <img className="icon-content" src={instagram} alt="instagram"/>
                  </a>
                  <a target="_blank;" rel="noreferrer" href="https://api.whatsapp.com/send?l=pt&phone=5581988720142">
                    <img className="icon-content-whatsapp" src={whatsapp} alt="whatsapp"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Footer>
    </Layout>
  );
}

export default SiteFooter;