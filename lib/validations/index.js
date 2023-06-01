import * as yup from "yup"

export const profileFormSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(30, "Username must not be longer than 30 characters."),
  email: yup.string("Please select an email to display.").email(),
  bio: yup.string().max(160).min(4),
  urls: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().url("Please enter a valid URL."),
      })
    )
    .optional(),
})

export const accountFormSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(30, "Name must not be longer than 30 characters."),
  dob: yup.date().required("A date of birth is required."),
  language: yup.string().required("Please select a language."),
})

export const notificationsFormSchema = yup.object({
 
    mobile: yup.boolean().default(false).optional(),
    communication_emails: yup.boolean().default(false).optional(),
    social_emails: yup.boolean().default(false).optional(),
    marketing_emails: yup.boolean().default(false).optional(),
    security_emails: yup.boolean(),
  })
export const displayFormSchema = yup.object({
    items: yup
      .array()
      .of(yup.string())
      .test("atLeastOneItem", "You have to select at least one item.", (value) => {
        return value && value.length > 0;
      }),
  });