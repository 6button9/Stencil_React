import { Component, Prop, State } from '@stencil/core';

const verifyCreditCard = (cardNumber: string, options: boolean): string => {
  console.log(cardNumber, options);
  return 'done';
}
const CARDZERO ='0000 0000 0000 0000';
@Component({
  tag: 'my-get-card-num',
  styleUrl: 'my-get-card-num.scss'
})
export class GetCardNum {
  @State() inputStatus: string = 'open';
  @State() number: string = '0000 0000 0000 0000';
  @State() cardNumber: number[] = [];
  @Prop() title: string;
  @Prop() setValue: any;
  componentDidUnload(){
    console.log('get-cardNumber-DidUnload');
    console.log(this.cardNumber);
    this.setValue(this.cardNumber);
    document.onkeydown = null;
  }
  handleKeyPress(ev) {
    console.log(ev);
    if( /[0-9]/.test(ev.key) &&
      this.cardNumber.length < 16 ) {
      this.cardNumber.push(ev.key);
    } else { //nothing for now
    }
    if(ev.keyCode === 13) {
      console.log(verifyCreditCard(ev.target.value, true));
      //this.number = '';
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
      <div id='sighup-header'
           onClick={ (ev) => this.handleClick(ev)}
           >
        <h1>{this.title}</h1>
        <div id="new-todo"
               >{this.number}
        </div>
      </div>
    );
  }
  cardError(): any {
    return (
      <div id='card-number-header'>
        <h1>{this.title}</h1>
        <div>Card Error, Please try another Card. </div>
        <button class='card-number-button'
                onClick={() => this.resetInputStatus()}
                > Click To Reset
        </button>
      </div>
    );
  }
  done(): any {
    return(
      <div id='card-number-header'>
        <h1>Thank you for completing the transaction</h1>
        <div>You will recieve your product soon.</div>
        <button class='signup-reset-button'
             onClick={() => this.inputStatus = 'closed'}
             > Click To Clear
        </button>
      </div>
    );
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
      case 'transaction-complete':
        output = this.done();
        break;
      default:
        break;
    }
    return (
      <div id='signup-wrapper'>
        {output}
      </div>
    );
  }
}
