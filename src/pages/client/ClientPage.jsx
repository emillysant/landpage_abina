import React from "react";
import SiteHeader from '../../components/header/SiteHeader';
import SiteFooter from "../../components/footer/SiteFooter";
import whatsAppImg  from '../../assets/icons/whatsapp.png';
import post01 from '../../assets/art/postabinadab01.png'

import './ClientPage.css'
import { Layout } from 'antd';
const { Content } = Layout; 

function ClientPage () {
    return(
        <div className="container">
            <SiteHeader className="Header" />
            <Content className="Main">
                    <img src={post01} className="img-left-side" alt="post01"/>
                <div className="main-content">
                    <div className="whatsapp-text"> 
                        <h3>Faça seu pedido, solicite sua assistência ou acompanhe sua entrega pelo nosso whatsapp </h3>
                    </div>
                    <div className="whatsapp-button">
                        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?l=pt&phone=5581988720142">
                            <img src={whatsAppImg} width={'50px'} alt="iconeWhatsapp"/>
                        </a>
                    </div>
                </div>
            </Content>
            <SiteFooter/>
        </div>
    );
}

export default ClientPage;