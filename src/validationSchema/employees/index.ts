import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  team_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
