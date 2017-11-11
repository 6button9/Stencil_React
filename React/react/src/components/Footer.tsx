import * as React from "react";

export interface FooterProps {
  title: string;
  menus: string[];
  parents: string[];
  handleAction: any;
 }
export class Footer extends React.Component<FooterProps, {}> {
  render(){
    const FooterMenu=this.props.menus.map( (menu, i) => {
        return <div id={menu+i}
                    key={''+i}
                    className='footer'
                    onClick={(ev) => this.props.handleAction(ev, [...this.props.parents, menu])} >
                 {menu}
               </div>
      })
    return(
      <div id='footer-wrapper'>
        {FooterMenu}
        <div className='footer-title'> {this.props.title} </div>
      </div>
    );
  }
}
