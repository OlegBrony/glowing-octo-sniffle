import React from "../../pkg/react.js";
import {useStore} from "../../pkg/effector-react.js";
import {TextField} from "../../ui/index.js";
import {FormMainTitleAndContent} from "../templates/index.js";
import {$username, usernameChanged, $usernameError, usernameTouched} from "../model/index.js";
export const Username = () => {
  const name = useStore($username);
  const error = useStore($usernameError);
  return /* @__PURE__ */ React.createElement(FormMainTitleAndContent, {
    title: "Name"
  }, /* @__PURE__ */ React.createElement(TextField, {
    value: name,
    onChange: usernameChanged,
    onBlur: () => usernameTouched(),
    isError: !!error,
    helperText: error
  }));
};
