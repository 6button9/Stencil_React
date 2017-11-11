import * as React    from "react";
import * as ReactDOM from "react-dom";

import { Sidebar }   from "./components/Sidebar";
import { Header }    from "./components/Header";
import { Clock }     from "./components/Clock";
import { Name }      from "./components/Name";
import { SignUp }    from "./components/SignUp";
import { Todo }      from "./components/Todo";
import { Content }   from "./components/Content";
import { Footer }    from "./components/Footer";

import { headerMenus, sidebarMenus, footerMenus,
         myMockContent, handleAction } from "./data/my-data"

export const onChange = () => {
  ReactDOM.render(
    <div id="app-wrapper">
      <Sidebar title="SideBar"
               parents={['main']}
               menus={sidebarMenus}
               handleAction={handleAction}
               />
      <Header  title='Header'
               parents={['main']}
               menus={headerMenus}
               handleAction={handleAction}
               />
      <Clock   title='clock' />
      <Name    first='John' last='Btn' />
      <SignUp  title='Sign Up' />
      <Todo    title='Todo List' />
      <Content content={myMockContent} />
      <Footer  title="footer"
               parents={['main']}
               menus={footerMenus}
               handleAction={handleAction}
              />
    </div>,
    document.getElementById("example")
  );
}
onChange()
