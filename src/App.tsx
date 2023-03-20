import React from 'react';
import {Layout, Menu} from "antd";
import {
  BarChartOutlined, 
  SettingOutlined,
  DollarCircleOutlined,
  TagOutlined,
} from '@ant-design/icons';
import "./styles/App.css";
import { FinancePage, MarketingPage, SettingsPage, StatsPage } from './pages';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Header } from 'antd/es/layout/layout';
import { CustomAvatar } from './components';

const {Content, Sider} = Layout;

const menuItems = [
  {
    key: '/stats',
    label: 'Статистика',
    icon: <BarChartOutlined/>
  },
  {
    key: '/settings',
    label: 'Настройки',
    icon: <SettingOutlined />,
    children: [
      {
        key: '/settings/main',
        label: 'Основное',
      },
      {
        key: '/settings/info',
        label: 'Информация'
      }
    ]
  },
  {
    key: '/finance',
    label: 'Финансы',
    icon: <DollarCircleOutlined />,
  },
  {
    key: '/marketing',
    label: 'Маркетинг',
    icon: <TagOutlined />
  }
]

const App = () => {
  const navigate = useNavigate();

  const handleMenuClick = (info: MenuInfo) => {
    navigate(info.key);
  };

  return (
    <Layout className='App'>
      <Layout>
        <Header className='header'>
            <CustomAvatar name='Admin'/>
        </Header>
      </Layout>
      <Layout>
        <Sider width={300}>
            <Menu
                onClick={handleMenuClick}
                mode="inline"
                defaultSelectedKeys={['/stats']}
                className='sidebar-menu'
                items={menuItems}
                theme="dark"
            />
        </Sider>
        <Content>
              <Routes>
                <Route path="/" element={<StatsPage/>}/>
                <Route path="/stats" element={<StatsPage/>}/>
                <Route path="/settings" element={<SettingsPage/>}/>
                <Route path="/finance" element={<FinancePage/>}/>
                <Route path='/marketing' element={<MarketingPage/>}/>
              </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
