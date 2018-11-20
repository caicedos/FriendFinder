
var friendsData = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friendsData)
    });

    app.post("/api/friends", function(req, res){
       



        var arr1 = req.body.scores;
        var arr2



        for (var i = 0; i < friendsData.length; i++) {


            arr2 = friendsData[i].scores


        }



        //    for(var i = 0; i < friendsData.length; i++){


        //     arr2 += [friendsData[i].scores]


        // }

        // for(var i = 0; i < friendsData.length; i++){

        //     var data = friendsData[i];
        //     arr2 = [data.scores]


        // }

        // friendsData.forEach(element => {
        //     arr2 = element.scores
        // });

        console.log(arr1)
        console.log(arr2)

        friendsData.push(req.body);


        var newArr = false


        for (var i = 0; i < arr1.length; i++) {


            var logic = parseInt(arr1[i]) === arr2[i];
            
               
                    
                    newArr += !logic


                
            
            


        }

        console.log(newArr)





    })


}