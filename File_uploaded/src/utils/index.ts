import express from 'express';
import multer from 'multer';

const upload = multer({
    dest: './assets/thumb',
    limits: {
        fileSize: 100000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a images file'));
        }

        cb(null, true);
    }
})

export default upload;