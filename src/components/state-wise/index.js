import { Row,Col } from "antd";
import { StateDetails } from "../state";

const RowStyle= {
    height: '100%',
    minHeight: '80vh',
}

const ColStyle = {
    minWidth: '40w'
}

export function StateWisePage() {
    return  <Row style={RowStyle} gutter={[16, 16]} justify="space-between">
        <Col style={ColStyle} span={6}><StateDetails stateCode='S22'></StateDetails></Col>
        <Col style={ColStyle} span={6}><StateDetails stateCode='S22'></StateDetails></Col>
    </Row>
}