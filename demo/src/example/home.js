import React, { useRef } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Container1 = styled.div `
display: flex;
flex-direction: column;
position: relative;
justify-content: space-inbetween;


background-color: red;
margin:0 auto;
}
`;
const Banner = styled.div `
 
.Banner{
 
height:500px;
 background-color: #ff0910;
 display:flex;
 flex:1;
 flex-direction: column;
 justify-content: center;
 align-items:center;
}
@media only screen and (max-width: 1209px) {
  .Banner {

    height:0 auto;
  }
}
 .btnDiv{
   padding:10px;
   display:flex;
   margin-top:50px;
  
 }
 @media only screen and (max-width: 1209px) {
  .btnDiv {
   
    width:400px;
  }
}
img{
  width: 200px;
  
}
 button{
  flex: 1;
  padding: 5px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #090064;
  color: #fff;
  border: 0px;
  border-radius: 8px;
  width: 200px;
  height: 50px;
  cursor: pointer;
 }

 h3{
  font-size: 40px;
  width:100%;
  
  
  color:#e5f5fb;
  padding: 5px;
  text-align: center;
 }
 p{
  font-size: 15px;
  width:100%;
 
  color:#e5f5fb;
  padding: 5px;
  text-align: center;
 }

`;

const Cards = styled.div `
.Cards{
 width: 100%;
 background-color:#e5f5fb;
 
 display: flex;
 flex:1;
 justify-content: center;
 align-items:center;
 padding:30px 10px;
 flex-direction: row;
}
@media only screen and (max-width: 1209px) {
  .Cards {
      flex-direction: column;
      height:0 auto;
  }
}
 .card{
   box-shadow:  5px 2px 8px 2px rgba(0, 0, 0, 0.4);
   width: 300px;
   height:300px; 
   padding:10px;
   margin: 0 10px;
   border-radius: 8px;
   background-color: #343a40;
   color: #e5f5fb;

 }
 @media only screen and (max-width: 1209px) {
  .card {

      margin-bottom: 5px;
  }
}
 h3{
   font-size: 20px;
   width:100%;
   height: 30px;
   background-color:#32383e;
   color:#ff0910;
   padding: 5px;
   text-align: center;
 }
 hr{
  color: #fff;
 }

 a{
   color: #fff;
   
 }

`;

const Footer = styled.div `
.Footer{
width:100%;
height:13vh;
background-color: #32383e;
color: #e5f5fb;
display: flex;


justify-content: center;

}
p{
  margin-top:20px;
  font-size: 16px;
 
  
}
@media only screen and (max-width: 1209px) {
  .Footer {

    height:20vh;
  }
}
`;
const Home = () => {



    const composebtn = () => {
        window.location.href = "demo/src/example/email.html";
    }


 const goTobuild = () =>{
  window.location.href = "/templateBuilder";
 }

    return ( <Container1>

        <Banner>
        <div className="Banner">
          <div className="imgDiv">
            <img src="/demo/src/example/img/rename2.png" alt="image"/>
          </div>
          <h3>Promotional Email System.</h3>
          <p>Simple, fast & Easy way to promote your products.</p>
        <div className = "btnDiv">
        <button onClick={ goTobuild } > Build Html Template. </button> 
        <button  onClick={ composebtn } > Write text Email. </button> 
        </div> 
        </div>
        </Banner>

        <Cards>
          <div className="Cards">
        <div className = "card">
        <h3> Gmail accounts only. </h3> 
        
        <p>
        Only gmail id and password is allowed to send emails.

        make sure to change your gmail settings before using this service.
        
        <li> Disable captcha: <a href = "https://accounts.google.com/DisplayUnlockCaptcha">Click here!</a></li>

        <li> Less secure app acess: <a href = "https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4N5QQCdNosSmTMO8CtdvngYByygPWenry7kVe51x523w9SV5kPVK7sPS5HfkCLIFGrHCGImav-ExkhucZIZush0MLnh1A" > Cilck here!</a></li>
        
        </p> 
        </div>

        <div className = "card">
        <h3> Template Builder. </h3> 
        
        <p> Easy and fast way to build html template with drag - drop feature and exporting the html code. </p> 
        </div>

        <div className = "card">
        <h3> Rich Text Editor. </h3> 
       
        <p> Write text emails and make them look good by using multiple options in text editor. </p> 
        </div>

        <div className = "card" >
        < h3 > Multiple Recipients. </h3> 
     
        <p> Send emails to multiple recipients.its an easy way to sell and promote products. </p>
         </div>

         </div>
        </Cards>

        <Footer >
          <div className="Footer"><p>© Sem1 project 2021</p></div>

        </Footer>
            
        </Container1>
    );
};

export default Home;