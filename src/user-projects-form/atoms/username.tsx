import React from 'react';
import { useStore } from 'effector-react';
import { TextField } from '../../ui';
import { FormMainTitleAndContent } from '../templates';
import { $username, usernameChanged, $usernameError, usernameTouched } from '../model';

export const Username = () => {
  const name = useStore($username)
  const error = useStore($usernameError)
  return (
    <FormMainTitleAndContent title={'Name'}>
      <TextField
        value={name}
        onChange={usernameChanged}
        onBlur={() => usernameTouched()}
        isError={!!error}
        helperText={error}
      />
    </FormMainTitleAndContent>
  )
}
