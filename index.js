const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hi from musy second node r parsi auto start  tusher')
});

const users = [
    { id: 0, name: 'sabana', email: 'sabana@gmail.com', phone: '017888888' },
    { id: 1, name: 'sabnur', email: 'sabnur@gmail.com', phone: '017888888' },
    { id: 2, name: 'shrabonti', email: 'shrabonti@gmail.com', phone: '017888888' },
    { id: 3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '017888888' },
    { id: 4, name: 'soniya', email: 'sasoniyabana@gmail.com', phone: '017888888' },
    { id: 5, name: 'susmita', email: 'susmita@gmail.com', phone: '017888888' },
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    // use quary perameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes
            (search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});
// app .method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post ', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
// daynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange'])
})

app.get('/fruit/mangoes/fazli', (req, res) => {
    res.send("Yummy Yummy tok misty");
})
app.listen(port, () => {
    console.log('listening to port', port)
})