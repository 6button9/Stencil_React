import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  render () {
    return (
      <my-listener>
      <my-header />
      <stencil-router>
        <div class="app-content">
          <stencil-route
            url="/"
            exact={true}
            componentProps={{
              first: 'Stencil',
              last: 'JS'
            }}
            component="my-name"
          />
          <stencil-route
            url="/hooks"
            exact={true}
            componentProps={{
              title: 'Hooks'
            }}
            component="my-hooks"
          />
          <stencil-route
            url="/Parent_Trap"
            exact={true}
            componentProps={{
              title: 'Gramps'
            }}
            component="my-gramps"
          />
          <stencil-route
            url="/parent"
            exact={true}
            componentProps={{
              title: 'Parent'
            }}
            component="my-parent"
          />
          <stencil-route
            url="/child"
            exact={true}
            componentProps={{
              title: 'Child'
            }}
            component="my-child"
          />
          <stencil-route
            url="/Emit"
            exact={true}
            componentProps={{
              title: 'Emitter'
            }}
            component="my-emitter"
          />
          <stencil-route
            url="/check-list"
            exact={true}
            componentProps={{
              title: 'CheckList',
              checkList: ['one','two','three','four']
            }}
            component="my-check-list"
          />
          <stencil-route
            url="/select"
            exact={true}
            componentProps={{
              title: 'Select',
              selections: ['one','two','three','four']
            }}
            component="my-select"
          />
          <stencil-route
            url="/form"
            exact={true}
            component="my-form"
          />
          <stencil-route
            url="/portal1"
            exact={true}
            component="my-portal"
            componentProps={{
              portalId: 'p-1',
              x: 50,
              y: 70,
              bgColor: 'green',
            }}
          />
          <stencil-route
            url="/portal2"
            exact={true}
            component="my-portal-el"
            componentProps={{
              portalId: 'p-2',
              x: 650,
              y: 70,
              bgColor: 'blue',
            }}
          />
          <stencil-route
            url="/portal3"
            exact={true}
            component="my-portal-el"
            componentProps={{
              portalId: 'p-3',
              x: 50,
              y: 470,
              bgColor: 'yellow',
            }}
          />
          <stencil-route
            url="/portal4"
            exact={true}
            component="my-portal"
            componentProps={{
              portalId: 'p-4',
              x: 750,
              y: 470,
              bgColor: 'teal',
            }}
          />
        </div>
      </stencil-router>
      </my-listener>
    );
  }
}
