import { Layout, Menu, Breadcrumb } from 'antd';
import { StateWisePage } from '../state-wise';
const logo = {

    float: 'left',
    width: '120px',
    height: '31px',
    margin: '16px 24px 16px 0',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: '31px'
}
export function AppHeader() {
    const { Header, Content, Footer } = Layout;
    return <Layout className="layout">
        <Header>
            <div style={logo} >Live from ECI</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px', height: '80vh', background: "#364d79" }}>
            <StateWisePage />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
}