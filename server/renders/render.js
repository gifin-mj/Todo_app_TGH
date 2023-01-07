const axios=require('axios')
const BASE_URL=process.env.BASE_URL


exports.login= function(req, res) {
    res.render('index');
  }

  exports.signup=function(req, res) {
    res.render('signup');
  }

  exports.home=(req,res)=>{
    axios.get(`${BASE_URL}api/alltasks`)
    .then((response)=>{
      console.log(response);
        res.render('home',{tasks:response.data});
    })  
    .catch((err)=>{
        res.send(err)
    })
  }

  exports.report=(req,res)=>{
    axios.get(`${BASE_URL}api/report`).then((response)=>{
      let pendingtasks=response.data.pendingtasks
      let pendingcount=response.data.pendingtasks.length
      let completedtasks=response.data.completedtasks
      let completedcount=response.data.completedtasks.length
      let cancelledtasks=response.data.cancelledtasks
      let cancelledcount=response.data.cancelledtasks.length
      let deletedcount=response.data.deletedtasks.length
      res.render('report',{pendingtasks,completedtasks,cancelledtasks,pendingcount,completedcount,cancelledcount,deletedcount})
    })
    
  }
