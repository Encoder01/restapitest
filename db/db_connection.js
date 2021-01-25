const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://huzeyfe:40045052339hF@cluster0.ecvzb.mongodb.net/test?retryWrites=true&w=majority', {useCreateIndex:true, useUnifiedTopology: true, useFindAndModify:false,  useNewUrlParser: true})
    .then(() => console.log("veritabanına bağlanıldı"))
    .catch(hata => console.log("db baglantı hatası"));

 