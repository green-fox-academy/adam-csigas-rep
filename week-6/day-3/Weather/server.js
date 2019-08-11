const express = require('express');
const app = express();
const PORT = 3010;

app.use(express.static('static'));
app.use(express.static('images'));

const forecasts = [
    {
        city: 'Seattle',
        location: 'Washington, United States',
        weather: [
            { temp: 11, icon: 'cloudy.png', message: 'Complete Grey' },
            { temp: 11, icon: 'cloudy.png', message: 'Just stay in bed.' },
            { temp: 13, icon: 'cloudy.png', message: 'Meh...' },
            { temp: 12, icon: 'cloudy.png', message: 'Still meh...' },
            { temp: 13, icon: 'partly_cloudy.png', message: 'Not too sunny.png.' },
        ],
    },
    {
        city: 'Miami',
        location: 'Florida, United States',
        weather: [
            { temp: 33, icon: 'sunny.png', message: 'Hot.' },
            { temp: 35, icon: 'sunny.png', message: 'Too hot!' },
            { temp: 34, icon: 'sunny.png', message: 'Sunny.' },
            { temp: 34, icon: 'sunny.png', message: 'Beach time!' },
            { temp: 35, icon: 'sunny.png', message: 'Here comes the sun.' },
        ],
    },
    {
        city: 'Barcelona',
        location: 'Spain',
        weather: [
            { temp: 19, icon: 'sunny.png', message: 'Sunny.' },
            { temp: 15, icon: 'partly_cloudy.png', message: 'Not too sunny.png.' },
            { temp: 17, icon: 'sunny.png', message: 'So far so good.' },
            { temp: 16, icon: 'rainy.png', message: 'Rihanna - Umbrella' },
            { temp: 18, icon: 'sunny.png', message: 'Here comes the sun.' },
        ],
    },
    {
        city: 'London',
        location: 'United Kingdom',
        weather: [
            { temp: 4, icon: 'snowy.png', message: 'Go home winter.' },
            { temp: 7, icon: 'rainy.png', message: 'Do you have an umbrella?' },
            { temp: 10, icon: 'rainy.png', message: 'It\'s rainy.png.' },
            { temp: 9, icon: 'rainy.png', message: 'Meh...' },
            { temp: 11, icon: 'rainy.png', message: 'Meh... Again.' },
        ],
    },
    {
        city: 'Budapest',
        location: 'Hungary',
        weather: [
            { temp: 12, icon: 'partly_cloudy.png', message: 'It\'s cloudy.png.' },
            { temp: 16, icon: 'rainy.png', message: 'Sooo... Wet.' },
            { temp: 18, icon: 'partly_cloudy.png', message: 'Here comes the sun.' },
            { temp: 16, icon: 'partly_cloudy.png', message: 'Not too sunny.png.' },
            { temp: 19, icon: 'partly_cloudy.png', message: 'So far so good.' },
        ],
    },
];

app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    res.render('home', {dashBoard : forecasts})
    
});




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});