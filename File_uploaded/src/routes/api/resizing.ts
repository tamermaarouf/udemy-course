import express from "express";
import sharp from 'sharp';
const resizing = express.Router();
import path from 'path';

resizing.get('/', async (req, res) => {
    if(!req.query.width){    
        const name = req.query.name as string;
        console.log(name)
        const imageWidth: number = parseInt((req.query.width) as string);
        const imageHeight: number = parseInt((req.query.height) as string);
        const getImage = path.resolve(`./assets/full/${name}.jpg`);
        const outputImage = path.resolve(`./assets/thumb/${name}.jpg`);
        try {
            await sharp(getImage)
                .resize({
                    width: imageWidth,
                    height: imageHeight
                })
                .toFile(path.resolve(`./assets/thumb/${name}_width=${imageWidth}_height=${imageHeight}.jpg`))
        } catch (error) {
            console.log(error);
        }
        res
            .set('Content-Type', 'image/jpg')
            .sendFile(getImage);

    }
});

export default resizing;