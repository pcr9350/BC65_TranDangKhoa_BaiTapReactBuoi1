// state: là giá trị thay đổi bởi sự kiện trong component
import React, { useState } from "react";

const DemoState = () => {
  const [state, setState] = useState(10);
  const [state1, setState1] = useState(8);
  const [fSize, setFSize] = useState(25);
  const [imgSrc, setImgSrc] = useState('img/black-car.jpg')
  return (
    <div className="container">
      <h3>
        Count: <span className="text-danger">{state}</span>
      </h3>
      <button
        className="btn btn-dark"
        onClick={() => {
          setState(state + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-dark ml-2"
        onClick={() => {
          setState(state - 1);
        }}
      >
        -
      </button>
      <br /><br />
      <h3>
        Count: <span className="text-danger">{state1}</span>
      </h3>
      <button
        className="btn btn-dark"
        onClick={() => {
          setState1(state1 + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-dark ml-2"
        onClick={() => {
          setState1(state1 - 1);
        }}
      >
        -
      </button>
      <br />
      <br />
      <p style={{fontSize: fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum?</p>
      <button className="btn btn-success" onClick={() => {
        let newFSize = fSize + 2;
        // gọi hàm setFSize để binding giá trị mới
        setFSize(newFSize);
      }}>Zoom in</button>
      <button className="btn btn-success mx-2" onClick={() => {
        
        setFSize(fSize - 2);
      }}>Zoom out</button>
      <hr />
      <h3>Change color car</h3>
      <div className="row">
        <div className="col-4">
            <img src={imgSrc} alt="..." className="w-100"/>
        </div>
        <div className="col-8">
            <button style={{background:'red'}} className="btn mx-2 text-white" onClick={() => {
              let imgSrcRed = "/img/red-car.jpg";
              setImgSrc(imgSrcRed);
            }}>Red Color</button>
            <button style={{background:'gray'}} className="btn mx-2 text-white" onClick={() => {
              let imgSrcGray = "/img/silver-car.jpg";
              setImgSrc(imgSrcGray);
            }}>Silver Color</button>
            <button style={{background:'black'}} className="btn mx-2 text-white" onClick={() => {
              let imgSrcBlack = "/img/black-car.jpg";
              setImgSrc(imgSrcBlack);
            }}>Black Color</button>
        </div>
      </div>
      
    </div>
  );
};

export default DemoState;
