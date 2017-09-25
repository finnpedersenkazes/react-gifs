// external modules
import React from 'react';
import ReactDOM from 'react-dom';

// internal modules
import '../assets/stylesheets/application.scss';
import Gif from './components/gif';
import GifList from './components/gif_list';
import App from './components/app';


// A simple example of a functional component
const Hello = props => <h1>Hello, {props.name}</h1>;

// render an instance of the component in the DOM
// ReactDOM.render(<GifList gifs={[{ giphyId: "27Ju5pmIEgv04"}, {giphyId: "3ov9jTKIzUClTb8EU0"}]} />, document.querySelector('.container'));


// render an instance of the component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
