import * as React from "react";

let signUpList = [
  'jasutton@gmail.com',
  'you@there.com',
]

const addEmailToSignUpList = (email: string, options: any) => {
  if( signUpList.includes(email) ) {
    return 'error-email-used';
  } else {
    signUpList.push(email);
    return 'signed-up';
  }
}
const acceptableEmainExtensions: string[] = [
  'com', 'COM','net','NET','aol','AOL', 'aol',
]

const verifyIsEmail = (email: string, options: any): string => {
  let results;
  if( (results = /\@/.exec(email) !== null ) ) {
    results = email.split('@');
    if( results.length< 3 ) {
      results = results[1].split('.');
      if( acceptableEmainExtensions.includes(results.slice(-1)[0]) ) {
        return addEmailToSignUpList(email, options);
      }
    }
  }
  //verifyIsEmail
  //if eMail is valid
  //I am not so sure how far to take this
  //I will assume the email is vaild if it
  // contains at least one @ symbol
  // and a period foloowed by any of the acceptalbe extensions.
  console.log('Error - Too Many ats', results)
  return 'error';
}

export interface SignUpProps {
  title: string;
}

 export interface SignUpStates {
   signUpStatus: string;
}
export class SignUp extends React.Component<SignUpProps, SignUpStates> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      signUpStatus: 'open',
    }
  }
  handleKeyPress(ev) {
    if(ev.charCode === 13) {
      this.setState({ signUpStatus: verifyIsEmail(ev.target.value, true) });
      ev.target.value = '';
      console.log(this.state.signUpStatus)
    }
  }
  resetSignUpStatus() {
    this.setState({ signUpStatus: 'open', });
  }
  signupForm(): any {
    return (
      <div id='sighup-header'>
        <h1>{this.props.title}</h1>
        <input id="new-todo"
               onKeyPress={ (ev) => this.handleKeyPress(ev)}
               placeholder="you@their.com"
               >
        </input>
      </div>
    );
  }
  emailUsed(): any {
    return (
      <div id='sighup-header'>
        <h1>{this.props.title}</h1>
        <div>Error email already Signed Up, </div>
        <button className='signup-reset-button'
                onClick={() => this.resetSignUpStatus()}
                > Click To Reset
        </button>
      </div>
    );
  }
  emailError(): any {
    return (
      <div id='sighup-header'>
        <h1>{this.props.title}</h1>
        <div>Error Not an valid email address, </div>
        <button className='signup-reset-button'
                onClick={() => this.resetSignUpStatus()}
                > Click To Reset
        </button>
      </div>
    );
  }
  done(): any {
    return(
      <div id='sighup-header'>
        <h1>Thank you for Signing up to BTN</h1>
        <div>You will recieve a confirmation e-mail soon.</div>
        <button className='signup-reset-button'
             onClick={() => this.setState({ signUpStatus: 'closed'}) }
             > Click To Clear
        </button>
      </div>
    );
  }
  render() {
    let output: string;
    switch(this.state.signUpStatus){
      case 'open':
        output = this.signupForm();
        break;
      case 'error-email-used':
        output = this.emailUsed();
        break;
      case 'error':
        output = this.emailError();
        break;
      case 'signed-up':
        output = this.done();
        break;
      default:
        break;
    }
    return (
      <div id='signup-wrapper'>
        {output}
      </div>
    );
  }
}
