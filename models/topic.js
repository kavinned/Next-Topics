import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
	{
		title: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
