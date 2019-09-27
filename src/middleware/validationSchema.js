import Joi from '@hapi/joi';

export default {
    uploadImage: Joi.object().keys({
        title: Joi.string()
          .required()
          .label('title is required and should be a string'),
        description: Joi.string()
          .required()
          .label('description is required and should be a string')  
      }),
}
