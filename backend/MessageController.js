const MessageModel = require(`./MessageModel`)

module.exports.saveMessage = async(req,res) =>{

    try {
     const { name,email,message} = req.body;
          console.log(req.body);
          MessageModel.create({ name,email,message})
          .then((data) => { console.log('saveMessage');
          res.send(data)})
    }

    catch (error) {
        res.status(400).json({message: error.message})
    }
    
    }

