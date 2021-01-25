const jwt = require('jsonwebtoken');

const auth = async (req, res, next)=>{ 

    try {
        const atoken = req.query.token;
        const sonuc = jwt.verify(atoken, 'odin');
        if (sonuc)
              next();
        else {
            throw new Error('Lütfen giriş yapın');
        }
       
    } catch (e) {
        next(e);
    }

}

module.exports = auth;