import React from 'react';
import ReactCV from 'react-cv';
import Helmet from 'react-helmet';
import { CVData } from '../CVData';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Sabri Berkay Aydin Online Resume</title>
      <meta name="Description" CONTENT="Sabri Berkay Aydin, Lead Software Developer. Online CV / Resume " />
    </Helmet>
    <ReactCV
      {...CVData}
    />
    <div>You can create your own CV like this</div>
  </>
);
