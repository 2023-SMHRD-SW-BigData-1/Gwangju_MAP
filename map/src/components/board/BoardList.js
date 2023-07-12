import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class BoardList extends Component {
  render() {
    return (
      React.createElement("div", null,
        React.createElement(Table, { striped: true, bordered: true, hover: true },
          React.createElement("thead", null,
            React.createElement("tr", null,
              React.createElement("th", null, "선택"),
              React.createElement("th", null, "번호"),
              React.createElement("th", null, "제목"),
              React.createElement("th", null, "작성자"),
              React.createElement("th", null, "작성일")
            )
          ),
          React.createElement("tbody", null,
            React.createElement("tr", null,
              React.createElement("td", null,
                React.createElement("input", { type: "checkbox" })
              ),
              React.createElement("td", null, "1"),
              React.createElement("td", null, "게시글1"),
              React.createElement("td", null, "artistJay"),
              React.createElement("td", null, "2022-03-19")
            ),
            React.createElement("tr", null,
              React.createElement("td", null,
                React.createElement("input", { type: "checkbox" })
              ),
              React.createElement("td", null, "2"),
              React.createElement("td", null, "게시글2"),
              React.createElement("td", null, "artistJay"),
              React.createElement("td", null, "2022-03-19")
            ),
            React.createElement("tr", null,
              React.createElement("td", null,
                React.createElement("input", { type: "checkbox" })
              ),
              React.createElement("td", null, "3"),
              React.createElement("td", null, "게시글3"),
              React.createElement("td", null, "artistJay"),
              React.createElement("td", null, "2022-03-19")
            )
          )
        ),
        React.createElement(Button, { variant: "info" }, "글쓰기"),
        React.createElement(Button, { variant: "secondary" }, "수정하기"),
        React.createElement(Button, { variant: "danger" }, "삭제하기")
      )
    );
  }
}

export default BoardList;