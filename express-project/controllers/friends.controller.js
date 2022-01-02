const friends = require('../models/friends.model');


function getOneFriend(req,res){
    const friendId = req.params.friendId
    const friend = friends[Number(friendId)]
    if (friend){
        return res.json(friend);
    }
    res.status(404).json({
            error: "Friend does not exist"
        })

    
}


function getFriends(req,res){

    res.json(friends);
}

function postFriend(req,res){
    if (!req.body.name){
        return res.status(400).json({
            error: "Name not sent"
        })

    }
    const newFriend = {
        name: req.body.name,
        id: friends.length

        
    };
    friends.push(newFriend);
    res.json(newFriend)

}

module.exports ={
    getOneFriend,
    getFriends,
    postFriend
}