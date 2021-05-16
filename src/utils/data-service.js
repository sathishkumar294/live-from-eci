import { APP_ENV } from "./environment";

export const DataService = {
  getHTMLData: (url) => {
    return fetch(APP_ENV.dataURL + "/", {
      headers: {
        "Target-URL": url,
      },
    }).then((r) => {
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
    return fetch(APP_ENV.dataURL + "/getCandidateData")
      .then((response) => response.json())
      .then((result) => {
        if (!result.success) {
          console.error(result.message);
          return { states: [], constituencies: [], candidates: [] };
        } else {
          return result.data;
        }
      });
  },
};
