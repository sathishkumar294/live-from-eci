import { message } from "antd";
import { APP_ENV } from "./environment";

export const DataService = {
  getHTMLData: (url) => {
    const loader = message.loading("Loading state results...");
    return fetch(APP_ENV.dataURL + "/", {
      headers: {
        "Target-URL": url,
      },
    }).then((r) => {
      loader();
      return r.text();
    });
  },

  /**
   * Returns the state, candidate and constituency data
   * @returns {{
   * states: State[],
   * constituencies:  Constituency[],
   * candidates: Candidate[ ̰]}}
   */
  getStatesConstituenciesAndCandidates: () => {
    const hider = message.loading("Loading ECI data...");
    return fetch(APP_ENV.dataURL + "/getCandidateData")
      .then((response) => response.json())
      .then((result) => {
        hider();
        if (!result.success) {
          const errorer = message.error(result.message);
          setTimeout(errorer, 4000);
          return { states: [], constituencies: [], candidates: [] };
        } else {
          const successor = message.success("Data loaded");
          setTimeout(successor, 3000);
          return result.data;
        }
      });
  },
};
