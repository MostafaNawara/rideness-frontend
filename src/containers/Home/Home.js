import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

import EventsFeed from 'components/EventsFeed';

import { load } from 'redux/modules/events';

@asyncConnect([{
  promise: ({store: { dispatch }}) => {
    return dispatch(load());
  }
}])
@connect(
  state => ({events: state.events.data})
)
export default class Home extends Component {
  static propTypes = {
    events: PropTypes.array
  }

  render() {
    const { events } = this.props;

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
                  Make sure you are at the right place when surge starts - we tell you where it will happen before it does.
                </h4>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid fluid className={styles.eventsList}>
          <Row>
            <Col md={10} mdOffset={1}>
              <Panel>
                <h3 className="text-center margin-md-bottom">
                  Events happening in San Francisco
                </h3>
                <EventsFeed events={events} />
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
