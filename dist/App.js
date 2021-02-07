import React from "./pkg/react.js";
import {UserProjectsForm, userProjectsFormApi} from "./user-projects-form/index.js";
import {Button} from "./ui/index.js";
export function App() {
  const handleClick = () => {
    userProjectsFormApi.toggleUserProjectsFormOpen();
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    onClick: handleClick
  }, "Toggle form"), /* @__PURE__ */ React.createElement(UserProjectsForm, null));
}
