import React, { Component } from "react";

import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import Bar from "./components/Bar";

import { calculateSalaryFrom } from "./services/CalcSalary";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salarioBruto: 0,
      baseINSS: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      salarioLiquido: 0,
      percentINSS: 0,
      percentIRPF: 0,
      percentSalarioLiquido: 0,
    };
  }

  handleInputValueChange = (newValue) => {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      salarioLiquido,
    } = calculateSalaryFrom(newValue);

    this.setState({
      salarioBruto: newValue,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      salarioLiquido,
      percentINSS: (discountINSS / newValue) * 100,
      percentIRPF: (discountIRPF / newValue) * 100,
      percentSalarioLiquido: (salarioLiquido / newValue) * 100,
    });
  };

  render() {
    const {
      salarioBruto,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      salarioLiquido,
      percentINSS,
      percentIRPF,
      percentSalarioLiquido,
    } = this.state;

    return (
      <>
        <div className="container">
          <h3 className="center">Cálculo Salarial</h3>
          <Bar
            discountInss={percentINSS ? percentINSS : 0}
            discountIrpf={percentIRPF ? percentIRPF : 0}
            salarioLiquido={percentSalarioLiquido ? percentSalarioLiquido : 0}
          />
          <div className="row">
            <InputFullSalary
              currentValue={salarioBruto}
              inputValue={this.handleInputValueChange}
              icon="attach_money"
              label="Digite o Salário Bruto"
              materializeClassColor="blue-text text-darken-1"
            />
          </div>
          <div className="row">
            <div className="input-field col s8">
              <InputReadOnly
                value={salarioLiquido}
                type="money"
                icon="check"
                label="Salário Líquido"
                materializeClassColor="teal-text text-lighten-3"
              />
            </div>
            <div className="input-field col s4">
              <InputReadOnly
                value={percentSalarioLiquido ? percentSalarioLiquido : 0}
                icon="check"
                type="percent"
                label="Percentual Sobra Líquido"
                materializeClassColor="teal-text text-lighten-3"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s4">
              <InputReadOnly
                value={baseINSS}
                icon="money_off"
                type="money"
                label="Base de cálculo INSS"
                materializeClassColor="orange-text text-lighten-2"
              />
            </div>
            <div className="input-field col s4">
              <InputReadOnly
                value={discountINSS}
                icon="money_off"
                type="money"
                label="Desconto INSS"
                materializeClassColor="orange-text text-lighten-2"
              />
            </div>
            <div className="input-field col s4">
              <InputReadOnly
                value={percentINSS ? percentINSS : 0}
                icon="money_off"
                type="percent"
                label="Percentual Desconto INSS"
                materializeClassColor="orange-text text-lighten-2"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <InputReadOnly
                value={baseIRPF}
                icon="money_off"
                type="money"
                label="Base de cálculo IRPF"
                materializeClassColor="red-text text-lighten-3"
              />
            </div>
            <div className="input-field col s4">
              <InputReadOnly
                value={discountIRPF}
                icon="money_off"
                type="money"
                label="Desconto IRPF"
                materializeClassColor="red-text text-lighten-3"
              />
            </div>
            <div className="input-field col s4">
              <InputReadOnly
                value={percentIRPF ? percentIRPF : 0}
                icon="money_off"
                type="percent"
                label="Percentual Desconto INSS"
                materializeClassColor="red-text text-lighten-3"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
