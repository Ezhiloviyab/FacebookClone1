import React from "react"
import Navigation from "../components/Navigation/Navigation";
import './Marketplace.css'
import {FiSearch,FiSettings}from 'react-icons/fi';
import{AiOutlineShop,AiOutlineInbox,AiTwotoneShopping}from 'react-icons/ai';
import{IoMdNotificationsOutline}from 'react-icons/io';
import{CiShoppingTag}from 'react-icons/ci';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,MDBBtn
} from 'mdb-react-ui-kit';


const Marketplace=()=>{
    return(
      <Container>
<div className="store">
<Row className="row">
    <Col md={4} className="col6">
<div className="index" style={{position:"fixed"}}>
<h4 className="head">Marketplace<FiSettings  style={{marginLeft:"100px", size:"30px"}}/></h4 >
<div className="searchbar mb-4" >< FiSearch className="me-4"/>Search products
      </div>
      <h6 className="h5 mb-4"><AiOutlineShop className="fi" size="30px"/>Browse all</h6>
      <h6 className="h5 mb-4"><IoMdNotificationsOutline className="fi" size="30px"/>Notification</h6>
      <h6 className="h5 mb-4"><AiOutlineInbox className="fi" size="30px"/>Inbox</h6>
      <h6 className="h5 mb-4"><AiTwotoneShopping className="fi" size="30px"/>Buying</h6>
      <h6 className="h5 mb-4"><CiShoppingTag className="fi" size="30px"/>Selling</h6>

</div>
    </Col>
  
<Col md={8}>
<div className="market">

<MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
        <MDBCard className='card'>
          <MDBCardImage
            src='/images/fish.jpeg'
            alt='...'
            position='top' style={{height:"150px",width:"250px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className="ms-5">Fish Tank</MDBCardTitle>
            <MDBBtn className="btn-btn" style={{width:"150px"}}  >₹600</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>
      <MDBCol>
        <MDBCard className='card'>
          <MDBCardImage
            src='/images/kurti.webp'
            alt='...'
            position='top'style={{height:"150px",width:"250px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className="ms-5">Stlish Kurti</MDBCardTitle>
            <MDBBtn className="btn-btn" style={{width:"150px"}} >₹430</MDBBtn> 

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='card'>
          <MDBCardImage
            src='/images/lap.jpeg'
            alt='...'
            position='top'style={{height:"150px",width:"250px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className="ms-5">Lenvo e3450</MDBCardTitle>
            <MDBBtn className="btn-btn" style={{width:"150px"}} >₹32,000</MDBBtn> 

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='card'>
          <MDBCardImage
            src='/images/42-inch-full-hd-led-tv.jpg'
            alt='...'
            position='top'style={{height:"150px",width:"250px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className="ms-5">18'ch LED</MDBCardTitle>
            <MDBBtn className="btn-btn" style={{width:"150px"}} >₹45,000</MDBBtn> 

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='card'>
          <MDBCardImage
            src='/images/bycle.jpeg'
            alt='...'
            position='top' style={{height:"150px",width:"250px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className="ms-5">BICYCLE</MDBCardTitle>
            <MDBBtn className="btn-btn" style={{width:"150px"}} >₹2500</MDBBtn> 

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='card'>
          <MDBCardImage
            src='/images/img3.jpg'
            alt='...'
            position='top' style={{height:"150px",width:"250px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className="ms-5">Scooty</MDBCardTitle>
            <MDBBtn className="btn-btn" style={{width:"150px"}} >₹78,000</MDBBtn> 

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  
</div></Col>
</Row></div>
<Navigation/></Container>
    );
}
export default Marketplace;