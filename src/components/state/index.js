import { Donut } from "../charts/donut";
import ECI_CONFIG from "../../config/eci-config.json";
import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import { DataService } from "../../utils/data-service";
import HtmlTableToJson from 'html-table-to-json'


export function StateDetails({ state }) {

    const [stateData, setStateData] = useState([]);
    useEffect(() =>
        DataService.getHTMLData(ECI_CONFIG.statewise.url + state.code).then(r => {
            // console.log(r);
            const regex = /<table ([\w\W]*)>([\w\W]*)<\/table>/gm;
            const matches = regex.exec(r);
            console.log(matches);
            const wholeTable = matches[0];
            const parsedData = HtmlTableToJson.parse(wholeTable);
            console.log(parsedData);
            const jsonData = parsedData.results[0].filter(r => Object.keys(r).length==4 && r.Party != 'Total');
            console.log(jsonData)
            setStateData(jsonData);
        }), []);
    return <Donut key={stateData.length} stateData={stateData} title={state.name} />
}