
im={};im.buildings={};im.buildings.undergroundMine={tooltip:{wood:5000,stone:5000,stonePickaxe:20,stoneHammer:5,stoneAxe:20,tooltip_text:'A mine that will generate coal, iron ore, copper ore, etc. The underground mine has 3 tiers.__info_data__'},};im.buildings.surfacedMine={tooltip:{wood:1000,stone:1000,stonePickaxe:20,stoneHammer:5,stoneAxe:10,tooltip_text:'A mine that will generate limestone, clay, sand, stone and gravel.__info_data__'},};im.buildings.lumberMill={tooltip:{wood:1000,stone:500,stoneHammer:5,stoneAxe:30,tooltip_text:'The lumber mill will generate wood.__info_data__'},};im.buildings.hunterShack={tooltip:{wood:1000,stone:500,stoneHammer:5,stoneKnife:5,tooltip_text:'The hunter shack will generate meat and animal skins. NOTE: Meat is consumed by your character passively at a slow-ish rate.__info_data__'},};im.buildings.tannery={tooltip:{wood:1000,stone:500,stonePickaxe:5,stoneHammer:5,stoneAxe:30,stoneKnife:5,tooltip_text:'The tannery will produce hide from animal skins.__info_data__'},};im.buildings.workshop={tooltip:{wood:5000,stone:5000,gravel:100,clay:100,hide:100,stonePickaxe:50,stoneHammer:50,stoneAxe:50,stoneKnife:50,tooltip_text:'Increases the speed at which tools are built.__info_data__'},};im.buildings.warehouse={tooltip:{wood:100,stone:100,stonePickaxe:5,stoneHammer:5,stoneAxe:5,tooltip_text:'Increases the amount of materials you can store. Each warehouse increases the amount by 100%. It stacks. Ex. If you can now store 100 of a material type, with 1 warehouse you will store 200, with 2 you will store 400, with 3 you will store 800 and so on.__info_data__'},};im.buildings.wheatFarm={tooltip:{wood:2000,stone:2000,stonePickaxe:30,stoneAxe:30,stoneHoe:30,tooltip_text:'The wheat farm will generate wheat. If you have both meat and wheat you will lose hunger much slower.__info_data__'},};im.buildings.blastFurnace={tooltip:{wood:10000,stone:10000,copperPickaxe:50,copperHammer:50,clay:200,limestone:200,coal:200,sand:200,gravel:200,tooltip_text:'The blast furnace allows you to purify various metals.__info_data__'},};im.buildings.forge={tooltip:{iron:100,stone:10000,wood:10000,ironPickaxe:50,ironHammer:50,copperPickaxe:50,copperHammer:50,hide:300,coalCoke:500,tooltip_text:'Unlocks building new tools and greatly increases the rate at which tools are built.__info_data__'},};im.buildings.cokeOven={tooltip:{stone:500,wood:500,stonePickaxe:5,stoneHammer:5,tooltip_text:'Transforms coal into coal coke.__info_data__'},};im.resources={};im.resources.silver={tooltip:{tooltip_text:'Silver can be traded for various other materials. Careful tho, you may use it later on. Don\'t spend it all.',},};im.resources.gold={tooltip:{tooltip_text:'Gold can be traded for various other materials. Careful tho, you may use it later on. Don\'t spend it all.',},};
$(document).ready(function(){$('#im_buildings').hide();$('#im_generation').hide();$('#im_research').hide();$('#im_btn_resources').click(function(){$('#im_buildings').hide();$('#im_resources').show();$('#im_generation').hide();$('#im_research').hide();});$('#im_btn_buildings').click(function(){$('#im_buildings').show();$('#im_resources').hide();$('#im_generation').hide();$('#im_research').hide();});$('#im_btn_generation').click(function(){$('#im_buildings').hide();$('#im_resources').hide();$('#im_generation').show();$('#im_research').hide();});$('#im_btn_research').click(function(){$('#im_buildings').hide();$('#im_resources').hide();$('#im_generation').hide();$('#im_research').show();});});function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min);}
let big_log="#im_page";setInterval(function(){let count=$(big_log).find("p").length;if(count>20){$(big_log+" p:last").fadeOut(1000,function(){$(this).remove();});}},4000);
$(document).ready(function(){$('#im_buildings_underground_mine_tooltip').attr('title',buildTooltipText(im.buildings.undergroundMine.tooltip));$('[data-toggle="im_buildings_underground_mine_tooltip"]').tooltip();$('#im_buildings_surface_mine_tooltip').attr('title',buildTooltipText(im.buildings.surfacedMine.tooltip));$('[data-toggle="im_buildings_surface_mine_tooltip"]').tooltip();$('#im_buildings_lumber_mill_tooltip').attr('title',buildTooltipText(im.buildings.lumberMill.tooltip));$('[data-toggle="im_buildings_lumber_mill_tooltip"]').tooltip();$('#im_buildings_hunter_shack_tooltip').attr('title',buildTooltipText(im.buildings.hunterShack.tooltip));$('[data-toggle="im_buildings_hunter_shack_tooltip"]').tooltip();$('#im_buildings_tannery_tooltip').attr('title',buildTooltipText(im.buildings.tannery.tooltip));$('[data-toggle="im_buildings_tannery_tooltip"]').tooltip();$('#im_buildings_workshop_tooltip').attr('title',buildTooltipText(im.buildings.workshop.tooltip));$('[data-toggle="im_buildings_workshop_tooltip"]').tooltip();$('#im_buildings_warehouse_tooltip').attr('title',buildTooltipText(im.buildings.warehouse.tooltip));$('[data-toggle="im_buildings_warehouse_tooltip"]').tooltip();$('#im_buildings_wheat_farm_tooltip').attr('title',buildTooltipText(im.buildings.wheatFarm.tooltip));$('[data-toggle="im_buildings_wheat_farm_tooltip"]').tooltip();$('#im_buildings_blast_furnace_tooltip').attr('title',buildTooltipText(im.buildings.blastFurnace.tooltip));$('[data-toggle="im_buildings_blast_furnace_tooltip"]').tooltip();$('#im_buildings_forge_tooltip').attr('title',buildTooltipText(im.buildings.forge.tooltip));$('[data-toggle="im_buildings_forge_tooltip"]').tooltip();$('#im_buildings_coke_oven_tooltip').attr('title',buildTooltipText(im.buildings.cokeOven.tooltip));$('[data-toggle="im_buildings_coke_oven_tooltip"]').tooltip();$('#im_resources_silver_tooltip').attr('title',(im.resources.silver.tooltip.tooltip_text));$('[data-toggle="im_resources_silver_tooltip"]').tooltip();$('#im_resources_gold_tooltip').attr('title',(im.resources.gold.tooltip.tooltip_text));$('[data-toggle="im_resources_gold_tooltip"]').tooltip();});function buildTooltipText(obj){let html='';for(let value in obj){if(obj.hasOwnProperty(value)){if(value==='tooltip_text'){continue;}
html+=unCamelCase(value)+' - '+obj[value]+'<br>';}}
if(obj.hasOwnProperty('tooltip_text')){return obj['tooltip_text'].replace('__info_data__','<div class="text-center"> Cost:<br>'+html+'</div>');}
return'Missing information.';}
function unCamelCase(str){return str.replace(/([a-z])([A-Z])/g,'$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/,'$1 $2$3').replace(/^./,function(str){return str.toUpperCase();})}