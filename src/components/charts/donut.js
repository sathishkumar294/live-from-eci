import { Pie } from '@ant-design/charts';
import React from 'react';
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
        const chartData = stateData.map(rec => ({
            type: rec.party,
            value: parseInt(rec.value,10)
        }))
        console.log({ chartData });
        

        var config = {
            appendPadding: 10,
            data: chartData,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            innerRadius: 0.64,
            meta: {
                value: {
                    formatter: function formatter(v) {
                        return v;
                    },
                },
            },
            label: {
                type: 'inner',
                offset: '-50%',
                style: { textAlign: 'center' },
                autoRotate: false,
                content: '{value}',
            },
            interactions: [
                { type: 'element-selected' },
                { type: 'element-active' },
                { type: 'pie-statistic-active' },
            ],
        };
        return <Pie {...config} />;

    }
}
