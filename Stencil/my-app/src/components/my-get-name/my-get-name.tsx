import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-get-name',
  styleUrl: 'my-get-name.scss'
})
export class GetName {

  @State() name: string = '';
  @State() cardType: string ='Visa';
  @Prop() title: string;
  @Prop() setValue: any;

  componentDidUnload() {
    console.log('get-nanme-DidUnload')
    this.setValue(this.name);
  }
  handleKeyPress(ev: any) {
    console.log(ev);
    if(ev.keyCode === 13) {
      this.name = ev.target.value;
      this.setValue(this.name);
    }
    this.name = ev.target.value;
  }
  render() {
    return (
      <div id='enter-name-header'>
        <h1>{this.title}</h1>
        <input class='enter-name'
               placeholder='John S. Doe'
               onKeyPress={(ev) => this.handleKeyPress(ev)}
               >
        </input>
      </div>
    );
  }
}
