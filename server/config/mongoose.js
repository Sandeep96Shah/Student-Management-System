const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/student_management_system',{useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('Error while connecting to MongoDB',err);
});

db.once('open',()=>{
    console.log('Connected Successfully to the MongoDB');
})