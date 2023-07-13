import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Axios from "axios";

const Board = ({
  num,
  title,
  registerId,
  registerDate,
}) => {
  return (
    <tr>
      <td>{num}</td>
      <td>{title}</td>
      <td>{registerId}</td>
      <td>{registerDate}</td>
    </tr>
  );
};

/**
 * BoardList class
 */
class BoardList extends Component {


  state = {
    boardList: [],
  };

  getList = () => {
    Axios.get('http://localhost:8888/boardList')
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
  /**
   * @return {Component} Component
   */
  render() {
    const { boardList } = this.state;
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>{
            // eslint-disable-next-line
            boardList.map((v) => {
              return (
                <Board
                  num={v.b_seq}
                  title={v.b_title}
                  registerId={v.mb_id}
                  registerDate={v.b_at}
                />
              );
            })}
          </tbody>
        </Table>
        <Button variant="info">글쓰기</Button>
      </div>
    );
  }
}

export default BoardList