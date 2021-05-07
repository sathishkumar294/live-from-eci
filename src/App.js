import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import './App.css';
import { AppHeader } from './components/header/header';
import { MapView } from './components/map-view';
import { StateWisePage } from './components/state-wise';

function App() {
  const { Content, Footer } = Layout;
  const [page, setPage] = useState("1");

  return (
    <div className="App">
      <Layout className="layout">
        <AppHeader {...{ page, setPage }} />
        <Content key={page} style={{ padding: '48px' }}>
          {page == '1' ? <StateWisePage /> : page == '2' ? <MapView /> : <div />}
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Sathishkumar Maruthamuthu</Footer>
      </Layout>
    </div>
  );
}

export default App;
