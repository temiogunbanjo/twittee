export function isFormValidated(formName) {
  let form = document.getElementById(formName);
  let isValid = form !== null ? form.checkValidity() : false;
  return isValid;
}

export function getFormBody(formName) {
  const requestBody = {};

  document.querySelectorAll(`#${formName} *[name]`).forEach(input => {
    const name = input.getAttribute('name');
    if (name !== '') requestBody[name] = input.value;
  });

  return requestBody;
}
