$('#home').on('pageinit', function(){
	//code needed for home page goes here

	// My get id function.
    function ge(x) {
        var elementId = document.getElementById(x);
        return elementId;
    }

    // My array for dropdown menu.
    var myTypeArray = ["--Choose A Location--", "laundry", "kitchen", "bathroom", "living room", "bedroom", "yard"],
        difficultyValue,
        errMsg = ge("errors");
    
 
    // Search
    var searchButton1 = ge("searchButton1");
    var searchButton2 = ge("searchButton2");
    var searchButton3 = ge("searchButton3");
    var searchButton4 = ge("searchButton4");
    var searchButton5 = ge("searchButton5");
    var searchButton6 = ge("searchButton6");

    var searchButton = ge("searchButton");
  


    var getSearch = function () {
        var choreType = myTypeArray; 
        var term = ge("searchTerm").value; 
  
        // Search by term
        if (term !== "") {
            var makeList = document.createElement("ul");
            document.getElementById("results").appendChild(makeList);
            for (var i = 0, len = localStorage.length; i < len; i++) {
                
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var obj = JSON.parse(value);
                for (n in obj) {
                    if (term === obj[n][1]) {
                        var listItem = document.createElement("li");
                        var subList = document.createElement("ul");
                        listItem.appendChild(subList);
                        makeList.appendChild(listItem);
                        for (m in obj) { 
                            var finalLi = document.createElement("li");
                            subList.appendChild(finalLi);
                            finalLi.innerHTML = obj[m][0] + "  " + obj[m][1];
                        }
                    }
                }
            }
        }
    };
    
   
    

    var buttonSearch1 = function () {

            // Search by term
            if (myTypeArray[1]) {
                var makeList = document.createElement("ul");
                document.getElementById("results").appendChild(makeList);
                for (var i = 0, len = localStorage.length; i < len; i++) {
                    
                    var key = localStorage.key(i);
                    var value = localStorage.getItem(key);
                    var obj = JSON.parse(value);
                    for (n in obj) {
                        if (myTypeArray[1] === obj[n][1]) {
                            var listItem = document.createElement("li");
                            var subList = document.createElement("ul");
                            listItem.appendChild(subList);
                            makeList.appendChild(listItem);
                            for (m in obj) { 
                                var finalLi = document.createElement("li");
                                subList.appendChild(finalLi);
                                finalLi.innerHTML = obj[m][0] + "  " + obj[m][1];
      
                            }
                        }
                    }
                }
            }   
        
    };


    var buttonSearch2 = function () {
       
  
        // Search by term
        if (myTypeArray[2]) {
            var makeList = document.createElement("ul");
            document.getElementById("results").appendChild(makeList);
            for (var i = 0, len = localStorage.length; i < len; i++) {
                
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var obj = JSON.parse(value);
                for (n in obj) {
                    if (myTypeArray[2] === obj[n][1]) {
                        var listItem = document.createElement("li");
                        var subList = document.createElement("ul");
                        listItem.appendChild(subList);
                        makeList.appendChild(listItem);
                        for (m in obj) { 
                            var finalLi = document.createElement("li");
                            subList.appendChild(finalLi);
                            finalLi.innerHTML = obj[m][0] + "  " + obj[m][1];
                        }
                    }
                }
            }
        }
    };


    var buttonSearch3 = function () {
      
        // Search by term
        if (myTypeArray[3]) {
            var makeList = document.createElement("ul");
            document.getElementById("results").appendChild(makeList);
            for (var i = 0, len = localStorage.length; i < len; i++) {
                
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var obj = JSON.parse(value);
                for (n in obj) {
                    if (myTypeArray[3] === obj[n][1]) {
                        var listItem = document.createElement("li");
                        var subList = document.createElement("ul");
                        listItem.appendChild(subList);
                        makeList.appendChild(listItem);
                        for (m in obj) { 
                            var finalLi = document.createElement("li");
                            subList.appendChild(finalLi);
                            finalLi.innerHTML = obj[m][0] + "  " + obj[m][1];
                        }
                    }
                }
            }
        }
    };


    var buttonSearch4 = function () {
      
        // Search by term
        if (myTypeArray[4]) {
            var makeList = document.createElement("ul");
            document.getElementById("results").appendChild(makeList);
            for (var i = 0, len = localStorage.length; i < len; i++) {
                
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var obj = JSON.parse(value);
                for (n in obj) {
                    if (myTypeArray[4] === obj[n][1]) {
                        var listItem = document.createElement("li");
                        var subList = document.createElement("ul");
                        listItem.appendChild(subList);
                        makeList.appendChild(listItem);
                        for (m in obj) { 
                            var finalLi = document.createElement("li");
                            subList.appendChild(finalLi);
                            finalLi.innerHTML = obj[m][0] + "  " + obj[m][1];
                        }
                    }
                }
            }
        }
    };


    var buttonSearch5 = function () {
   
        // Search by term
        if (myTypeArray[5]) {
            var makeList = document.createElement("ul");
            document.getElementById("results").appendChild(makeList);
            for (var i = 0, len = localStorage.length; i < len; i++) {
                
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var obj = JSON.parse(value);
                for (n in obj) {
                    if (myTypeArray[5] === obj[n][1]) {
                        var listItem = document.createElement("li");
                        var subList = document.createElement("ul");
                        listItem.appendChild(subList);
                        makeList.appendChild(listItem);
                        for (m in obj) { 
                            var finalLi = document.createElement("li");
                            subList.appendChild(finalLi);
                            finalLi.innerHTML = obj[m][0] + "  " + obj[m][1];
                        }
                    }
                }
            }
        }
    };


    var buttonSearch6 = function () {
       
        // Search by term
        if (myTypeArray[6]) {
            var makeList = document.createElement("ul");
            document.getElementById("results").appendChild(makeList);
            for (var i = 0, len = localStorage.length; i < len; i++) {
                
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var obj = JSON.parse(value);
                for (n in obj) {
                    if (myTypeArray[6] === obj[n][1]) {
                        var listItem = document.createElement("li");
                        var subList = document.createElement("ul");
                        listItem.appendChild(subList);
                        makeList.appendChild(listItem);
                        for (m in obj) { 
                            var finalLi = document.createElement("li");
                            subList.appendChild(finalLi);
                            finalLi.innerHTML = obj[m][0] + "  " + obj[m][1];
                        }
                    }
                }
            }
        }
    };



    searchButton.addEventListener("click", getSearch);
    searchButton1.addEventListener("click", buttonSearch1);
    searchButton2.addEventListener("click", buttonSearch2);
    searchButton3.addEventListener("click", buttonSearch3);
    searchButton4.addEventListener("click", buttonSearch4);
    searchButton5.addEventListener("click", buttonSearch5);
    searchButton6.addEventListener("click", buttonSearch6);


});	
		
$('#addItem').on('pageinit', function(){

    // My get id function.
    function ge(x) {
        var elementId = document.getElementById(x);
        return elementId;
    }

		var myForm = $('#formId');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
  
    
	});
	
	//any other code needed for addItem page goes here

    

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
        // My JSON auto fill function.
        for (var n in json) {
            var id = Math.floor(Math.random() * 1000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    
};

var getData = function(){
	if (localStorage.length === 0) {
            alert("There is nothing to display so default data was added.");
            autoFillData();
        } else {

            var makeDiv = document.createElement("div");
            makeDiv.setAttribute("id", "items");
            
            var makeList = document.createElement("ul");
            document.getElementById("results").appendChild(makeList);
            makeDiv.appendChild(makeList);
            document.body.appendChild(makeDiv);
            ge("items").style.display = "block";
            for (var i = 0, len = localStorage.length; i < len; i++) {
                var makeLi = document.createElement("li");
                var linksLi = document.createElement("li");
                makeList.appendChild(makeLi);
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var obj = JSON.parse(value);
                var makeSublist = document.createElement("ul");
                makeSublist.setAttribute("id", "displayList");


                var breakTag = document.createElement("br");
                makeList.appendChild(breakTag);

                makeLi.appendChild(makeSublist);
                getImage(obj.area[1], makeSublist);
                for (var n in obj) {
                    var makeSubli = document.createElement("li");
                    makeSublist.appendChild(makeSubli);
                    var optSubText = obj[n][0] + " " + obj[n][1];
                    makeSubli.innerHTML = optSubText;
                    makeSublist.appendChild(linksLi);
                }
                makeItemLinks(localStorage.key(i), linksLi);
            }
        }
};

var storeData = function(data){
	 if (!key) {
            var id = Math.floor(Math.random() * 1000001);
        } else {
            id = key;
        }
        getSelectedRadio();
        var item = {};
        item.chore = ["Chore :", ge("chore").value];
        item.area = ["Chore Location :", ge("area").value];
        item.difficulty = ["difficulty :", difficultyValue];
        item.importance = ["importance :", ge("importance").value];
        item.choreDate = ["Chore Date :", ge("choreDate").value];
        item.notes = ["Notes :", ge("notes").value];
        localStorage.setItem(id, JSON.stringify(item));
        alert("Chore Saved!");
}; 

var	deleteItem = function (){
	 var ask = confirm("Are you sure you want to delete this chore?");
        if (ask) {
            localStorage.removeItem(this.key);
            alert("Chore was deleted");
            window.location.reload();
        } else {
            alert("Chore was NOT deleted.");
        }
};
					
var clearLocal = function(){
	 if (localStorage.length === 0) {
            alert("Storage is empty.");
        } else {
            localStorage.clear();
            alert("All chores have been deleted!");
            window.location.reload();
            return false;
        }
};


