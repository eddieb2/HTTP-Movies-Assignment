import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddMovie = (props) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        id: Date.now(),
        title: '',
        director: '',
        metascore: '',
        stars: []
      }}
      onSubmit={(data) => {
        console.log(data);
        axios
          .post('http://localhost:5000/api/movies', data)
          .then((res) => {
            console.log(res);
            props.setToggle(!props.toggle);
            history.push('/');
          });
      }}
    >
      {({ values, handleChange, handleSubmit, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            values={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            label="Title"
          />
          <TextField
            name="director"
            values={values.director}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            label="Director"
          />
          <TextField
            name="metascore"
            values={values.metascore}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            label="Metascore"
          />
          <TextField
            name="stars[0]"
            values={values.stars}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            label="Star 1"
          />
          <TextField
            name="stars[1]"
            values={values.stars}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            label="Star 2"
          />
          <TextField
            name="stars[2]"
            values={values.stars}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            label="Star 3"
          />
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default AddMovie;
