//Store information about your firebase so we can connect
		
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//IMPORTANT: REPLACE THESE WITH YOUR VALUES (these ones won't work)
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const firebaseConfig = {
      apiKey: "AIzaSyAPYa5Xs8Cg8lit3X_vpILLpIJrbd16_bk",
      authDomain: "sms-api-7ccf9.firebaseapp.com",
      databaseURL: "https://sms-api-7ccf9-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "sms-api-7ccf9",
      storageBucket: "sms-api-7ccf9.appspot.com",
      messagingSenderId: "118746606408",
      appId: "1:118746606408:web:054dbabfdd0343d4eda17d",
      measurementId: "G-CYPHQ7SM1Q"
    };
     
        
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
        
        //initialize your firebase
        firebase.initializeApp(firebaseConfig);
        var database = firebase.database();
        
        //create a variable to hold our orders list from firebase
        var firebaseOrdersCollection = database.ref().child('data');
    
        //this function is called when the submit button is clicked
        function submitOrder() {
    
          //Grab order data from the form
          var order = {
            
            farmerid: $('#fid1').val(), //another way you could write is $('#myForm [name="fullname"]').
            lotno: $('#lotno').val(), //another way you could write is $('#myForm [name="fullname"]').
          };
          
          //'push' (aka add) your order to the existing list
          firebaseOrdersCollection.push(order); //'orders' is the name of the 'collection' (aka database table)
          
        };
        
        //create a 'listener' which waits for changes to the values inside the firebaseOrdersCollection 
        firebaseOrdersCollection.on('value',function(orders){
          
          //create an empty string that will hold our new HTML
          var allOrdersHtml = "";
          
          //this is saying foreach order do the following function...
          orders.forEach(function(firebaseOrderReference){
            
            //this gets the actual data (JSON) for the order.
            var order = firebaseOrderReference.val();
            console.log(order); //check your console to see it!
            
            //create html for the individual order
            //note: this is hard to make look pretty! Be sure to keep your indents nice :-)
            //IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
            var individialOrderHtml =	`<div class='item'>
                            <p>Name: `+order.farmerid+`</p>
                            <p>Notes: `+order.lotno+`</p>
                          </div>`;
            
            //add the individual order html to the end of the allOrdersHtml list
            allOrdersHtml = allOrdersHtml + individialOrderHtml;
          });
          
          //actaull put the html on the page inside the element with the id PreviousOrders
          $('#previousOrders').html(allOrdersHtml);
          
          //note: an alternative approach would be to create a hidden html element for one order on the page, duplicate it in the forEach loop, unhide it, and replace the information, and add it back. 
        });