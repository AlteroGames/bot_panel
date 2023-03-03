import React from 'react';
import {Layout, Menu} from "antd";
import {BarChartOutlined} from '@ant-design/icons';


const {Header, Content, Sider} = Layout;

function App() {
  return (
    <Layout>
      <Layout>
        <Sider width={300}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100vh', borderRight: 0, backgroundColor: '#1D1D41'}}
                items={[
                    {
                        key: '1',
                        label: 'Статистика',
                        icon: <BarChartOutlined/>
                    }
                ]}
            />
        </Sider>
      </Layout>
    </Layout>
  );
}

export default App;
