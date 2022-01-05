import { addToast } from './toastNotifications';

export function getResponseData(response: any) {
  if (!response.data) {
    addToast(response.responsemessage || 'An error occurred!', response.status || 'error');
  } else {
    // Success
    if (response.data.status === 'success') {
      const responseData: any = response.data.data;
      return responseData;
    } else {
      addToast(response.data.responsemessage, 'error');
    }
  }

  return;
}
