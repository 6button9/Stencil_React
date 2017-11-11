import { onChange } from "../index"

export let todos = ["one","two"]

const Home = (ev: any) => {
  console.log('home', ev)
}
const Contact = (ev: any) => {
  console.log('Contact', ev)
}
const About = (ev: any) => {
  console.log('About', ev)
}
const Training = (ev: any) => {
  console.log('Training', ev)
}
const Search = (ev: any) => {
  console.log('Search', ev)
}
export const headerMenus = ["Home","Contact","About","Training","Search"]

export const sidebarMenus = [
  'Varibales',
  'Conditionals',
  'Looping',
  'Objects',
  'Arrays',
  'Methods',
]

export const footerMenus = [
  'Bottom',
  'two',
  'three',
  'four',
  'five',
  'six',
]

const menuArray = {
   Varibales: [
    'Types',
    'Int',
    'Float',
    'String',
    'Boolean',
  ],
  Conditionals: [
    'if',
    'else',
    'else if',
    'switch',
    'conditoin ? if true : if false'
  ],
  Looping: [
    'for',
    'while',
    'forEach',
    'filter',
    'map',
  ],
  Objects: [
    'What is an Object',
    'Structures',
    'class',
    'function',
  ],
  Arrays: [
    'What is an Array',
    'Navigating an Array',
    'push',
    'pop',
  ],
  Methods: [
    'functions',
    'methods',
    '=>',
    'this',
    'Six ways to make a function',
  ],
}

export const getMenuArray = (type: string): string[] => {
  console.log(typeof type)
  console.log('getMenuArray', type, menuArray[type]);
  return menuArray[type];
}

export const myMockContent = {
  id: 1,
  title: 'post-1',
  body: 'text for post one\nnext line\nmore lines',
}
export const handleInput = (data: string) => {
  console.log(data)
  todos.push(data)
  onChange()
}
export const handleAction = (ev: any, menu: string[]) => {
  console.log(ev.target.className, menu)
}
//export const handleAction = (event: any, type: string[]) => {
  //handleClick(event: any, type: string[]) {
  //console.log(event.srcElement.className, type)
//}
