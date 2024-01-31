const offersRouter=require("express").Router()
const Offers=require('../Controllers/offerCont.js')


offersRouter.get('/getAllOffers',Offers.getOffers);
offersRouter.get('/getAllByRegion/:region',Offers.getOffersbyRegion);
offersRouter.get('/getAllByType/:offerType',Offers.getOffersbyType);
offersRouter.get('/getAllOffer/:offerid',Offers.getOneOffer);
offersRouter.get('/getAllOffers/:iduser',Offers.getOffersbyUser);
offersRouter.post('/addOffer',Offers.createOffer);
offersRouter.put('/updateOffer/:offerid',Offers.updateOffer);
offersRouter.delete('/deleteOffer/:offerid',Offers.deleteOffer);

module.exports=offersRouter

