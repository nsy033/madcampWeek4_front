import React, { Component } from 'react';
import './style.css';
import mtm_path from './mtm.png';
import bag_path from './bag.png';
import phone_path from './phone.png';
import socks_path from './socks.png';
import Pendraw from "../Pendraw";

class BackgroundImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            svg: [
                /*mtm_svg*/ "M98.62,6.54c1.36,0,4.86-.21,5.63-.17a55.85,55.85,0,0,1,5.87,1.1s3.66.74,7.74,1.22a77.88,77.88,0,0,0,9.68.52,109.29,109.29,0,0,0,11.93-.64c6.71-.72,9.92-1.56,12.13-1.94,1.12-.19,2.44-.7,5.1-1.16a2.37,2.37,0,0,1,.9,0,3.29,3.29,0,0,1,1.61,1c.61.58.65.78,1.17,1.29a3.18,3.18,0,0,0,1.42,1.1C164.53,10,169,12.05,169,12.05c4.1,1.38,8.17,3.32,12.26,5,8.11,3.27,8.75,3.61,9.61,4.13a37.74,37.74,0,0,1,8.64,7.29,40.44,40.44,0,0,1,5.23,7.61,14.1,14.1,0,0,0,.9,1.81c.87,1.42,3.65,13.09,5.49,20,1.58,5.94,1.07,3.88,3.8,16.51,1.25,5.76,1.53,7.44,3.23,15.81,1.1,5.41,2.3,11.11,4.71,22.52,3.24,15.35,3.55,16.65,4.71,22.19,1.86,8.91,5.23,25.23,7.74,40.19,4.57,27.26,4.82,30.63,5.36,36.78.32,3.7,1,9.93,1.16,13.2a5,5,0,0,1-.27,2.28,5.64,5.64,0,0,0-.67.79,2.63,2.63,0,0,0-.08.93c0,1-.09,2.18-.08,5.06,0,0,.56,10.38.62,12.77a1.72,1.72,0,0,1-.06.74c0,.09-.22.2-.42.41s-.73.17-.84.17c-3.35,0-7.29,0-10.82.18-5.93.22-7.85.42-8,.45,0,0-3.33.1-3.49,0a1.51,1.51,0,0,1-.38-.34c-.22-.21-.26-.26-.54-.51a1.65,1.65,0,0,1-.61-1.07c0-.21-.43-4.18-.6-5.51s-.36-2.48-.9-5a16,16,0,0,0-1.88-5.25,10.71,10.71,0,0,0-1-1.39,9.93,9.93,0,0,1-1.88-2.24c-.94-.83-2.28-5-2.77-6.12-.28-.66-2.59-6.89-4.86-13.21-1.56-4.31-2.61-6.25-4.26-11.33-.65-2-1.19-1.85-1.19-1.85-.17,5.21-.17,8.21-.13,11.13-.1,4.71.33,10.48.3,11,0,0,0,3.31,0,8.49,0,.57-.45.88-.57,1.06a5.44,5.44,0,0,0-.76,1.27c-.17.71-.1.79-.43,2.23-.54,2.34-1.43,6-2.11,10,0,0-.94,5.34-1.5,6.24a3.49,3.49,0,0,1-.75.85c-.35.31-.62.24-1.23.28s-1,.28-1.32.29c-6.18.26-19.8-.52-19.8-.52-4.34,0-10.35-.67-28.16-.52-12.78.11-20.06,0-30.29.11-7.68,0-23.61.94-34.39,1,0,0-2.36.06-6.24-.19-.14,0-.32-.27-.55-.52s-.82-.78-1.51-1.46c-.87-.87-1.45-1.4-1.53-1.77-.26-1.33-.48-2.78-1-5-.91-4.23-.94-4.37-1.7-7.72-.28-1.21-.54-3.31-.7-3.56s-.62-.83-1-1.46a3.07,3.07,0,0,1-.22-1.53c-.09-4.81.14-9.21.23-13.75,0-.19-.05-.9.13-9.82,0-1.36,0-8.05,0-8.15-1.67,4.18-2.86,7.62-3.74,10-4.59,12.25-5,13.08-5.75,15.72a70.53,70.53,0,0,1-3.22,7.76,6.7,6.7,0,0,1-1.2,1.7,14.57,14.57,0,0,0-1.7,1.89,7.32,7.32,0,0,0-.83,1.28,21.51,21.51,0,0,0-1.51,4.68c-.93,4.77-1.31,7.37-1.51,9a10.09,10.09,0,0,1-.44,2.48,3,3,0,0,1-.61.78,1.31,1.31,0,0,1-.66.45c-.69.21-9.43-.46-14-.51l-8.18-.1c-.75,0-.8-.1-1.07-.37s-.32-.59-.29-1.59c.06-2.24.25-4.48.52-6.7.55-4.47-.38-5.37.05-8.26a8,8,0,0,0-.21-3.12,4.85,4.85,0,0,0-.41-.94c-.21-.33-.36-.46-.47-.62a2.38,2.38,0,0,1,0-2c.42-1.15-.57-1.85,1.56-18,.69-5.23,1.41-9.55,2.81-18,1.46-8.8,1.64-9.41,2.85-16.83,1.74-10.65,1.48-10.15,2.45-15.59,1.2-6.79,1.82-8.83,4.67-21.77,1.06-4.8,2.09-9.7,4.16-19.49.5-2.39,2.54-12,5.35-25.72,3.29-16,4.93-24,5-24.31C46.54,58.92,52,38.47,53.1,36.35a37.26,37.26,0,0,1,5.1-7.23,42.82,42.82,0,0,1,8.1-7.22c2.45-1.66,12-5.5,14.39-6.55,1.84-.81,8.44-3.56,11.33-4.95a43,43,0,0,0,4.42-2C96.9,8.15,97.9,6.43,98.62,6.54Z",
                /*bag_svg*/ "M215.72,237.45c0-7.61-.1-19.3-.34-33.63-.33-19.71-.6-22.51-.77-36.78-.21-18.06.18-16.87.17-45.88,0-29.45.18-29.66,0-41.12a272.17,272.17,0,0,1,.77-28.61c.31-4.17.07-7.63.08-10,0-1.48-.48-1.52-1.36-2.47a3.87,3.87,0,0,0-2.55-1.62c-1.93-.26-4.75-.82-8.18-1.07-5.14-.37-7.77-.47-15.24-.45-2.1,0-7-.36-8.76-.18-.1-1.27-.64-7.66-2.3-12a16.31,16.31,0,0,0-1.54-3.07,20.25,20.25,0,0,0-3.06-3.4A10.23,10.23,0,0,0,168.57,15a75.61,75.61,0,0,1-7.6-2.49c-3.39-1.28-3.18-1.67-5.1-2.25a13.17,13.17,0,0,0-8.42.1A25.56,25.56,0,0,0,141,13.54c-7.51,4.16-21.29,16.63-21.8,17.12-2.19,2.11-4.06,3.67-5.08,4.93l-12,0a4.5,4.5,0,0,1-1.36-1,3,3,0,0,1-.77-1.31,15.93,15.93,0,0,0-1-3.49c-1.14-2.31-4-5.26-6.38-6.13a9,9,0,0,0-2.38-.58,12.72,12.72,0,0,0-2.65-1.81,12.06,12.06,0,0,0-6.68-1.41A22.9,22.9,0,0,0,72.05,22a46,46,0,0,0-12.86,8.33c-2.13,1.92-5,4.72-8.12,7.52-2,.08-3.93-.05-5.88,0a7,7,0,0,0-3,.55,5.67,5.67,0,0,0-2.72,2.73,7.16,7.16,0,0,0-.85,3.32c.09,3.17-.28,7.93.39,13.68,1.29,11.2,1.86,20.28,2.33,26.25.88,11.2,1.43,22.91,2.13,35.58.81,14.68.59,32.7.42,46.91-.16,14.53-.34,27.93-1.53,45.89-.7,10.63-1.31,19.65-2.29,26.35.08,1.93-.41,2.31.58,3.3a11.43,11.43,0,0,0,2.22,1.7c7.32-.06,18.15.06,31.8,0,25.23-.13,28.19-1.44,50.53-1.65,11-.11,26.85.24,58.56.93,10.94.24,19.95.5,26.37.46a12,12,0,0,0,2.86-.24,2.79,2.79,0,0,0,1.6-1.22,4.87,4.87,0,0,0,1-2.54A10.76,10.76,0,0,0,215.72,237.45ZM87.35,30.29a2.21,2.21,0,0,1-.25.55,4.73,4.73,0,0,1-.76,2.09,5.51,5.51,0,0,1-2.22,1.74,11.07,11.07,0,0,1-3.53,1.14L62.69,36a6.06,6.06,0,0,1-1.6.89,5.73,5.73,0,0,1-1.4.34h-2.8a.9.9,0,0,1-.59-.09c-.09,0-.36-.19-.35-.39a.35.35,0,0,1,.14-.23c.31-.28.75-.67,1.29-1.13a44.23,44.23,0,0,1,20-9.71,48.44,48.44,0,0,1,7.24-1.23,10.21,10.21,0,0,1,1,0,1.1,1.1,0,0,1,.82,0c.06,0,.2.12.55.66a6.55,6.55,0,0,1,.37.62c0,1.29,0,2.57.07,3.85A2.45,2.45,0,0,1,87.35,30.29Zm76.18,4.78c-3.33.66-8.51.77-13,1-6.12.32-9.94.91-17.48.33a1.31,1.31,0,0,1,0-.6,1.27,1.27,0,0,1,.34-.54c.69-.68,1.67-1.64,2.86-2.78,2.23-2.13,5.23-5.13,8.76-8s5.75-5.1,10.05-7.77a11,11,0,0,1,2.47-1.1,5.25,5.25,0,0,1,2.4-.3,4.14,4.14,0,0,1,1.1.3,10.86,10.86,0,0,1,1.75,3.26A31.14,31.14,0,0,1,164,28.38,52.14,52.14,0,0,1,163.53,35.07Z",
                /*phone_svg*/ "M189.44,34.89a1.78,1.78,0,0,1,.33-.24,22.9,22.9,0,0,0,.61-2.69,25.32,25.32,0,0,0-.32-9.49c-.66-3-1.35-6.12-3.93-9.17A17,17,0,0,0,178,8.07H80.36a5.78,5.78,0,0,0-3,1.44A21.4,21.4,0,0,0,70.22,20a20.06,20.06,0,0,0-.79,5.18V51.82a7.86,7.86,0,0,1,1.27,3.85V84.6a9.5,9.5,0,0,1-.4,2.18,9,9,0,0,1-.74,1.76V229A20.07,20.07,0,0,0,70,232.6a18.64,18.64,0,0,0,2.38,5.94,13.89,13.89,0,0,0,3.71,4.16,13,13,0,0,0,4.31,2.08h99.8a12.68,12.68,0,0,0,3.12-1.48,13.07,13.07,0,0,0,3-2.68,14.1,14.1,0,0,0,1.91-3.1,20.62,20.62,0,0,0,1.81-7.66V95.45c-.09-.91-.21-1.87-.38-2.87-.13-.85-.29-1.66-.46-2.42V52.53c0-.09.09-.2.13-.31a3.74,3.74,0,0,0,.11-.46V47.34l-.25-.15v-12A1.69,1.69,0,0,1,189.44,34.89ZM99.11,47.54a9.85,9.85,0,0,1-6.56,8h-6A9.32,9.32,0,0,1,82,52.8a9.22,9.22,0,0,1-2.26-4.94V24.48a9.33,9.33,0,0,1,6.55-7.61h5.75a8.67,8.67,0,0,1,4.12,1.94,8.9,8.9,0,0,1,2.92,5.75Z",
                /*socks_svg*/ "M58,15c13,.63,23.51.6,30.85.44,5.89-.12,12-.38,20.8,0,7,.31,12.7.89,16.55,1.35a3.1,3.1,0,0,1,.89.73,3.45,3.45,0,0,1,.7,2,23.89,23.89,0,0,1,0,5.23c-.57,3.06-.63,6.21-1.24,9.27-.55,2.83-.48,4.09-.37,16.34.08,9.24.12,13.86.1,15.53,0,4-.51,11.38-1.45,26a87.61,87.61,0,0,0,.43,19.79,48.92,48.92,0,0,0,1.35,6.26,50.68,50.68,0,0,0,4.91,11.38c3.58,6.13,7.7,10.15,12.56,14.82,10.5,10.11,15.75,15.16,18.17,17.26,1.71,1.48,19.47,16.83,25.4,22a37,37,0,0,1,4.69,4.85,39.21,39.21,0,0,1,4.64,7.39,44.15,44.15,0,0,1,3,7.6,34.43,34.43,0,0,1,1.35,12.62,33.54,33.54,0,0,1-1.83,8.25,31.57,31.57,0,0,1-8.9,13.53,32,32,0,0,1-16.07,7.23,40.11,40.11,0,0,1-14.45-.16c-6.65-1.27-11.3-3.9-16.34-6.74a64.6,64.6,0,0,1-9.38-6.26c-1.19-1-4.1-3.4-11.11-11.54-3.81-4.42-4.54-5.54-8.73-10.62-3.07-3.7-7-8.42-11.65-13.48a177.23,177.23,0,0,0-16.23-15.74C79.2,174.09,75.49,171,70.92,168.5a47.33,47.33,0,0,1-9.12-6,42.74,42.74,0,0,1-5.23-5.29,40.72,40.72,0,0,1-4.69-7.17A42.41,42.41,0,0,1,48,138.2a39,39,0,0,1-.06-14.78c.28-1.41,1-3.72,2.54-8.35,1.94-6,2.37-6.53,3.5-10.57a78,78,0,0,0,2-9.22c.36-2.36.55-4.36.65-5.83a2.5,2.5,0,0,0,.59-.91,2.34,2.34,0,0,0,.16-.81c.12-2.46,0-3.68,0-4.8,0-5.93,0-11.51-.21-17.26-.66-16.82-.51-24.94-.65-27.44-.16-2.84-.58-9.94-.59-19.58V17.58A4.86,4.86,0,0,1,56.52,16a1.84,1.84,0,0,1,.75-.81A1.56,1.56,0,0,1,58,15Z"
            ],
            img: [
                mtm_path,
                bag_path,
                phone_path,
                socks_path
            ]
        }
    }

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

                <img className="background-image" src={this.state.img[this.props.item_id]} alt=""></img>
                <svg className="product-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="600px" height="600px" viewBox="0 0 255 255">
                    <defs/>
                    <path id="product-shape" d={this.state.svg[this.props.item_id]}/>
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