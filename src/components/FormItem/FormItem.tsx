import React from 'react';

const POSITIONS = [
  { id: 'fd', value: 'wadawd', title: 'wadawd' },
  { id: 'fd', value: 'sefsefse', title: 'sefsefse' },
  { id: 'fd', value: 'pkmnuigi', title: 'pkmnuigi' },
];

class FormItem extends React.Component {
  state = {
    inputName: '',
    inputDate: '',
    selectText: '',
    checkboxChecked: false,
    radioChecked: '',
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
      checkboxChecked: this.checkboxRef.current?.checked || false,
      radioChecked: this.radioRefYes.current?.checked ? 'yes' : 'no',
    });
  };

  handleShow = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('this.state :>> ', this.state);
  };

  render() {
    const { inputName, inputDate, selectText, checkboxChecked } = this.state;

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
          />
        </label>
        <br />
        <label>
          Date of delivery:
          <input
            ref={this.dateRef}
            type="date"
            name="date"
            value={inputDate}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Choose delivery option:
          <select ref={this.selectRef} value={selectText} onChange={this.handleChange}>
            {POSITIONS.map(({ id, value, title }) => (
              <option key={id + value} value={value}>
                {title}
              </option>
            ))}
          </select>
        </label>
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
        <br />
        <label>
          I want to receive notifications about promo, sales, etc
          <div>
            <input
              ref={this.radioRefYes}
              type="radio"
              name="notificationPreference"
              value="yes"
              checked={this.state.radioChecked === 'yes'}
              onChange={this.handleChange}
            />
            <label htmlFor="yes">Да</label>
          </div>
          <div>
            <input
              ref={this.radioRefNo}
              type="radio"
              name="notificationPreference"
              value="no"
              checked={this.state.radioChecked === 'no'}
              onChange={this.handleChange}
            />
            <label htmlFor="no">Нет</label>
          </div>
        </label>
        {/* <label>
          <input type="file" onChange={this.handleFileInputChange} />
          <button type="submit">Загрузить</button>
        </label> */}
        <button onClick={this.handleShow}>Show</button>
      </form>
    );
  }
}
export default FormItem;
