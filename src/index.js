import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import Root from './components/Root/Root';
import './stylesheet/main.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

ReactDOM.render(<Root />, document.getElementById('root'));
