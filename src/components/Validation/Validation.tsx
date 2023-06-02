export const validateName = (name: string) => {
  if (!name) {
    return 'Please enter your name';
  }
  if (name.length < 3) {
    return 'Name must be at least 3 characters long';
  }
  return true;
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
  return true;
};

export const validateSelect = (selectText: string) => {
  if (!selectText) {
    return 'Please choose a gender';
  }
  return true;
};

export const validateRadio = (radioChecked: string) => {
  if (!radioChecked) {
    return 'Please choose an option';
  }
  return true;
};

export const validateImage = (imageUploaded: string) => {
  if (imageUploaded.length === 0) {
    return 'Please upload an image';
  }
  return true;
};

export const validateCheckbox = (checkboxChecked: boolean) => {
  if (!checkboxChecked) {
    return 'Please аgree to the use of personal data';
  }
  return true;
};
