import React from 'react';
import { toast } from 'react-toastify';
import { css } from 'glamor';
import _ from 'lodash';

const defaultOptions = {
  position: toast.POSITION.TOP_CENTER,
  closeOnClick: true,
  autoClose: 5000,
  closeButton: false,
};

const errorStyle = {
  width: '800px',
  textAlign: 'center',
  marginTop: '1px',
  fontSize: '20px',
  borderRadius: '2px',
  color: '#fff',
  border: '1px solid',
  lineHeight: '20px',
  background: '#e05b4f',
  borderColor: '#bc332d',
};

const Error = {
  report: (message) => {
    const options = _.merge({className: css(errorStyle)}, defaultOptions);
    toast.error(message, options);
  },
};

export default Error;
