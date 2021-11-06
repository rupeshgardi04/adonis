import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Post from "App/Models/Post";

export default class PostsController {

    public async index({ request }: HttpContextContract) {
        // const posts = await Post.query().preload('user').preload('forum');
        // return posts
        return [
            {
                id: 1,
                name: 'Hello world',
                content: 'desc..... '
            },
            {
                id: 2,
                name: 'Hello universe',
                content: 'hell isdfdsf sdfasdfb dsaff'
            },
        ]
    }
}
