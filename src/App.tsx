import React from 'react';
import { UserProjectsForm, userProjectsFormApi } from './user-projects-form';
import { Button } from './ui';

export function App() {
  const handleClick = () => {
    userProjectsFormApi.toggleUserProjectsFormOpen()
  }
  return (
    <div>
      <Button onClick={handleClick}>Toggle form</Button>
      <UserProjectsForm />
    </div>
  );
}
