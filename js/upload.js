
let mostRecentlyUploadedJson;
function uploadGetMostRecentlyUploadedJson() {
  return mostRecentlyUploadedJson;
}

function uploadFile (elm) {
  new Response(elm.files[0]).json().then(json => {
    mostRecentlyUploadedJson = json;
  }, err => {
    console.error("COULD NOT READ JSON");
    
    // not json
  })
}

function uploadResourcesData (elm) {
  new Response(elm.files[0]).json().then(json => {
    setResourcesDataState(json);
  }, err => {
    console.error("COULD NOT READ JSON");
    
    // not json
  })
}


function uploadTileData (elm) {
  new Response(elm.files[0]).json().then(json => {
    mostRecentlyUploadedJson = json;
  }, err => {
    console.error("COULD NOT READ JSON");
    
    // not json
  })
}
