const feature=require('../Models/Feature');
const Offer = require('../Models/offer');


async function getOffersByFeature(req, res) {
    try {
      const features = await feature.findAll({include:{model:Offer}, where: { categorieIdcategorie: req.params.id } });
      res.status(200).json(features)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

 async function addFeature(req,res){
  try {
    const newFeat = await feature.create(req.body)
    res.status(200).json(newFeat)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
 } 

  module.exports ={getOffersByFeature,
    addFeature}