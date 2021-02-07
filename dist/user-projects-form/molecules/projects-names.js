import React from "../../pkg/react.js";
import styled from "../../pkg/styled-components.js";
import {useStore} from "../../pkg/effector-react.js";
import {Chip} from "../../ui/index.js";
import {FormMainTitleAndContent} from "../templates/index.js";
import {NewProjectName} from "../atoms/index.js";
import {$projectNames, projectNameRemoved} from "../model/index.js";
export const ProjectsNames = () => {
  const projectNames = useStore($projectNames);
  return /* @__PURE__ */ React.createElement(FormMainTitleAndContent, {
    title: "Projects"
  }, /* @__PURE__ */ React.createElement(ListWrapper, null, projectNames.map((projectName) => /* @__PURE__ */ React.createElement(ProjectsName, {
    text: projectName,
    key: projectName,
    onRemove: () => projectNameRemoved(projectName)
  })), /* @__PURE__ */ React.createElement(NewProjectName, null)));
};
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
const ProjectsName = styled(Chip)`
  margin-bottom: 0.5rem;
`;
