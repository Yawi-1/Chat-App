import Conversation from '../models/conversationModels.js'
import Message from '../models/messageModels.js'
export const sendMessage = async (req, res) => {
    try {
        const { id: recieverId } = req.params;
        const senderId = req.user._id;
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }
        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, recieverId]
            }
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            })
        }

        const newMessage = await new Message({
            senderId,
            recieverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);

            //   Socket Io functionality will go here.


            //  These will run in parallel
            await Promise.all([conversation.save(), newMessage.save()])
        }
        res.json(newMessage)



    } catch (error) {
        console.log('Error at message controllers: ', error.message)
        res.status(500).json({ error: 'Error In message controller' })
    }

}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, userToChatId]
            }
        }).populate("messages");
        if (!conversation) {
            return res.status(404).json([]);
        }

        const messages = conversation.messages;
        res.status(200).json(messages)

    } catch (error) {
        console.log('Error at get message controllers: ', error.message)
        res.status(500).json({ error: 'Error In get message controller' })
    }
}