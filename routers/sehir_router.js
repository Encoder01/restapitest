const router = require('express').Router();
const sehirController = require('../controller/sehirController');
const accesMiddleware = require('../middleware/acces_middleware');


router.get("/",[accesMiddleware],sehirController.sehirleriListele);

router.get("/:id",[accesMiddleware],sehirController.sehirGetir);

router.post("/",[accesMiddleware],sehirController.sehirEkle);

router.patch('/:id',[accesMiddleware], sehirController.sehirGuncelle);

router.get('/deleteAll', [accesMiddleware], sehirController.tumSehirleriSil);

router.delete('/:id',[accesMiddleware], sehirController.sehirSil);



module.exports = router;