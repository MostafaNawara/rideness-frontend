import React, { Component, PropTypes } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Feed extends Component {
  static propTypes = {
    data: PropTypes.array
  }

  renderRows() {
    const { data } = this.props;

    return data.map((event, index) => (
      <li key={index}>
        {event.startTime}: {event.name}
      </li>
    ));
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <h2 className="margin-sm-top">
            <small>
              Feed:
            </small>
          </h2>
        </Col>
        <Col md={12}>
          <ul className="list-unstyled" style={{height: 500, overflowY: 'scroll'}}>
            {this.renderRows()}
          </ul>
        </Col>
      </Row>
    );
  }
}
