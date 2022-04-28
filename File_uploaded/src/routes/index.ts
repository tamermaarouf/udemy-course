import express from 'express';
import upload from '../utils/index.js';
import resizing from './api/resizing.js';
const routes = express.Router();

// define a route handler for the defualt home page
routes.get('/', (req, res) => {
	res.send('Main api routes');
});

// routes.get('/upload', upload.single('upload'),  (req, res) => {
// 	console.log(req.file?.buffer);
// 	res.send('upload');
// })


routes.use('/resizing', resizing);

export default routes;

