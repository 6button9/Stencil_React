import { Component, Prop, State } from '@stencil/core';
import { getMenuArray } from '../../data/my-data'

@Component({
  tag: 'my-drop-in',
  styleUrl: 'my-drop-in.scss'
})
export class MyDropIn {

  @Prop()  title: string;
  @Prop()  parents: string[];
  @Prop()  handleAction: any;
  @State() menus: string[] = [];
  @State() drop: boolean = false;

  componentWillLoad() {
    this.menus = getMenuArray(this.title);
    //console.log('MyDropIn-willLoad', this.title, this.drop, this.menus, this.parents);
  }
  componentWillUpdate() {
    //console.log('parents:', this.parents)
    //console.log('MyDropIn-will-update', this.title, this.drop, this.menus, this.parents);
  }
  componettDidUpdate() {
    console.log("MyDropIn-did-update", this.title, this.drop, this.menus, this.parents);
  }
  toggleDrop(){
    this.drop = !this.drop;
  }
  render() {
    let dropInMenu: JSX.Element[] = [];
    if( this.drop ) {
      dropInMenu = this.menus.map( (menu, i) => {
        return <div class='drop-in'
                    onClick={(event: UIEvent) => this.handleAction(event, [...this.parents, menu])} > {menu} </div>
      })
    }
    return(
      <div id='drop-in-wrapper'>
        <div class='drop-in-title'
             onClick={ _ => this.toggleDrop() } >{this.title}</div>
           {dropInMenu}
      </div>
    );
  }
}
