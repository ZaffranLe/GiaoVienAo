import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Label,
  Row,
  FormText,
  Input,
  Button,
} from 'reactstrap';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class UploadHocLieu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" className="p-5">
            <Card>
              <CardHeader>
                <strong>Upload Tài Liệu</strong>
              </CardHeader>
              <CardBody>

                <Row>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="name">Upload</Label>
                      <FilePond allowMultiple={true} />
                    </FormGroup>
                  </Col>
                  <Col xs="9">
                    <FormGroup>
                      <Label >Tên tài liệu</Label>
                      <Input placeholder="nhập tên tài liệu" />
                    </FormGroup>
                    <FormGroup>
                      <Label >Loại tài liệu</Label>
                      <Input placeholder="Loại tài liệu..." />
                    </FormGroup>
                    <FormGroup>
                      <Label >Thẻ Tìm Kiếm</Label>
                      <Input placeholder="Thẻ tìm kiếm....." />
                    </FormGroup>
                    <FormGroup>
                      <Label >Thẻ Tìm Kiếm</Label>
                      <Input placeholder="Thẻ tìm kiếm....." />
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="p-4">
                        <FormGroup check className="checkbox">
                          <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                          <Label check className="form-check-label" htmlFor="checkbox1">Công khai</Label>
                        </FormGroup>
                      </Col>
                      <Col md="5">
                        <FormGroup>
                          <FormText>Thành viên chia sẻ</FormText>
                          <Input placeholder="Thành viên chia sẻ..." />
                        </FormGroup>
                      </Col>
                      <Col md="5" className="p-4">
                        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Lưu tài liệu</Button>


                      </Col>
                    </FormGroup>
                  </Col>
                </Row>


              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default UploadHocLieu;
