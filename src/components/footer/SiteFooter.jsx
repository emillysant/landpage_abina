import React from 'react';
import instagram from '../../assets/icons/instagram-brands.svg'
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
            <div  className='contato-container'>
              <h4>Links</h4>
              <Link to="/">Home</Link>
    
              <Link to="/Clientes">Clientes</Link>
            </div>
            <div className='contato-container'>
              <h4>Contatos</h4>
              <a target="_blank;" href="https://www.instagram.com/abinadabrepresenta">
                <img className="icon-content" src={instagram} alt="instagram"/>
              </a>
            </div>
          </div>
        </Footer>
    </Layout>
  );
}

export default SiteFooter;