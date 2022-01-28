import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';

function Home() {

    const dispatch = useDispatch();

    const allImages = useSelector(store => store.imageReducer);

    const fetchImages = () => {
        // get images from Giphy and store the links
        // in the reducer
        dispatch({
            type: 'FETCH_IMAGES'
        });
    }

    useEffect(() => {
        console.log('In useEffect');
        fetchImages()
    }, []);

  return (
      <>
        <div>
        <h1>Images</h1>
      <Header />
     {JSON.stringify(allImages)} 
        </div>
      </>
  );
}

export default Home;