import PropTypes from "prop-types";
import { PureComponent } from "react";
import withStyle from "../../../global/withStyle";

/** 
  * @desc SelectBox component can be used to display Select box options. This component is connected with Styled component
  *  to add inline styles.
  *  @options : options is mendatory props object which expect an array of object 
  *  example : options = [{label:"size-10", value: "10"}]
*/

class SelectBox extends PureComponent {
  static defaultProps = {
    className: "",
    onSelect: () => {}
  };

  state = {
    value: this.props.selected
  };

  onChange(e) {
    const { value } = e.target;
    this.props.onSelect(value);
    this.setState({ value });
    return { value };
  }

  render() {
    const { options, className } = this.props;
    return (
      <div className={`form-group select-box ${className}`}>
        <label className="sr-only" htmlFor="select-box">
          Select
        </label>
        <select
          id="select-box"
          value={this.state.value}
          onChange={e => this.onChange(e)}
          className="form-control"
        >
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

SelectBox.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string
};
export default withStyle(SelectBox);
