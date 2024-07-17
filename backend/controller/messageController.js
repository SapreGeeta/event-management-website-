import { Message } from "../models/messageSchema.js";
import { Review } from "../models/reviewSchema.js";



export const sendMessage = async (req, res) => {
  
    const { name, email, subject, message } = req.body;
    
         if(!name){
      return res.json({
          success: false,
          message: "Name is required",
          data: null
      })
  }
       if(!email){
       return res.json({
        success: false,
        message: "email is required",
        data: null
       })
     }
if(!subject){
  return res.json({
      success: false,
      message: "subject is required",
      data: null
  })
}
if(!message){
  return res.json({
      success: false,
      message: "message is required",
      data: null
  })
}


const newContact = await Message.create({
  "name": name,
  "email": email,
  "subject":subject, 
  "message": message
})
res.json({
  success: true,
  message: "Contact added successfully",
  data: newContact
})
}



 export const deleteMessage = async (req, res) => {
  const { id } = req.params;
  if (!id) {
      return res.json({
          success: false,
          message: "ID is required",
          data: null
      });
  }
      const deletedMessage = await Message.findByIdAndDelete(id);
      if (!deletedMessage) {
          return res.json({
              success: false,
              message: "Message not found",
              data: null
          });
      }     
      res.json({
          success: true,
          message: "Message deleted successfully"
      });
    };

    // REVIEW

    export const sendReview= async (req, res) => {
  const {name, message} = req.body;

  if(!name){
      return res.json({
          success: false,
          message: "Name is required",
          data: null
      })
  }

  if(!message){
      return res.json({
          success: false,
          message: "Review is required",
          data: null
      })
  }



  const newReview = await Review.create({
      "name": name,
      "message": message
  })

  res.json({
      success: true,
      message: "Review added successfully",
      data: newReview
  })
}



export const getReviews = async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json({
        success: true,
        data: reviews,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch reviews",
      });
    }
  };