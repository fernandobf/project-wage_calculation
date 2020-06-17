import React, { Component } from "react";

import { formatMoney, formatPercentage } from '../../helpers';


export default class InputReadOnly extends Component {
  render() {
    const { value, icon, label, type, materializeClassColor } = this.props;
    return (
      <>
        <i className={`material-icons prefix ${materializeClassColor}`}>
          {icon}
        </i>
        <input id="input" className={materializeClassColor} type="text" value={type === 'money' ? formatMoney(value) : formatPercentage(value)} disabled />
        <label className={`active ${materializeClassColor}`}>{label}</label>
      </>
    );
  }
}
