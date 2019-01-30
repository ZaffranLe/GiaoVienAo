import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,

} from 'reactstrap';
const vbLink = `/chiTietVanBan`;

class TraCuuVanBan extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">


            <div>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row className="p-5" >
                    <Col md="2" className="text-right">
                      <h4 >Từ khóa </h4>
                    </Col>
                    <Col md="8" className="text-center">
                      <InputGroup>
                        <Input type="text" id="input1-group2" name="input1-group2" placeholder="Từ khóa ...." />

                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary" disabled><i className="fa fa-search"></i> Search</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Form>
                <FormGroup row>
                  <Col md="2" className="text-right">
                    <h4 htmlFor="select">Loại</h4>
                  </Col>
                  <Col xs="12" md="7">
                    <Input type="select" name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </Input>
                  </Col>
                  <Col md="3" className="text-left">
                    <Button type="button" color="primary" >Tìm kiếm</Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
            <div className= "p-5">
              <Card>
                <CardHeader>
                  <h3><i className="fa fa-align-justify"></i> Kết quả tìm kiếm</h3>
              </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>

                      <tr>
                        <th>#</th>
                        <th>ITEM</th>
                        <th>DESCRIPTION</th>
                        <th>QUANTITY</th>
                        <th>CATEGORY</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>1</td>
                        <td>
                          <Link to={vbLink}>Luật</Link>
                          </td>
                        <td>Thông báo abc</td>
                        <td>123</td>
                        <td>
                          <Badge color="success">Active</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                        <Link to={vbLink}>Thông tư</Link>
                        </td>
                        <td>Thông tư số abc</td>
                        <td>22</td>
                        <td>
                          <Badge color="success">Active</Badge>
                        </td>
                      </tr><tr>
                        <td>3</td>
                        <td>
                        <Link to={vbLink}>Thông báo</Link>
                        </td>
                        <td>Thông báo ngày xyz</td>
                        <td>12</td>
                        <td>
                          <Badge color="success">Active</Badge>
                        </td>
                      </tr><tr>
                        <td>4</td>
                        <td>
                        <Link to={vbLink}>Báo cáo</Link>
                        </td>
                        <td>Báo cáo quý 1 2 3</td>
                        <td>10</td>
                        <td>
                          <Badge color="success">Active</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink previous tag="button"></PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next tag="button"></PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}


export default TraCuuVanBan;
