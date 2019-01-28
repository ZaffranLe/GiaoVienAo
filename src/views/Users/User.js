import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Progress,
  Badge
} from "reactstrap";

import usersData from "./UsersData";

class User extends Component {
  render() {
    const user = usersData.find(
      user => user.id.toString() === this.props.match.params.id
    );

    const getBadge = result => {
      return result === "Tốt"
        ? "success"
        : result === "Đạt"
        ? "secondary"
        : result === "Khá"
        ? "primary"
        : result === "Chưa đạt"
        ? "danger"
        : "primary";
    };
    const userLink = `/users/${user.id}`;
    const userDetails = user
      ? Object.entries(user)
      : [
          [
            "id",
            <span>
              <i className="text-muted icon-ban" /> Not found
            </span>
          ]
        ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong>
                  <i className="icon-info pr-1" />
                  User id: {this.props.match.params.id}
                </strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    {userDetails.map(([key, value]) => {
                      return (
                        <tr key={key}>
                          <td>{`${key}:`}</td>
                          <td>
                            <strong>{value}</strong>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <Row>
                      <Col lg="8">
                        <div className="h5">Số tài liệu chia sẻ</div>
                      </Col>
                      <Col>
                        <div className="h1  text-right mb-2">
                          <i className="icon-graduation" />
                        </div>
                      </Col>
                    </Row>
                    <div
                      class={
                        user.progress < 50
                          ? "text-success"
                          : user.progress >= 75
                          ? "text-danger"
                          : "text-warning"
                      }
                    >
                      <h2>
                        <strong>246k</strong>
                      </h2>
                    </div>
                    <Row>
                      <Col lg="4">
                        <div
                          class={
                            user.progress < 50
                              ? "text-success"
                              : user.progress >= 75
                              ? "text-danger"
                              : "text-warning"
                          }
                        >
                          {user.progress}%
                        </div>
                      </Col>
                      <Col lg="8 ">
                        <Progress
                          className="progress-xs my-3 progress-green"
                          value={user.progress}
                          color={
                            user.progress < 50
                              ? "green"
                              : user.progress >= 75
                              ? "red"
                              : "yellow"
                          }
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={12}>
                <Card>
                  <CardHeader>
                    <h4>
                      Tài liệu chia sẻ <i className="cui-share" />
                    </h4>
                  </CardHeader>
                  <CardBody>
                    <Table responsive hover className="text-center">
                      <thead className="thead-light">
                        <tr>
                          <th> Tên tài liệu</th>
                          <th> Loại</th>
                          <th> Dung lượng (MB)</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to={userLink}>
                              Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin
                            </Link>
                          </td>
                          <td>Giáo trình triết học</td>
                          <td>0.5</td>
                          <td>
                            <Link to={userLink}>
                              <i className="fa fa-download fa-2x text-primary" />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Card>
                  <CardHeader>
                    <h4>Kết quả tự đánh giá</h4>
                  </CardHeader>
                  <CardBody>
                    <Table responsive hover className="text-center">
                      <thead className="thead-light">
                        <th>Kỳ đánh giá</th>
                        <th>Xếp loại</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to={userLink}>Kỳ 1 năm 2019</Link>
                          </td>
                          <td>
                            <Badge color={getBadge(user.result)} pill>
                              {user.result}
                            </Badge>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
