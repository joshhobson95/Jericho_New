require("dotenv").config();
const {QuillTable} = require('../models/postquill')



module.exports = {
    getQuill: async (req, res) => {
        try {
            const quilltable = await QuillTable.findAll({             
        limit: 50,
        order: [
            ["quilltableid", "DESC"]
           ],                      
            })
            res.status(200).send(quilltable)
        } catch (error) {
            console.log('ERROR IN getQuill')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    postQuill: async (req, res) => {
        try {
          const {
            content
          } = req.body;
          await QuillTable.create({
           content
          });
          res.sendStatus(200);
        } catch (error) {
          console.log("ERROR IN postQuill");
          console.log(error);
          res.sendStatus(400);
        }
      }
  }