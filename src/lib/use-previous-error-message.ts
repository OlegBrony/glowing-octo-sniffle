import React from 'react';

/**
 * hook used for saving previous error message value to improve animation
 * */
export function usePreviousErrorMessage({ errorText, hasError }: { errorText: string, hasError: boolean }) {
  const [errorMessage, setErrorMessage] = React.useState(errorText)
  React.useEffect(() => {
    if (hasError) setErrorMessage(errorText)
  }, [hasError, errorText])

  return errorMessage
}
