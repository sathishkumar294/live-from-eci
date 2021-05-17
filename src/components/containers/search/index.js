import { Button, Col, List, Row } from "antd";
import Search from "antd/lib/input/Search";
import { useEffect, useState } from "react";

const listItem = {
  cursor: "pointer",
};

/**
 *
 * @param {{
 * states: State[],
 * candidates: Candidate[],
 * constituencies: Constituency[] }} param0
 * @returns
 */
export function SearchContainer({ states, candidates, constituencies }) {
  const [result, setResults] = useState({
    states: [],
    constituencies: [],
    candidates: [],
  });

  const [noOfResultsToShow, setNoOfResultsToShow] = useState(3);

  const [query, setQuery] = useState("");

  useEffect(() => {
    setNoOfResultsToShow(5);
    if (query) {
      const searchFor = query.toLowerCase().trim();
      setResults({
        states: [
          ...states.filter((s) => s.state.toLowerCase().startsWith(searchFor)),
          ...states.filter(
            (s) =>
              !s.state.toLowerCase().startsWith(searchFor) &&
              s.state.toLowerCase().includes(searchFor)
          ),
        ],
        candidates: [
          ...candidates.filter((c) =>
            c.candidate.toLowerCase().startsWith(searchFor)
          ),
          ...candidates.filter(
            (c) =>
              !c.candidate.toLowerCase().startsWith(searchFor) &&
              c.candidate.toLowerCase().includes(searchFor)
          ),
        ],
        constituencies: [
          ...constituencies.filter((c) =>
            c.constituency.toLowerCase().startsWith(searchFor)
          ),
          ...constituencies.filter(
            (c) =>
              !c.constituency.toLowerCase().startsWith(searchFor) &&
              c.constituency.toLowerCase().includes(searchFor)
          ),
        ],
      });
    } else {
      setResults({
        states,
        candidates,
        constituencies,
      });
    }
  }, [query, states, constituencies, candidates]);

  /**
   * Get the description to show for a state
   * @param {State} state
   */
  const getStateDescription = (state) => {
    const noOfConstituencies = constituencies.filter(
      (c) => c.stateCode === state.code
    ).length;
    const noOfCandidates = candidates.filter(
      (c) => c.stateCode === state.code
    ).length;
    return `${noOfConstituencies} constituencies, ${noOfCandidates} candidates`;
  };

  /**
   *
   * @param {Constituency} constituency
   */
  const getConstituencyDescription = (constituency) => {
    const noOfCandidates = candidates.filter(
      (c) => c.constituencyCode === constituency.code
    ).length;
    const state = states.find((s) => s.code === constituency.stateCode);

    return `${noOfCandidates} candidates, ${state.state}`;
  };

  const goToStatePage = (state) => {
    // TODO:
    console.log("Go to state page");
  };

  /**
   * @param {Candidate} candidate
   */
  const getCandidateDescription = (candidate) => {
    const constituency = constituencies.find(
      (c) =>
        c.code === candidate.constituencyCode &&
        c.stateCode === candidate.stateCode
    );
    if (constituency) {
      return `${candidate.party} contesting from ${constituency.constituency}`;
    }
    console.warn("Unknown constituency:", { candidate });
    return `${candidate.party}`;
  };

  const onLoadMore = () => {
    setNoOfResultsToShow(noOfResultsToShow + 5);

    // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    // In real scene, you can using public method of react-virtualized:
    // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    window.dispatchEvent(new Event("resize"));
  };

  const loadMore = (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>Load More</Button>
    </div>
  );
  return (
    <>
      <Row justify="center">
        <Col xs={24} md={8}>
          <Search
            placeholder="input search text"
            onSearch={setQuery}
            enterButton
          />
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} md={8}>
          <List
            itemLayout={"horizontal"}
            dataSource={result.states.slice(0, noOfResultsToShow)}
            renderItem={(state) => (
              <List.Item onClick={() => goToStatePage(state)} style={listItem}>
                <List.Item.Meta
                  description={getStateDescription(state)}
                  title={state.state}
                ></List.Item.Meta>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col xs={24} md={8}>
          <List
            itemLayout={"horizontal"}
            dataSource={result.constituencies.slice(0, noOfResultsToShow)}
            renderItem={(constituency) => (
              <List.Item>
                <List.Item.Meta
                  description={getConstituencyDescription(constituency)}
                  title={constituency.constituency}
                ></List.Item.Meta>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col xs={24} md={8}>
          <List
            itemLayout={"horizontal"}
            dataSource={result.candidates.slice(0, noOfResultsToShow)}
            renderItem={(candidate) => (
              <List.Item>
                <List.Item.Meta
                  description={getCandidateDescription(candidate)}
                  title={candidate.candidate}
                ></List.Item.Meta>
              </List.Item>
            )}
          ></List>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={12} md={6}>
          {loadMore} 
        </Col>
      </Row>
    </>
  );
}
