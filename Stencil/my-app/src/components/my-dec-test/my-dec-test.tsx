import { Component, Prop, State, PropDidChange, PropWillChange } from '@stencil/core';

@Component({
  tag: 'my-dec-test',
  styleUrl: 'my-dec-test.scss'
})
export class MyDecTest {

  @Prop()  title: string;
  @State() showProfile: boolean = false;
  @State() activated:   boolean = false;

  @PropWillChange('activated')
  willChangeHandler(newValue: boolean) {
    console.log('PropWIllChange: ', newValue);
  }

  @PropDidChange('activated')
  didChangeHandler(newValue: boolean) {
    console.log('PropDidChange: ', newValue);
  }

  handleClick() {
    this.activated = !this.activated;
    this.showProfile = !this.showProfile;
  }

  render() {
    return (
       <div>
         <div class='hello'
              onClick={ _ => this.handleClick() }
              >
           {this.title}
        </div>,
        { this.showProfile
        ? <my-profile title='profile' />
        : null
        }
      </div>
    );
  }
}
