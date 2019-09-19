import React,{useEffect} from "react";
import ReactDOM from "react-dom";
import Example from "./component/Example/Example";
import ExampleTwo from "./component/Example/ExampleTwo";
import ExampleThree from "./component/Example/ExampleThree";
import "./Styles/Example.css" ;

import $ from 'jquery';

import Boxes from "./component/Boxes/Boxes";

import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
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

const style = {
  height: "1.5rem",
  width: "9rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  borderRadius:"1rem",
  color: "white",
  padding: "0.3rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left"
};

  $(function() {
    //caches a jQuery object containing the header element
    var header = $(".right");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.removeClass('right').addClass("right-active");
        } else {
            header.removeClass("right-active").addClass('right');
        }
    });
});



function Customer() {
  return (
    <div className="Customer">
      <DndProvider backend={HTML5Backend}>
        <div className="row">
          <div className="col-12 col-md-9 left-customer">
            <div className="card">
              <div className="card-header"><strong>Basic Form</strong> Elements</div>
                <div className="text-center mt-50">
                    <h2>Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam </h2>
                    <h4>Độc Lập - Tự Do - Hạnh Phúc </h4><br />
                    <p>Khánh hòa ............., Ngày......., tháng......, năm.....</p><br/>
                    <h3>
                      GIẤY ĐỀ NGHỊ ĐĂNG KÍ DOANH NGHIỆP <br/>
                      DOANH NGHIỆP TƯ NHÂN
                    </h3>
                </div>
                <div className="card-body">
                  <form action method="post" encType="multipart/form-data" className="form-horizontal">
                    <div className="row form-group">
                      <div className="col-md-6 d-flex justify-content-end">
                        <label className>Kính gửi: Phòng đăng kí kinh doanh tỉnh, thành phố</label>
                      </div>
                      <div className="col-12 col-md-6">
                        <ExampleTwo />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row form-group">  
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6  form-group" >
                              <Label className="pr-1">Tôi là</Label>
                              <ExampleTwo />
                          </div>
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                              <Label className="pr-1">Giới Tính</Label>
                              <ExampleTwo />
                          </div>    
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row form-group">  
                          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4  form-group" >
                              <Label className="pr-1">Ngày sinh</Label>
                              <ExampleTwo />
                              <small>Nhập nội dung</small>
                          </div>
                          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 form-group">
                              <Label className="pr-1">Dân Tộc</Label>
                              <ExampleTwo />
                              <small>Nhập nội dung</small>

                          </div>
                          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 form-group">
                              <Label className="pr-1">Quốc Tịch</Label>
                              <ExampleTwo />
                              <small>Nhập nội dung</small>

                          </div>    
                      </div>
                    </div>

                    <div className="form-group" >
                    <label>Loại giấy tờ chứng thực cá nhân</label>
                      <div className="row form-group">
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                <Label check className="form-check-label" htmlFor="checkbox1">Chứng minh nhân dân</Label>
                              </FormGroup>
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                <Label check className="form-check-label" htmlFor="checkbox2">Hộ chiếu</Label>
                              </FormGroup>
                          </div>
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                <Label check className="form-check-label" htmlFor="checkbox3">Căn cước công dân</Label>
                              </FormGroup>
                              <FormGroup check className="checkbox ">
                                    <Input className="form-check-input" type="checkbox" id="checkbox4" name="checkbox4" value="option4" />
                                    <Label  htmlFor="checkbox4">Loại khác( Ghi rõ )</Label>
                                    <ExampleTwo />
                              </FormGroup>
                          </div>
                    </div>
                  </div>

                  <div className="row form-group">
                      <div className="col-md-3">
                        <label htmlFor="text-input" className>Số giấy tờ xác thực cá nhân</label>
                      </div>
                      <div className="col-12 col-md-9">
                        <input id="text-input" name="text-input" placeholder="Text" type="text" className="form-control" /><small className="form-text text-muted">This is a help text</small></div>
                  </div>

                  <div className="form-group">
                      <div className="row form-group">  
                          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4  form-group" >
                              <Label className="pr-1">Ngày cấp</Label>
                              <input id="date-input" name="date-input" placeholder="date" type="date" className="form-control" />
                          </div>
                          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 form-group">
                              <Label className="pr-1">Nơi cấp</Label>
                              <ExampleTwo />
                              <small>Nhập nội dung</small>

                          </div>
                          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 form-group">
                              <Label className="pr-1">Ngày hết hạn(Nếu có)</Label>
                              <input id="date-input" name="date-input" placeholder="date" type="date" className="form-control" />                              <small>Nhập nội dung</small>

                          </div>    
                      </div>
                    </div>

                    <div className="form-group" >
                      <label>Nơi đăng kí hộ khẩu thường trú:</label>
                        <div className="row form-group">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 dusti">
                              <Label className="pr-1">Số nhà, ngách, hẻm, ngõ, đường</Label>
                              <ExampleTwo />
                              <small className="help-block form-text text-muted">Please enter your text</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row form-group">
                      <div className="col-md-3">
                        <label htmlFor="text-input" className>Xã/Phường/Thị Trấn</label>
                      </div>
                      <div className="col-12 col-md-9">
                        {/* <input id="text-input" name="text-input" placeholder="Text" type="text" className="form-control" /><small className="form-text text-muted">This is a help text</small></div> */}
                        <ExampleTwo />
                        <small className="help-block form-text text-muted">Please enter your text</small>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-3">
                        <label htmlFor="text-input" className>Quận/Huyện/Thành Phố thuộc Tỉnh</label>
                      </div>
                      <div className="col-12 col-md-9">
                        <ExampleTwo />
                        <small className="help-block form-text text-muted">Please enter your text</small>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-3">
                        <label htmlFor="text-input" className>Tỉnh/Thành Phố</label>
                      </div>
                      <div className="col-12 col-md-9">
                        {/* <input id="text-input" name="text-input" placeholder="Text" type="text" className="form-control" /><small className="form-text text-muted">This is a help text</small></div> */}
                        <ExampleTwo />
                        <small className="help-block form-text text-muted">Please enter your text</small>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-3">
                        <label htmlFor="text-input" className>Quốc Gia</label>
                      </div>
                      <div className="col-12 col-md-9">
                        {/* <input id="text-input" name="text-input" placeholder="Text" type="text" className="form-control" /><small className="form-text text-muted">This is a help text</small></div> */}
                        <ExampleTwo />
                        <small className="help-block form-text text-muted">Please enter your text</small>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row form-group">  
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6  form-group" >
                              <Label className="pr-1">Điện Thoại:</Label>
                              <ExampleTwo />
                          </div>
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                              <Label className="pr-1">Fax:</Label>
                              <ExampleTwo />
                          </div>    
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row form-group">  
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6  form-group" >
                              <Label className="pr-1">Email:</Label>
                              <ExampleTwo />
                          </div>
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                              <Label className="pr-1">Website:</Label>
                              <ExampleTwo />
                          </div>    
                      </div>
                    </div>

                    <div className="form-group">  
                       <Label className="pr-1">Đăng kí doanh nghiệp tư nhân do tôi là chủ với các nội dung sau:</Label>
                       <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            <Label>1. Tình trạng thành lập</Label>
                              <div className="row form-group">
                                
                                <div className="col-md-12">
                                  <div className="radio form-check">
                                      <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                      <Label className="form-check-label" check htmlFor="inline-radio1">Thành lập mới</Label>
                                  </div>
                                  <div className="radio form-check">
                                      <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                      <Label className="form-check-label" check htmlFor="inline-radio2">Thành lập trên cơ sở chuyển đổi từ hộ kinh doanh</Label>
                                  </div>    
                                </div>
                              </div>
                          </li>
                          <li class="list-group-item">
                            <Label>2. Tên doanh nghiệp </Label>
                            <div className="row form-group">
                              <div className="col-md-3">
                                <label htmlFor="text-input" className>Tên doanh nghiệp viết bằng tiếng Việt</label>
                              </div>
                              <div className="col-12 col-md-9">
                                <ExampleTwo />
                                <small className="help-block form-text text-muted">Please enter your text</small>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-md-3">
                                <label htmlFor="text-input" className>Tên doanh nghiệp viết bằng tiếng nước ngoài</label>
                              </div>
                              <div className="col-12 col-md-9">
                                <ExampleTwo />
                                <small className="help-block form-text text-muted">Please enter your text</small>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-md-3">
                                <label htmlFor="text-input" className>Tên doanh nghiệp viết tắt</label>
                              </div>
                              <div className="col-12 col-md-9">
                                <ExampleTwo />
                                <small className="help-block form-text text-muted">Please enter your text</small>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <Label>3. Địa chỉ trụ sở chính</Label>
                            <div className="form-group" >
                              <label>Nơi đăng kí hộ khẩu thường trú:</label>
                                <div className="row form-group">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 dusti">
                                      <Label className="pr-1">Số nhà, ngách, hẻm, ngõ, đường</Label>
                                      <ExampleTwo />
                                      <small className="help-block form-text text-muted">Please enter your text</small>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-md-3">
                                <label htmlFor="text-input" className>Xã/Phường/Thị Trấn</label>
                              </div>
                              <div className="col-12 col-md-9">
                                {/* <input id="text-input" name="text-input" placeholder="Text" type="text" className="form-control" /><small className="form-text text-muted">This is a help text</small></div> */}
                                <ExampleTwo />
                                <small className="help-block form-text text-muted">Please enter your text</small>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-md-3">
                                <label htmlFor="text-input" className>Quạn/Huyện/Thành Phố thuộc tỉnh</label>
                              </div>
                              <div className="col-12 col-md-9">
                                {/* <input id="text-input" name="text-input" placeholder="Text" type="text" className="form-control" /><small className="form-text text-muted">This is a help text</small></div> */}
                                <ExampleTwo />
                                <small className="help-block form-text text-muted">Please enter your text</small>
                              </div>
                            </div>
                            <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="text-input" className>Tỉnh/Thành Phố</label>
                            </div>
                            <div className="col-12 col-md-9">
                              {/* <input id="text-input" name="text-input" placeholder="Text" type="text" className="form-control" /><small className="form-text text-muted">This is a help text</small></div> */}
                              <ExampleTwo />
                              <small className="help-block form-text text-muted">Please enter your text</small>
                            </div>
                          </div>

                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="text-input" className>Quốc Gia</label>
                            </div>
                            <div className="col-12 col-md-9">
                              {/* <input id="text-input" name="text-input" placeholder="Text" type="text" className="form-control" /><small className="form-text text-muted">This is a help text</small></div> */}
                              <ExampleTwo />
                              <small className="help-block form-text text-muted">Please enter your text</small>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row form-group">  
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6  form-group" >
                                    <Label className="pr-1">Điện Thoại:</Label>
                                    <ExampleTwo />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                                    <Label className="pr-1">Fax:</Label>
                                    <ExampleTwo />
                                </div>    
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row form-group">  
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6  form-group" >
                                    <Label className="pr-1">Email:</Label>
                                    <ExampleTwo />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                                    <Label className="pr-1">Website:</Label>
                                    <ExampleTwo />
                                </div>    
                            </div>
                          </div>
                          <FormGroup row>
                            <Col md="12">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox7" name="checkbox7" value="option7" />
                                <Label check className="form-check-label" htmlFor="checkbox7">
                                    Doanh nghiệp nằm trong khu công nghiệp, khu chế xuất,khu kinh tế, khu công nghệ cao.
                                    (Đánh dâu X vào ô vuông nếu doanh nghiệp đăng kí địa chỉ trụ sở chính nằm trong khu công nghiệp, khu chế xuất, khu kinh tế)
                                 </Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                          </li>
                          <li class="list-group-item">
                            <Label>4. Ngành nghề kinh doanh(ghi tên và mã theo ngành cấp 4 trong hệ thống ngành kinh tế của Việt Nam)</Label>
                            <table class="table">
                                <caption>List of users</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên Ngành</th>
                                    <th scope="col">Mã Ngành</th>
                                    <th scope="col">Ngành,nghề kinh doanh chính</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                  </tr>
                                </tbody>
                            </table>
                          </li>
                        </ul> 
                    </div>
                    <CardFooter>
                      <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                      <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                    </CardFooter>
                  </form>
                </div>
                
            </div>
          </div>
          <div className="col-12 col-md-3 right-customer">
            <div  className="aside-menu-fixed right ">
              <div className="card">
                <div className="up">

                  
                  <div className="card-header">Trường dữ liệu</div>
                  <div className="card-body">
                      <Boxes />
                  </div>
                </div>
                <div className="card-footer down">Footer</div>
              </div>
            </div>
          </div>
        </div>
        
      </DndProvider>
      
    </div>
  );
}

export default Customer;