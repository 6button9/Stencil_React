import { Component, Prop} from '@stencil/core';

@Component({
  tag: 'my-content',
  styleUrl: 'my-content.scss'
})
export class MyContent{
  @Prop()  type: string;

  getSignUp(): JSX.Element {
    console.log('getSignUp')
    return (
      <div>
        <my-signup   title='Sign of for BTN' />
      </div>
    );
  }
  getCard(): JSX.Element {
    return (
      <div>
        <my-get-card  title="Please, enter card data" />
      </div>
    );
  }
  getTodo(): JSX.Element {
    return (
      <div>
        <my-todo      title="Todo List" />
      </div>
    );
  }
  getCalculator(): JSX.Element {
    return (
      <div>
        <my-calculator title="Calculator" />
      </div>
    );
  }
  getShowIcons(): JSX.Element {
    return(
      <my-player
        x={100}
        y={520}
        title="Icons"
        shareTargets={[
          {name: 'JavaScript', icon: '/assets/img/JavaScript.jpeg'},
          {name: 'TypeScript', icon: '/assets/img/TSwebpack.png'},
          {name: 'Haskell', icon: '/assets/img/haskell.png'},
          ]}
        />
    );
  }
  getPlayer(): JSX.Element {
    return(
      <my-player
        x={200}
        y={300}
        title="Player"
        shareTargets={[
          {name: 'rewind', icon: '/assets/img/Button_Rewind.ico'},
          {name: 'play', icon: '/assets/img/playButton.svg'},
          {name: 'pause', icon: '/assets/img/pauseButton.png'},
          {name: 'f-forward', icon: '/assets/img/fast-forward.png'},
          ]}
        />
    );
  }
  get404(): JSX.Element {
    return (
      <div>
        <my-404
          title="404"
          icon='/assets/img/TSwebpack.png'
         />
      </div>
    );
  }
  render(){
    let content: JSX.Element;

    switch( this.type ) {
      case 'sign-up':
        content = this.getSignUp();
        break;
      case 'card':
        content = this.getCard();
        break;
      case 'todo':
        content = this.getTodo();
        break;
      case 'calculator':
        content = this.getCalculator();
        break;
      case '404':
          content = this.get404();
          break;
      case 'showIcons':
          content = this.getShowIcons();
          break;
      case 'myPlayer':
          content = this.getPlayer();
          break;
      default:
        break;
    }
    console.log("Render-Content", content)
    return(
      <div id='content-wrapper'>
        {content}
      </div>
    );
  }
}
