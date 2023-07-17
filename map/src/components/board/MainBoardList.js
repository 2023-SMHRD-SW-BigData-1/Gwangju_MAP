import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Detail from "./Detail";


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

      <td onClick={() => onDetailClick({ id, region, title, registerId, registerDate, view, content })}>{title}</td>

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

    Axios.get("http://localhost:8888/mainlist", {})

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

    // 'Detail' 컴포넌트로 데이터를 보내는 로직

    this.setState({

      selectedDetail: detailData,

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

            {boardList.map((v) => {

              return (

                <Board

                  id={v.B_SEQ}

                  region={v.B_REGION}

                  title={v.B_TITLE}

                  registerId={v.MB_ID}

                  registerDate={v.B_AT}

                  view={v.B_VIEWS}

                  content={v.B_CONTENT} // 'content' 추가

                  key={v.B_SEQ}

                  onDetailClick={this.handleDetailClick}

                />

              );

            })}

          </tbody>

        </Table>

        {selectedDetail && (

          <Detail

            id={selectedDetail.id}

            region={selectedDetail.region}

            title={selectedDetail.title}

            registerId={selectedDetail.registerId}

            registerDate={selectedDetail.registerDate}

            view={selectedDetail.view}

            content={selectedDetail.content} // 'content' 추가

          />

        )} {/* Detail 컴포넌트를 렌더링하며, content 데이터를 전달합니다. */}
        {/* {sessionStorage.getItem("nick" ? )} */}
        <Button variant="info" >글쓰기</Button>

      </div>

    );

  }

}


export default BoardList;