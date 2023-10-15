import React from "react"
import Navigation from "../components/Navigation/Navigation";
import './store.css'
import {FiSearch,FiSettings}from 'react-icons/fi';
import{AiOutlineShop,AiOutlineInbox,AiTwotoneShopping}from 'react-icons/ai';
import{IoMdNotificationsOutline}from 'react-icons/io';
import{CiShoppingTag}from 'react-icons/ci';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

const Store=()=>{
    return(
<div className="store">
<div className="row">
    <div className="col-6">
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
    </div>
    <div className="col-6">

<div className="market">

<CardGroup>
      <Card classname="card mx-5">
        <Card.Img variant="top" src="/images/lap.jpeg" />
        <Card.Body>
          <Card.Text>
            laptop
          </Card.Text>
          <Button variant="primary" style={{width:"150px"}}>₹25,000</Button>
        </Card.Body>
      </Card>
      <Card classname="mx-5">
        <Card.Img variant="top" src="/images/img3.jpg" />
        <Card.Body>
          
          <Card.Text>
            bike
          </Card.Text>
          <Button variant="primary" style={{width:"150px"}}>₹56,000</Button>

        </Card.Body>
     
      </Card>
      <Card classname="mx-5">
        <Card.Img variant="top" src="/images/fish.jpeg" />
        <Card.Body>
          
          <Card.Text>
            fish tank
          </Card.Text>
        </Card.Body>
        <Button variant="primary" style={{width:"150px"}}>₹5,000</Button>
       
      </Card>
    </CardGroup>


<CardGroup>
      <Card classname="card mx-5">
        <Card.Img variant="top" src="/images/42-inch-full-hd-led-tv.jpg" />
        <Card.Body>
          <Card.Text>
        40'inch led tv
          </Card.Text>
          <Button variant="primary" style={{width:"150px"}}>₹18,000</Button>
        </Card.Body>
        <br></br>
      </Card>
      <Card classname="mx-5">
        <Card.Img variant="top" src="/images/bycle.jpeg" />
        <Card.Body>
          
          <Card.Text>
            bycycle
          </Card.Text>
          <Button variant="primary" style={{width:"150px"}}>₹7,000</Button>

        </Card.Body>
     
      </Card>
      <Card classname="mx-5">
        <Card.Img variant="top" src="/images/kurti.webp" />
        <Card.Body>
          
          <Card.Text>
        Gray kurti
          </Card.Text>
          <Button variant="primary" style={{width:"150px"}}>₹700</Button>

        </Card.Body>
       
      </Card>
    </CardGroup>
</div>
    </div>
</div>

    <Navigation/>
</div>
    );
}
export default Store;