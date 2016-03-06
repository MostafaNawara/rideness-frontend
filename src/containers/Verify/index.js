import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Signup extends Component {
  renderPlanOnUs() {
    if (this.props.params.plan !== '5') return false;

    return (
      <h3>
        Don't worry about paying, we are still in beta and this one is on us! Free for now, but not free forever ;)
      </h3>
    );
  }
  render() {

    return (
      <Grid fluid>
        <Row>
          <Col md={12}>
            {this.renderPlanOnUs()}

          </Col>
        </Row>
      </Grid>
    );
  }
}
