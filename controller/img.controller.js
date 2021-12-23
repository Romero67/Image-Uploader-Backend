const formidable = require('formidable');
const fs = require('fs');

const Img = require('../models/img.model');

exports.create = (req, res) => {
 let form = new formidable.IncomingForm();
 form.keepExtensions = true;
 form.parse(req, (err, fields, files) => {
  if(err){
   return res.status(400).json({
    error: 'Image not could be uploaded'
   })
  }
  let img;
  if(files.photo){
   if(files.photo.size > 1000000){
    return res.status(400).json({
     error: 'Image should be less than 1MB in size'
    })
   }
   img = new Img({name: files.photo.originalFilename});
   img.photo.data = fs.readFileSync(files.photo.filepath)
   img.photo.contentType = files.photo.type;
  }
  img.save((err, result) =>{
   if(err){
    return res.status(400).json({
     error: 'no se pudo guardar'
    })
   }
   res.json(result);
  })
 })
}

exports.list = (req, res) =>{
 Img.find().exec((err, img) =>{
  if(err){
   return res.status(400).json({
    error: 'ocurrio un error al obtener la imagen'
   })
  }
  return res.json(img);
 })
}