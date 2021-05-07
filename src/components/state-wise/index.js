import { Carousel } from 'antd';
import { ECI_CONFIG } from '../../config/eci-config';
import { StateDetails } from "../state";
import './state-wise.css';

export function StateWisePage() {
    return <Carousel autoplay dotPosition={'left'} dots={'dot-style'}>
        {ECI_CONFIG.statewise.states.map((state, i) =>
            <StateDetails key={i} state={state}></StateDetails>)}
    </Carousel>
}