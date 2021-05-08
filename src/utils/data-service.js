import { APP_ENV } from "./environment";

export const DataService = {
    getHTMLData: (url) => {
        return fetch(APP_ENV.dataURL, {
            headers: {
                'Target-URL': url
            }
        }).then(r => {
            return r.text();
        });
    }
}