import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {useStore} from "../../../_snowpack/pkg/effector-react.js";
import {SmallIconButton} from "../../ui/index.js";
import {FormMainTitleAndContent} from "../templates/index.js";
import {ProjectDetailsName, ProjectDetailsDescription, RemoveProjectBtn} from "../atoms/index.js";
import {ProjectDetailsDuration} from "../molecules/index.js";
import {$projectDetails, newProjectDetailsTriedToAdd} from "../model/index.js";
export const ProjectsDetailsList = () => {
  const projectDetails = useStore($projectDetails);
  return /* @__PURE__ */ React.createElement(FormMainTitleAndContent, {
    title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Projects Details", /* @__PURE__ */ React.createElement(AddButton, {
      onClick: () => newProjectDetailsTriedToAdd()
    }, "+"))
  }, /* @__PURE__ */ React.createElement(ProjectDetailsListWrapper, null, projectDetails.map((pd) => /* @__PURE__ */ React.createElement(ProjectDetails, {
    projectDetails: pd,
    key: pd.id
  }))));
};
const AddButton = styled(SmallIconButton)`
  margin-left: 1rem;
`;
const ProjectDetailsListWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
`;
const ProjectDetails = ({projectDetails}) => {
  return /* @__PURE__ */ React.createElement(ProjectDetailsWrapper, null, /* @__PURE__ */ React.createElement(ProjectDetailsName, {
    projectDetails
  }), /* @__PURE__ */ React.createElement(ProjectDetailsDescription, {
    projectDetails
  }), /* @__PURE__ */ React.createElement(ProjectDetailsDuration, {
    projectDetails
  }), /* @__PURE__ */ React.createElement(RemoveProjectBtn, {
    pdId: projectDetails.id
  }));
};
const ProjectDetailsWrapper = styled.div`
  padding: 1rem;
  border: 1px dashed gray;
  display: grid;
  grid-gap: 0.5rem;
  position: relative;
`;
