export default{

    create(params){


        
        let cause = params.cause;
        let pictureUrl = params.pictureUrl;
        let neededFunds = params.neededFunds;
        let description = params.description;
        let collectedFunds = 0;
        let donors = [];
        let uid = localStorage.userId;

        return firebase.firestore().collection("causes").add({
            cause,
            pictureUrl,
            neededFunds,
            description,
            collectedFunds,
            donors,
            uid
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        
    
    },

    getAll(params){

        return firebase.firestore().collection('causes').get();
    
    },


    details(id){

        return firebase.firestore().collection('causes').doc(id).get();

    },
    
    makeDonation(causeId,donation){


        let promise  = firebase.firestore().collection('causes').doc(causeId).get();

        return promise.then(response =>{

            let data = response.data();

            data.collectedFunds+= Number(donation);

            var user = firebase.auth().currentUser;

            data.donors.push({email:user.email,donation: donation})

    
            return firebase.firestore().collection("causes").doc(causeId).update(data);
        })    
           

    },

    close(id){

        return firebase.firestore().collection("causes").doc(id).delete().then(response => {
            return response;
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
};