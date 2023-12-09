/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import ReactCV from 'react-cv';
import CVData from './CVData';

const CVRenderer = () => {
  useEffect(() => {
    global.document.body.classList.add('isLoaded');
    setTimeout(() => {
      try {
        // Inject feedback script
        const scr = window.document.createElement('script');
        scr.defer = true;
        scr.onload = () => {
          const feedbackButton = new window.JF_FeedbackEmbedButton({ // eslint-disable-line
            buttonText: 'Contact',
            buttonFontColor: '#FFFFFF',
            buttonBackgroundColor: '#00d1b2',
            buttonSide: 'Bottom',
            buttonAlign: 'Right',
            buttonIcon: 'default',
            formId: 92511313821952,
          });
        };
        scr.src = 'https://form.jotform.com/cardforms/feedbackEmbedButton.min.js';
        document.head.appendChild(scr);
      } catch (e) {
        console.error(e);
      }
    }, 3000);
  }, []);
  return (
    <ReactCV
      {...CVData}
    />
  );
};

export default CVRenderer;
