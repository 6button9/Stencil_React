import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-get-card',
  styleUrl: 'my-get-card.scss'
})
export class MyGetCard{
  @Prop()  title: string;
  @State() cardStatus: string = 'READ';
  @State() view: JSX.Element = null;

  componentWillLoad() {
    this.view = this.readCard();
  }
  setCardHolderName(name: string) {
    console.log("Card Holder Name Set:", name);
  }
  setCardNumber(cardNumber: number[]) {
    console.log("Card Number Set:", cardNumber);;
  }
  setCardCCW(ccwNum: number[]) {
    console.log("Card CCW", ccwNum);
  }
  setCardType(cardType: string) {
    console.log("CardType:", cardType);
  }
  setCardExpDate(expDate: string) {
    console.log("Card ExpDate:", expDate);
  }
  submitCard() {
    this.validateCard();
  }
  validateCard() {
    Math.random() > 0.5 ?
      this.view = this.cardAccepted()
      :
      this.view = this.cardError();
  }
  cardError(): any {
    return (
      <div id='get-card-wrapper'>
        <h1>{this.title}</h1>
        <div>Card Error, Please try another Card. </div>
        <button class='card-number-button'
                onClick={ _ => this.view = this.readCard() }
                > Click To Reset
        </button>
      </div>
    );
  }
  cardAccepted(): JSX.Element {
    return(
      <div id='get-card-wrapper'>
        <h1>Thank you for completing the transaction</h1>
        <div>You will recieve your product soon.</div>
        <button class='card-reset-button'
             onClick={() => this.view = this.readCard() }
             > Click To Clear
        </button>
      </div>
    );
  }
  readCard(): JSX.Element {
    return(
      <div id='get-card-wrapper'>
        <h3>{this.title}</h3>
        <my-get-name     title='Name on Card'
                         setValue={ x => this.setCardHolderName(x)}
                         />
        <my-check-list   title='Select Card Type'
                         checkList={['Visa','Discover','MasterCard']}
                         setValue={ x => this.setCardType(x)}
                         />
        <my-get-card-num title='Card Number'
                         setValue={ x => this.setCardNumber(x)}
                         />
        <my-get-CCW      title ='CCW'
                         setValue={ x => this.setCardCCW(x)}
                         />
        <my-get-exp-date title='Card Expiration Date'
                         setValue={ x => this.setCardExpDate(x)}
                         />
        <button onClick={ _ => this.submitCard()} >
          submit card
        </button>
      </div>
    );
  }
  render(){
    console.log(this.view);
    return (
      <div id='get-card-wrapper'>
        {this.view}
      </div>
    );
  }
}
