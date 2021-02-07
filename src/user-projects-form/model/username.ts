import { createFormField } from '../../lib/create-form-field';
import { getProjectsDataFx } from './main';

const usernameField = createFormField({
  defaultValue: '',
  reducer: (_, e) => e.target.value,
  rules: {
    required: 'Required',
  },
})
export const $username = usernameField.$store
export const $usernameError = usernameField.$error
export const usernameChanged = usernameField.storeChanged
export const usernameTouched = usernameField.fieldTouched
export const $usernameInnerError = usernameField.$innerError

$username.on(getProjectsDataFx.doneData, (name, data) => {
  if (data) return data.username
})
