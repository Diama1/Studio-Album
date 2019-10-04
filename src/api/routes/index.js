import express from 'express';
import multer from '../../handler/multer';
import photoAlbum from './photoAlbum';

const api = express();
api.use('/photos', photoAlbum);
export default api;
