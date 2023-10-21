import Navigation from "../components/Navigation/Navigation";
import React from "react";import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FiSettings,FiSearch,FiHome} from 'react-icons/fi';
import{MdFeed}from 'react-icons/md'
import{FaCompass}from 'react-icons/fa'
import{HiOutlineUserGroup }from 'react-icons/hi'
import './groups.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBRow,
    MDBCol,MDBBtn, MDBCardSubTitle
  } from 'mdb-react-ui-kit';

const Groups = () => {

    return(
        <Container><Row>
            <Col className="friend" md={4}>
            <h5 className="head">Groups<FiSettings  style={{marginLeft:"100px", size:"30px"}}/></h5 >
<div className="search-bar mb-4" >< FiSearch className="input me-4"/>Search in Groups
      </div>

      <h5 className="h5 mb-4"> <MdFeed color="blue" className="fi" size="30px"/>Your Feed</h5>
      
<h5 className="h5 mb-4"><FaCompass className="fi" size="30px"/>Discover</h5>
<h5 className="h5 mb-4"><HiOutlineUserGroup className="fi" size="30px"/>Your groups</h5>
<button className="groupbtn text-primary" style={{backgroundColor:"lightcyan",border:"none" ,width:"250px"}}>+Create new group</button>
            </Col>
            <Col className="Grouplist" md={8}>
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
            <MDBCol className="groupscard">
        <MDBCard className='gropcard p-4'>
          <MDBCardImage
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YIp6M2vKtP4Ab2CSBua9pFejB28jylVwog&usqp=CAU'
            alt='...'
            position='top' style={{height:"250px",width:"200px",borderRadius:"50%"}}
          />
          <MDBCardBody>
           
            <MDBCardSubTitle className="ms-3"> Anime Freeks</MDBCardSubTitle>
            <MDBBtn className="joingroup" style={{width:"150px"}}  >Join Group</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>
      <MDBCol className="groupscard">
        <MDBCard className='gropcard p-4'>
          <MDBCardImage
            src='/images/marvel.jpeg'
            alt='...'
            position='top' style={{height:"200px",width:"200px",borderRadius:"50%"}}
          />
          <MDBCardBody>
           
            <MDBCardSubTitle className="ms-3">Marvel studios</MDBCardSubTitle>
            <MDBBtn className="joingroup" style={{width:"150px"}}  >Join Group</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="groupscard">
        <MDBCard className='gropcard p-4'>
          <MDBCardImage
            src='/images/nn.jpeg'
            position='top' style={{height:"200px",width:"200px",borderRadius:"50%"}}
          />
          <MDBCardBody>
           
            <MDBCardSubTitle className="ms-3">Uzumaki clan</MDBCardSubTitle>
            <MDBBtn className="joingroup" style={{width:"150px"}}  >Join Group</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>
            </MDBRow>
            </Col>
            </Row>
            <Navigation/>
        </Container>
    );
}
export default Groups;