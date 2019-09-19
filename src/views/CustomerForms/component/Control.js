import React, { Component } from 'react';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
    Row,
  } from 'reactstrap';
import { thisExpression } from '@babel/types';




class Control extends Component{
    constructor(props){
        super(props)
        this.state={
            id:"",
            dataField : "",
            name: "",
            typeData:""
        }
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
        
    }
    onClear = () =>{
        this.setState({
            id:"",
            dataField:"",
            name:"",
            typeData:""
        })
    }
    onAdd = (event) =>{
        event.preventDefault();

        this.props.onChange(this.state)
        this.onClear();
    }
    render(){
        return(
            <div className="component-control">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* TaskForm */}
                    <div className="component-table">
                <h4><i className="cui-bookmark"></i>Thêm trường dữ liệu</h4>
                        <table className="table table-bordered ">
                            <tbody>
                            <tr>
                                <td>Trường Dữ Liệu</td>
                                <td>
                                <div className="form-group">
                                    <div className="form-inline">
                                    <Input  
                                            className="form-control"
                                            type="text" 
                                            name="dataField" 
                                            placeholder="Trường dữ liệu" 
                                            value={this.state.dataField}
                                            onChange={this.onChange} />
                                    <Label className="ml-3">Trường dữ liệu này duy nhất và không được thay đổi khi lưu</Label>
                                    </div>
                                    <FormText className="help-block">Mời nhập trường dữ liệu</FormText>
                                </div> 
                                </td>
                            </tr>
                            <tr>
                                <td>Tiêu Đề</td>
                                <td>
                                <Input 
                                        type="text" 
                                        id="name-input" 
                                        name="name" 
                                        placeholder="Nhập tiêu đề" 
                                        value={this.state.name}
                                        onChange={this.onChange} />
                                <FormText className="help-block">Mời nhập tiêu đề</FormText>
                                </td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>
                                <Input 
                                        type="textarea" 
                                        name="textarea-input" 
                                        id="textarea-input" 
                                        placeholder="Nội dung..." />                 
                                <FormText className="help-block">Mời nhập Mô tả</FormText>
                                </td>
                            </tr>
                            <tr>
                                <td><Label>Loại dữ liệu</Label></td>
                                <td>
                                        <FormGroup check className="radio">
                                        <Input className="form-check-input" type="radio" id="radio1" name="radios1" value="option1" />
                                        <Label check className="form-check-label" htmlFor="radio1">Số</Label>
                                        </FormGroup>
                                        <FormGroup check className="radio">
                                        <Input className="form-check-input" type="radio" id="radio2" name="radios2" value="option2" />
                                        <Label check className="form-check-label" htmlFor="radio2">Ngày</Label>
                                        </FormGroup>
                                        <FormGroup check className="radio">
                                        <Input className="form-check-input" type="radio" id="radio3" name="radios3" value="option3" />
                                        <Label check className="form-check-label" htmlFor="radio3">Một dòng(textbox)</Label>
                                        </FormGroup>
                                        <FormGroup check className="radio">
                                        <Input className="form-check-input" type="radio" id="radio4" name="radios4" value="option4" />
                                        <Label check className="form-check-label" htmlFor="radio4">Nhiều dòng</Label>
                                        </FormGroup>
                                        <FormGroup check className="radio">
                                        <Input className="form-check-input" type="radio" id="radio5" name="radios5" value="option5" />
                                        <Label check className="form-check-label" htmlFor="radio5">Trình soạn thảo</Label>
                                        </FormGroup>
                                        <FormGroup check className="radio">
                                        <Input className="form-check-input" type="radio" id="radio6" name="radios6" value="option6" />
                                        <Label check className="form-check-label" htmlFor="radio6">Lựa chọn thả xuống</Label>
                                        </FormGroup>
                                        <FormGroup check className="radio">
                                        <Input className="form-check-input" type="radio" id="radio7" name="radios7" value="option7" />
                                        <Label check className="form-check-label" htmlFor="radio7">Một lựa chọn(radio)</Label>
                                        </FormGroup>
                                        <FormGroup check className="radio">
                                        <Input className="form-check-input" type="radio" id="radio8" name="radios8" value="option8" />
                                        <Label check className="form-check-label" htmlFor="radio8">Nhiều lựa chọn(checkbox)</Label>
                                        </FormGroup>
                                        <FormGroup check className="radio">
                                        <Input className="form-check-input" type="radio" id="radio9" name="radios9" value="option9" />
                                        <Label check className="form-check-label" htmlFor="radio9">Nhiều lựa chọn thả xuống</Label>
                                        </FormGroup>
                                    <Label check className="form-check-label" htmlFor="radio9">Giá trị sẽ không được thay đổi khi đã lưu</Label>

                                </td>
                            </tr>
                            <tr>
                                <td>Thuộc tính class HTML</td>
                                <td>
                                <Input type="text" id="des-input" name="des-input" placeholder="Input" autoComplete="des"/>
                                <FormText className="help-block">Mời nhập thuộc tính</FormText>
                                </td>
                            </tr>
                            <tr>
                                <td>Lựa chọn dữ liệu</td>
                                <td>
                                <Input type="text" id="des-input" name="des-input" placeholder="Lấy dữ liệu từ CSDL" autoComplete="des"/>
                                <FormText className="help-block">Lựa chọn dữ liệu</FormText>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h4><i className="cui-bookmark"></i>Lựa chọn Module, trường dữ liệu</h4>
                    {/* <Filter /> */}
                    <table className="table table-bordered ">
                        <thead>
                            <tr>
                            <th>Chọn Module</th>
                            <th>Chọ Bảng Dữ Liệu</th>
                            <th>Chọ Cột Dữ Liệu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center">
                    <button type="button"
                     className="btn btn-success text-center"
                     onClick={this.onAdd}>
                         Lưu</button>
                    <button type="button"
                     className="btn btn-danger"
                     onClick={this.onClear} >Hủy bỏ</button> 
                </div>
            </div>
            
        
        )
    }
}
export default Control;