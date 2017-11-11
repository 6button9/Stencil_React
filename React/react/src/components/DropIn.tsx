import * as React from "react";
import { getMenuArray } from "../data/my-data"

export interface DropInProps {
  title: string;
  parents: string[];
  handleAction: any;
}
export interface DropInStates {
  menus: string[];
  drop: boolean;
}

export class DropIn extends React.Component<DropInProps, DropInStates> {
  constructor(props: DropInProps){
    super(props);
    this.state = {
      menus: [],
      drop: false,
    }
  }
  componentWillMount() {
    this.setState({menus: getMenuArray(this.props.title),});
    console.log('MyDropIn-load', this.props.title, this.state.drop, this.state.menus, this.props.parents);
  }
  toggleDrop(){
    this.setState({ drop: !this.state.drop});
  }
  render() {
    let dropInMenu: JSX.Element[] = [];
    if( this.state.drop ) {
      dropInMenu = this.state.menus.map( (menu, i) => {
        return <div key={menu+i}
                    className='drop-in'
                    onClick={(event) => this.props.handleAction(event, [...this.props.parents, menu])} > {menu} </div>
      })
    }
    return(
       <div id='drop-in-wrapper'>
         <div className='drop-in-title'
              onClick={ _ => this.toggleDrop() } >{this.props.title}</div>
        {dropInMenu}
      </div>
    );
  }
}
