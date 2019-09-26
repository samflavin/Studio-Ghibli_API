const express = require('express');
const router = express.Router();
const axios = require('axios');





router.get('/', (req, res) => {
     //Access the Giphy API to see wht's trending
    axios.get(`https://ghibliapi.herokuapp.com/films`)
        .then(response => {
            console.log('back from StudioGhibli with', response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log('error', error)
            res.sendStatus(500)
        })
})

module.exports = router;