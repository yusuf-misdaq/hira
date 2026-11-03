/* HIRA CAMPAIGN
   Each level is a project; each checkpoint is a step. To tick one off, change done:false to done:true.
   Levels are listed in the order they're being tackled. The first unticked checkpoint becomes NEXT GOAL. */
var CAMPAIGN = [
  { id: "clear", name: "Clear the Land", tag: "Clean-up", checkpoints: [
    { t: "Walk the land and mark every pile: keep, give away, sell, dump", done: false },
    { t: "Give away and sell what still has life in it", done: false },
    { t: "Haul the rest to the dump or transfer station", done: false },
    { t: "Clear the old burned foundation of ash and debris", done: false }
  ]},
  { id: "gardens", name: "The Gardens", tag: "Planting season", checkpoints: [
    { t: "Remediate the dead soil & plant the grass seedlings", done: true },
    { t: "Plant: fig tree, passion fruit, onions, aubergine, jalapeño, carrots", done: true },
    { t: "Weed the beds, the boundary and the paths", done: false },
    { t: "Mark the best spots for every tree and plant: sun, water, privacy", done: false },
    { t: "Plant the cypress along the boundary and at the entry", done: false },
    { t: "Plant the roses", done: false },
    { t: "Arched trellis: first arch set", done: true },
    { t: "Arched trellis: raise the rest of the arches & plant the climbers", done: false },
    { t: "Drip lines to the new plantings", done: false },
    { t: "Two solar-powered fountains", done: false }
  ]},
  { id: "lapis", name: "The Lapis Room", tag: "Podcast studio", checkpoints: [
    { t: "Lay the Portuguese cork floor tiles", done: true },
    { t: "Begin sourcing blue and cobalt pieces", done: true },
    { t: "Call for hardback books", done: false },
    { t: "Build the book wall", done: false },
    { t: "Sound panels, desk, mics", done: false },
    { t: "Ultramarine limewash", done: false }
  ]},
  { id: "dome", name: "The Nur Dome", tag: "29-ft earthbag dome", checkpoints: [
    { t: "Finalize the plan and the door direction", done: false },
    { t: "Set the center post and dig the foundation trench", done: false },
    { t: "Lay the gravel-filled foundation courses", done: false },
    { t: "Raise the walls, course by course", done: false },
    { t: "Build Dome 2 (Hisham) and Dome 3 (Nazim)", done: false },
    { t: "Corridors to Hisham and Nazim", done: false },
    { t: "Close the dome", done: false },
    { t: "Plaster and slate", done: false }
  ]},
  { id: "hens", name: "The Hen House", tag: "3–4 laying hens", checkpoints: [
    { t: "Decide where the coop goes: shade, dry ground, near the kitchen", done: false },
    { t: "Research feed and feeders; buy layer feed, oyster shell and a rat-proof feeder", done: false },
    { t: "Build the coop and the wire run", done: false },
    { t: "Make the water-nipple bucket", done: false },
    { t: "Buy the hens", done: false }
  ]},
  { id: "bathhouse", name: "Tiled Bathhouse", tag: "The shed bathroom first, the container later", checkpoints: [
    { t: "Composting toilet", done: false },
    { t: "Propane Rain shower", done: false },
    { t: "Source the cheapest lime that works for Moroccan tadelakt", done: false },
    { t: "Moroccan tadelakt lime shower", done: false },
    { t: "Lime-and-sand splash areas, sealed with Palestinian olive", done: false },
    { t: "Tile floor with grey slate", done: false }
  ]},
  { id: "container", name: "The Container", tag: "20 ft shipping container", checkpoints: [
    { t: "Choose the spot and check the truck can get up the road", done: true },
    { t: "Dig and level six concrete piers", done: false },
    { t: "Pour the piers and let them cure a week", done: false },
    { t: "Buy the container & arrange transport", done: true },
    { t: "Container delivered and set down", done: false },
    { t: "Lay the cork floorboards", done: false }
  ]},
  { id: "wall", name: "The Front Wall", tag: "Rammed earth", checkpoints: [
    { t: "Confirm the wall line and height", done: false },
    { t: "Build the sifter and sift the free earth", done: false },
    { t: "Test blocks: choose the mix", done: false },
    { t: "Dig the foundation trench", done: false },
    { t: "Build the reusable form and ram the first section", done: false },
    { t: "Ram the rest, section by section", done: false }
  ]},
  { id: "pond", name: "The Koi & Lotus Pond", tag: "At the dome's door", checkpoints: [
    { t: "Lay out the almond shape and check the sun", done: false },
    { t: "Dig: shelf first, then the deep zone", done: false },
    { t: "Line it and set the stones", done: false },
    { t: "Pump and bog filter", done: false },
    { t: "Plant the lilies and lotus", done: false },
    { t: "Welcome the koi", done: false }
  ]},
  { id: "silk", name: "The Silk Sky", tag: "The Garden Table", checkpoints: [
    { t: "Decide the layout, seating and pool style", done: true },
    { t: "Posts and beams", done: false },
    { t: "Earthen benches", done: false },
    { t: "Reflecting-pool table", done: false },
    { t: "Hang the linen", done: false }
  ]},
  { id: "power", name: "Power & Hot Water", tag: "Sun and propane", checkpoints: [
    { t: "Main solar system wired", done: true },
    { t: "Wire the first electrical outlets to the kitchen", done: false },
    { t: "Propane tank installed", done: false },
    { t: "Propane water heater for the sinks", done: false },
    { t: "Outdoor outlets", done: false },
    { t: "Car charger", done: false }
  ]}
];

function hiraNextGoal(){
  for (var i=0;i<CAMPAIGN.length;i++){
    var L=CAMPAIGN[i];
    for (var j=0;j<L.checkpoints.length;j++){
      if(!L.checkpoints[j].done) return { level:L, cp:L.checkpoints[j], index:i };
    }
  }
  return null;
}
