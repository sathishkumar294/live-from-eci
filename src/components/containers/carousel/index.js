import { Carousel } from 'antd';
import './style.css';
const dots = {
    background: '#364d79',
}
export function CarouselView({ children }) {

    return <Carousel autoplay dots={'dots'} >
        {children}
    </Carousel>
}