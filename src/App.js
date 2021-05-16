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
  const { Content, Footer } = Layout;
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
      <Layout className="layout">
        <AppHeader {...{ page, setPage }} />
        <Content key={page} style={{ padding: "48px" }}>
          {page === "1" ? (
            <StateWisePage {...{ states }} />
          ) : page === "2" ? (
            <MapView />
          ) : page === "4" ? (
            <SearchContainer {...{ states, candidates, constituencies }} />
          ) : (
            <div />
          )}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2021 Sathishkumar Maruthamuthu
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
