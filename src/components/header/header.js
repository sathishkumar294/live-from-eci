import { Layout, Menu } from 'antd';
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
    const { Header } = Layout;
    return <Header>
        <div style={logo} >Live from ECI</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
    </Header>
}