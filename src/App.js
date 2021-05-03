import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Button } from 'antd';
import { AppHeader } from './components/header/header';
import {Layout} from 'antd'
import { StateWisePage } from './components/state-wise';

function App() {
  const {Content, Footer} = Layout;
  return (
    <div className="App">
      <Layout className="layout">
        <AppHeader/>
        <Content style={{ padding: '0 50px', height: '80vh', background: "#364d79" }}>
            <StateWisePage />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    </div>
  );
}

export default App;
