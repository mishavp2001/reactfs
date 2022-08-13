module.exports = ( req, resp, next )=> {
    //Only proceed if have enough credits
    if(req.user.credits <= 0 ) {
        return res.status(403).status({error: "You don't have enough credits!"})
    } 
    next();
}