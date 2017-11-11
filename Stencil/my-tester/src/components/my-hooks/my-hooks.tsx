import { Component, Prop, State, PropDidChange, PropWillChange } from '@stencil/core';

@Component({
  tag: 'my-hooks',
  styleUrl: 'my-hooks.scss'
})
export class MyHooks {

  @Prop()  title: string;
  @State() activated: boolean;
  @State() myState: string='';
  
  componentWillLoad() {
    console.log('The component is about to be rendered');
  }
  // The component is loaded and has rendered.
  // Updating data in this event may cause the component to re-render.
  componentDidLoad() {
    console.log('The component has been rendered');
  }
   // The component will update and re-render.
   // Called multiple times throughout the life of the component as it updates.
  componentWillUpdate() {
    console.log('The component will update');
  }
   // The component finished updating.
   // Called after componentWillUpdate
  componentDidUpdate() {
    console.log('The component did update');
  }
  //The component did unload and the element will be destroyed.
  componentDidUnload() {
    console.log('The view has been removed from the DOM');
  }
  @PropWillChange('activated')
  willChangeHandler(newValue: boolean) {
    console.log('The new value of activated is: ', newValue);
  }

  @PropDidChange('activated')
  didChangeHandler(newValue: boolean) {
    console.log('activated-prop-did-change')
    // do something now that `activated` has changed
  }
  clickHandler(ev: UIEvent) {
    console.log('Child-click:', ev);
    this.myState +='!';
    this.activated = !this.activated;
  }
  render () {
    return ([
      <div>{this.title}{this.myState}</div>,
      <button onClick={(ev: UIEvent) => this.clickHandler(ev)}>
        Hooks
      </button>
    ]);
  }
}
