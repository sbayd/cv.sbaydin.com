/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import CVRenderer from '../CVRenderer';
import '../styles.css';

const IndexPage = () => (<CVRenderer />);

export const Head = () => (
  <>
    <title>S. Berkay Aydın: Software Architect & Engineering Director</title>
    <meta name="description" content="S. Berkay Aydın: Experienced Software Architect and Engineering Director at Jotform. Specializing in innovative software solutions, team leadership, and technology strategy." />
    <meta name="keywords" content="S. Berkay Aydın, Software Architect, Engineering Director, Technology Leadership, Software Solutions, Team Management, Tech Strategy, Jotform" />
    <meta name="author" content="S. Berkay Aydın" />
    <meta property="og:title" content="S. Berkay Aydın: Software Architect & Engineering Director" />
    <meta property="og:description" content="Discover the professional journey of S. Berkay Aydın, an accomplished Software Architect and Engineering Director, known for delivering cutting-edge software solutions and leading high-performance teams." />
    <link rel="canonical" href="https://cv.sbaydin.com/" />
    <meta property="og:url" content="https://cv.sbaydin.com/" />
    <meta property="og:type" content="profile" />
    <meta property="og:profile:first_name" content="Sabri Berkay" />
    <meta property="og:profile:last_name" content="Aydın" />
    <meta property="og:profile:username" content="sbayd" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:site" content="@sbayd" />
    <meta property="twitter:title" content="S. Berkay Aydın: Software Architect & Engineering Director" />
    <meta property="twitter:creator" content="@sbayd" />
    <SpeedInsights />
  </>
);
export default IndexPage;
