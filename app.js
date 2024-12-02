const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set EJS sebagai template engine
app.set('view engine', 'ejs');

// Halaman utama untuk register
app.get('/', (req, res) => {
    res.render('register', { errors: null });
});

// Proses registrasi
app.post('/register', async (req, res) => {
    const { username, password, repeatPassword, email, name } = req.body;

    try {
        const response = await axios.post('https://my-nest-app-586910673966.asia-southeast2.run.app/api/users', {
            username,
            password,
            repeatPassword,
            email,
            name
        });

        if (response.status === 201) {
            res.send(`<h1>Registrasi berhasil!</h1>`);
        } else {
            res.render('register', { errors: response.data.errors.details });
        }
    } catch (error) {
        const errorDetails = error.response?.data?.errors?.details || ["Terjadi kesalahan tak terduga."];
        res.render('register', { errors: errorDetails });
    }
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
