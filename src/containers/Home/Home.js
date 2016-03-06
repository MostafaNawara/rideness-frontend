import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');

    return (
      <div>
        <Helmet title="Home"/>
        <div className={styles.hero}>
          <Grid className={styles.heroOverlay} fluid>
            <Row>
              <Col xs={12} className="text-center">
                <h1 className={styles.title}>
                  Drive smarter, not harder.
                </h1>
                <h4>
                  Make sure you're at the right place when surge starts - we tell you where it will happen before it does.
                </h4>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid fluid className={styles.eventsList}>
          <Row>
            <Col md={6} mdOffset={3}>
              <Panel>
                <h3 className="text-center">
                  Events happening in San Francisco
                </h3>
                <ListGroup fill>
                  <ListGroupItem>Item 1</ListGroupItem>
                  <ListGroupItem>Item 2</ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col xs={12}>
                        {/* we should A/B test the messaging */}
                        <h4>
                          38 more events... <Link to="/login">see more</Link>
                        </h4>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
