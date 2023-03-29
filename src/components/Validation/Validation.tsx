export const validateName = (name: string) => {
  if (!name) {
    return 'Please enter your name';
  }
  if (name.length < 3) {
    return 'Name must be at least 3 characters long';
  }
  return '';
};

export const validateDate = (date: string) => {
  const deliveryDate = new Date(date);
  const currentDate = new Date();
  if (!date) {
    return 'Please enter date of birth';
  }
  if (deliveryDate > currentDate) {
    return 'The date should be in the past';
  }
  return '';
};

export const validateSelect = (selectText: string) => {
  if (!selectText) {
    return 'Please choose a gender';
  }
  return '';
};

// export const validateCheckbox = (checkboxChecked: boolean) => {
//   if (!checkboxChecked) {
//     return 'Please consent to receive notifications';
//   }
//   return '';
// };

export const validateRadio = (radioChecked: string) => {
  if (!radioChecked) {
    return 'Please choose an option';
  }
  return '';
};

export const validateImage = (imageUploaded: string) => {
  if (!imageUploaded) {
    return 'Please upload an image';
  }
  return '';
};
