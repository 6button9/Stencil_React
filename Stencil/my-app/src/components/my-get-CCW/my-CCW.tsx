import { Component, Prop, State } from '@stencil/core';

const CARDZERO ='000';
@Component({
  tag: 'my-get-CCW',
  styleUrl: 'my-get-CCW.scss'
})
export class MyGetCCW{
  @State() inputStatus: string = 'open';
  @State() number: string = '000';
  @State() cardNumber: number[] = [];
  @Prop()  title: string;
  @Prop()  setValue: any;

  componentDidUnload(){
    console.log('get-secNum-DidUnload');
    console.log(this.cardNumber);
    this.setValue(this.cardNumber);
    document.onkeydown = null;
  }
  handleKeyPress(ev) {
    console.log(ev);
    if( /[0-9]/.test(ev.key) &&
      this.cardNumber.length < 3 ) {
      this.cardNumber.push(ev.key);
    } else { //nothing for now
    }
    if(ev.keyCode === 13) {
      //this.inputStatus = 'done'
    }
    if(ev.keyCode === 8) {
      console.log('backspace', ev.keyCode);
      if( this.cardNumber.length > 0 ) {
        this.cardNumber.length = this.cardNumber.length -1;
      }
    }
    let inc = 0;
    this.number = ''
    this.cardNumber.forEach( (number, i) => {
      this.number += number+''
      if( i % 4 === 3) {
        inc++;
        this.number += ' ';
      }
    });
    this.number += CARDZERO.slice(this.number.length);
  }
  resetInputStatus() {
    this.inputStatus = 'open';
  }
  handleClick(ev) {
    //console.log("over", ev);
    document.onkeydown = (ev) => this.handleKeyPress(ev);
  }
  enterCardNumber(): any {
    return (
      <div id='card-ccw-header'
           onClick={ (ev) => this.handleClick(ev)}
           >
        <h1>{this.title}</h1>
        <div class='card-number'>
           {this.number}
        </div>
      </div>
    );
  }
  cardError(): any {
    return (
      <div id='card-ccw-header'>
        <h1>{this.title}</h1>
        <div>CARD ERROR, </div>
        <button class='card-ccw-reset-button'
                onClick={() => this.resetInputStatus()}
                > Click To Reset
        </button>
      </div>
    );
  }
  done(): any {
    this.setValue(this.cardNumber);
    return null;
  }
  render() {
    let output: string;
    switch(this.inputStatus){
      case 'open':
        output = this.enterCardNumber();
        break;
      case 'error-card-invalid':
        output = this.cardError();
        break;
      case 'error':
        output = this.cardError();
        break;
      case 'done':
        output = this.done();
        break;
      default:
        break;
    }
    return (
      <div id='card-ccw-wrapper'>
        {output}
      </div>
    );
  }
}
