import { Router } from 'express';
import Album from '../controllers/photosController';
import multer from '../../handler/multer';
import validateBody from '../../middleware/validateBody';

const { createAlbum, getAllPhotos } = Album;
const router = Router();
router.post('/', multer.single('image'), validateBody('uploadImage'), createAlbum);
router.get('/', getAllPhotos)


export default router;
