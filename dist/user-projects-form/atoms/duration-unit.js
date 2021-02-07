import React from "../../../_snowpack/pkg/react.js";
import {TimeUnits} from "../../api/types.js";
import {Select} from "../../ui/index.js";
import {projectDetailsDurationUnitChanged} from "../model/index.js";
export const DurationUnit = ({pdId, value}) => {
  const handlePDDurationUnitChange = (e) => {
    const newUnit = e.target.value;
    projectDetailsDurationUnitChanged({id: pdId, unit: newUnit});
  };
  return /* @__PURE__ */ React.createElement(Select, {
    options: [
      {label: "months", value: TimeUnits.Month},
      {label: "years", value: TimeUnits.Year}
    ],
    onChange: handlePDDurationUnitChange,
    value
  });
};
