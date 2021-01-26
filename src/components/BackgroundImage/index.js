import React, { Component } from 'react';
import './style.css';
import path from './mtm.png';
import Pendraw from "../Pendraw";

class BackgroundImage extends Component {

    componentDidMount() {
         // Reference the color shape that was drawn over the image

         const overlay = document.getElementById("product-shape");
         overlay.style.fill = this.props.colorInfo[0];
         

         // Click on a color
         var el = document.getElementsByClassName("color");
         for (var i = 0; i < el.length; i++) {
             el[i].onclick = changeColor;
         }
 
         function changeColor(e) {
             // get the hex color
             let hex = e.target.getAttribute("data-hex");
             // set the hex color
             overlay.style.fill = hex;
             
         }
 
    }

    render () {

    return (
        <div className="customize" >
            <div className="container">
            <img className="background-image"  src={path} alt=""></img>

            <img className="background-image" src={path} alt=""></img>
            <svg className="product-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="600px" height="600px" viewBox="0 0 255 255">

                <defs/>
                <path id="product-shape" d="M98.62,6.54c1.36,0,4.86-.21,5.63-.17a55.85,55.85,0,0,1,5.87,1.1s3.66.74,7.74,1.22a77.88,77.88,0,0,0,9.68.52,109.29,109.29,0,0,0,11.93-.64c6.71-.72,9.92-1.56,12.13-1.94,1.12-.19,2.44-.7,5.1-1.16a2.37,2.37,0,0,1,.9,0,3.29,3.29,0,0,1,1.61,1c.61.58.65.78,1.17,1.29a3.18,3.18,0,0,0,1.42,1.1C164.53,10,169,12.05,169,12.05c4.1,1.38,8.17,3.32,12.26,5,8.11,3.27,8.75,3.61,9.61,4.13a37.74,37.74,0,0,1,8.64,7.29,40.44,40.44,0,0,1,5.23,7.61,14.1,14.1,0,0,0,.9,1.81c.87,1.42,3.65,13.09,5.49,20,1.58,5.94,1.07,3.88,3.8,16.51,1.25,5.76,1.53,7.44,3.23,15.81,1.1,5.41,2.3,11.11,4.71,22.52,3.24,15.35,3.55,16.65,4.71,22.19,1.86,8.91,5.23,25.23,7.74,40.19,4.57,27.26,4.82,30.63,5.36,36.78.32,3.7,1,9.93,1.16,13.2a5,5,0,0,1-.27,2.28,5.64,5.64,0,0,0-.67.79,2.63,2.63,0,0,0-.08.93c0,1-.09,2.18-.08,5.06,0,0,.56,10.38.62,12.77a1.72,1.72,0,0,1-.06.74c0,.09-.22.2-.42.41s-.73.17-.84.17c-3.35,0-7.29,0-10.82.18-5.93.22-7.85.42-8,.45,0,0-3.33.1-3.49,0a1.51,1.51,0,0,1-.38-.34c-.22-.21-.26-.26-.54-.51a1.65,1.65,0,0,1-.61-1.07c0-.21-.43-4.18-.6-5.51s-.36-2.48-.9-5a16,16,0,0,0-1.88-5.25,10.71,10.71,0,0,0-1-1.39,9.93,9.93,0,0,1-1.88-2.24c-.94-.83-2.28-5-2.77-6.12-.28-.66-2.59-6.89-4.86-13.21-1.56-4.31-2.61-6.25-4.26-11.33-.65-2-1.19-1.85-1.19-1.85-.17,5.21-.17,8.21-.13,11.13-.1,4.71.33,10.48.3,11,0,0,0,3.31,0,8.49,0,.57-.45.88-.57,1.06a5.44,5.44,0,0,0-.76,1.27c-.17.71-.1.79-.43,2.23-.54,2.34-1.43,6-2.11,10,0,0-.94,5.34-1.5,6.24a3.49,3.49,0,0,1-.75.85c-.35.31-.62.24-1.23.28s-1,.28-1.32.29c-6.18.26-19.8-.52-19.8-.52-4.34,0-10.35-.67-28.16-.52-12.78.11-20.06,0-30.29.11-7.68,0-23.61.94-34.39,1,0,0-2.36.06-6.24-.19-.14,0-.32-.27-.55-.52s-.82-.78-1.51-1.46c-.87-.87-1.45-1.4-1.53-1.77-.26-1.33-.48-2.78-1-5-.91-4.23-.94-4.37-1.7-7.72-.28-1.21-.54-3.31-.7-3.56s-.62-.83-1-1.46a3.07,3.07,0,0,1-.22-1.53c-.09-4.81.14-9.21.23-13.75,0-.19-.05-.9.13-9.82,0-1.36,0-8.05,0-8.15-1.67,4.18-2.86,7.62-3.74,10-4.59,12.25-5,13.08-5.75,15.72a70.53,70.53,0,0,1-3.22,7.76,6.7,6.7,0,0,1-1.2,1.7,14.57,14.57,0,0,0-1.7,1.89,7.32,7.32,0,0,0-.83,1.28,21.51,21.51,0,0,0-1.51,4.68c-.93,4.77-1.31,7.37-1.51,9a10.09,10.09,0,0,1-.44,2.48,3,3,0,0,1-.61.78,1.31,1.31,0,0,1-.66.45c-.69.21-9.43-.46-14-.51l-8.18-.1c-.75,0-.8-.1-1.07-.37s-.32-.59-.29-1.59c.06-2.24.25-4.48.52-6.7.55-4.47-.38-5.37.05-8.26a8,8,0,0,0-.21-3.12,4.85,4.85,0,0,0-.41-.94c-.21-.33-.36-.46-.47-.62a2.38,2.38,0,0,1,0-2c.42-1.15-.57-1.85,1.56-18,.69-5.23,1.41-9.55,2.81-18,1.46-8.8,1.64-9.41,2.85-16.83,1.74-10.65,1.48-10.15,2.45-15.59,1.2-6.79,1.82-8.83,4.67-21.77,1.06-4.8,2.09-9.7,4.16-19.49.5-2.39,2.54-12,5.35-25.72,3.29-16,4.93-24,5-24.31C46.54,58.92,52,38.47,53.1,36.35a37.26,37.26,0,0,1,5.1-7.23,42.82,42.82,0,0,1,8.1-7.22c2.45-1.66,12-5.5,14.39-6.55,1.84-.81,8.44-3.56,11.33-4.95a43,43,0,0,0,4.42-2C96.9,8.15,97.9,6.43,98.62,6.54Z"/>
            </svg>
            </div>

            <div className="colors">
                <div className="color" style={{background: this.props.colorInfo[0]}} data-hex={this.props.colorInfo[0]}></div>
                <div className="color" style={{background: this.props.colorInfo[1]}} data-hex={this.props.colorInfo[1]}></div>
                <div className="color" style={{background: this.props.colorInfo[2]}} data-hex={this.props.colorInfo[2]}></div>
                <div className="color" style={{background: this.props.colorInfo[3]}} data-hex={this.props.colorInfo[3]}></div>
                <div className="color" style={{background: this.props.colorInfo[4]}} data-hex={this.props.colorInfo[4]}></div>
                <div className="color" style={{background: this.props.colorInfo[5]}} data-hex={this.props.colorInfo[5]}></div>
            </div>
        </div>

    );
}
}
    
export default BackgroundImage;