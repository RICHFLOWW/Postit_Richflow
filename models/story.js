const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,'story Titlr is required']
    },
    description: {
        type: String,
        required: [true, 'story Description is required']
    },
    tag: {
        type: String,
        enum: ['nature', 'lifestyle', 'sport', 'technology', 'others'],
        rrequired: [true, "Story tag is required"],
    },
    image: {
        type: String,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide a User"]
    },
    createdAt: {
        type: Date, 
        default: Date.now()
    }
    
} 

)
module.exports = mongoose.model("story", storySchema);