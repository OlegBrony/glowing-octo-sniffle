import React from "../pkg/react.js";
import {useStore} from "../pkg/effector-react.js";
import {FormWrapper} from "./templates/index.js";
import {FormFooter, FormHeader} from "./molecules/index.js";
import {FormMainContent} from "./organisms/index.js";
import {$isUserProjectsFormOpened, formMounted} from "./model/index.js";
export const UserProjectsForm = () => {
  const isUserProjectsFormOpened = useStore($isUserProjectsFormOpened);
  React.useEffect(() => {
    formMounted();
  }, []);
  if (!isUserProjectsFormOpened)
    return null;
  return /* @__PURE__ */ React.createElement(FormWrapper, null, /* @__PURE__ */ React.createElement(FormHeader, null), /* @__PURE__ */ React.createElement(FormMainContent, null), /* @__PURE__ */ React.createElement(FormFooter, null));
};
