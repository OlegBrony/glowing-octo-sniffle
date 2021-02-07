import React from "../pkg/react.js";
export function usePreviousErrorMessage({errorText, hasError}) {
  const [errorMessage, setErrorMessage] = React.useState(errorText);
  React.useEffect(() => {
    if (hasError)
      setErrorMessage(errorText);
  }, [hasError, errorText]);
  return errorMessage;
}
