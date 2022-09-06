
import multer from 'multer'

let generateName = () => {
    return `image-${Date.now()}.jpg`
}

let name : string;

let storage: multer.StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        name = generateName();
        cb(null, name)
    }
});

let respondeWithImageName = (req: any, res: { send: (arg0: string) => void; }) => {res.send(name)}
var upload : multer.Multer = multer({ storage: storage });

export default upload;
export { respondeWithImageName };
