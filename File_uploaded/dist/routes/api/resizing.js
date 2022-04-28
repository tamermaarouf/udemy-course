var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import sharp from 'sharp';
const resizing = express.Router();
import path from 'path';
resizing.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.width) {
        const name = req.query.name;
        console.log(name);
        const imageWidth = parseInt((req.query.width));
        const imageHeight = parseInt((req.query.height));
        const getImage = path.resolve(`./assets/full/${name}.jpg`);
        const outputImage = path.resolve(`./assets/thumb/${name}_width=${imageWidth}_height=${imageHeight}.jpg`);
        console.log(outputImage);
        try {
            yield sharp(getImage)
                .resize({
                width: imageWidth,
                height: imageHeight
            })
                .toFile(path.resolve(`./assets/thumb/${name}_width=${imageWidth}_height=${imageHeight}.jpg`));
        }
        catch (error) {
            console.log(error);
        }
        res
            .set('Content-Type', 'image/jpg')
            .sendFile(getImage);
    }
}));
export default resizing;
