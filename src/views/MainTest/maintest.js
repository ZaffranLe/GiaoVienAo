import React, { Component} from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Progress,
    Row,
    Table,
} from 'reactstrap';


class Maintest extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

        this.state = {
            dropdownOpen: false,
            radioSelected: 2,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    onRadioBtnClick(radioSelected) {
        this.setState({
            radioSelected: radioSelected,
        });
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="4">
                        <Card className=" bg-primary">
                            <CardBody>
                                <Row>
                                    <Col lg="8">
                                        <div className="h5">Số tài liệu chia sẻ</div>
                                    </Col>
                                    <Col>
                                        <div className="h1  text-right mb-2">
                                            <i className="icon-graduation"></i>
                                        </div>
                                    </Col>
                                </Row>
                                <div ><h2><strong>246k  </strong></h2></div>
                                <Row>
                                    <Col lg="4">
                                        <div >25%</div>
                                    </Col>
                                    <Col lg="8 ">
                                        <Progress className="progress-xs my-3 progress-white" color="white" value="25" />
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="4">
                        <Card className=" bg-success">
                            <CardBody>
                                <Row>
                                    <Col lg="8">
                                        <div className="h5">Số tệp tài liệu trong kho</div>
                                    </Col>
                                    <Col>
                                        <div className="h1  text-right mb-2">
                                            <i className="icon-folder"></i>
                                        </div>
                                    </Col>
                                </Row>
                                <div ><h2><strong>246k  </strong></h2></div>
                                <Row>
                                    <Col lg="4">
                                        <div >25%</div>
                                    </Col>
                                    <Col lg="8">
                                        <Progress className="progress-xs my-3 progress-white" color="white" value="25" />
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="4">
                        <Card className=" bg-warning">
                            <CardBody>
                                <Row>
                                    <Col lg="8">
                                        <div className="h5">Dung lượng còn lại</div>
                                    </Col>
                                    <Col>
                                        <div className="h1  text-right mb-2">
                                            <i className="icon-cloud-download"></i>
                                        </div>
                                    </Col>
                                </Row>
                                <div ><h2><strong>246k  </strong></h2></div>
                                <Row>
                                    <Col lg="4">
                                        <div >25%</div>
                                    </Col>
                                    <Col lg="8 ">
                                        <Progress className="progress-xs my-3 progress-white" color="white" value="25" />
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>

                </Row>
                <Row>
                    <Col xs="12" lg="8">
                        <Card>
                            <CardHeader>
                                <h4>Văn bản mới nhất</h4>
                            </CardHeader>
                            <CardBody>
                                <Table responsive className="text-center">
                                    <thead className="thead-light">
                                        <tr>
                                            <th> Location</th>
                                            <th> View</th>
                                            <th> Location</th>
                                            <th> Location</th>
                                            <th> Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>adobe.com</td>
                                            <td>200</td>
                                            <td>222</td>
                                            <td>40%</td>
                                            <td>$12</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h4>Tài liệu trong kho</h4>
                            </CardHeader>
                            <CardBody>
                                <Table responsive className="text-center">
                                    <thead className="thead-light">
                                        <tr>
                                            <th> Tên tài liệu</th>
                                            <th> Loại</th>
                                            <th> Dung lượng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>adobe.com</td>
                                            <td>
                                                <div className="h1 primary">
                                                    <i className="fa fa-file-word-o "></i>
                                                </div>
                                            </td>
                                            <td>222</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col xs="12" lg="4">

                        <Card>
                            <CardHeader>
                                <h4>Kết quả tự đánh giá</h4>
                            </CardHeader>
                            <CardBody>
                                <Table responsive className="text-center">

                                    <tbody>
                                        <tr >
                                            <td>adobe.com</td>
                                            <td>
                                                <div className="media-icon mr-4">
                                                    <i className="fa fa-music"></i>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>



            </div>
        );
    }
}

export default Maintest;
