import * as React from "react";

export interface HeaderProps {
  title: string;
  menus: string[];
  parents: string[];
  handleAction: any;
 }
//export const Header = (props: { title: string; menus: string[]; handleClick: any }) => {
export class Header extends React.Component<HeaderProps, {}> {
  render(){
    const headerMenu=this.props.menus.map( (menu, i) => {
        return <div id={menu+i}
                    key={''+i}
                    className='header'
                    onClick={(ev) => this.props.handleAction(ev, [...this.props.parents, menu])} >
                 {menu}
               </div>
      })
    return(
      <div id='header-wrapper'>
        {headerMenu}
        <div className='header-title'> {this.props.title} </div>
      </div>
    );
  }
}
