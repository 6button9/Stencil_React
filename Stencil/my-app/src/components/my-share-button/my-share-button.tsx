import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-share-button',
  styleUrl: 'my-share-button.scss'
})
export class MyShareButton{
  @State() showStatus: string = 'start';
  @State() sharedTarget: string;
  @Prop() title: string;
  @Prop() shareTargets: { name: string, icon: string }[];
  componentWillLoad () {
    console.log(this.title, this.shareTargets)
  }
  handleClick(ev: UIEvent, sharedTarget: string) {
    console.log('share-click', ev, sharedTarget);
    this.showStatus = 'done';
    this.sharedTarget= sharedTarget;
  }
  resetShowStatus() {
    this.showStatus = 'start';
  }
  start (): JSX.Element {
    return (
      <div id='share-wrapper'>
        <h1>{this.title}</h1>
        {this.shareTargets.map( (item) => {
          return(
            <li onClick={(ev: UIEvent) => this.handleClick(ev, item.name)}>
              {item.name}
              <img src={item.icon}> share </img>
            </li>
          );
        })}
      </div>
    );
  }
  done (shareTarget: string): JSX.Element {
    return(
      <div id='share-header'>
        <h1>Thank you sharing on {shareTarget}</h1>
        <div>You will recieve a confirmation e-mail soon.</div>
        <button class='share-reset-button'
             onClick={() => this.showStatus = 'start'}
             > Click To Clear
        </button>
      </div>
    );
  }
  render () {
    let output: JSX.Element;
    switch(this.showStatus){
      case 'start':
        output = this.start();
        break;
      case 'pick':
        output = this.done('face');
        break;
      case 'done':
        output = this.done(this.sharedTarget);
        break;
      default:
        break;
    }
    return (
      <div id='share-wrapper'>
        {output}
      </div>
    );
  }
}
