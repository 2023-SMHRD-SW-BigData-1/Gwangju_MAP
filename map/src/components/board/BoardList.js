import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Detail from "./Detail";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './board.css'


const Board = ({
  id,
  region,
  title,
  registerId,
  registerDate,
  content,
  onDetailClick,
}) => {
  return (
    <tr>
      <td className="text-center">{id}</td>

<td className="left">{region}</td>
      <td className="left" onClick={() => onDetailClick({ id })}>
        {title}
      </td>
      <td className="text-center">{registerId}</td>
      <td className="text-center">{registerDate.match(/^\d{4}-\d{2}-\d{2}/)[0]}</td>
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
        <Table striped bordered hover className="boardtable">
          <thead>
            <tr className="text-center">
            <th className="num">번호</th>

<th className="reg">지역</th>

<th className="text">제목</th>

<th className="person">작성자</th>

<th className="date">작성일</th>
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
                        <Button className="leftB">게시글 확인하기</Button>

          </Link>
        )}
        {sessionStorage.getItem("id")&&(<Link to="/list/write">
          <Button className="leftB">글쓰기</Button>
        </Link>)}
        
      </div>
    );
  }
}

export default BoardList;