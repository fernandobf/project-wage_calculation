import React, { Component } from "react";

export default class SalaryCalculate extends Component {
  handleChange = (event) => {
    const newValue = +event.target.value;
    this.props.inputValue(newValue);
  };

  render() {
    const { currentValue, icon, label, materializeClassColor } = this.props;

    return (
      <div className="input-field col s12">
        <i className={`material-icons prefix ${materializeClassColor}`}>{icon}</i>
        <input
          autoFocus
          id="salarioBruto"
          type="number"
          onChange={this.handleChange}
          min="1000"
          step="100"
          value={Number(currentValue).toString()}
        />

        <label className={`active ${materializeClassColor}`}  >
          {label}
        </label>
      </div>
    );
  }
}
