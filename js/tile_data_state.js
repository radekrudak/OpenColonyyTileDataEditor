var tileDataState;

var resourcesTable;

function loadTileDataState(params) {
  elm = document.querySelector("#upload_tile_data");

  new Response(elm.files[0]).json().then(json => {
    tileDataState = json;
    updateUI();
  }, err => {
    console.error("COULD NOT READ JSON");
    return null;
    // not json
  })
}

function saveTileDataState() {
 downloadJSON(tileDataState, "tiles.json");
}

function checkboxArrayToNumberArray(arrayOfcheckboxes){
  let returnArray = [];
  for (let index = 0; index < arrayOfcheckboxes.length; index++) {
    returnArray.push(arrayOfcheckboxes[index].checked);
    
  }
  return returnArray;
}

function setDefaultTileDataState() {
  tileDataState = {
   tile_data_table:[]
  }
  for (let index = 0; index < AMMOUNT_OF_TILES; index++) {
    tileDataState.tile_data_table.push(getEmptyTile());
    
  }
}
function loadResourcesTable() {
    elm = document.querySelector("#upload_resources");

  new Response(elm.files[0]).json().then(json => {
    resourcesTable = json["resources_table"];
    updateUI();
  }, err => {
    console.error("COULD NOT READ JSON");
    return null;
    // not json
  });
}
function loadTileDataStateFromUI() {
  let arrayOfNameElements = document.querySelector("#tile_data_form").querySelectorAll(".tile_name_html");
  let arrayOfBuildOnElements = document.querySelector("#tile_data_form").querySelectorAll("#tiles_it_can_be_build_on");
  for (let index = 0; index < AMMOUNT_OF_TILES; index++) {
    tileDataState.tile_data_table[index].name = arrayOfNameElements[index].value;
    tileDataState.tile_data_table[index].tiles_it_can_be_build_on = 
      checkboxArrayToNumberArray(arrayOfBuildOnElements[index].querySelectorAll("input"));
    tileDataState.tile_data_table[index].resources_required_to_build = 
      inputArrayToNumberArray(
        document.querySelector("#resources_required_to_build_"+index).querySelectorAll("input")
      );

    tileDataState.tile_data_table[index].resources_consumed_per_tic = 
      inputArrayToNumberArray(
        document.querySelector("#resources_consumed_per_tic_"+index).querySelectorAll("input")
      );
    tileDataState.tile_data_table[index].resources_produced_per_tic = 
      inputArrayToNumberArray(
        document.querySelector("#resources_produced_per_tic_"+index).querySelectorAll("input")
      );
  }
  updateUI();
}
function  fillArrayOfLabelsWithResorucesNames(arrayOfElements,resTable) {
  console.assert(arrayOfElements.lenght === resTable.lenght,"arrayf of labels and resource table dosn't have same lenght");
  for (let index = 0; index < arrayOfElements.length; index++) {
    arrayOfElements[index].innerText = resTable[index];
  }
}
function fillArrayOfLabelsWithTileNames(arrayOfElemnts,tileTable) {
  console.assert(arrayOfElemnts.lenght === tileTable.lenght,"arrayf of labels and resource table dosn't have same lenght");
  for (let index = 0; index < arrayOfElemnts.length; index++) {
    arrayOfElemnts[index].innerText = tileTable[index].name;
  }
}
function updateUI() {
  
  let arrayOfNameElements = document.querySelector("#tile_data_form").querySelectorAll(".tile_name_html");
  let arrayOfBuildOnElements = document.querySelector("#tile_data_form").querySelectorAll("#tiles_it_can_be_build_on");
  for (let index = 0; index < AMMOUNT_OF_TILES; index++) {
    arrayOfNameElements[index].value = tileDataState.tile_data_table[index].name;
    let res_to_build_element_array = document.querySelector("#resources_required_to_build_"+index).querySelectorAll("input");
    let res_consumed_array = document.querySelector("#resources_consumed_per_tic_"+index).querySelectorAll("input");
    let res_produced_array = document.querySelector("#resources_produced_per_tic_"+index).querySelectorAll("input");
    let tiles_it_can_be_build_on_InputArray =  arrayOfBuildOnElements[index].querySelectorAll("input");
    for (let index2 = 0; index2 < AMMOUNT_OF_TILES; index2++) {
      tiles_it_can_be_build_on_InputArray[index2].checked = tileDataState.tile_data_table[index].tiles_it_can_be_build_on[index2];
    }
    for (let index2 = 0; index2 < AMMOUNT_OF_RESOURCES; index2++) {
       
      res_to_build_element_array[index2].value = tileDataState.tile_data_table[index].resources_required_to_build[index2];
      res_consumed_array[index2].value = tileDataState.tile_data_table[index].resources_consumed_per_tic[index2];
      res_produced_array[index2].value = tileDataState.tile_data_table[index].resources_produced_per_tic[index2];
    }
    if (resourcesTable !== undefined ) {
      let res_req_labels = document.querySelector("#resources_required_to_build_"+index).querySelectorAll("label");
      let res_cons_labels = document.querySelector("#resources_consumed_per_tic_"+index).querySelectorAll("label");
      let res_prod_labels = document.querySelector("#resources_produced_per_tic_"+index).querySelectorAll("label");
      fillArrayOfLabelsWithResorucesNames(res_req_labels,resourcesTable);
      fillArrayOfLabelsWithResorucesNames(res_cons_labels,resourcesTable);
      fillArrayOfLabelsWithResorucesNames(res_prod_labels,resourcesTable);
    }

  }
  arrayOfElements = document.querySelector("#tile_data_form").querySelectorAll("#tiles_it_can_be_build_on");
  arrayOfElements.forEach(element => {
    let labels = element.querySelectorAll("label");
    fillArrayOfLabelsWithTileNames(labels,tileDataState.tile_data_table);
      
  });
}
