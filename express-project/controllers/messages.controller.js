const path = require('path');



function getMessage(req,res){
    res.render('messages', {
        title:  'Messages to my friend',
        friend: 'Elon Musk'
    })

};

function postMessage(req,res){
    console.log('Updating messages ...')
    res.json({'message': "Request cycle complete"})
}



module.exports ={
    postMessage,
    getMessage
}