import { Component, Prop, State} from '@stencil/core';

@Component({
  tag: 'my-select',
  styleUrl: 'my-select.scss'
})
export class MyParent{

  @Prop()  title: string;
  @Prop()  selections: string[];
  @State() selectValue: string;

  componentWillLoad() {
    console.log(this.selections);
    this.selectValue = this.selections[0];
    console.log(this.selectValue);
  }

  handleSelect(ev: UIEvent) {
    console.log('Child-click:', ev);
    ev.preventDefault();
  }
  render () {
    return ([
      <div>{this.title}</div>,
      <select
        value={this.selectValue}
        onInput={(ev: UIEvent) => this.handleSelect(ev)}
        >
        {this.selections.map( item =>{
          return <option value={item}>{item}</option>
        })}
      </select>
    ]);
  }
}
