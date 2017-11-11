import { Component, Prop, State} from '@stencil/core';
@Component({
  tag: 'my-clock',
  styleUrl: 'my-clock.scss'
})
export class MyClock{
  @Prop()  title: string;
  @State() time: { hour: number, minute: number, second: number,};
  @State() interval: any;
  componentWillLoad(){
    this.setTime();
    this.interval = setInterval( _ => this.setTime(), 1000)
  }
  componentDidUnload(){
    this.stopClock();
  }
  setTime(){
    this.time = {
      hour:   new Date().getHours()%12,
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    }
  }
  stopClock(){
    clearInterval(this.interval);
  }
  render(){
    return(
      <div id='clock-wrapper'
           onClick={() => this.stopClock()}>
        <div class='my-clock'>
          {this.title+':'+this.time.hour+':'+this.time.minute+':'+this.time.second}
        </div>
      </div>
    );
  }
}
