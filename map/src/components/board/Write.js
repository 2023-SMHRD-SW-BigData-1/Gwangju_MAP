import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

/**
 * Write class
 */
class Write extends Component {
    state = {
        title: "",
        region: "",
        content: "",
    };

    write = () => {
        Axios.post("http://localhost:8888/b_insert", {
            title: this.state.title,
            region: this.state.region,
            content: this.state.content,
        })
        .then((res) => {
            console.log(res);
            
            })
            .catch((e) => {
                console.error(e);
            });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    /**
     * @return {Component} Component
     */
    render() {
        return (
            <div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.handleChange} placeholder="제목을 입력하세요" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>위치</Form.Label>
                    <Form.Control type="text" name="region" onChange={this.handleChange} placeholder="위치를 알려주세요 ( ex. 광주광역시 남구 진월동 )" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" name="content" onChange={this.handleChange} placeholder="내용을 입력하세요" />
                </Form.Group>
                <Button variant="info" onClick={this.write}>작성완료</Button>
                <Button variant="secondary">취소</Button>
            </div>
        );
    }
}

export default Write;