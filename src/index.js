import React from 'react';
import { createRoot } from 'react-dom/client';
import  GifExpertApp   from './GirfExpertApp';

import './index.css';


const divRoot = createRoot( document.querySelector('#root'));
divRoot.render( <GifExpertApp />);


