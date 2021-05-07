import { Carousel } from 'antd';
import { ECI_CONFIG } from '../../config/eci-config';
import { CarouselView } from "../containers/carousel";
import { StateDetails } from "../state";
import './state-wise.css';

const container = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
}

export function StateWisePage() {
    return <Carousel autoplay dotPosition={'left'} dots={'dot-style'}>
        {ECI_CONFIG.statewise.states.map((state, i) =>
            <StateDetails key={i} state={state}></StateDetails>)}
    </Carousel>
}