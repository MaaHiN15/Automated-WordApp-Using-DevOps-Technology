// Synonyms, Antonyms, Definition, Examples, Rhymes, Pronounciation, Syllables, Frequency
// typeOf, hasTypes, partOf, hasParts, instanceOf, hasInstances, similarTo, also, entails, 
// memberOf, hasMembers, substanceOf, hasSubstances, inCategory, hasCategories, usageOf, hasUsages, inRegion, regionOf, pertainsTo 


function call_function(event){
    event.preventDefault();
    console.log("js function called");
    fetch("/synonyms", {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
};

document.getElementById("synonyms").addEventListener("click", call_function)


