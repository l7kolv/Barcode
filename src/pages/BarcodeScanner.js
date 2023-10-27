import { Fab } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { BarcodeScannerWrap } from "../CSS/Home";
const BarcodeScanner = () => {
  const [data, setData] = React.useState("Not Found");
  const [devices, setDevices] = React.useState([]);
  const [deviceIndex, setDeviceIndex] = React.useState(0);

  
  useEffect(() => {
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) =>
        setDevices(devices.filter((device) => device.kind === "videoinput"))
      );
  }, []);
  return (
    <BarcodeScannerWrap>
        <header>

          <Link to="/">
            <Fab style={{marginRight:10, background:"rgb(88, 194, 247)", color:"#fff"}} >
                <ArrowBack/>
            </Fab>
        </Link>
        HOME
        </header>

        <div style={{ maxWidth:  600, maxHeight: 400 }}>
          <BarcodeScannerComponent
            facingMode="user"
            width="100%"
            height="100%"
            onUpdate={(err, result) => {
              if (result) setData(result.getText());
            }}
          />
          <p>{data}</p>
        </div>
    </BarcodeScannerWrap>
  );
};

export default BarcodeScanner;
