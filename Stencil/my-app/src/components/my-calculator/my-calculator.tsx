import { Component, Prop, State } from '@stencil/core';

const calcValue = (x: string, operand: string, y: string ): string => {
  let xNum = Number(x);
  let yNum = Number(y);
  switch( operand ) {
    case '+' :
      return (xNum + yNum)+'';
    case '-' :
      return (xNum - yNum)+'';
    case '*' :
      return (xNum * yNum)+'';
    case '/' :
      return (xNum / yNum)+'';
    case '%' :
      return (xNum % yNum)+'';
    default:
      return y;
  }
}

@Component({
  tag: 'my-calculator',
  styleUrl: 'my-calculator.scss'
})
export class MyCalculator{

  @Prop()  title:   string;
  @State() results: string = ' ';
  @State() value:   string = ' ';
  @State() stack:   string = '0';
  @State() action:  string = '=';

   BUTTONS: string[] = [
    '1','2','3','+',
    '4','5','6','-',
    '7','8','9','*',
    '0','.','+/-','/',
    'BS','C','AC','=',
  ];

  ACTIONsymbols: string[] = [
    '+','-','*','/','BS','C','AC','=',
  ];

  componentWillLoad() {
    console.log('MyCalculator-will-load');
  }
  componentWillUpdate() {
    console.log('MyCalculator-will-update');
  }
  componentDidUpdate() {
    console.log("MyCalculator-did-update");
  }

  numberButtonPress(sym: string) {
    if( this.ACTIONsymbols.includes(sym)) {
      console.log('takeAction', sym);
      switch( sym ) {
        case '+':
          this.stack = calcValue(this.stack, sym, this.value);
          this.results = ' ';
          this.value   = ' ';
          this.action  = '+';
          break;
        case 'C':
          this.stack   = ' ';
          this.value   = ' ';
          this.results = ' ';
          this.action  = '=';
          break;
        case 'AC':
          this.value   = ' ';
          this.results = ' ';
          break;
        case 'BS':
          this.value = this.value.slice(0, -1)
          break;
        case '=':
          this.stack   = calcValue(this.stack, this.action, this.value);
          this.results = ' ';
          this.value   = ' ';
          this.action  = sym;
          break;
        default:
          this.stack   = calcValue(this.stack, sym, this.results);
          this.value   = ' '
          this.results = ' '
          this.action  = sym;
          break;
      }
    } else {
      this.value += sym;
    }
  }
  render() {
    let calculatorButtons: JSX.Element[] = [];
    calculatorButtons = this.BUTTONS.map( (sym) => {
      return <div class='calculator-button'
                  onClick={() => this.numberButtonPress(sym)} > {sym} </div>
      }
    );
    return(
      <div id='calculator-wrapper'>
        <div class='calculator-title'>
          {this.title}
        </div>
        <div class='calculator-text'>
          {this.stack}
        </div>
        <hr class='calculator-text'>
          {this.action} {this.results}
        </hr>
        <hr class='calculator-text'>
          { this.value !== ' ' ? this.value  : <br />}
        </hr>
        <div class='calculator-button-wrapper'>
           {calculatorButtons}
        </div>
      </div>
    );
  }
}
