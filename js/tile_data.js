function getEmptyResourcesTable() {
  return Array(AMMOUNT_OF_RESOURCES).fill(0);
}

function getEmptyTile() {
  let returnOBJ = {
      name:"TILE_UNIMPLEMENTED"
  };
  returnOBJ.tiles_it_can_be_build_on = Array(AMMOUNT_OF_TILES).fill(false);
  returnOBJ.resources_required_to_build = getEmptyResourcesTable();
  returnOBJ.resources_produced_per_tic = getEmptyResourcesTable();
  returnOBJ.resources_consumed_per_tic = getEmptyResourcesTable();
  return returnOBJ;
}
