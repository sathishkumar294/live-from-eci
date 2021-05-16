import { Layout } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import "./App.css";
import { SearchContainer } from "./components/containers/search";
import { AppHeader } from "./components/header/header";
import { MapView } from "./components/map-view";
import { StateWisePage } from "./components/state-wise";
import { DataService } from "./utils/data-service";

function App() {
  const { Content, Footer, Sider } = Layout;
  const [page, setPage] = useState("1");

  /**
   * @type Candidate[]
   */
  const [candidates, setCandidates] = useState([]);

  /**
   * @type Constituency[]
   */
  const [constituencies, setConstituencies] = useState([]);

  /**
   * @type State[]
   */
  const [states, setStates] = useState([]);

  useEffect(() => {
    DataService.getStatesConstituenciesAndCandidates().then(
      ({ states, constituencies, candidates }) => {
        setStates(states);
        setCandidates(candidates);
        setConstituencies(constituencies);
      }
    );
  }, []);

  return (
    <div className="App">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <AppHeader {...{ page, setPage }} />
        </Sider>
         
        <Layout className="layout">
          <Content key={page} style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {page === "1" ? (
                <StateWisePage {...{ states }} />
              ) : page === "2" ? (
                <MapView />
              ) : page === "4" ? (
                <SearchContainer {...{ states, candidates, constituencies }} />
              ) : (
                <div />
              )}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2021 Sathishkumar Maruthamuthu
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
