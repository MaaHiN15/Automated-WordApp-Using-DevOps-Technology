// Synonyms, Antonyms, Definition, Examples, Rhymes, Pronounciation, Syllables, Frequency
// typeOf, hasTypes, partOf, hasParts, instanceOf, hasInstances, similarTo, also, entails, 
// memberOf, hasMembers, substanceOf, hasSubstances, inCategory, hasCategories, usageOf, hasUsages, inRegion, regionOf, pertainsTo 


async function call_function(incoming_event){
    const data = await fetch(`/${incoming_event.id}`, {
        method : "GET",
        headers : {"Content-Type" : "application/json"}
    })
    .then(response => response.json())
    .then(data => data);
    return data;
};


function synonyms_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    };
    promise_data();
};

function antonyms_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    };
    promise_data();
};


function definitions_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(`Definition: ${a['definition']} \n Parts-Of-Speech: ${a['partOfSpeech']}`));
    }; promise_data() ;
};



function examples_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data() ;
};


function rhymes_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => a.forEach(b => console.log(b)));
    }; promise_data() ;
};


function pronunciation_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.keys(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data() ;
};


function syllables_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]['list']).forEach(a => console.log(a));
    }; promise_data() ;
};


function frequency_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.keys(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};


function typeOf_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};


function hasTypes_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};


function partOf_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};


function hasParts_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};



function instanceOf_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};




function hasInstances_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};



function similarTo_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};



function also_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};





function entails_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};





function memberOf_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};





function hasMembers_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};





function substanceOf_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};





function hasSubstances_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};





function inCategory_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};





function hasCategories_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};





function usageOf_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};




function hasUsages_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};




function inRegion_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};




function regionOf_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};



function pertainsTo_function(event){
    event.preventDefault();
    const data = call_function(this);
    const promise_data = async () => {
        ans = await data;
        Object.values(JSON.parse(ans)[`${this.id}`]).forEach(a => console.log(a));
    }; promise_data();
};








document.getElementById("synonyms").addEventListener("click", synonyms_function)
document.getElementById("antonyms").addEventListener("click", antonyms_function)
document.getElementById("definitions").addEventListener("click", definitions_function)
document.getElementById("examples").addEventListener("click", examples_function)
document.getElementById("rhymes").addEventListener("click", rhymes_function)
document.getElementById("pronunciation").addEventListener("click", pronunciation_function)
document.getElementById("syllables").addEventListener("click", syllables_function)
document.getElementById("frequency").addEventListener("click", frequency_function)
document.getElementById("typeOf").addEventListener("click", typeOf_function)
document.getElementById("hasTypes").addEventListener("click", hasTypes_function)
document.getElementById("partOf").addEventListener("click", partOf_function)
document.getElementById("hasParts").addEventListener("click", hasParts_function)
document.getElementById("instanceOf").addEventListener("click", instanceOf_function)
document.getElementById("hasInstances").addEventListener("click", hasInstances_function)
document.getElementById("similarTo").addEventListener("click", similarTo_function)
document.getElementById("also").addEventListener("click", also_function)
document.getElementById("entails").addEventListener("click", entails_function)
document.getElementById("memberOf").addEventListener("click", memberOf_function)
document.getElementById("hasMembers").addEventListener("click", hasMembers_function)
document.getElementById("substanceOf").addEventListener("click", substanceOf_function)
document.getElementById("hasSubstances").addEventListener("click", hasSubstances_function)
document.getElementById("inCategory").addEventListener("click", inCategory_function)
document.getElementById("hasCategories").addEventListener("click", hasCategories_function)
document.getElementById("usageOf").addEventListener("click", usageOf_function)
document.getElementById("hasUsages").addEventListener("click", hasUsages_function)
document.getElementById("inRegion").addEventListener("click", inRegion_function)
document.getElementById("regionOf").addEventListener("click", regionOf_function)
document.getElementById("pertainsTo").addEventListener("click", pertainsTo_function)


