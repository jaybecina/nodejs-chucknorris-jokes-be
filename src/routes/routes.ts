import express from "express";
import { 
    getCategoryList,
    getJokesByCategory,
    getJokesByDefault
} from '../controllers/categoriesController'

const router = express.Router()

router.get('/category-list', getCategoryList)

router.get('/', getJokesByDefault)

router.get('/:categoryValue', getJokesByCategory)


// router.post('/',PostController.addpost)
// router.put('/:id', PostController.updatePost)
// router.delete('/:id', PostController.deletePost)

export default router;