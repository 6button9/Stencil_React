import { Component, State } from '@stencil/core';

@Component({
  tag: 'my-form',
  styleUrl: 'my-form.scss'
})
export class MyForm{
  @State() value: string;

    handleSubmit(e) {
      e.preventDefault()
      console.log(this.value);
      // send data to our backend
      this.value='';
    }

    handleChange(event) {
      this.value = event.target.value;
    }

    render() {
      return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Name:
            <input type="text" value={this.value} onInput={() => this.handleChange(event)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
