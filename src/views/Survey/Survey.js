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
            Tiêu chuẩn {group.id + 1}. {group.name}
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
              Tiêu chí {question.id + 1}: {question.name}
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
          onChange={props.onChange}
        />
      </td>
      <td className="align-middle">
        <CustomInput
          type="radio"
          id={question.id + "D"}
          name={question.id}
          value="2"
          onChange={props.onChange}
        />
      </td>
      <td className="align-middle">
        <CustomInput
          type="radio"
          id={question.id + "K"}
          name={question.id}
          value="3"
          onChange={props.onChange}
        />
      </td>
      <td className="align-middle">
        <CustomInput
          type="radio"
          id={question.id + "T"}
          name={question.id}
          value="4"
          onChange={props.onChange}
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
  constructor(){
    super();

    this.state = {
      questionResult: Array(15).fill(1),
      result: ""
    }
  }

  handleChange(e) {
    const resultList = this.state.questionResult.slice();
    resultList[e.target.name] = e.target.value;
    const result = this.calculateResult(resultList);
    this.setState({
      questionResult: resultList,
      result: result
    });
  }

  calculateResult(resultList){
    var i;
    var dat = 0;
    var kha = 0;
    var tot = 0;
    for (i = 0; i < resultList.length; i++){
      // eslint-disable-next-line
      if (resultList[i] == 1) return "Chưa đạt";
      // eslint-disable-next-line
      resultList[i] == 3 ? kha++ : resultList[i] == 4 ? tot++ : dat++;
    }

    for (i = 2; i < 7; i++) {
      // eslint-disable-next-line
      if (resultList[i] == 2) return "Đạt";
    }

    if (dat >= 6) return "Đạt";


    if (tot >= 10) {
      // eslint-disable-next-line
      for (i = 2; i < 7; i++) {
        // eslint-disable-next-line
        if (resultList[i] == 3) return "Khá";
      }
      return "Tốt";
    }
    return "Khá";
  }

  render() {
    const groupQuestionList = groupsQuestionData;
    const questionList = surveyQuestionsData;
    return (
      <div className="animated fadeIn">
        <Form>
          <Row>
            <Col lg={12}>
              <Table bordered responsive className="bg-white text-center">
                <thead className="bg-primary">
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
                    questionList.map((question, index) =>
                      question.group === group.id && (
                        <QuestionRow key={index} onChange={e => this.handleChange(e)} question={question} />
                      )
                    )
                  ])}
                  <tr>
                    <td className="align-middle">
                      <Alert color={getAlertColor(this.state.result)}>
                        Xếp loại hiện tại: <strong>{this.state.result}</strong>
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
