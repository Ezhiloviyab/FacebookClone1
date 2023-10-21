import Navigation from "../components/Navigation/Navigation";
import React from "react";import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FiSettings,FiSearch,FiHome} from 'react-icons/fi';
import{MdGroupAdd} from 'react-icons/md'
import{BsFillGiftFill} from 'react-icons/bs'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBRow,
    MDBCol,MDBBtn, MDBCardSubTitle
  } from 'mdb-react-ui-kit';

import './friends.css'

const Friends = () => {

    return(
        <Container><Row>
            <Col className="friend" md={4}>
            <h5 className="head">Friends<FiSettings  style={{marginLeft:"100px", size:"30px"}}/></h5 >
<div className="search-bar mb-4" >< FiSearch className="input me-4"/>Search Friends
      </div>

      <h5 className="h5 mb-4"><FiHome className="fi" size="30px" color="blue"/>Home</h5>
      <h5 className="h5 mb-4"><MdGroupAdd className="fi" size="30px"/>Friend Requests</h5>
      <h5 className="h5 mb-4"><MdGroupAdd className="fi" size="30px"/>Suggestions</h5>
<h5 className="h5 mb-4"><MdGroupAdd className="fi" size="30px"/>All friends</h5>
<h5 className="h5 mb-4"><BsFillGiftFill className="fi" size="30px"/>Birthdays</h5>
<h5 className="h5 mb-4"><MdGroupAdd className="fi" size="30px"/>Custom list</h5>

            </Col>
            <Col className="friendslist" md={8}>
<MDBRow className='row-cols-1 row-cols-md-3 g-4'>

            <MDBCol className="friendscard">
        <MDBCard className='individual mx-5 '>
          <MDBCardImage
            src='/images/itachi.jpeg'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Srk Kurnool<br></br>
 · Lives in Kurnool</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/rc.jpeg'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Parvaiz Ah Najar<br></br>
75 followers</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/uzna.jpeg'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Uzumaki Naruto (Friends)<br></br>
Works at Surat, Gujarat ·<br></br></MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/ironman.jpeg'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Srk Kurnool <br></br>
 Lives in Kurnool</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/fish.jpeg'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>FRIENDS TECHNOLOGIES <br></br>
 Lives in Nuzvid</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>
      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/leo.jpeg'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Nithish kannan <br></br>Lives in chennai</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>
      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/IMG_9267.PNG'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Day dreamer<br></br>Lives in Mayiladuthurai</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/arjundas.jpeg'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Arjun das <br></br>Lives in chennai</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/sugn.jpeg'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Ryomen Sukuna -<br></br> Jujutsu Kaisen </MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
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
export default Friends;