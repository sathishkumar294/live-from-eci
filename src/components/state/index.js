import { Select } from 'antd';

import HtmlTableToJson from 'html-table-to-json';
import { useEffect, useState } from "react";
import { ECI_CONFIG } from "../../config/eci-config";
import { DataService } from "../../utils/data-service";
import { Donut } from "../charts/donut";

const stateStyles = {
    display: 'flex',
    width: '90vw'
}
const { Option } = Select;
export function StateDetails({ state }) {

    const [stateData, setStateData] = useState([]);
    const statuses = ['Won', 'Leading', "Total"];
    const [status, setStatus] = useState(statuses[0]);
    useEffect(() =>
        DataService.getHTMLData(ECI_CONFIG.statewise.url(state.code)).then(r => {
            // console.log(r);
            const regex = /<table ([\w\W]*)>([\w\W]*)<\/table>/gm;
            const matches = regex.exec(r);
            // console.log(matches);
            const wholeTable = matches[0];
            const parsedData = HtmlTableToJson.parse(wholeTable);
            // console.log(parsedData);
            const jsonData = parsedData.results[0].filter(r => Object.keys(r).length == 4 && r.Party != 'Total');
            const dataToShow = jsonData.map(rec => ({
                party: rec.Party,
                value: rec[status]
            }))
            console.log(dataToShow)
            setStateData(dataToShow);
        }), []);

    const handleChange = (value) => {
        setStatus(value);
    }

    return <div style={stateStyles}>

        <Select defaultValue={statuses[0]} style={{ width: 120 }} onChange={handleChange}>
            {statuses.map((stat, i) => <Option key={i} value={stat}>{stat}</Option>)}
        </Select>
        <Donut stateData={stateData} title={state.name} />
    </div>
}