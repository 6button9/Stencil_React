import * as React from "react";

export interface ClockProps {
  title: string;
}
export interface ClockStates {
  time: {
    hour:   number,
    minute: number,
    second: number,
  };
  interval: any;
}
export class Clock extends React.Component<ClockProps, ClockStates> {
  constructor(props: ClockProps){
    super(props);
    this.state = {
      time: {
        hour:   new Date().getHours()%12,
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      },
      interval: null,
    }
  }
  componentWillMount(){
    this.setState({ interval: setInterval( _ => this.setTime(), 1000) });
  }
  componentWillUnmount(){
    this.stopClock();
  }
  setTime(){
    this.setState({
      time: {
        hour:   new Date().getHours()%12,
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      }
    });
  }
  stopClock(){
    clearInterval(this.state.interval);
  }
  render(){
    return(
      <div id='clock-wrapper'
           onClick={() => this.stopClock()}>
        <div className='my-clock'>
          {this.props.title+':'+this.state.time.hour+':'+this.state.time.minute+':'+this.state.time.second}
        </div>
      </div>
    );
  }
}
