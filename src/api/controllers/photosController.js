import 'dotenv/config';
import cloudinary from 'cloudinary';
import db from '../../../models';

const { NODE_ENV: env } = process.env;
const { Photos } = db;

class PhotosAlbum {
  static async createAlbum(req, res) {
    const { title, description } = req.body;
    const photoExist = await Photos.findOne({
      where: {
        title,
        description
      }
    });
    if (!photoExist) {
      // upload and put the result into image
      const uploadedImage = env === 'test' ? {} : await cloudinary.uploader.upload(req.file.path);
      const newPhoto = await Photos.create({
        title,
        description,
        photo: uploadedImage.secure_url
      });

      return res.status(201).send({
        message: 'Image uploaded successfully!!',
        data: newPhoto
      });
    }
    return res.status(509).send({
      error: 'the image already exist!'
    });
  }
  static async getAllPhotos(req, res){
    const allPhotos = await Photos.findAll();
    if(!allPhotos[0]){
      return res.status(200).send({
        message: 'Whoops! you have no photos!'
      })
    }
    return res.status(200).send({
      photos: allPhotos
    })
  }
}
export default PhotosAlbum;
