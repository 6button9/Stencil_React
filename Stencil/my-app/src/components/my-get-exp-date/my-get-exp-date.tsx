import { Component, Prop, State } from '@stencil/core';

@Component({
  tag:      'my-get-exp-date',
  styleUrl: 'my-get-exp-date.scss'
})
export class MyGetExpDate {

  @State() expDate:  string = '2112-11';
  @Prop()  title:    string;
  @Prop()  setValue: any;
  componentWillLoad() {
    console.log('get-exp-date-will-load');
    console.log(this.expDate);
  }
  componentDidUnload() {
    console.log('get-exp-date-DidUnload')
    this.setValue(this.expDate);
  }
  handleOnChange(ev: any) {
    console.log(ev.target.value);
    this.expDate = ev.target.value;
  }
  render() {
    return (
      <div id='enter-wrapper'>
        <h1>{this.title}</h1>
        <input type='month'
               value={this.expDate}
               onChange={ ev => this.handleOnChange(ev)}
               >
        </input>
      </div>
    );
  }
}
