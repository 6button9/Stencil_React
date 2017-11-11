import { Component, Prop, State, Method } from '@stencil/core';
import { sidebarMenus, headerMenus, footerMenus } from '../../data/my-data';

@Component({
  tag:      'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  @Prop()  title: string;
  @State() myRoute: string = 'card';

  @Method()
  helloF(text: string) {
    console.log('helloF')
    console.log(text);
  }

  handleAction = (event: UIEvent, type: string[]) => {
    console.log('Action', event.srcElement.className, type)
    if( type.slice(-1)[0] === 'Todo' ) {
      console.log("Acition-if-Todo");
      this.myRoute = 'todo';
    }
    if( type.slice(-1)[0] === 'Card' &&
        type[1]           === 'header') {
      this.myRoute = 'card';
    }
    if( type.slice(-1)[0] === 'SignUp' &&
        type[1]           === 'header') {
      this.myRoute = 'sign-up';
    }
    if( type.slice(-1)[0] === 'Calculator' &&
        type[1]           === 'header') {
      this.myRoute = 'calculator';
    }
    if( type.slice(-1)[0] === '404' &&
        type[1]           === 'footer') {
      console.log('route-404')
      this.myRoute = '404';
    }
    if( type.slice(-1)[0] === 'Icons' &&
        type[1]           === 'footer') {
      console.log('route-Icons')
      this.myRoute = 'showIcons';
    }
    if( type.slice(-1)[0] === 'Player' &&
        type[1]           === 'footer') {
      console.log('route-lMyPlayer')
      this.myRoute = 'myPlayer';
    }
  }
  render(){
    console.log(this.myRoute);
    return(
      <div id={'app-wrapper'}>
        <my-header
          title       ="header"
          parents     ={[this.title]}
          menus       ={headerMenus}
          handleAction={this.handleAction}
          />
        <my-sidebar   title="Sidebar"
                      parents={[this.title]}
                      menus={sidebarMenus}
                      handleAction={this.handleAction}
                      />
        <my-name      first="John" last="Btn" />
        <my-clock     title="clock" />
        <my-content   type={this.myRoute} />
        <my-footer    title="footer"
                      parents={[this.title]}
                      menus={footerMenus}
                      handleAction={this.handleAction}
                      />
      </div>
    );
  }
}
const myElement = document.querySelector('my-app');
console.log(myElement);
//myElement.helloF('Goodday');
console.log('goodbye');
