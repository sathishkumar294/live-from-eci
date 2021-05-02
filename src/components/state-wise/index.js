import ECI_CONFIG from '../../config/eci-config.json';
import { CarouselView } from "../containers/carousel";
import { StateDetails } from "../state";

export function StateWisePage() {
    return <CarouselView>
        {ECI_CONFIG.statewise.states.map((state, i) =>
            <StateDetails key={state.code} state={state}></StateDetails>)}
    </CarouselView>
}