import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-check-list',
  styleUrl: 'my-check-list.scss'
})
export class MyCheckList {

  @State() name: string = '';
  @State() value: string;
  @Prop()  title: string;
  @Prop()  checkList: string[];
  @Prop()  setValue: any;

  componentWillLoad() {
    console.log(this.checkList);
    this.value = this.checkList[0];
  }
  componentDidUnload(){
    console.log('check-list-DidUnload')
    this.setValue(this.value);
  }
  handleCheck(ev: any) {
    console.log('Checked', ev)
    this.value = ev.target.value;
    this.setValue(this.value);
  }
  render() {
    const checkList=this.checkList.map( item => {
      return (
        <div class='check-list-item'>
          <input type='radio'
                 name='myRadio'
                 value={item}
                 checked={item === this.value ? true : false}
                 onChange={(ev) => this.handleCheck(ev)}
                 >
          </input>
          <label>
            {item}
          </label>
        </div>
        );
      }
    );
    return (
      <div id='check-list-wrapper'>
        <h3>{this.title}</h3>
        {checkList}
      </div>
    );
  }
}
