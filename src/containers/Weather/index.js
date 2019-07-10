import { PureComponent } from "react";
import { connect } from "react-redux";
import { getWeatherByCity } from "./actions";

const mapStateToProps = state => ({
  ...state.weather
});

const mapDispatchToProps = {
  getWeatherByCity
};

class Weather extends PureComponent {
  render() {
    return this.props.children({ ...this.props });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
