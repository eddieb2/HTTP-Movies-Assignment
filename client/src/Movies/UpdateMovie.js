import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

// SECTION Component
const UpdateMovie = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const [update, setUpdate] = useState({
    id: id,
    title: '',
    director: '',
    metascore: '',
    stars: {}
  });

  const handleChanges = (e) => {
    console.log(e.target.name);
    if (e.target.name.toString().includes('star')) {
      setUpdate({
        ...update,
        stars: {
          ...update.stars,
          [e.target.name]: e.target.value
        }
      });
    } else {
      setUpdate({
        ...update,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('update::', update);
    const starArray = [];
    for (let star in update.stars) {
      starArray.push(star);
    }
    axios
      .put(`http://localhost:5000/api/movies/${id}`, {
        id: update.id,
        title: update.title,
        director: update.director,
        metascore: update.metascore,
        stars: starArray
      })
      .then((res) => {
        console.log(res.data);

        setUpdate({
          id: Date.now(),
          title: '',
          director: '',
          metascore: '',
          stars: []
        });

        props.setToggle(!props.toggle);
        history.push(`/movies/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="title"
        label="Title"
        value={update.title}
        variant="outlined"
        onChange={handleChanges}
      />
      <TextField
        type="text"
        name="director"
        label="Director"
        value={update.director}
        variant="outlined"
        onChange={handleChanges}
      />
      <TextField
        type="text"
        name="metascore"
        label="Metascore"
        value={update.metascore}
        variant="outlined"
        onChange={handleChanges}
      />
      <TextField
        id="star1"
        type="text"
        name="starOne"
        label="Star 1"
        value={update.stars.starOne}
        variant="outlined"
        onChange={handleChanges}
      />
      <TextField
        id="star2"
        type="text"
        name="starTwo"
        label="Star 2"
        value={update.stars.starTwo}
        variant="outlined"
        onChange={handleChanges}
      />
      <TextField
        id="star3"
        type="text"
        name="starThree"
        label="Star 3"
        value={update.stars.starThree}
        variant="outlined"
        onChange={handleChanges}
      />
      <Button variant="contained" color="primary" type="submit">
        Update
      </Button>
    </form>
  );
};

export default UpdateMovie;
