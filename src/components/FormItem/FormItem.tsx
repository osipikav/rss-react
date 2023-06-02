import FormCards from '../FormCards/FormCards';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import './FormItem.css';
import { IData } from '../../types/types';
import Message from '../Message/Message';
import {
  validateName,
  validateDate,
  validateSelect,
  validateRadio,
  validateImage,
  validateCheckbox,
} from '../Validation/Validation';

const GENDER = [
  { id: 'male', value: 'male', title: 'male' },
  { id: 'female', value: 'female', title: 'female' },
];

export default function FormItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [validatedData, setValidatedData] = useState<IData[]>([]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsFormSubmitted(true);

    const card: IData = {
      name: data.name,
      image: URL.createObjectURL(data.image[0]),
      concent: data.concent,
      date: data.date,
      gender: data.gender,
    };

    setValidatedData((prevState) => [...prevState, card]);

    setTimeout(() => {
      setIsFormSubmitted(false);
      reset();
    }, 2000);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...register('name', {
              validate: validateName,
            })}
            type="text"
          />
        </label>
        {errors?.name && <div className="error-message">{String(errors?.name?.message)}</div>}
        <label>
          Date of birth:
          <input
            {...register('date', {
              validate: validateDate,
            })}
            type="date"
          />
        </label>
        {errors?.date && <div className="error-message">{String(errors?.date?.message)}</div>}
        <label>
          Gender:
          <select {...register('gender', { validate: validateSelect })}>
            <option value="">-- Choose a gender --</option>
            {GENDER.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>
        </label>
        {errors?.gender && <div className="error-message">{String(errors?.gender?.message)}</div>}
        <label>
          Consent to receive notifications:
          <div className="radioButton">
            <input
              {...register('notificationPreference', { validate: validateRadio })}
              type="radio"
              value="yes"
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="radioButton">
            <input
              {...register('notificationPreference', { validate: validateRadio })}
              type="radio"
              value="no"
            />
            <label htmlFor="no">No</label>
          </div>
        </label>
        {errors?.notificationPreference && (
          <div className="error-message">{String(errors?.notificationPreference?.message)}</div>
        )}
        <label>
          Add image:
          <input {...register('image', { validate: validateImage })} type="file" accept="image/*" />
        </label>
        {errors?.image && <div className="error-message">{String(errors?.image?.message)}</div>}
        <label>
          Consent to personal data:
          <input {...register('concent', { validate: validateCheckbox })} type="checkbox" />
        </label>
        {errors?.concent && <div className="error-message">{String(errors?.concent?.message)}</div>}
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {isFormSubmitted && <Message />}
      <FormCards cards={validatedData} />
    </>
  );
}
