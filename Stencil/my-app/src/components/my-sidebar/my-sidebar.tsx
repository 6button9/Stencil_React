import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-sidebar',
  styleUrl: 'my-sidebar.scss'
})
export class MySidebar {

  @Prop() title: string;
  @Prop() menus: string[];
  @Prop() parents: string[];
  @Prop() handleAction: any;

  //handleClick(event: any, type: string[]) {
    //console.log(event.srcElement.className, type)
  //}
  render(){
    const sidebarMenu = this.menus.map( (menu, i) => {
      return <my-drop-in class='drop-in'
                         title={menu}
                         parents={[...this.parents, this.title, menu]}
                         handleAction={this.handleAction} />
    })
    return(
      <div id='sidebar-wrapper'>
        <div class='sidebar-title'
             onClick={(event) => this.handleAction(event, [...this.parents, this.title])} >
             {this.title}
             </div>
          {sidebarMenu}
      </div>
    );
  }
}
