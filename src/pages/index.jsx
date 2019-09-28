import React from 'react';
import ReactCV from 'react-cv';
import Helmet from 'react-helmet';
import { CVData } from '../CVData';
import '../styles.css';

export default class MYCV extends React.Component {
  componentDidMount() {
    this.removeSVGHack();
  }

  componentDidUpdate() {
    this.removeSVGHack();
  }

  // eslint-disable-next-line class-methods-use-this
  removeSVGHack() {
    try {
      global.document.body.classList.add('isLoaded');
    } catch (e) {
      console.error('shit', e);
    }
  }

  render() {
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
  }
}
