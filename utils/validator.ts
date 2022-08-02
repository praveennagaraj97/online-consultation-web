export function validateIndianPhoneNumber(number: string) {
  return new RegExp(/^[6-9]\d{9}$/gi).test(number);
}

export const validateIsValueIsNumeric = (input: string) => {
  return new RegExp(/^\d+$/).test(input);
};

export const validateEmail = (email: string) =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
