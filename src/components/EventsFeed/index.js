import React, { Component, PropTypes } from 'react';
// import moment from 'moment';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Feed from 'components/Feed';
import Map from 'components/Map';
// import TimeSlider from './TimeSlider';

export default class EventsFeed extends Component {
  static propTypes = {
    events: PropTypes.array
  }

  // state = {
  //   showEvents: true,
  //   selectedDate: moment()
  // }
  //
  // onDateChange(date) {
  //   this.setState({selectedDate: date});
  // }

  render() {
    const { events } = this.props;

    return (
      <Row>
        <Col md={8}>
          <Map data={events} onMapLoad={(map) => this.googleMap = map} />
        </Col>
        <Col md={4}>
          <Feed data={events} />
        </Col>
      </Row>
    );
  }
}
