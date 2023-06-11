#!/usr/bin/env node
var prerender = require('./lib');

// var server = prerender();

// server.use(prerender.sendPrerenderHeader());
// server.use(prerender.browserForceRestart());
// // server.use(prerender.blockResources());
// server.use(prerender.addMetaTags());
// server.use(prerender.removeScriptTags());
// server.use(prerender.httpHeaders());
var server = prerender({
  chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars']
});
server.start();
