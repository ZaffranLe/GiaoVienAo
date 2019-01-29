import React, { Component } from "react";
import {
  Row,
  Col,
  Table,
  Form,
  CustomInput,
  Card,
  CardHeader,
  CardBody,
  Button,
  Alert
} from "reactstrap";
import surveyQuestionsData from "./SurveyQuestionsData";
import groupsQuestionData from "./GroupsQuestionData";

function QuestionGroupHeader(props) {
  const group = props.group;
  return (
    <tr key={group.id.toString()}>
      <td colspan="5" className="text-left bg-light">
        <strong>
          <h4>
            Tiêu chuẩn {group.id}. {group.name}
          </h4>
        </strong>
      </td>
    </tr>
  );
}

function QuestionRow(props) {
  const question = props.question;
  return (
    <tr key={question.id.toString()}>
      <td className="text-left">
        <Card>
          <CardHeader>
            <strong>
              Tiêu chí {question.id}: {question.name}
            </strong>
          </CardHeader>
          <CardBody>
            - <strong>Mức Đạt:</strong> {question.pass} <br />-{" "}
            <strong>Mức Khá:</strong> {question.good} <br />-{" "}
            <strong>Mức Tốt:</strong> {question.veryGood}
          </CardBody>
        </Card>
      </td>
      <td className="align-middle">
        <CustomInput
          type="radio"
          id={question.id + "CD"}
          name={question.id}
          value="1"
          checked
        />
      </td>
      <td className="align-middle">
        <CustomInput
          type="radio"
          id={question.id + "D"}
          name={question.id}
          value="2"
        />
      </td>
      <td className="align-middle">
        <CustomInput
          type="radio"
          id={question.id + "K"}
          name={question.id}
          value="3"
        />
      </td>
      <td className="align-middle">
        <CustomInput
          type="radio"
          id={question.id + "T"}
          name={question.id}
          value="4"
        />
      </td>
    </tr>
  );
}

const getAlertColor = result => {
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

class Survey extends Component {

  render() {
    const groupQuestionList = groupsQuestionData;
    const questionList = surveyQuestionsData;
    return (
      <div className="animated fadeIn">
        <Form>
          <Row>
            <Col lg={12}>
              <Table bordered responsive className="bg-white text-center">
                <thead>
                  <th className="text-left align-middle">
                    Mô tả tiêu chí đánh giá
                  </th>
                  <th className="align-middle">Chưa đạt</th>
                  <th className="align-middle">Đạt</th>
                  <th className="align-middle">Khá</th>
                  <th className="align-middle">Tốt</th>
                </thead>
                <tbody>
                  {groupQuestionList.map((group, index) => [
                    <QuestionGroupHeader key={index} group={group} />,
                    questionList.map((question, index2) =>
                      question.group === group.id ? (
                        <QuestionRow key={index2} question={question} />
                      ) : null
                    )
                  ])}
                  <tr>
                    <td className="align-middle">
                      <Alert color={getAlertColor("Chưa đạt")}>
                        Xếp loại hiện tại: <strong>Chưa đạt</strong>
                      </Alert>
                    </td>
                    <td colspan="4" className="align-middle">
                      <Button className="btn-pill" color="primary">
                        Lưu bản đánh giá
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Survey;
