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
      const svgHack = global.document.querySelector('#svg_hack');
      if (svgHack) {
        svgHack.innerHTML = '';
        global.document.head.removeChild(svgHack);
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
          <style id="svg_hack" dangerouslySetInnerHTML="svg { display: none }" />
          <meta name="Description" CONTENT="Sabri Berkay Aydin, Lead Software Developer. Online CV / Resume " />
        </Helmet>
        <ReactCV
          {...CVData}
        />
      </>
    );
  }
}
