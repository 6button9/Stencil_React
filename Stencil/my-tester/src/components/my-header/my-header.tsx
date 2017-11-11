import { Component } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.scss'
})
export class MyHeader {
  render () {
    return (
      <ul>
        <li><stencil-route-link url="/" exact={true}>Home</stencil-route-link></li>
        <li><stencil-route-link url="/Emit">Emit</stencil-route-link></li>
        <li><stencil-route-link url="/Hooks">Hooks</stencil-route-link></li>
        <li><stencil-route-link url="/Parent_Trap">Gramps</stencil-route-link></li>
        <li><stencil-route-link url="/parent">Parent</stencil-route-link></li>
        <li><stencil-route-link url="/child">Child</stencil-route-link></li>
        <li><stencil-route-link url="/select">Select</stencil-route-link></li>
        <li><stencil-route-link url="/check-list">CheckList</stencil-route-link></li>
        <li><stencil-route-link url="/form">Form</stencil-route-link></li>
        <li><stencil-route-link url="/portal1">Portal1</stencil-route-link></li>
        <li><stencil-route-link url="/portal2">Portal2</stencil-route-link></li>
        <li><stencil-route-link url="/portal3">Portal3</stencil-route-link></li>
        <li><stencil-route-link url="/portal4">Portal4</stencil-route-link></li>
      </ul>
    );
  }
}
