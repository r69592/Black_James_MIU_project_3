$('#home').on('pageinit', function(){
	//code needed for home page goes here

	// My get id function.
    function ge(x) {
        var elementId = document.getElementById(x);
        return elementId;
    }


    var reload = function () {
        var results = ge("results");
        if (results.length >= 0){
            window.location.reload();
            
        }
    };

    // My array for dropdown menu.
    var myTypeArray = ["--Choose A Location--", "laundry", "kitchen", "bathroom", "living room", "bedroom", "yard"],
        difficultyValue,
        errMsg = ge("errors");;
    
 
    // Search
    var searchButton1 = ge("searchButton1");
    var searchButton2 = ge("searchButton2");
    var searchButton3 = ge("searchButton3");
    var searchButton4 = ge("searchButton4");
    var searchButton5 = ge("searchButton5");
    var searchButton6 = ge("searchButton6");

    var searchButton = ge("searchButton");
    //var button1 = ["laundry", "kitchen", "bathroom", "living room", "bedroom", "yard"];
    //var button2 = "kitchen";
    //var button3 = "bathroom";
    //var button4 = "living room";
    //var button5 = "bedroom";
    //var button6 = "yard";


    var getSearch = function () {
        var choreType = myTypeArray; 
        var term = ge("searchTerm").value; 
  
        // Search by term
        if (term != "") {
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

		var myForm = $('#choreForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here

	 // My edit item link function....

    function editItem() {
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);

        

        // Get Elements By Id....
        ge("chore").value = item.chore[1];
        ge("area").value = item.area[1];

        var radios = document.forms[0].difficulty;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].value == "Easy" && item.difficulty[1] == "Easy") {
                radios[i].setAttribute("checked", "checked");
            } else if (radios[i].value == "Medium" && item.difficulty[1] == "Medium") {
                radios[i].setAttribute("checked", "checked");
            } else if (radios[i].value == "Hard" && item.difficulty[1] == "Hard") {
                radios[i].setAttribute("checked", "checked");
            }
        }
        ge("importance").value = item.importance[1];
        ge("choreDate").value = item.choreDate[1];
        ge("notes").value = item.notes[1];

        //remove listener.
        saveButton.removeEventListener("click", saveData);
        ge("saveButton").value = "Edit Chore";
        var editSubmit = ge("saveButton");
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
    }

    // Make Item Links.

    function makeItemLinks(key, linksLi) {
        var editLink = document.createElement("a");
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Chore";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);

        var breakTag = document.createElement("br");
        linksLi.appendChild(breakTag);

        var deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Chore";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);

    }

    // Get image for each location.

    function getImage(catName, makeSublist) {
        var imageLi = document.createElement("li");
        makeSublist.appendChild(imageLi);
        var newImage = document.createElement("img");
        var setSrc = newImage.setAttribute("src", "images/" + catName + ".png");
        imageLi.appendChild(newImage);
    }

     // Get radio answer function.         

    function getSelectedRadio() {
        var radios = document.forms[0].difficulty;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                difficultyValue = radios[i].value;
            }
        }
    }

      // Make Select Field With js.

    function makeField() {
        var formTag = ge("form"),
        selectLi = ge("select"),
        makeSelect = document.createElement("select");
        makeSelect.setAttribute("id", "area");
        makeSelect.setAttribute("class", "required");
        makeSelect.setAttribute("data-native-menu", "false");
            for (var i = 0, j = myTypeArray.length; i < j; i++) {
                var makeOption = document.createElement("option");
                var optText = myTypeArray[i];
                makeOption.setAttribute("value", optText);
                makeOption.innerHTML = optText;
                makeSelect.appendChild(makeOption);
            }
            selectLi.appendChild(makeSelect);
    }


     // My array for dropdown menu.
    var myTypeArray = ["--Choose A Location--", "laundry", "kitchen", "bathroom", "living room", "beddroom", "yard"],
        difficultyValue,
        errMsg = ge("errors");;
    makeField();
	
});

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


