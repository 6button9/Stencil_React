import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.scss'
})
export class MyFooter {

  @Prop() title: string;
  @Prop() menus: string[];
  @Prop() parents: string[];
  @Prop() handleAction: any;

  render(){
    console.log(this.title, this.menus)
    const footerMenu = this.menus.map( (menu, i) => {
      return <div id={menu+i}
                  class='footer'
                  onClick={(event) => this.handleAction(event, [...this.parents, this.title, menu])} >
               {menu}
             </div>
    })
    return(
      <div id='footer-wrapper'>
        {footerMenu}
        <div class='footer'>{this.title}</div>
      </div>
    );
  }
}
