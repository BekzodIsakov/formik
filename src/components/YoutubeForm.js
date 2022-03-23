import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
});

export const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: 'Yusuf',
      email: '',
      channel: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
    // validate: (values) => {
    //   let errors = {};

    //   if (!values.name) {
    //     errors.name = 'Required';
    //   }

    //   if (!values.email) {
    //     errors.email = 'Required';
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = 'Invalid email format';
    //   }

    //   if (!values.channel) {
    //     errors.channel = 'Required';
    //   }

    //   return errors;
    // },
  });

  return (
    <div>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <div className='error'>{formik.errors.name}</div>
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div className='error'>{formik.errors.email}</div>
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='name'
            name='channel'
            {...formik.getFieldProps('channel')}
          />
          {formik.touched.channel && formik.errors.channel && (
            <div className='error'>{formik.errors.channel}</div>
          )}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
