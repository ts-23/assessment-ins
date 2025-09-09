import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import React from "react";
import app from "ampersand-app";
// import {
//   Router,
//   Route,
//   Redirect,
//   IndexRoute,
//   browserHistory,
// } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router";

import { createBrowserHistory } from "history";
import ga from "react-ga";
import prep_env from "./models/prep_env";

import "./sass/main.scss";

import Main from "./views/Main";

import Ttt from "./views/ttt/Ttt";

import Txt_page from "./views/pages/Txt_page";
import PopUp_page from "./views/pages/PopUp_page";

import Contact from "./views/pages/Contact";
import ErrorPage from "./views/pages/ErrorPage";

import "./style.scss";

// createRoot(document.getElementById("root")!).render(
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute components={{ mainContent: Txt_page }} />

        <Route path="/pg/(:page)" components={{ mainContent: Txt_page }} />

        <Route path="/ttt" components={{ mainContent: Ttt }} />

        <Route path="/pupg/(:pu_page)" components={{ popup: PopUp_page }} />

        <Route path="/contact-us" components={{ popup: Contact }} />

        <Route path="/error/404" components={{ mainContent: ErrorPage }} />
        <Route path="*" components={{ mainContent: ErrorPage }} />
      </Route>
    </Router> */}

    <BrowserRouter>
      <Routes>
        <Route index element={<Txt_page />} />
        {/* <Route path="/error/404" element={<ErrorPage />} /> */}
        {/* 
        <Route path="/pg/(:page)" element={{ mainContent: Txt_page }} />

        <Route path="/ttt" element={{ mainContent: Ttt }} />

        <Route path="/pupg/(:pu_page)" element={{ popup: PopUp_page }} />

        <Route path="/contact-us" componeelementnts={{ popup: Contact }} />

        <Route path="*" element={{ mainContent: ErrorPage }} /> */}
        {/* <Route path="about" element={<About />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

// ----------------------------------------------------------------------
// This section is used to configure the global app
// ----------------------------------------------------------------------

window.app = app;

app.extend({
  settings: {
    is_mobile: false,
    mobile_type: null,
    can_app: false,

    ws_conf: null,

    curr_user: null,

    user_ready: false,
    user_types: [],
    basket_type: null,
    basket_total: 0,
  },

  init() {
    prep_env(this.start.bind(this));
  },

  start_ga() {
    ga.initialize(app.settings.ws_conf.conf.ga_acc.an, { debug: true });
    // ga.pageview(location.pathname)
    const loclisten = browserHistory.listen((location) => {
      // ga.send('send', location);
      ga.pageview(location.pathname);
    });
  },

  start() {
    const history = createBrowserHistory({
      basename: base_dir,
    });

    this.start_ga();

    renderSite();
  },

  show_page(u) {
    switch (u) {
      case "home":
        browserHistory.push("/");
        break;

      default:
        console.log("show_page event with:", u);
        browserHistory.push(u);
        break;
    }
  },

  events: {
    show_message: "show_message",
    show_page: "show_page",
  },
});

app.init();

app.on(app.events.show_page, app.show_page);
