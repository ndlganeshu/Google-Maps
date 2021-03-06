import "./styles.css";
import React from "react";
import GoogleMapReact from "google-map-react";
export default class App extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 8
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA4agTJ9xiX8U_XOGIJIuypYkLVAVUYXvI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
