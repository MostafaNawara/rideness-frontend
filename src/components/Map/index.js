import React, { Component, PropTypes } from 'react';
import { GoogleMapLoader, GoogleMap, Circle, InfoWindow } from 'react-google-maps';


export default class Map extends Component {
  static propTypes = {
    data: PropTypes.array,
    onMapLoad: PropTypes.func,
    showEvents: PropTypes.bool
  }

  static defaultProps = {
    showEvents: true
  }

  state = {
    tooltip: null
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.data !== nextProps.data ||
      this.props.showEvents !== nextProps.showEvents ||
      this.state.tooltip !== nextState.tooltip
    );
  }

  appendInfoView(event) {
    this.setState({
      tooltip: (
        <InfoWindow
          key={'tooltip'}
          position={{lat: event.lat, lng: event.long}}
          content={
            <p>
              {event.startTime}
              {event.name}
            </p>
          } />
      )
    });
  }

  render() {
    const { data, onMapLoad, showEvents } = this.props;
    const { tooltip } = this.state;

    const overlays = data.map((event, index) => {
      return (
        <Circle
          key={`${event.name}-${index}`}
          center={{lat: event.lat, lng: event.long}}
          radius={60}
          onClick={this.appendInfoView.bind(this, event)}
          options={{
            fillColor: `#e74c3c`,
            fillOpacity: 0.20,
            strokeColor: `#e74c3c`,
            strokeOpacity: 1,
            strokeWeight: 1,
          }}
        />
      );
    });

    return (
      <section style={{height: 500}}>
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props}
              style={{
                height: '100%',
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => onMapLoad(map)}
              defaultZoom={12}
              defaultCenter={{lat: 37.7833, lng: -122.4167}} >
              {showEvents && overlays.concat([tooltip])}
            </GoogleMap>
          }
        />
      </section>
    );
  }
}
