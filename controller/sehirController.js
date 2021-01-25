const Sehir = require('../models/sehir_model');

const sehirleriListele = async (req, res) => {
   
    const tumSehirler = await Sehir.Sehir.find({});
    res.status(200).json(tumSehirler);
};

const sehirGetir = async (req, res) => {
   
    const tumSehirler = await Sehir.Sehir.find({sehir_kodu:req.params.id});
    res.status(200).json(tumSehirler);
};

const sehirEkle = async (req, res,next) => {
   
    try {
       
        const eklenecekSehir = new Sehir.Sehir(req.body);
       
        const { error, value } = eklenecekSehir.joiValidation(req.body);
    
        if (error) { 
            console.log("Joi error\n\n", error);
            
            next(createError(400, error));
        
        } else {
            try {
                const sonuc = await eklenecekSehir.save();
                res.json(sonuc);
            } catch (err) {
                throw err;
            }
        }

    } catch (err) { 
        console.log("Sehir Eklerken hata:" + err);
        next(err);
    }
    
};

const sehirGuncelle = async (req, res) => {
   
    const tumSehirler = await Sehir.Sehir.find({});
    res.json(tumSehirler);
};

const sehirSil = async (req, res) => {
   
    const tumSehirler = await Sehir.Sehir.find({});
    res.json(tumSehirler);
};
const tumSehirleriSil = async (req, res) => {
   
    const tumSehirler = await Sehir.Sehir.find({});
    res.json(tumSehirler);
};





module.exports = {
    sehirleriListele,
    sehirGetir,
    sehirEkle,
    sehirGuncelle,
    sehirSil,
    tumSehirleriSil,
}