import { ECI_CONFIG } from '../../config/eci-config';
import { CarouselView } from "../containers/carousel";
import { StateDetails } from "../state";

const container = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
}

export function StateWisePage() {
    return <CarouselView>
        {ECI_CONFIG.statewise.states.map((state, i) =>
            <div style={container} key={state.code} >
                <StateDetails state={state}></StateDetails></div>)}
    </CarouselView>
}