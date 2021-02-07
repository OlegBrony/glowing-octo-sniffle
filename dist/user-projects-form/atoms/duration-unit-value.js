import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {TextField} from "../../ui/index.js";
import {projectDetailsDurationValueChanged} from "../model/index.js";
export const DurationUnitValue = ({projectDetails}) => {
  const handlePDDurationValueChange = (e) => {
    const {valueAsNumber} = e.target;
    const newValue = Number.isNaN(valueAsNumber) ? 0 : valueAsNumber;
    projectDetailsDurationValueChanged({id: projectDetails.id, value: newValue});
  };
  return /* @__PURE__ */ React.createElement(UnitValue, {
    type: "number",
    onChange: handlePDDurationValueChange,
    value: projectDetails.duration.value,
    min: 0,
    isError: projectDetails.isTouched.duration && !!projectDetails.error.duration,
    helperText: projectDetails.error.duration
  });
};
const UnitValue = styled(TextField)`
  margin-right: 1rem;
`;
