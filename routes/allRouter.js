const router = require("express").Router();

const {getAStory, getAllStories} = require('../controllers/storyController')

router.get('/', getAllStories);
    router.get("/:storyId", getAStory);

    module.exports = router;