import { Component, Prop, State } from '@stencil/core';


@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() first: string;
  @Prop() last: string;
  @State() showProfile: boolean = false;

  handleClick() {
    this.showProfile = !this.showProfile;
  }

  render() {
    return (
       <div>
         <div class='hello'
              onClick={ _ => this.handleClick() }
              >
           Hello, my name is {this.first} {this.last}
        </div>
        { this.showProfile
        ? <my-profile title='profile' />
        : null
        }
        <my-share-button
          title="Share"
          shareTargets={[
            {name: 'Stencil', icon: '/assets/icon/icon.png'},
            {name: 'React', icon: '/assets/img/react.svg'},
            {name: 'Redux', icon: '/assets/img/redux.png'},
            {name: 'Vue', icon: '/assets/img/vue.png'},
            {name: 'Ember', icon: '/assets/img/ember.png'},
            {name: 'Haskell', icon: '/assets/img/haskell.png'},
          ]}
          />
      </div>
    );
  }
}
