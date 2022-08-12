module.exports = ( req, resp, next )=> {
    //Only proceed if authenticated
    if(!req.user) {
        return res.status(401).status({error: "You must be logged in "})
    } 
    next();
}