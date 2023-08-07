
const resp = []


exports.get = (req, res, next)=>{
    res.status(200).render('index', {pageTitle: 'home page', resp: resp})
}

exports.post =  (req, res, next)=>{
    const input = req.body.title
    resp.push({title: input})
    // console.log(resp)
    res.redirect('/index.ejs')
    
}