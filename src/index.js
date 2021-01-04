import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import '../node_modules/reveal.js/dist/reveal.css';
import '../node_modules/reveal.js/dist/theme/serif.css';
import './style.scss';

// const presentation = new Reveal();
// presentation.initialize();

Reveal.initialize({
  plugins: [Markdown]
});