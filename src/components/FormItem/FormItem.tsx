import FormCards from '../FormCards/FormCards';
import React from 'react';
import './FormItem.css';
import { ICard } from '../../types/types';
import Message from '../Message/Message';
import {
  validateName,
  validateDate,
  validateSelect,
  validateRadio,
  validateImage,
} from '../Validation/Validation';

const GENDER = [
  { id: 'male', value: 'male', title: 'male' },
  { id: 'female', value: 'female', title: 'female' },
];

class FormItem extends React.Component {
  state = {
    inputName: '',
    inputDate: '',
    selectText: '',
    checkboxChecked: false,
    radioChecked: '',
    imageUploaded: '',
    isFormSubmitted: false,
    showMessage: false,
  };

  nameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkboxRef = React.createRef<HTMLInputElement>();
  radioRefYes = React.createRef<HTMLInputElement>();
  radioRefNo = React.createRef<HTMLInputElement>();
  imageRef = React.createRef<HTMLInputElement>();

  array: ICard[] = [];

  handleChange = () => {
    const imageFile = this.imageRef.current?.files?.[0];
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : '';

    this.setState({
      inputName: this.nameRef.current?.value || '',
      inputDate: this.dateRef.current?.value || '',
      selectText: this.selectRef.current?.value || '',
      checkboxChecked: this.checkboxRef.current?.checked || '',
      radioChecked: this.radioRefYes.current?.checked ? 'yes' : 'no',
      imageUploaded: imageFile,
      imageUrl: imageUrl,
    });
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const formObject: ICard = { ...this.state };
    this.array.push(formObject);

    this.setState({ showMessage: true });
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 2000);

    this.setState({
      inputName: '',
      inputDate: '',
      selectText: '',
      checkboxChecked: false,
      radioChecked: '',
      imageUploaded: '',
      isFormSubmitted: false,
    });
  };

  noHandleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({ ...this.state, isFormSubmitted: true });
  };

  render() {
    const {
      inputName,
      inputDate,
      selectText,
      checkboxChecked,
      radioChecked,
      imageUploaded,
      showMessage,
    } = this.state;
    const isNameValid = validateName(inputName.trim()) === '';
    const isDateValid = validateDate(inputDate) === '';
    const isSelectValid = validateSelect(selectText) === '';
    const isCheckboxValid = checkboxChecked;
    const isRadioValid = validateRadio(radioChecked) === '';
    const isImageValid = validateImage(imageUploaded) === '';
    const isFormValid =
      isNameValid &&
      isDateValid &&
      isSelectValid &&
      isCheckboxValid &&
      isRadioValid &&
      isImageValid;

    return (
      <>
        <form className="form-container">
          <label>
            Name:
            <input
              ref={this.nameRef}
              type="text"
              name="name"
              value={inputName}
              onChange={this.handleChange}
            />
          </label>
          {!isNameValid && this.state.isFormSubmitted && (
            <div className="error-message">{validateName(inputName)}</div>
          )}
          <label>
            Date of birth:
            <input
              ref={this.dateRef}
              type="date"
              name="date"
              value={inputDate}
              onChange={this.handleChange}
            />
          </label>
          {!isDateValid && this.state.isFormSubmitted && (
            <div className="error-message">{validateDate(inputDate)}</div>
          )}
          <label>
            Gender:
            <select ref={this.selectRef} value={selectText} onChange={this.handleChange}>
              <option value="">-- Choose a gender --</option>
              {GENDER.map(({ id, value, title }) => (
                <option key={id} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </label>
          {!isSelectValid && this.state.isFormSubmitted && (
            <div className="error-message">Please choose a gender</div>
          )}
          <label>
            Сonsent to receive notifications:
            <div className="radioButton">
              <input
                ref={this.radioRefYes}
                type="radio"
                name="notificationPreference"
                value="yes"
                checked={radioChecked === 'yes'}
                onChange={this.handleChange}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="radioButton">
              <input
                ref={this.radioRefNo}
                type="radio"
                name="notificationPreference"
                value="no"
                checked={radioChecked === 'no'}
                onChange={this.handleChange}
              />
              <label htmlFor="no">No</label>
            </div>
          </label>
          {!isRadioValid && this.state.isFormSubmitted && (
            <div className="error-message">Please choose a notification preference</div>
          )}
          <label>
            Add image:
            <input
              ref={this.imageRef}
              type="file"
              accept="image/*"
              name="addImage"
              onChange={this.handleChange}
            />
          </label>
          {!isImageValid && this.state.isFormSubmitted && (
            <div className="error-message">Please add image</div>
          )}
          <label>
            Consent to personal data:
            <input
              ref={this.checkboxRef}
              type="checkbox"
              name="consent"
              checked={checkboxChecked}
              onChange={this.handleChange}
            />
          </label>
          {!isCheckboxValid && this.state.isFormSubmitted && (
            <div className="error-message">Please аgree to the use of personal data</div>
          )}
          <button
            className="button"
            onClick={isFormValid ? this.handleSubmit : this.noHandleSubmit}
          >
            Submit
          </button>
        </form>
        {showMessage && <Message />}
        <FormCards cards={this.array} />
      </>
    );
  }
}
export default FormItem;
