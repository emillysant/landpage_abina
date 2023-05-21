import React from 'react';
import {Link} from 'react-router-dom'

import './SiteHeader.css'
import { Layout, Menu} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logoImg from '../../assets/logo/logo_abinadab_branco_sem_fundo.png'
const { Header} = Layout;

function SiteHeader() {
  const menuItems = [
    { key: '1', label: 'Cliente', icon: <UserOutlined /> , route: '/clientes' },
  ];

  return (
    <Layout className="layout">
      <Header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div className="logo-container">
        <Link to="/">
          <img src={logoImg} alt="Logo da Empresa" height={'190px'} className="logo-img" />
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className="menu"
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.route}>{item.label}</Link>
            </Menu.Item>
          ))}

        </Menu>
      </Header>
    </Layout>
  );
}

export default SiteHeader;