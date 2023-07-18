import { Component } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import Detail from "./Detail";
import { Link } from "react-router-dom";


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

      <td className="text-center">{id}</td>

      <td className="left">{region}</td>

      <td className="left" onClick={() => onDetailClick({ id, region, title, registerId, registerDate, view, content })}>{title}</td>

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
    console.log(detailData);
    this.setState({

      selectedDetail: detailData,

    });
  };


  render() {

    const { boardList, selectedDetail } = this.state;

    return (

      <div>
        <div className="boardCon">
          <Table striped bordered hover>

            <thead>

              <tr>

                <th className="num text-center">번호</th>

                <th className="reg text-center">지역</th>

                <th className="text-center">제목</th>

                <th className="person text-center">작성자</th>

                <th className="date text-center">작성일</th>

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

                    content={v.B_CONTENT} // 'content' 추가

                    key={v.B_SEQ}

                    onDetailClick={this.handleDetailClick}

                  />
                );

              })}
              <tr className="b_r_btn">
                <td colSpan="4"></td> {/* 버튼 셀을 표시하지 않기 위해 빈 셀 추가 */}
                <td>
                <Link to="/list">
                  <button type="button" className="btn btn-primary btn-lg">
                    더 많은 게시글보기 &gt;&gt;
                  </button>
                </Link>
                </td>
              </tr>
            </tbody>

          </Table>
        </div>

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

        )
        }
      </div>

    );

  }

}


export default BoardList;