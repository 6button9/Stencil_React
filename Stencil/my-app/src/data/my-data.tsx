//import { MyName } from '../components/my-name/my-name'
export const sidebarMenus = [
  'Views',
  'Languages',
  'Functional',
  'MiddleMen',
  'Helpers',
  'six',
]

export const headerMenus = [
  'Top',
  'Todo',
  'SignUp',
  'Card',
  'Calculator',
]
export const footerMenus = [
  '404',
  'Icons',
  'Player',
  'four',
  'five',
  'six',
]

export const menuArray = {
   Views: [
    'Stencil',
    'React',
    'Vue',
    '_cntnc.',
    'Ember',
    'Other',
  ],
  Languages: [
    'JavaScript',
    'TypeScript',
    'JAVA',
    'Python',
    'anything with a C',
  ],
  Functional: [
    'F#',
    'Elm',
    'Haskell',
    'Eurlang',
    'Elixir',
  ],
  MiddleMen: [
    'Babel',
    'JSX',
    'Mustaches',
    'HandleBars',
    'FakeBars',
    'DataBars',
  ],
  Helpers: [
    'jQuery',
    'loDash',
    'Bacon',
    'RxJS',
    'Knockout',
    'Redux',
  ],
  six: [
    'ApolloClient',
    'GraphQL',
    'Phonex',
    'Node',
    'Webpack',
    'Gulp',
  ],
}

export const getMenuArray = (type: string): string[] => {
  console.log('getMenuArray', type, menuArray)
  return menuArray[type];
}

export const myMockContent = {
  id: 1,
  title: 'post-1',
  body: 'text for post one\nnext line\nmore lines',
}


/*
export const handleAction = (event: any, type: string[]) => {
  //handleClick(event: any, type: string[]) {
  console.log('Action', event.srcElement.className, type)
  const myAppEl = document.querySelector('my-app');
  console.log(myAppEl.updateRoute)
  if( type.slice(-1) === ['Todo'] &&
      type[1]        === 'header') {
    //myAppEl.updateRoute('todo');
  }
  if( type.slice(-1) === ['Card'] &&
      type[1]        === 'header') {
    //myAppEl.updateRoute('card');
  }
  if( type.slice(-1) === ['SignUp'] &&
      type[1]        === 'header') {
    //myAppEl.updateRoute('sign-up');
  }
}
*/
