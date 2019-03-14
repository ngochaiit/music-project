import React,{Component} from "react";
import {Link} from 'react-router-dom';
import "antd/dist/antd.css";
import '../css/SubNav.css'
import { Layout, Menu, Icon } from "antd";


const { SubMenu, ItemGroup } = Menu;



export default class SubNav extends Component {
  render() {
    return (
      <Layout  >
          <div className="container" >
              <Menu
                mode="horizontal"
                className="d-flex justify-content-start  "
                style={{ fontSize : "1.1em" }}
              >
                <SubMenu
                  key="sub0"
                  title={
                    <Link to="/me">
                      <Icon type="home"  style={{ fontSize : "1.5em" }} />
                      Nhạc Cá Nhân 
                    </Link >
                  }
                >
                </SubMenu>
                
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      Top 100
                    </span>
                  }
                >
                  <Menu.Item key="1">Việt Nam</Menu.Item>
                  <Menu.Item key="2">Âu Mỹ</Menu.Item>
                  <Menu.Item key="3">Châu Á</Menu.Item>
                  <Menu.Item key="4">Hòa Tấu</Menu.Item>
                </SubMenu>
                
                <SubMenu
                    key="sub2"
                    title={
                      <span>
                        Chủ đề
                      </span>
                    }
                    className="d-flex flex-row justify-content-around "
                >     
                      
                      <ItemGroup >
                          <Menu.Item key="5" style={{fontSize: "17px", fontWeight : "500"}}>Thể Loại</Menu.Item>
                          <Menu.Item key="6">EDM</Menu.Item>
                          <Menu.Item key="7">Acoustic</Menu.Item>
                          <Menu.Item key="8">Indie</Menu.Item>
                          <Menu.Item key="chin">Instrument</Menu.Item>
                      </ItemGroup>
                      <ItemGroup>
                          <Menu.Item key="9" style={{fontSize: "17px", fontWeight : "500"}}>Tâm Trạng</Menu.Item>
                          <Menu.Item key="10">Tình Yêu</Menu.Item>
                          <Menu.Item key="11">Buồn</Menu.Item>
                          <Menu.Item key="12">Thư Giãn</Menu.Item>
                          <Menu.Item key="13">Động Lực</Menu.Item>
                      </ItemGroup>
                      <ItemGroup>
                          <Menu.Item key="14" style={{fontSize: "17px", fontWeight : "500"}}>Hoạt Động</Menu.Item>
                          <Menu.Item key="15">Làm Việc</Menu.Item>
                          <Menu.Item key="16">Cà Phê</Menu.Item>
                          <Menu.Item key="17">Cuối Tuần</Menu.Item>
                          <Menu.Item key="18">Tiệc Tùng</Menu.Item>
                          <Menu.Item key="19">Du Lịch</Menu.Item>
                      </ItemGroup>
                  
                </SubMenu>
                
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      
                      Video
                    </span>
                  }
                >
                      <ItemGroup >
                          <Menu.Item key="20" style={{fontSize: "17px", fontWeight : "500"}}>Việt Nam</Menu.Item>
                          <Menu.Item key="21">Nhạc Trẻ</Menu.Item>
                          <Menu.Item key="22">Nhạc Trữ Tình</Menu.Item>
                          <Menu.Item key="23">Nhạc Dance</Menu.Item>
                          <Menu.Item key="24">Rap Việt</Menu.Item>
                      </ItemGroup>
                      <ItemGroup>
                          <Menu.Item key="25" style={{fontSize: "17px", fontWeight : "500"}}>Âu Mỹ</Menu.Item>
                          <Menu.Item key="26">Pop</Menu.Item>
                          <Menu.Item key="27">Rap/Hiphop</Menu.Item>
                          <Menu.Item key="28">Rock</Menu.Item>
                          <Menu.Item key="29">Country</Menu.Item>
                          <Menu.Item key="30">EDM</Menu.Item>
                      </ItemGroup>
                      <ItemGroup>
                          <Menu.Item key="31" style={{fontSize: "17px", fontWeight : "500"}}>Châu Á</Menu.Item>
                          <Menu.Item key="32">Hàn Quốc</Menu.Item>
                          <Menu.Item key="33">Nhật Bản</Menu.Item>
                          <Menu.Item key="34">Hoa Ngữ</Menu.Item>
                          <Menu.Item key="35">Thái Lan</Menu.Item>
                      </ItemGroup>

                </SubMenu>

                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      
                      Album
                    </span>
                  }
                >
                      <ItemGroup >
                          <Menu.Item key="36" style={{fontSize: "17px", fontWeight : "500"}}>Việt Nam</Menu.Item>
                          <Menu.Item key="37">Nhạc Trẻ</Menu.Item>
                          <Menu.Item key="38">Nhạc Trữ Tình</Menu.Item>
                          <Menu.Item key="39">Nhạc Dance</Menu.Item>
                          <Menu.Item key="40">Rap Việt</Menu.Item>
                      </ItemGroup>
                      <ItemGroup>
                          <Menu.Item key="41" style={{fontSize: "17px", fontWeight : "500"}}>Âu Mỹ</Menu.Item>
                          <Menu.Item key="42">Pop</Menu.Item>
                          <Menu.Item key="43">Rap/Hiphop</Menu.Item>
                          <Menu.Item key="44">Rock</Menu.Item>
                          <Menu.Item key="45">Country</Menu.Item>
                          <Menu.Item key="46">EDM</Menu.Item>
                      </ItemGroup>
                      <ItemGroup>
                          <Menu.Item key="47" style={{fontSize: "17px", fontWeight : "500"}}>Châu Á</Menu.Item>
                          <Menu.Item key="48">Hàn Quốc</Menu.Item>
                          <Menu.Item key="49">Nhật Bản</Menu.Item>
                          <Menu.Item key="50">Hoa Ngữ</Menu.Item>
                          <Menu.Item key="51">Thái Lan</Menu.Item>
                      </ItemGroup>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      
                      Nghệ Sĩ
                    </span>
                  }
                >
                  <Menu.Item key="52">Việt Nam</Menu.Item>
                  <Menu.Item key="53">Âu Mỹ</Menu.Item>
                  <Menu.Item key="54">Châu Á</Menu.Item>
                  <Menu.Item key="55">Hàn Quốc</Menu.Item>
                  <Menu.Item key="56">Nhật Bản</Menu.Item>
                </SubMenu>
                
                <SubMenu
                  key="sub6"
                  title={
                    <span>
                      <Icon type="close-circle"  style={{ fontSize : "1.5em" }} />
                      Tắt quảng cáo
                    </span>
                  }
                  className="ml-auto"
                >
                </SubMenu>
                <SubMenu
                  key="sub7"
                  title={
                    <span>
                      <Icon type="cloud-upload" style={{ fontSize : "1.5em" }} />
                    </span>
                  }
                  
                >
                </SubMenu>
              </Menu>
          </div>
          
          
      </Layout>
    )
  }
}



   
    