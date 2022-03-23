import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('required'),
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

  console.log('touched fields', formik.touched);

  return (
    <div>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <div className='error'>{formik.errors.name}</div>
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className='error'>{formik.errors.email}</div>
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='name'
            name='channel'
            value={formik.values.channel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.channel && formik.touched.channel && (
            <div className='error'>{formik.errors.channel}</div>
          )}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
