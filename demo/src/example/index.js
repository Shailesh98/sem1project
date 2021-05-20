import React, { useRef } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import EmailEditor from '../../../src';
import sample from './sample.json';

const Container = styled.div `
display: flex;
flex-direction: column;
position: relative;
height: 100%;
width:100%;
`;

const Bar = styled.div `
flex: 1;
background-color: #ff0910;
color: #000;
padding: 15px;

display: flex;

max-height: 80px;

h1 {
flex: 1;
font-size: 25px;
text-align: center;
color: #fff;
padding: 10px 0px;
}

a{
  
font-size: 25px;
text-align: center;
color: #fff;
padding: 10px 0px;
Text-decoration:none;
}
button {
flex: 1;
padding: 5px;
margin-left: 10px;
font-size: 12px;
font-weight: bold;
background-color: #090064;
color: #fff;
border: 0px;
border-radius: 5px;
max-width: 150px;
cursor: pointer;
}
`;

const Popbox = styled.div `
#popup{
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.8);
}

  .popup_inner {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    
    color:#fff;
    font-size: 12px;
   
  }

  textarea{
    position: absolute;
    
    top: 0%;
    bottom: 0%;
    margin: auto;
    background: #222;
    color:#fff;
    font-size: 12px;
    overflow: auto;
    width: 100%;
    height:100%;
  }
  .copyBtn{
      
    flex: 1;
    padding: 10px;
    color: white;
    background-color: #ff0910
    border: 2px solid  #ff0910;
    font-size: 15px;
   
    position: absolute;
    top: 80%;
    right:25%;
    cursor: pointer;
  
    border-radius: 5px;
  }
  .copyBtn: hover{
    color: white;
    background-color: #ff0910
    border: 2px solid black;
  }

  .closebtn{
    border: none;
    flex: 1;
    padding: 10px;
    background: none;
    font-size: 30px;
    color: white;
    position: absolute;
    right: 5%;
    cursor: pointer;
  }
 
`;

const Example = (props) => {

const emailEditorRef = useRef(null);



const closebtn = ()=>{
  const cls = document.getElementById("popup").style.display = "none";
}

const composebtn = ()=>{
  window.location.href = "demo/src/example/email.html";
}
const copyCode = ()=>{
  const htmlcon = document.getElementById("htmlcon");
  htmlcon.select();
  document.execCommand("copy");
  alert("Html copied succesfully.");

}

const exportHtml = () => {
emailEditorRef.current.editor.exportHtml((data) => {
const { design, html } = data;
console.log('exportHtml', html);
const cls = document.getElementById("popup").style.display = "block";

const htmlcon = document.getElementById("htmlcon");

htmlcon.value = html;
//alert('Output HTML has been logged in your developer console.');
});
};

const onDesignLoad = (data) => {
console.log('onDesignLoad', data);
};

const onLoad = () => {
emailEditorRef.current.editor.addEventListener(
'onDesignLoad',
onDesignLoad
);
emailEditorRef.current.editor.loadDesign(sample);
};

return ( <Container>
    <Bar>
        <h1><a href="/">Email Editor.</a>  </h1>

        <button onClick={ exportHtml }> Export HTML </button>
        <button onClick = { composebtn } > Go to Compose Email </button>
    </Bar>

      <Popbox>
      <div id='popup'>
      <button onClick={ closebtn } className="closebtn">X</button>
        <div className='popup_inner'>
        <textarea id = "htmlcon" > </textarea> 
        </div>
        <button onClick = { copyCode }
        className = "copyBtn" >Copy Code</button> 
      </div>
      </Popbox>

    <React.StrictMode>
        <EmailEditor ref={ emailEditorRef } onLoad={ onLoad } />
    </React.StrictMode>
</Container>
);
};

export default Example;