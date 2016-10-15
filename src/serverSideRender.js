import React from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'jsdom';
import BlueText from './BlueText';
import indexHtml from './index.html';

/**
 * Pretend to be a browser so react-csjs has a global 'document' object in
 * which to insert the style tag. Also needed for calling React.render()
 * (see below).
 */
global.document = jsdom.jsdom(indexHtml);
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

const serverSideRender = (req, res) => {
  /**
   * Need to render to the jsdom and send the raw HTML from that (as opposed to
   * using ReactDOMServer.renderToString on just the component) because that's
   * where the styles were inserted by react-csjs.
   */
  ReactDOM.render(
    <BlueText />,
    global.document.getElementById('app')
  );

  res.send(`
    <!DOCTYPE html>
    ${global.document.documentElement.outerHTML}
  `);
};

export default serverSideRender;
