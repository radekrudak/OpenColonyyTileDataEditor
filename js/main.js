function inputArrayToNumberArray(inputArray) {
  let outputArray = [];
  inputArray.forEach(element => {
    outputArray.push(
      element.value
    );
  });
  return outputArray;
}
function tile_build_on_gen(targetId) {
  let targetElement = document.querySelector("#"+targetId);
  let template = document.querySelector("#tiles_build_on_table_template_html");
  for (let index = 0; index < AMMOUNT_OF_TILES; index++) {
    targetElement.appendChild(
      template.content.cloneNode(true)
    );
  }
}

function fill_tile_data_template() {
  tile_build_on_gen("tiles_it_can_be_build_on");
  let templateToFll = document.querySelector("#tile_data_template");
  resources_table_gen(
   templateToFll.querySelector("#resources_required_to_build")
  );
  resources_table_gen(
   templateToFll.querySelector("#resources_consumed_per_tic")
  );
  resources_table_gen(
   templateToFll.querySelector("#resources_produced_per_tic")
  );

}

function setup_editor(target_form_id) {

  let template = document.querySelector("#tile_data_template");

  let editor_input = document.querySelector("#"+target_form_id);
  editor_input.textContent = "";
  for (let index = 0; index < AMMOUNT_OF_TILES; index++) {
    let clone = template.cloneNode(true);
    clone.setAttribute("id","tile_data_"+index);
    clone.querySelector("#resources_required_to_build").setAttribute("id","resources_required_to_build_"+index);
    clone.querySelector("#resources_consumed_per_tic").setAttribute("id","resources_consumed_per_tic_"+index);
    clone.querySelector("#resources_produced_per_tic").setAttribute("id","resources_produced_per_tic_"+index);
    editor_input.appendChild(clone);
  }
  //template.remove();
}


function setup_and_reset() {
  setup_editor("tile_data_form");
  setDefaultTileDataState();
  updateUI();
}
function resources_table_gen(target_to_fill) {
  let res_template = document.querySelector("#resources_table");
  for (let index = 0; index < AMMOUNT_OF_RESOURCES; index++) {
    let clone = res_template.content.cloneNode(true);
    target_to_fill.appendChild(clone);
    
  }
  return target_to_fill
}
  

//downloadJSON({hello:2}, 'json.txt', 'text/plain');
