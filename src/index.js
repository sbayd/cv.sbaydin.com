/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import CVRenderer from './CVRenderer';

// eslint-disable-next-line no-undef
const container = window.document.getElementById('app');
const root = createRoot(container);
root.render(<CVRenderer />);
