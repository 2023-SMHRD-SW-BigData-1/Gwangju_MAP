import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Detail from "./Detail";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const Board = ({
  id,
  region,
  title,
  registerId,
  registerDate,
  view,
  content,
  onDetailClick,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{region}</td>
      <td onClick={() => onDetailClick({ id, region, title, registerId, registerDate, view, content })}>
        {title}
      </td>
      <td>{registerId}</td>
      <td>{registerDate}</td>
      <td>{view}</td>
    </tr>
  );
};

class BoardList extends Component {
  state = {
    boardList: [],
    selectedDetail: null,
  };

  getList = () => {
    Axios.get("http://localhost:8888/list", {})
      .then((res) => {
        const { data } = res;
        this.setState({
          boardList: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  componentDidMount() {
    this.getList();
  }

  handleDetailClick = (detailData) => {
    const { id } = detailData; // id 프로퍼티 추가
    this.setState({
      selectedDetail: {
        id,
        ...detailData,
      },
    });
  };

  render() {
    const { boardList, selectedDetail } = this.state;

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>지역</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map((v) => (
              <Board
                id={v.B_SEQ}
                region={v.B_REGION}
                title={v.B_TITLE}
                registerId={v.MB_ID}
                registerDate={v.B_AT}
                view={v.B_VIEWS}
                content={v.B_CONTENT}
                key={v.B_SEQ}
                onDetailClick={this.handleDetailClick}
              />
            ))}
          </tbody>
        </Table>

        {selectedDetail && (
          <Link
            to={{
              pathname: `/list/detail/${selectedDetail.id}`,
              state: {
                region: selectedDetail.region,
                title: selectedDetail.title,
                registerId: selectedDetail.registerId,
                registerDate: selectedDetail.registerDate,
                view: selectedDetail.view,
                content: selectedDetail.content,
              },
            }}
          >
            <Button variant="info">게시글 확인하기</Button>
          </Link>
        )}

        <Link to="/list/write">
          <Button variant="info">글쓰기</Button>
        </Link>
        <Link to="/list/update">
          <Button variant="info">수정하기</Button>
        </Link>
      </div>
    );
  }
}

export default BoardList;