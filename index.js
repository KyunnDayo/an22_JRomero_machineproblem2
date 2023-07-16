/*
	Program: 		E-Commerce API 
	Programmer 		Justine Romero && Dominic Atienza
	Section: 		AN22
	Project Start: 	July 16, 2023
	Project End: 	July 17, 2023
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const app = express();

//test databases below
//mongodb+srv://[REDACTED]@sandbox.0qk2xgg.mongodb.net/sample_database?retryWrites=true&w=majority
//mongodb+srv://[REDACTED]@sandbox.op0ela7.mongodb.net/an22_sample_database?retryWrites=true&w=majority


mongoose.connect('mongodb+srv://[REDACTED]@sandbox.op0ela7.mongodb.net/an22_sample_database?retryWrites=true&w=majority',{
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.listen(process.env.PORT || 4000,() =>{
	console.log(`API is now online on port ${process.env.PORT||4000}`)
});