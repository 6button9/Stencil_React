import { Component, Prop, State} from '@stencil/core';
@Component({
  tag: 'my-profile',
  styleUrl: 'my-profile.scss'
})
export class MyProfile{
  @Prop()  title: string;
  @State() first: string;
  @State() last: string;
  @State() userName: string;
  @State() userUrl: string;
  @State() userEmail: string;
  @State() img: string;
  @State() edit: string;

  componentWillLoad(){
    console.log("profile")
    this.first    = 'John';
    this.last     = 'Btn';
    this.userName = '6button9';
    this.userUrl  = '6button9.wordpress.com';
    this.userEmail = 'jasutton3@gmail.com';
    this.img      = '/assets/img/bacon.png';
    this.edit     = 'edit';
  }
  componentDidUnload(){
  }

  render(){
    return [
      <div class='img-one'> one </div>,
      <img class='img-two' src='/assets/img/facebook.jpg'> two </img>,
      <div class='img-three'> three </div>,
      <div class='one-four'>
        <img class='img-four' src='/assets/icon/icon.png'> stencil </img>
        Stencil
        <hr />
        <img class='img-four' src='/assets/img/react.svg'> react </img>
        React
        <hr />
        <img class='img-four' src='/assets/img/vue.png'> react </img>
        Vue
      </div>,
      <img class='six' src={this.img}> </img>,
      <div class='three'>
        {this.title}
        <hr/>
        usr: {this.userName}
        <hr/>
        Name: {this.first} {this.last}
        <hr/>
        URL: {this.userUrl}
        <hr/>
        e-mail: {this.userEmail}
      </div>,
      <div class='four'> FOUR </div>,
      <div class='five'> FIVE </div>,
      <div class='six'> {this.edit} </div>,
    ];
  }
}
