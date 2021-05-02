import { Carousel } from 'antd';
export function CarouselView({children}) {

    return <Carousel autoplay>
        {children}
    </Carousel>
}