import React, { useEffect } from 'react';
import ReactCV from 'react-cv';
import Helmet from 'react-helmet';
import { CVData } from '../CVData';
import '../styles.css';

export const MyCV = () => {
  useEffect(() => {
    global.document.body.classList.add('isLoaded');
    try {
      // Inject feedback script
      const scr = document.createElement('script');
      scr.onload = () => {
        new JF_FeedbackEmbedButton({
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
    }

    try {
      // Inject feedback script
      const scr = document.createElement('script');
      scr.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-QXDFGHSW36');
      };
      scr.src = 'https://www.googletagmanager.com/gtag/js?id=G-QXDFGHSW36';
      document.head.appendChild(scr);
    } catch (e) {
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sabri Berkay Aydin Online Resume</title>
        <meta name="Description" CONTENT="Sabri Berkay Aydin, Lead Software Developer. Online CV / Resume " />
      </Helmet>
      <ReactCV
        {...CVData}
      />
    </>
  );
};

export default MyCV;
