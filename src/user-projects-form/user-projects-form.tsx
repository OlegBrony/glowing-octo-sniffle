import React from 'react';
import { useStore } from 'effector-react';
import { FormWrapper } from './templates';
import { FormFooter, FormHeader } from './molecules';
import { FormMainContent } from './organisms';
import { $isUserProjectsFormOpened, formMounted } from './model';

export const UserProjectsForm = () => {
  const isUserProjectsFormOpened = useStore($isUserProjectsFormOpened)
  React.useEffect(() => {
    formMounted()
  }, [])

  if (!isUserProjectsFormOpened) return null

  return (
    <FormWrapper>
      <FormHeader />
      <FormMainContent />
      <FormFooter />
    </FormWrapper>
  );
};


