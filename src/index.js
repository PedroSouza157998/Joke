import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes/routes'
import {ChakraProvider} from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
    <Routes />
    </ChakraProvider>
  ,document.getElementById('root')
);

reportWebVitals();
