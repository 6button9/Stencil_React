import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.scss'
})
export class MyHeader {

  @Prop() title: string;
  @Prop() menus: string[];
  @Prop() parents: string[];
  @Prop() handleAction: any;

  render(){
    const headerMenu = this.menus.map( (menu, i) => {
      return <div id={menu+i}
                  class='header'
                  onClick={(event) => this.handleAction(event, [...this.parents, this.title, menu])} >
               {menu}
             </div>
    })
    return(
      <div id='header-wrapper'>
        {headerMenu}
        <div class='header-title'>{this.title}</div>
      </div>
    );
  }
}
