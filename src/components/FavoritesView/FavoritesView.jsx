import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';

function FavoritesView() {

    const dispatch = useDispatch();

    const favoriteImages = useSelector(store => store.favoritesReducer);

    const fetchFavoriteImages = () => {
        // get images from Giphy and store the links
        // in the reducer
        dispatch({
            type: 'FETCH_IMAGES'
        });
    }

    useEffect(() => {
        console.log('In useEffect');
        fetchFavoriteImages()
    }, []);

  return (
      <>
        <div>
        <h1>Images</h1>
      <Header />
        <table>
            
            </table> 
        </div>
      </>
  );
}

export default Home;
