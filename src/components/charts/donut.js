import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Parties from '../../config/parties.json';

const donutContianer = {
    width: '50vw',
    height: '40vh'
}

export class Donut extends React.Component {

    render() {
        const {stateData, title} = this.props;

        const parties = stateData.map(rec => rec.Party);
        const keyedData = stateData.map(rec => ({[rec.Party]: {...rec}})).reduce((res, obj) => ({...res, ...obj}), {});
        const datasets = ['Won', 'Leading', 'Total'].map(status => {
                return                {
                    label: status,
                    backgroundColor: parties.map(party => Parties.find(p => p.party==party).color),
                    hoverBackgroundColor: [
                        '#501800',
                        '#4B5000',
                        '#175000',
                        '#003350',
                        '#35014F'
                    ],
                    data: parties.map(party => keyedData[party][status])
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
                    text: 'Average Rainfall per month',
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
