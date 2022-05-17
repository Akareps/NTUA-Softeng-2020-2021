const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    const token = req.body.token;
    //const token = req.header('XOBSERVATORY-AUTH')
    console.log(token)
    if (!token) return res.status(401).json({
        message: 'Access Denied'
    })
    jwt.verify(token, "monopetreleobro" , function(err, decoded) {
        if (err) {
            res.status(401).json({
                message:"Access Denied"
            })
        }
        else if (decoded) {
            next();
            return;
        }
    });
}