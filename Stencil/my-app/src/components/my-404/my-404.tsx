import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-404',
  styleUrl: 'my-404.scss'
})
export class My404 {
  @State() show: boolean = true;
  @Prop() icon: string;
  @Prop() title: string;

  componentWilllLoad () {
    console.log('404')
    this.show = true;
  }
  componentDidUnload () {
    console.log('404')
    this.show = true;
  }
  handleClick(ev: UIEvent) {
    console.log('404-click', ev);
    this.show = false;
  }
  resetShowStatus() {
    this.show = true;
  }
  start (): JSX.Element {
    return (
      <div>
        <h1>{this.title}</h1>
        <div class='inner'
            onClick={(ev: UIEvent) => this.handleClick(ev)}>
          Sorry, page not found!
        </div>
        <img src={this.icon}> Stencil </img>
      </div>
    );
  }
  render () {
    return (
      (this.show
        ? <div id='wrapper-404' > {this.start()} </div>
        : null
      )
    );
  }
}
