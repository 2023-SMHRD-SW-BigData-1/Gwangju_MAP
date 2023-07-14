import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Axios from "axios"

const Board = ({
  id,
  region,
  title,
  registerId,
  registerDate,
  view,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{region}</td>
      <td>{title}</td>
      <td>{registerId}</td>
      <td>{registerDate}</td>
      <td>{view}</td>
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
        Axios.get("http://localhost:8888/list", {})
            .then((res) => {
                const { data } = res;
                console.log(data);
                this.setState({
                    boardList: data,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    /**
     */
    componentDidMount() {
        this.getList();
    }

    render() {
      const { boardList } = this.state;
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
                {boardList.map((v) => {
              return (
                <Board
                  id={v.B_SEQ}
                  region={v.B_REGION}
                  title={v.B_TITLE}
                  registerId={v.MB_ID}
                  registerDate={v.B_AT}
                  view={v.B_VIEWS}
                  key={v.B_SEQ}
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

export default BoardList;