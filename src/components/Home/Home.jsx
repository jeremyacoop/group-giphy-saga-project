import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

function Home(props) {

    const dispatch = useDispatch();

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

      
        </div>
      </>
  );
}

export default Home;