/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactCV from 'react-cv';
import CVData from './CVData';

const CVRenderer = () => (
  <ReactCV
    {...CVData}
  />
);

export default CVRenderer;
