import { Component, Prop, State } from '@stencil/core';

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

@Component({
  tag: 'my-signup',
  styleUrl: 'my-signup.scss'
})
export class Signup {
  @State() signUpStatus: string = 'open';
  @Prop() title: string;

  handleKeyPress(ev) {
    if(ev.keyCode === 13) {
      this.signUpStatus = verifyIsEmail(ev.target.value, true)
      ev.target.value = '';
    }
  }
  resetSignUpStatus() {
    this.signUpStatus = 'open';
  }
  signupForm(): any {
    return (
      <div>
        <h1>{this.title}</h1>
        <input onKeyPress={ (ev) => this.handleKeyPress(ev)}
               >
        </input>
        <h2>username</h2>
        <hr />
        <input onKeyPress={ (ev) => this.handleKeyPress(ev)}
               placeholder="you@their.com"
               >
        </input>
        <h2>e-mail</h2>
        <hr />
        <input onKeyPress={ (ev) => this.handleKeyPress(ev)}
               >
        </input>
        <h2>Password</h2>
        <hr />
        <button class='signup-button'
                onClick={() => this.resetSignUpStatus()}
                > SignUp
        </button>
      </div>
    );
  }
  emailUsed(): any {
    return (
      <div id='sighup-header'>
        <h1>{this.title}</h1>
        <div>Error email already Signed Up, </div>
        <button class='signup-reset-button'
                onClick={() => this.resetSignUpStatus()}
                > Click To Reset
        </button>
      </div>
    );
  }
  emailError(): any {
    return (
      <div id='sighup-header'>
        <h1>{this.title}</h1>
        <div>Error Not email address, </div>
        <button class='signup-reset-button'
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
        <button class='signup-reset-button'
             onClick={() => this.signUpStatus = 'closed'}
             > Click To Clear
        </button>
      </div>
    );
  }
  render() {
    let output: string;
    switch(this.signUpStatus){
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
