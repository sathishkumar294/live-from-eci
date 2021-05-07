import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { AppHeader } from './components/header/header';
import { StateWisePage } from './components/state-wise';

function App() {
  const { Content, Footer } = Layout;
  return (
    <div className="App">
      <Layout className="layout">
        <AppHeader />
        <Content style={{ padding: '0 50px', height: '80vh', background: "#364d79" }}>
          <StateWisePage />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Sathishkumar Maruthamuthu</Footer>
      </Layout>
    </div>
  );
}

export default App;
