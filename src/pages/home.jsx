import React from "react";
import Navigation from "../components/Navigation/Navigation";
import './home.css';

import { FaAngleDown, FaUserFriends, FaSearch, FaGrin} from 'react-icons/fa'
import {MdVideoCall, MdMoreHoriz,MdGroups2,MdOndemandVideo,MdEventAvailable} from 'react-icons/md'
import {AiFillFileImage,AiOutlineShop} from 'react-icons/ai'
import{FcClock}from'react-icons/fc'
import{BsFillBookmarkFill,BsFlag,BsFillBarChartLineFill} from'react-icons/bs'



const Home = () => {
  return(
  
     <div className="homepage">
        <div className="row">
            <div className="col-3">
            <div className="Leftside">
            <div className="myProfile my-3">
                <img src="/images/ezhil.jpg" style={{height:"30px", width:"40px",borderRadius:"60%"}}/>
                Ezhiloviya B
            </div>
            <div className="mainlogo mb-3">
                
            <FaUserFriends color="skyblue" className="log"fontSize="2rem" />
            <div>Friends</div>
            </div>
            <div className="mainlogo mb-3">
                <MdGroups2   color="skyblue"fontSize="2rem"/>
                <div>Groups</div>
            </div>
            <div className="mainlogo mb-3">
                <AiOutlineShop color="skyblue"  fontSize="2rem"/>
                <div>Market Place</div>
            </div>
            <div className="mainlogo mb-3">
                <MdOndemandVideo   color="skyblue"fontSize="2rem"/>
                <div>Video</div>
            </div>
            <div className="mainlogo mb-3">
                < FcClock fontSize="2rem"/>
                <div>Memories</div>
            </div>
            <div className="mainlogo mb-3">
                < BsFillBookmarkFill color="purple" fontSize="2rem"/>
                <div>Saved</div>
            </div>
            <div className="mainlogo mb-3">
                < BsFlag fontSize="2rem" color="skyblue"className="log"/>
                <div>pages</div>
            </div>
            <div className="mainlogo mb-3">
                <  MdEventAvailable fontSize="2rem" color="skyblue" className="log"/>
                <div>Events</div>
            </div>
            <div className="mainlogo mb-3">
                < BsFillBarChartLineFill fontSize="2rem" color="skyblue"  className="log"/>
                <div>Ads Manager</div>
            </div>
            <div className="Pro">
                <FaAngleDown  fontSize="1rem"/>
                <div>See More</div>
            </div>
            <br></br>
            <div className="Profiles">
                <img src="/images/1.jpeg"style={{height:"35px", padding:"1rem"}}/>
                React Developer
            </div>
            <div className="Profiles">
                <img src="/images/2.jpeg"style={{height:"35px", padding:"1rem"}}/>
                MEAN STACK
            </div>
            
            </div></div>
<div className="col-6">
            <div className="MainArea">
                <div className="center">
                <div className="addStory">
                    
                    <div className="Story"><div className="img2">
                        <img src="/images/IMG_9267.PNG" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
                       </div>
                    </div>
                    <div className="Story"><div className="img1">
                        <img src="/images/post.jpeg" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
                        
                </div>
                    </div><div className="Story"><div className="img3">
                        <img src="/images/IMG_8552.PNG" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
                        
                </div>
                    </div>
                    <div className="Story"><div className="img4">
                        <img src="/images/IMG_3279.PNG" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
                       </div>
                    </div>
            
                    </div>
                    <div className="message">
                        <div className="text">
                            <div className="Post">
                                <img src="/images/ezhil.jpg" alt="PIC"/>
                                <input type="text" placeholder="What's on your mind, Ezhil?"/>
                            </div>
                            <div className="Call">
                                <div className="ico">
                                    <div className="icone">
                                        <MdVideoCall fontSize="2rem" color="red"/>
                                        <div>LiveVideo</div>
                                    </div>
                                    <div className="icone">
                                        <AiFillFileImage fontSize="2rem" color="green"/>
                                        <div>Photo/Video</div>
                                    </div>
                                    <div className="icone">
                                        <FaGrin fontSize="2rem"  color="orange"/>
                                        <div>Felling/activity</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                </div>
            </div></div>
<div className="col-3">
            <div className ="Rightside">
             <div className="Contact">  
                 <div className="Contact-heading mb-3">
                     Contacts
                 </div>
             
             <div className="contact-icons">
                 <div className="contact-svg">
                     <MdVideoCall fontSize="1.8rem"/>
                 </div>
                 <div className="contact-svg">
                        <FaSearch fontSize="1.6rem"/>
                     </div>
                     <div className="contact-svg">
                        <MdMoreHoriz fontSize="1.6rem"/>
                     </div>
                </div>
                </div>
            <div className="list mb-3">
                <div className="contact-list mb-3">
                    <img src="images/1.jpeg"  style={{height:"30px",width:"30px" ,borderRadius:"50%"}}/>
                    Ayyswarya
                </div>
                <div className="contact-list mb-3">
                    <img src="images/2.jpeg"  style={{height:"30px",width:"30px" ,borderRadius:"50%"}}/>
                    Dharani
                </div>
                <div className="contact-list mb-3">
                    <img src="images/3.jpeg"  style={{height:"30px",width:"30px" ,borderRadius:"50%"}}/>
                    Vignesh
                </div>
                <div className="contact-list mb-3">
                    <img src="images/4.jpeg"  style={{height:"30px",width:"30px" ,borderRadius:"50%"}}/>
                    Sriram
                </div>
                <div className="contact-list mb-3">
                    <img src="images/pic1.jpeg"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                    Anusuya
                </div><div className="contact-list mb-3">
                    <img src="images/pic1.jpeg"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                    Poornima
                </div><div className="contact-list mb-3">
                    <img src="images/pic1.jpeg"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                    Kathir
                </div><div className="contact-list mb-3">
                    <img src="images/pic1.jpeg"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                    Udaya
                </div><div className="contact-list mb-3">
                    <img src="images/pic1.jpeg"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                    Pavinkumar
                </div>
            </div>
            </div>
 <Navigation/></div>
</div>
        </div>

  );

  }
  export default Home;

