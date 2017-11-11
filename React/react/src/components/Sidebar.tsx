import * as React from "react";
import { DropIn } from "./DropIn"

export interface SidebarProps {
  title: string;
  menus: string[];
  parents: string[];
  handleAction: any;
}

export class Sidebar extends React.Component<SidebarProps, {} > {
    render(){
      const sidebarMenu = this.props.menus.map( (menu, i) => {
        return <DropIn key={menu+i}
                       title={menu}
                       parents={[...this.props.parents, this.props.title, menu]}
                       handleAction={this.props.handleAction} />
      })
      return(
        <div id='sidebar-wrapper'>
          <div className='sidebar-title'
               onClick={(event) => this.props.handleAction(event, [...this.props.parents, this.props.title])} >
               {this.props.title}
               </div>
            {sidebarMenu}
        </div>
      );
    }
  }
