import lodash from 'lodash';

//types: info, success, warning, error

//usage addToast('message',{appearance:'success', placement: 'top-left', autoDismiss:true, pauseOnHover:false})
// export function addToastCustom(...args) {
//   const add = lodash.get(window, '__react_toast_provider.current.add');

//   if (!add) {
//     console.error('Could not get toast context');
//     console.error(add);
//     return;
//   }

//   add(...args);
// }

//usage addToast('message', 'error');
//types: info, success, warning, error
export function addToast(message: string, appearance = 'info', autoDismiss = true) {
  const add = lodash.get(window, '__react_toast_provider.current.add');

  if (!add) {
    console.error('Could not get toast context');
    return;
  }

  add(message, {
    appearance: appearance,
    autoDismiss: autoDismiss,
    pauseOnHover: false,
    autoDismissTimeout: 10000,
  });
}
