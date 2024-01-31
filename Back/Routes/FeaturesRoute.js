
const featureCont=require('../Controllers/Feature')
const router=require('express').Router()


router.get('/getByFeature/:id',featureCont.getOffersByFeature)
router.post('/addFeature',featureCont.addFeature)
module.exports=router