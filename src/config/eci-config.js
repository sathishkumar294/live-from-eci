export const ECI_CONFIG =

{
    "statewise": {
        "url": (code) => `https://results.eci.gov.in/Result2021/partywiseresult-${code}.htm?st=${code}`,
        "states": [{
            "name": "Tamil Nadu",
            "code": "S22"
        }, {
            "name": "Assam",
            "code": "S03"
        }, {
            "name": "Kerala",
            "code": "S11"
        }, {
            name: 'West Bengal',
            code: 'S25'
        }, {
            name: 'Puthucherry',
            code: 'U07'
        }]
    }
}