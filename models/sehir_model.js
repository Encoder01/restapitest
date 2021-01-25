const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require('@hapi/joi');

const SehirSchema = new Schema({
    sehir:{
        type:mongoose.Schema.Types.String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:50,
        lowercase:true
    },
    sehir_kodu:{
        type:mongoose.Schema.Types.Number,
        required:true,
        trim:true,
    },
    nufus:{
        type:mongoose.Schema.Types.Number,
        trim:true,
    },
    ilce:[{ 
        type: mongoose.Schema.Types.Array,
        ref:"Ilce"}],
},{collection:'sehirler'});
const IlceSchema=new Schema({
        ilce_ad:{
            type:mongoose.Schema.Types.String,
            required:true,
        },
        ilce_kod:{
            type:mongoose.Schema.Types.String
        },
        ilce_nufus:{
            type:mongoose.Schema.Types.Number
        }
},{collection:"ilceler"});
    const schema=Joi.object({
        sehir: Joi.string().min(3).max(50).trim(),
        sehir_kodu: Joi.number().min(1).max(81),
        nufus: Joi.number(),
        ilce:Joi.array()
    })

    SehirSchema.methods.joiValidation = function (userObject) { 
        schema.required();
        //console.log("BURADA", schema.validate(userObject));
        return schema.validate(userObject,{abortEarly:false});
    }
    const Ilce=mongoose.model('Ilce',IlceSchema);
   // SehirSchema.path("ilce").ref(Ilce);
    const Sehir=mongoose.model('Sehir',SehirSchema);
    module.exports={Sehir,Ilce};