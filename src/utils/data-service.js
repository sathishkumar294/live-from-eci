export const DataService = {
    getHTMLData: (url) => {
        return fetch('http://localhost:3001', {
            headers: {
                'Target-URL': url
            }
        }).then(r => {
            return r.text();
        });
    }
}