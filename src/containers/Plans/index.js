import React, { Component } from 'react';
import { Link } from 'react-router';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

export default class Plans extends Component {
  renderText(text) {
    return (
      <li className="padding-sm-v">
        {text}
      </li>
    );
  }
  renderFreePlan() {
    return (
      <Col md={6}>
        <Panel header={<p>Basic</p>} className="text-center">
          <ul className="list-unstyled">
            {this.renderText('Daily SMS messages about events happening nearby.')}
            {this.renderText('No limit to events list.')}
            <h2>
              <sup>$</sup>0 - <Link to="/signup?plan=0">Sign up</Link>
            </h2>
          </ul>
        </Panel>
      </Col>
    );
  }

  renderPricedPlan() {
    return (
      <Col md={6}>
        <Panel header={<p>Brilliant</p>} className="text-center">
          <ul className="list-unstyled">
            {this.renderText('SMS messages at your preference: hourly, every 2 hours, you name it.')}
            {this.renderText("Hidden events that we don't tell anyone else about.")}
            {this.renderText('See events up to 2 weeks in advance.')}
          </ul>
          <h2>
            <sup>$</sup>5 - <Link to="/signup?plan=5">Sign up</Link>
          </h2>
        </Panel>
      </Col>
    );
  }

  render() {
    return (
      <Grid className="padding-lg-top" fluid>
        <Row>
          <Col md={8} mdOffset={2}>
            <Row>
              {this.renderFreePlan()}
              {this.renderPricedPlan()}
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
