import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { generateLegendColors } from '../../utils/color-generator';
const donutContianer = {
    width: '60vw',
    height: '70vh',
    maxWidth: '560px',
    maxHeight: '430px'
}

export class Donut extends React.Component {

    render() {
        const { stateData, title } = this.props;

        const parties = stateData.map(rec => rec.party);
        console.log({parties});
        const keyedData = stateData.map(rec => ({ [rec.party]: rec.value })).reduce((res, obj) => ({ ...res, ...obj }), {});
        const colorPoints = generateLegendColors(parties.length)
        const datasets = [{
            label: 'TODO',
            backgroundColor: colorPoints,
            data: parties.map(party => keyedData[party]),
            hoverOffset: 4
        }]

        return <div style={donutContianer}>
            <Doughnut
                data={{
                    labels: parties,
                    datasets
                }}
                options={{
                    title: {
                        display: true,
                        text: title,
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            /></div>
    }
}
