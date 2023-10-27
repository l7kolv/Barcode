import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeWrap, MenuSelect } from '../CSS/Home';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
  return (
    <HomeWrap >
      <h1>메뉴를 선택해 주세요</h1>
      <MenuSelect>
        <div className='generator'>
        <Link to="/barcode_scanner">
            <Button variant="contained" size="large" style={{background:"rgb(88, 194, 247)", color:"#fff"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style={{padding:30}} fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
                    <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
                </svg>
            </Button>
            </Link>
        </div>
        <div>
        <Link to="/qr_scanner">
            <Button variant="contained" size="large" style={{background:"rgb(88, 194, 247)", color:"#fff"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style={{padding:30}} fill="currentColor" class="bi bi-upc-scan" viewBox="0 0 16 16">
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
                </svg>
            </Button>
            </Link>
        </div>
        <div>
        <Link to="/generator">
            <Button variant="contained" size="large"  className='btn' style={{background:"rgb(88, 194, 247)", color:"#fff"}}>
                <FontAwesomeIcon icon = {faPlus} className='icon'/>
            </Button>
            </Link>
        </div>
  
      </MenuSelect>


    </HomeWrap>
  );
};

export default Home;