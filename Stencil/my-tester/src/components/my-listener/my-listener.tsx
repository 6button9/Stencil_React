import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'my-listener'
})
export class MyListener {

  @Listen('testEmitter')
  handleTestEmitter(event: CustomEvent) {
    console.log('Received the custom todoCompleted event: ', event.detail);
  }

  //@Listen('body:scroll')
  //handleScroll(ev: UIEvent) {
    //console.log('the body was scrolled', ev);
  //}

  @Listen('keydown')
  handleKeyDown(ev){
    console.log('keydown:', ev.key)
    if(ev.keyCode === 40){
      console.log('down arrow pressed')
    }
  }

  @Listen('keydown.up')
  handleUpArrow(ev){
    console.log('will fire when up arrow is pressed');
  }
}
