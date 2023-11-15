import { mongooseConnect } from "@/lib/mongoose";
import { ImageSlide } from "@/models/ImageSlide";
import { authOptions, isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    await isAdminRequest(req,res);


    if (method === 'GET') {
        res.json(await ImageSlide.find());
    }


    if (method === 'POST') {
        const {name,images} = req.body;
        const imageSlideDoc = await ImageSlide.create({
            name,
            images,
        });
        res.json(imageSlideDoc);
    }

    if (method === 'PUT') {
        const {name,images,_id} = req.body;
        const imageSlideDoc = await ImageSlide.updateOne({_id},{
            name,
            images,
        });
        res.json(imageSlideDoc)
    }

    if (method === 'DELETE') {
        const {_id} = req.query;
        await ImageSlide.deleteOne({_id});
        res.json('ok');
    }
}