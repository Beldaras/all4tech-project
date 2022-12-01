import { w3cHtmlValidator } from 'w3c-html-validator';

const options = { filename: 'docs/index.html' };
w3cHtmlValidator.validate(options).then(w3cHtmlValidator.reporter);