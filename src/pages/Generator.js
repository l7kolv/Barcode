import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Barcode from "react-barcode";
import styled from "styled-components";
import ReactToPrint from "react-to-print";
import { BtnWrap, QRWrap } from "./Style";
import QRCode from "qrcode.react";
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  text-align: center;
`;

const Input = styled.input`
  margin: 25px 0;
  border: none;
  padding: 5px;
  font-size: 14px;
  outline: none;
  text-align: center;
`;

const Select = styled.select`
  margin-bottom: 15px;
`;

const Button = styled.button``;

const BarcodeComponent = props => {
  const { printRef } = props;
  const svgRef = useRef(null);
  const [input, setInput] = useState(null);
  const [format, setFormat] = useState("CODE128");

  return (

    <div ref = {printRef} className="barcode_wrap">

    <Barcode
      ref={svgRef}
      value={input}
      displayValue={false}
      format={format}
      fontOptions="600"
      textMargin={4}
      margin={0}
    />

    <Input
      type="text"
      placeholder="barcode를 입력하세요"
      onChange={(e) => setInput(e.target.value)}
    />
  </div>
  );
 

};



const QrComponent = props => {
    const [URL, setURL] = useState("");
    const [showQRReader, setShowQRReader] = useState(false);
    const [result, setResult] = useState("");
    const [showQR, setShowQR] = useState(true);
    const { printRef } = props;
 
  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setShowQRReader(false);
      setShowQR(true);

    }
  };

  useEffect(()=>{
    handleScan()
  }, [])
    return(
            <QRWrap ref = {printRef}>
                 <QRCode value={URL}/>
                 <Input onChange={(event) => setURL(event.target.value)} type="text" placeholder="QR코드를 입력하세요"/>
        

            </QRWrap>
        
     

    )
}

function Generator() {
  const componentRef = useRef(null);
  const [selectCode, setSelectCode] = useState(1);
  return (
    <div>
        <Wrapper>
            <BtnWrap>
                <button className={selectCode == 1 ? "active" : ""} onClick={()=>{setSelectCode(1)}}>Barcode</button>
                <button className={selectCode == 2 ? "active" : ""} onClick={()=>{setSelectCode(2)}}>QR코드</button>
            </BtnWrap>
            {selectCode==1 ? <BarcodeComponent printRef = {componentRef}/> : <QrComponent printRef = {componentRef}/> }
            
           

            <ReactToPrint
                trigger={() => <Button>인쇄하기</Button>}
                content={() => componentRef.current}
            />


        </Wrapper>


    </div>
  );
}
export default Generator;
