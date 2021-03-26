const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

///////////////GET//////////////////////
//http://localhost:5000/api/items
router.get('/',(req,res)=>{

  Item.find()
     .sort({date:-1}) 
     .then(items=>res.json(items))
     
});
//////////////POST///////////////////////

router.post('/',(req,res)=>{

    const newItem = new Item({
          name:req.body.name,
          switch:req.body.switch

    });
    newItem.save().then(item => res.json(console.log(item)));
  });
  ////////////DELETE/////////////////////////

router.delete('/:id',(req,res)=>{

  
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch (err => res.status(404).json({success:false}));
});
////////////////PUT//////////////////////////

router.put('/:id',(req,res)=>{

  
  Item.findById(req.params.id)
  .then(item =>{ item.name = req.body.name;
    item.switc = req.body.switc
    item.save()
    
  .then(() => res.json('Exercise updated!'))
  })
  .catch (err => res.status(404).json('Error: ' + err));
});



module.exports = router;
 