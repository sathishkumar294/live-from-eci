import { Row, Col } from "antd";
import { StateDetails } from "../state";
import ECI_CONFIG from '../../config/eci-config.json'
const RowStyle = {
    height: '100%',
    minHeight: '80vh',
}

const ColStyle = {
    minWidth: '40w'
}



export function StateWisePage() {
    return <Row style={RowStyle} gutter={[16, 16]} justify="space-between">
        {ECI_CONFIG.statewise.states.map((state, i) =>
            <Col key={i} style={ColStyle} span={6}><StateDetails key={state.code} state={state}></StateDetails></Col>)}

    </Row>
}