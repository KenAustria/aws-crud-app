import React from 'react';
import 'styles/styles.css';
import CommentsApp from 'components/comments/presentation/CommentsApp';
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
  const backgroundOne = {
    background: '#214872',
    color: '#fbae17',
  };

  const backgroundTwo = {
    background: '#fbae17',
    color: '#214872',
  };

  const backgroundThree = {
    background: '#d1edfc',
    color: '#185394',
  };

  const backgroundFour = {
    background: '#185394',
    color: '#d1edfc',
  };

  const textIndent = {
    textIndent: '1.5em',
  };

  return (
    <div className="container">
      <h2>AWS-CRUD-App</h2>
      <CommentsApp />

      {/* qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq */}

      <div className="tile is-ancestor">
        <div className="tile">
          <div className="tile is-parent is-4">
            <article className="tile is-child notification" style={backgroundOne}>
              <p className="title">M-15-13</p>
              <p className="subtitle">The HTTPS-Only Standard</p>
              <div className="content">
                <p className="is-italic">
                  White House Office of Management and Budget memorandum M-15-13, “A Policy to
                  Require Secure Connections across Federal Websites and Web Services”
                </p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-vertical">
            <div className="tile is-child">
              <article className="tile is-child notification" style={backgroundTwo}>
                <p className="title">Compliance Guide</p>
                <p className="subtitle">
                  Each public website or web service an agency operates{' '}
                  <span className="has-text-weight-bold">must:</span>
                </p>
              </article>
            </div>
            <div className="tile is-child">
              <article className="tile is-child notification" style={backgroundTwo}>
                <p className="subtitle">
                  <FontAwesomeIcon icon="check" color="#d1edfc" /> Provide service over HTTPS
                </p>
                <div className="content">
                  <p className="is-italic" style={textIndent}>
                    <FontAwesomeIcon icon="check" color="#d1edfc" size="xs" /> (Support HTTPS)
                  </p>
                </div>
                <p className="subtitle">
                  <FontAwesomeIcon icon="check" color="#d1edfc" /> Automatically redirect HTTP
                  requests to HTTPS, or disable HTTP entirely
                </p>
                <div className="content">
                  <p className="is-italic" style={textIndent}>
                    <FontAwesomeIcon icon="check" color="#d1edfc" size="xs" /> (Enforces HTTPS)
                  </p>
                </div>
                <p className="subtitle">
                  <FontAwesomeIcon icon="check" color="#d1edfc" /> Have an HSTS policy in place,
                  through either of the two approaches described in tiles below
                </p>
                <div className="content">
                  <p className="is-italic" style={textIndent}>
                    <FontAwesomeIcon icon="check" color="#d1edfc" size="xs" /> (Base Domain HSTS
                    Preloaded or Strong HSTS)
                  </p>
                </div>
              </article>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child notification" style={backgroundTwo}>
                  <p className="subtitle is-italic">
                    Full HSTS preloading of the parent domain{' '}
                    <span className="has-text-weight-bold">(preferred)</span>
                  </p>
                  <p className="subtitle">
                    The parent domain (e.g. https://agency.gov) has an HSTS policy that includes
                    subdomains and has a max-age of at least 1 year, like this one:
                    <code>
                      Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
                    </code>
                  </p>
                  <p className="subtitle">
                    The domain has been successfully submitted and added to the HSTS preload list{' '}
                    <span className="is-italic">
                      (<a href="https://hstspreload.org/">https://hstspreload.org/</a>)
                    </span>
                  </p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification" style={backgroundTwo}>
                  <p className="subtitle is-italic">Compliance for each individual subdomain</p>
                  <p className="subtitle">
                    The parent domain and each of its publicly reachable subdomains must set an HSTS
                    policy with a max-age of at least 1 year, like this one:
                    <code>
                      Strict-Transport-Security: max-age=31536000 Provide service over HTTPS
                    </code>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq */}

      <div className="tile is-ancestor">
        <div className="tile">
          <div className="tile is-parent is-4">
            <article className="tile is-child notification" style={backgroundOne}>
              <p className="title">BOD 18-01</p>
              <p className="subtitle">Enhance Email and Web Security</p>
              <div className="content">
                <p className="is-italic">
                  Department of Homeland Security’s{' '}
                  <span className="has-text-weight-bold">Binding Operational Directive</span> 18-01
                  is compulsory direction to federal, executive branch, departments and agencies for
                  purposes of safeguarding federal information and information systems
                </p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-vertical">
            <div className="tile is-child">
              <article className="tile is-child notification" style={backgroundTwo}>
                <p className="title">Compliance Guide</p>
                <p className="subtitle">
                  Each public website/web service and email server an agency operates{' '}
                  <span className="has-text-weight-bold">must:</span>
                </p>
              </article>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child notification" style={backgroundTwo}>
                  <p className="title is-italic">Web</p>
                  <p className="subtitle">
                    <FontAwesomeIcon icon="globe" color="#d1edfc" />
                  </p>
                  <p className="subtitle">
                    Provide service through a secure connection (HTTPS-only, with HSTS)
                  </p>
                  <div className="content">
                    <p className="is-italic" style={textIndent}>
                      <FontAwesomeIcon icon="check" color="#d1edfc" size="xs" /> (M-15-13 Compliant)
                    </p>
                  </div>
                  <p className="subtitle">Have Secure Sockets Layer (SSL)v2 and SSLv3 disabled</p>
                  <p className="subtitle">Guarantee 3DES and RC4 ciphers are disabled</p>
                  <p className="subtitle">
                    Identify and provide a list to DHS of agency second-level domains that can be
                    HSTS preloaded, for which HTTPS will be enforced for all subdomains
                  </p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification" style={backgroundTwo}>
                  <p className="title is-italic">Email</p>
                  <p className="subtitle">
                    <FontAwesomeIcon icon="envelope" color="#d1edfc" />
                  </p>
                  <p className="subtitle">Offer STARTTLS, and</p>
                  <p className="subtitle">
                    Ensure that all second-level agency domains have valid SPF/DMARC records, with
                    at minimum a DMARC policy of “p=none” and at least one address defined as a
                    recipient of aggregate and/or failure reports
                  </p>
                  <p className="subtitle">Have SSLv2 and SSLv3 disabled</p>
                  <p className="subtitle">Guarantee 3DES and RC4 ciphers are disabled</p>
                  <p className="subtitle">
                    Add the NCCIC (National Cybersecurity & Communications Integration Center) as a
                    recipient of DMARC aggregate reports
                  </p>
                  <p className="subtitle">
                    Set a DMARC policy of “reject” for all second-level domains and mail-sending
                    hosts
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq */}

      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile">
            <div className="tile is-parent is-12">
              <article className="tile is-child notification" style={backgroundThree}>
                <p className="title is-italic">* Why are domains sorted by base domain?</p>
                <p className="subtitle">
                  It is easier for users to find domains by the base domain, as they are{' '}
                  <span className="is-italic">filtering by organization-level in their mind</span>
                </p>
                <p className="content">
                  {' '}
                  E.g., If a user is looking for an ASPA domain such as 'api.digitalmedia.hhs.gov',
                  it is natually easier to first look for all domains under 'digitalmedia.hhs.gov'{' '}
                  <span className="has-text-weight-bold">then</span> look for the 'api' preceding
                  'digitalmedia.hhs.gov'
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
