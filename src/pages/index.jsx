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
      const opacityHack = global.document.querySelector('#opacityHack');
      if (opacityHack) {
        opacityHack.innerHTML = 'body { opacity: 1 !important; }';
      }
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
          <style
            id="opacityHack"
            type="text/css"
          >
            {'body { opacity: 0 !important; transition: opacity 0.4s; -webkit-transition: opacity 0.4s; }'}
          </style>
          <meta name="Description" CONTENT="Sabri Berkay Aydin, Lead Software Developer. Online CV / Resume " />
        </Helmet>
        <ReactCV
          {...CVData}
        />
      </>
    );
  }
}
