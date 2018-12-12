import React from 'react';
import 'styles.css';
import CommentsApp from 'components/presentation/CommentsApp';
import 'bulma/css/bulma.css';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// https://www.npmjs.com/package/@fortawesome/react-fontawesome
// Building Fontawesome library to use both brand and standard solid icons anywhere in our application.
library.add(fab, fas, far);

// We get a couple of neat tools bundled with `create-react app`:
// Webpack - Links together .js files (bundling for deployment, `npm run build`).
// Babel - Turns ES2015/6/7 and JSX into ES5 code (for older browsers to be able to read).
// Jest - Automated test runner [ initiated when we do `npm run test` -> finds all files ending with `.test.js` and executes tests inside of them -> prints results to terminal -> waits for any file changes, then runs all tests again ].

// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
// ^ Functional components preferred over class-based because..easier to read and test, end up with less code, helps to use best practices (airbnb es-lint suggests it) and possible performance boost for future React versions.

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Comments</h1>
            <h2 className="subtitle">
              Simple CRUD App built with React (w/ Jest & Enzyme Testing) and AWS Microservices
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container is-fluid">
          <CommentsApp />
        </div>
      </section>
      <section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source
              code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
              is licensed{' '}
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default App;
