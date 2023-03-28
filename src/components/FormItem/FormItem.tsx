import React from 'react';
import './FormItem.css';

const DELIVERY = [
  { id: 'Courier', value: 'Courier delivery', title: 'Courier delivery' },
  { id: 'Postal', value: 'Postal delivery', title: 'Postal delivery' },
  { id: 'In-store', value: 'In-store pickup', title: 'In-store pickup' },
];

class FormItem extends React.Component {
  state = {
    inputName: '',
    inputDate: '',
    selectText: '',
    checkboxChecked: false,
    radioChecked: '',
    isFormSubmitted: false,
  };

  nameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkboxRef = React.createRef<HTMLInputElement>();
  radioRefYes = React.createRef<HTMLInputElement>();
  radioRefNo = React.createRef<HTMLInputElement>();

  handleChange = () => {
    this.setState({
      inputName: this.nameRef.current?.value || '',
      inputDate: this.dateRef.current?.value || '',
      selectText: this.selectRef.current?.value || '',
      checkboxChecked: this.checkboxRef.current?.checked || '',
      radioChecked: this.radioRefYes.current?.checked ? 'no' : 'yes',
    });
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log('submit :>> ', this.state);
    this.setState({ ...this.state, isFormSubmitted: true });
  };

  noHandleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log('unSubmited :>> ', this.state);
    this.setState({ ...this.state, isFormSubmitted: true });
  };

  validateName = (name: string) => {
    if (!name) {
      return 'Please enter your name';
    }
    if (name.length < 3) {
      return 'Name must be at least 3 characters long';
    }
    return '';
  };

  validateDate = (date: string) => {
    const deliveryDate = new Date(date);
    const currentDate = new Date();
    if (!date) {
      return 'Please enter date of delivery';
    }
    if (deliveryDate < currentDate) {
      return 'The date should be in the future';
    }
    return '';
  };

  render() {
    const { inputName, inputDate, selectText, checkboxChecked, radioChecked } = this.state;
    const isNameValid = this.validateName(inputName.trim()) === '';
    const isDateValid = this.validateDate(inputDate) === '';
    const isSelectValid = selectText !== '';
    const isCheckboxValid = checkboxChecked;
    const isRadioValid = radioChecked !== '';
    const isFormValid =
      isNameValid && isDateValid && isSelectValid && isCheckboxValid && isRadioValid;

    return (
      <form>
        <label>
          Name:
          <input
            ref={this.nameRef}
            type="text"
            name="name"
            value={inputName}
            onChange={this.handleChange}
            className={!isNameValid ? 'error' : ''}
          />
        </label>
        {/*
          Отображаем сообщение об ошибке, если имя не заполнено
          и форма была отправлена (isNameValid === false и isFormSubmitted === true)
        */}
        {!isNameValid && this.state.isFormSubmitted && (
          <div className="error-message">{this.validateName(inputName)}</div>
        )}
        <br />
        <label>
          Date of delivery:
          <input
            ref={this.dateRef}
            type="date"
            name="date"
            value={inputDate}
            onChange={this.handleChange}
            className={!isDateValid ? 'error' : ''}
          />
        </label>
        {!isDateValid && this.state.isFormSubmitted && (
          <div className="error-message">{this.validateDate(inputDate)}</div>
        )}
        <br />
        <label>
          Choose delivery option:
          <select
            ref={this.selectRef}
            value={selectText}
            onChange={this.handleChange}
            className={!isSelectValid ? 'error' : ''}
          >
            <option value="">-- Choose an option --</option>
            {DELIVERY.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>
        </label>

        {!isSelectValid && this.state.isFormSubmitted && (
          <div className="error-message">Please choose a delivery option</div>
        )}
        <br />
        <label>
          I consent to my personal data
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
        <br />
        <label>
          I want to receive notifications about promo, sales, etc
          <div>
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
          <div>
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
        <br />
        <button onClick={isFormValid ? this.handleSubmit : this.noHandleSubmit}>
          {/* <button onClick={this.handleSubmit} disabled={!isFormValid}> */}
          Submit
        </button>
      </form>
    );
  }
}
export default FormItem;
