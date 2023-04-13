import {
  validateName,
  validateDate,
  validateSelect,
  validateRadio,
  validateImage,
  validateCheckbox,
} from './Validation';

describe('Form Validators', () => {
  describe('validateName', () => {
    it('should return an error message when name is not entered', () => {
      expect(validateName('')).toEqual('Please enter your name');
    });

    it('should return an error message when name is less than 3 characters', () => {
      expect(validateName('ab')).toEqual('Name must be at least 3 characters long');
    });

    it('should return true when name is valid', () => {
      expect(validateName('boris')).toEqual(true);
    });
  });

  describe('validateDate', () => {
    it('should return an error message when date is not entered', () => {
      expect(validateDate('')).toEqual('Please enter date of birth');
    });

    it('should return an error message when date is in the future', () => {
      expect(validateDate('2030-09-09')).toEqual('The date should be in the past');
    });

    it('should return true when date is valid', () => {
      expect(validateDate('1990-08-04')).toEqual(true);
    });
  });

  describe('validateSelect', () => {
    it('should return an error message when gender is not selected', () => {
      expect(validateSelect('')).toEqual('Please choose a gender');
    });

    it('should return true when gender is selected', () => {
      expect(validateSelect('male')).toEqual(true);
    });
  });

  describe('validateRadio', () => {
    it('should return an error message when no option is selected', () => {
      expect(validateRadio('')).toEqual('Please choose an option');
    });

    it('should return true when an option is selected', () => {
      expect(validateRadio('option1')).toEqual(true);
    });
  });

  describe('validateImage', () => {
    it('should return an error message when no image is uploaded', () => {
      expect(validateImage('')).toEqual('Please upload an image');
    });

    it('should return true when an image is uploaded', () => {
      expect(validateImage('image.jpg')).toEqual(true);
    });
  });

  describe('validateCheckbox', () => {
    it('should return an error message when checkbox is not checked', () => {
      expect(validateCheckbox(false)).toEqual('Please аgree to the use of personal data');
    });

    it('should return true when checkbox is checked', () => {
      expect(validateCheckbox(true)).toEqual(true);
    });
  });
});
