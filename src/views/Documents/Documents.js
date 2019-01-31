import React, { Component } from 'react';
import {
    Badge,
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Button,
    Col,
    Input,
    Progress,
    Row,
    Table,
} from 'reactstrap';



class Documents extends Component {
    constructor(props) {
        super(props);

    }


    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {

        return (
            <div className="animated fadeIn">
                <div>
                    <h1>Tài liệu của bạn</h1>
                </div>
                <div>
                    <Card >
                        <Row className="p-4 mt-4">
                            <Col lg="2" md="4" xs="4"  >
                                <Button block color="primary">Primary</Button>

                            </Col>
                            <Col lg="4" md="8" xs="8">
                                <Input
                                    type="text"
                                    name="txtSearch"
                                    placeholder="Tìm kiếm tài liệu trong kho"
                                />
                            </Col>
                            <Col className="border border-dark" rowSpan="0">
                            </Col>
                        </Row>
                        <Row className="p-4 ">
                            <Col lg="2" md="4" xs="4" >
                                <Row className=" mt-3"> 
                                    <Col className="h5">
                                    <a  href="#">Toán <Badge color="primary" className="float-right sm">10</Badge></a>

                                    </Col>

                                </Row>
                                <Row className=" mt-3"> 
                                    <Col className="h5">
                                    <a  href="#">Lý <Badge color="primary" className="float-right sm">5</Badge></a>

                                    </Col>

                                </Row>





                            </Col>
                            <Col lg="4" md="8" xs="8" >
                                <div>

                                </div>


                            </Col>
                        </Row>

                    </Card>
                </div>



            </div>
        );
    }
}

export default Documents;
