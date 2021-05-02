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

        const parties = stateData.map(rec => rec.Party);
        console.log(parties);
        const keyedData = stateData.map(rec => ({ [rec.Party]: { ...rec } })).reduce((res, obj) => ({ ...res, ...obj }), {});
        const colorPoints = generateLegendColors(parties.length)
        const datasets = ['Won', 'Leading', 'Total'].map(status => {
            return {
                label: status,
                backgroundColor: colorPoints,
                data: parties.map(party => keyedData[party][status]),
                hoverOffset: 4
            }
        });

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
