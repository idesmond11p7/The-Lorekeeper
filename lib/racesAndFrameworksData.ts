// Complete, uncompressed archive of all Races, Demon Breeds, Bloodlines, Astral Species,
// Temporal Anomalies, Goetarchs, Sovereign Factions, Occult Frameworks, and All 29 Realms
// from the primary Ur-Worlds draft, plus Brainstorming & Naming Forge seeds.

export interface DetailedDemonBreed {
  id: string;
  name: string;
  epithet: string;
  caste: string;
  description: string;
  combatRole: string;
  status: 'Fully Detailed in Draft' | 'Expanded in Studio';
}

export interface NamedBloodlineGroup {
  id: string;
  categoryName: string;
  subtitle: string;
  bloodlines: {
    name: string;
    notes?: string;
    status: 'Seed Name Only (Needs Flesh-Out)' | 'Detailed';
  }[];
}

export interface AstralTaxonomyGroup {
  id: string;
  category: string;
  tier: string;
  formationVector?: string;
  entities: string[];
}

export interface ExpandedRaceCategory {
  id: string;
  categoryName: string;
  ontologicalTier: string;
  cognitionTier: string;
  constructionMechanism: string;
  associatedFuelOrKi: string;
  restrictorPlate: string;
  races: {
    name: string;
    epithet: string;
    morphologyAndTrait: string;
  }[];
}

export interface AstralConstructionRule {
  id: string;
  ruleNumber: number;
  title: string;
  standardRaceMechanism: string;
  astralEntityMechanism: string;
  canonicalImplication: string;
}

export interface OccultFrameworkRecord {
  id: string;
  name: string;
  epithet?: string;
  mythos?: string;
  mechanic?: string;
  hardware?: string;
  outputAndKickback?: string;
  status: 'Fully Detailed in Draft' | 'Named Seed (Needs Mechanics)';
}

export interface NetherfireReserve {
  id: string;
  name: string;
  outcomeReality: string;
  status: 'Defined in Draft' | 'Named Seed (Needs Outcome Vector)';
}

export interface BrainstormPromptSeed {
  id: string;
  domain: 'Missing Category Races' | 'Unfleshed Demon Bloodlines' | 'Classified Frameworks' | 'Netherfire Fuels' | 'Ki & Magic Collisions';
  question: string;
  contextFromDraft: string;
  pitchedIdeas: {
    name: string;
    etymology: string;
    concept: string;
    restrictorPlate: string;
  }[];
}

// 1. ALL 6 CATEGORY RACE TIERS + OMNI-LIFE
export const CATEGORY_RACE_TIERS = [
  {
    category: 'Category 1',
    classification: 'Purely Physical & Biological',
    cognition: 'Lacks mental or precognitive capabilities',
    emotions: 'None',
    magicCapability: 'Zero. Bound strictly by classical Newtonian physics.',
    knownExamples: ['Amoeba', 'Baseline microorganisms', 'Non-cognitive flora'],
    missingInDraft: 'No macro-scale Category 1 apex fauna or planetary biomass organisms named yet.'
  },
  {
    category: 'Category 2',
    classification: 'Non-Sentient Thinking Nodes (Category X)',
    cognition: 'Lacks all form and sentience, but CAN think',
    emotions: 'None',
    magicCapability: 'Capable of Netherarchesial Reality Warping (as part of Category X).',
    knownExamples: ['Unnamed in draft — pure form-less cognitive/precognitive processes'],
    missingInDraft: 'CRITICAL GAP: What does a Category 2 race actually look/act like in-world if it has zero form and zero sentience, yet thinks and warps reality?'
  },
  {
    category: 'Category 3',
    classification: 'Emotionless Precognitive Calculators (Category X)',
    cognition: 'Limited sentience, possesses intellectual & precognitive capabilities; lacks permanent pattern recognition and long-term memory of past mistakes ("learns by the way, predicts by the way")',
    emotions: 'None (Lacks precompiled evolutionary algorithms)',
    magicCapability: 'The minimum threshold required to utilize MAGIC steadily, though slower and "less blessed" than Category 4.',
    knownExamples: ['Unnamed in draft — no specific Category 3 species are named yet!'],
    missingInDraft: 'CRITICAL GAP: It takes a Category 3 race to utilize MAGIC, and they are part of Category X—who are the flagship Category 3 races in the Bio-Manifold?'
  },
  {
    category: 'Category 4',
    classification: 'Emotional Evolutionary Civilizations',
    cognition: 'Sentient, intellectual, long-term pattern recognition',
    emotions: 'Full evolutionary hardware overrides (Fear, Anger, Disgust, Lethargy) & social GPS algorithms (Shame, Guilt, Gratitude, Moral Outrage, Love)',
    magicCapability: 'Massive unconscious MWI reality warping via emotionally weighted precognitive simulations ("The Illusion of Myths"), though most are evolutionarily blind to their own capability because they lack Category 5 ontological boundaries.',
    knownExamples: ['Humans (Terra-Realms)', 'Unnamed non-human Category 4 civilizations across the Bio-Manifold'],
    missingInDraft: 'What other Category 4 races populate the Bio-Manifold besides Humans, and how do their different evolutionary biologies create completely different emotions and myths?'
  },
  {
    category: 'Category 5',
    classification: 'Ontologically Bounded Manipulators (Category X)',
    cognition: 'Hyper-advanced precognitive simulation; possesses Category 4 capabilities in most scenarios',
    emotions: 'Variable (Demons are NOT emotional beings, yet are psychologically extreme and tied to the 7/8 Sins)',
    magicCapability: 'Predates on or harvests Category 4 psychology and precognitive simulations. Strictly locked behind Ontological Boundaries (rules they cannot defy without losing existence). Note: "Manipulation doesn\'t always mean malicious—other entities on the opposite end of the spectrum exist."',
    knownExamples: ['Netherbound Entities', 'Luciferian Demons', 'Goetarchs', 'Unnamed Benevolent / Non-Malevolent Category 5 Races'],
    missingInDraft: 'CRITICAL GAP: Who are the non-malevolent Category 5 races on the "other end of the spectrum" that manipulate Category 4s symbiotically or benevolently?'
  },
  {
    category: 'Category 6',
    classification: 'The Unspoken / Unlisted Tier',
    cognition: 'Undocumented in primary draft (Category X jumps from Cat 5 to Cat 7)',
    emotions: 'Unknown',
    magicCapability: 'Unknown — deliberately omitted or classified between Cat 5 MWI manipulation and Cat 7 Metachaos.',
    knownExamples: ['None listed in draft'],
    missingInDraft: 'CRITICAL QUESTION: Why does Category X include Cat 2, 3, 5, and 7, skipping Category 6 entirely? What is Category 6?'
  },
  {
    category: 'Category 7',
    classification: 'Transfinite Metachaos Authorities (Category X)',
    cognition: 'Independent of all lower ecosystems; operates beyond countably infinite Many-Worlds (Aleph-Null)',
    emotions: 'Transcendent',
    magicCapability: 'TRUE Netherarchesial / Axiomarchical Reality Warping. Uses the Metachaos at transfinite cardinal scales (delta δ beyond ZFC, Berkeley Cardinals). Dictates existential authority rather than raw physical brawl strength, though authority is still bounded to the specific Cat 7 entity.',
    knownExamples: ['Unnamed in draft — supreme Metachaos authorities'],
    missingInDraft: 'Who are the named Category 7 individuals or sovereigns, and what are their specific domains of authority?'
  }
];

// 2. ALL 22 DETAILED DEMON BREEDS (ACROSS 6 CASTES)
export const DETAILED_DEMON_BREEDS: DetailedDemonBreed[] = [
  // Caste 1: The Horned Warlords & Iron-Hide Breeds
  {
    id: 'breed-khorvath',
    name: 'The Khorvath',
    epithet: 'Iron-Scaled Sulphur Brutes',
    caste: '1. The Horned Warlords & Iron-Hide Breeds (Brutal Nether-Legions)',
    description: 'Massive, four-horned bipedal brutes with iron-scaled hide that deflects heavy ordnance. Their breath is pure ignited sulphur, and their culture is built purely on brutal conquest and territorial dominance.',
    combatRole: 'Apex frontline shock-infantry & heavy ordnance deflectors',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-brakari',
    name: 'Brakari',
    epithet: 'The Gore-Tusked',
    caste: '1. The Horned Warlords & Iron-Hide Breeds (Brutal Nether-Legions)',
    description: 'Boar-crested, hulking front-liners with curved, jagged bone-tusks growing from their lower jaws and forearms, bred to charge into defensive battle lines and splinter vanguard armor.',
    combatRole: 'Line-breaking kinetic chargers',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-golgoren',
    name: 'Golgoren',
    epithet: 'Obsidian-Ridged Siege Knucklers',
    caste: '1. The Horned Warlords & Iron-Hide Breeds (Brutal Nether-Legions)',
    description: 'Colossal, knuckle-walking siege demons with backs covered in jagged black obsidian ridges. They pound the earth with fist-clubs to summon seismic fissures under enemy trenches.',
    combatRole: 'Tectonic siege artillery & anti-trench disruption',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-zuldrak',
    name: 'Zul’Drak',
    epithet: 'The Spire-Cleavers',
    caste: '1. The Horned Warlords & Iron-Hide Breeds (Brutal Nether-Legions)',
    description: 'Tall, muscular demon aristocrats wielding forged-chasm greatblades. They sport swept-back crowns of solid bone and can run at high velocity despite their massive weight.',
    combatRole: 'High-velocity aristocratic shock-duelists',
    status: 'Fully Detailed in Draft'
  },
  // Caste 2: The Chitinous & Carnal Predatory Castes
  {
    id: 'breed-skorvath',
    name: 'Skorvath',
    epithet: 'The Chasm-Crawlers',
    caste: '2. The Chitinous & Carnal Predatory Castes (Organic Bio-Terrors)',
    description: 'Multi-jointed, blind predators with skin made of clicking, pitch-black chitin. They hunt purely through thermal and kinetic vibration, dropping from ceilings and cave roofs like monstrous mantises.',
    combatRole: 'Vertical ambush predators & thermal-kinetic trackers',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-vrexul',
    name: 'Vrexul',
    epithet: 'The Flay-Hounds',
    caste: '2. The Chitinous & Carnal Predatory Castes (Organic Bio-Terrors)',
    description: 'Fast, skinless quadruped hounds with split jaws lined with triple rows of shark-like teeth. Used by high-caste demons to flush out survivors from ruined cities.',
    combatRole: 'Pursuit packs & urban ruin sweepers',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-kyrakkai',
    name: 'Kyrak-Kai',
    epithet: 'Plasteel-Melting Tunnelers',
    caste: '2. The Chitinous & Carnal Predatory Castes (Organic Bio-Terrors)',
    description: 'Centipede-bodied terrors with armored torsos that tunnel through rock, metal, and planetary crusts, spraying boiling gastric acid that dissolves reinforced plasteel in seconds.',
    combatRole: 'Subterranean crust-breachers & corrosive anti-armor',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-nekroshi',
    name: 'Nekroshi',
    epithet: 'Baked-Flesh Carapace Harvesters',
    caste: '2. The Chitinous & Carnal Predatory Castes (Organic Bio-Terrors)',
    description: 'Carrion-demons with elongated, whip-like arms and scythe-talons, known for hoarding severed flesh to bake into foul protective carapaces over their vital organs.',
    combatRole: 'Mid-range reach slashers & battlefield scavengers',
    status: 'Fully Detailed in Draft'
  },
  // Caste 3: The Primordial Pit-Born
  {
    id: 'breed-makhari',
    name: 'Makhari',
    epithet: 'The Cinder-Gorged',
    caste: '3. The Primordial Pit-Born (Born of Fire, Slag & Nether-Earth)',
    description: 'Broad, stone-skinned demons whose innards are a churning lake of superheated magmatic bile. When mortally wounded, their chests burst open into mini-volcanic eruptions.',
    combatRole: 'Volatile area-denial bruisers & martyrdom detonation',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-tharxian',
    name: 'Tharxian',
    epithet: 'The Slag-Eaters',
    caste: '3. The Primordial Pit-Born (Born of Fire, Slag & Nether-Earth)',
    description: 'Burrowers that swallow bedrock, heavy metals, and enemy artillery shells to excrete molten obsidian, sealing opposing forces inside burning glass tombs.',
    combatRole: 'Ordnance-eating burrowers & molten glass entombment',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-goreshapers',
    name: 'Gore-Shapers (The Karast)',
    epithet: 'Labyrinth Excavators',
    caste: '3. The Primordial Pit-Born (Born of Fire, Slag & Nether-Earth)',
    description: 'Subterranean demons with spade-like claws and magma-cracked hide, responsible for digging and carving the labyrinthine fortress-cities of the lower Nether.',
    combatRole: 'Combat engineers & subterranean fortress carvers',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-phaegor',
    name: 'Phaegor',
    epithet: 'The Ash-Stalkers',
    caste: '3. The Primordial Pit-Born (Born of Fire, Slag & Nether-Earth)',
    description: 'Silent, gaunt wanderers made entirely of compressed, sentient soot and volcanic glass. Striking them disperses their form into blinding smoke before they reform behind their prey.',
    combatRole: 'Particulate-dispersal assassins',
    status: 'Fully Detailed in Draft'
  },
  // Caste 4: The Parasitic & Marrow-Leaches
  {
    id: 'breed-vaelgorgers',
    name: 'Vael-Gorgers',
    epithet: 'The Marrow-Thieves',
    caste: '4. The Parasitic & Marrow-Leaches (The Hunger Castes)',
    description: 'Thin, rubbery-limbed horrors with barbed proboscises that inject paralytic toxins into victims, liquifying their skeletal structure to drink it out.',
    combatRole: 'Paralytic grapplers & skeletal liquefaction',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-skulvermil',
    name: 'Skul-Vermil',
    epithet: 'Armor-Seam Crab Swarms',
    caste: '4. The Parasitic & Marrow-Leaches (The Hunger Castes)',
    description: 'Swarming, crab-like micro-demons that scuttle across battlefields by the millions, gnawing through boots, armor seams, and weapons to pick wounded soldiers clean to the bone.',
    combatRole: 'Micro-swarm attrition & equipment degradation',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-myxari',
    name: 'Myxari',
    epithet: 'The Bile-Drinkers',
    caste: '4. The Parasitic & Marrow-Leaches (The Hunger Castes)',
    description: 'Bloated, leathery swamp-demons of the Nether trenches that exude toxic miasmas capable of rotting breathing gear and synthetic filters.',
    combatRole: 'Chemical warfare & life-support corrosion',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-sanguivor',
    name: 'Sanguivor',
    epithet: 'The Blood-Maws',
    caste: '4. The Parasitic & Marrow-Leaches (The Hunger Castes)',
    description: 'Feral berserkers with chest-cavities that unhinge into massive, vertical mouths lined with rib-teeth, devouring victims whole mid-charge.',
    combatRole: 'Whole-consumption shock berserkers',
    status: 'Fully Detailed in Draft'
  },
  // Caste 5: Nether-Sorcerers & Eldritch War-Priests
  {
    id: 'breed-zulkhor',
    name: 'Zul’Khor',
    epithet: 'The Chasm-Callers',
    caste: '5. Nether-Sorcerers & Eldritch War-Priests (The Arcanum Castes)',
    description: 'Four-armed, hooded demon warlocks whose skin is carved with self-inflicted burning scars. They tear open localized rifts into the Nether to drown reality in abyssal gravity.',
    combatRole: 'Gravitational rift-openers & high warlocks',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-ostrath',
    name: 'Ostrath',
    epithet: 'The Eye-Brood',
    caste: '5. Nether-Sorcerers & Eldritch War-Priests (The Arcanum Castes)',
    description: 'Grotesque, floating casters covered in dozens of lidless red eyes that project heat-rays and concussive telekinetic bursts.',
    combatRole: 'Aerial omni-directional beam & telekinetic artillery',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-malakorim',
    name: 'Malakorim',
    epithet: 'The Rune-Carvers',
    caste: '5. Nether-Sorcerers & Eldritch War-Priests (The Arcanum Castes)',
    description: 'Ancient, scholarly fiends who brand weapons and the hides of younger warrior-demons with profane glyphs that burn through energy shielding.',
    combatRole: 'Anti-shield buff specialists & glyphic smith-priests',
    status: 'Fully Detailed in Draft'
  },
  // Caste 6: Nether-Behemoths & World-Breakers
  {
    id: 'breed-brontorim',
    name: 'The Dread-Goliath (Brontorim)',
    epithet: 'Living Siege Platforms',
    caste: '6. Nether-Behemoths & World-Breakers (Apex Siege-Fauna)',
    description: 'Mountain-sized monstrosities used as living siege platforms, carrying fortress towers bolted to their armored spines into battle.',
    combatRole: 'Titan-class mobile citadel & troop transport',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-vraxx',
    name: 'Abyss-Gorgon (The Vraxx)',
    epithet: 'Slag-Sea Leviathans',
    caste: '6. Nether-Behemoths & World-Breakers (Apex Siege-Fauna)',
    description: 'Massive serpentine leviathans that swim through the sea of molten slag that borders the Nether\'s deepest boundaries.',
    combatRole: 'Boundary-sea naval/magma apex predator',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'breed-kaelgoth',
    name: 'Ruin-Beast (The Kaelgoth)',
    epithet: 'Six-Legged Citadel Rams',
    caste: '6. Nether-Behemoths & World-Breakers (Apex Siege-Fauna)',
    description: 'Six-legged, blind juggernauts driven into battle on massive chains, unleashed like living battering rams against planetary citadel walls.',
    combatRole: 'Planetary wall-breaching juggernaut',
    status: 'Fully Detailed in Draft'
  }
];

// 3. ALL 102 NAMED DEMON BLOODLINES & RACES (SEED ARCHIVE TO FLESH OUT!)
export const NAMED_DEMON_BLOODLINES: NamedBloodlineGroup[] = [
  {
    id: 'bloodline-chthonic',
    categoryName: '1. Chthonic Sovereigns & Tartarean Bloodlines',
    subtitle: 'Ancient, primordial entities native to the deepest underworld layers and subterranean pits.',
    bloodlines: [
      { name: 'The Tartarokh', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Kallokhor', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Nadirim', notes: 'Entities born of the absolute planetary nadir', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Erebari', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Vaelzeth', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Chasm-Lords', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Xur’kallath', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Morkhaen', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Pit-Sovereigns', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Brak’Zul', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Deep-Crowned', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Ostragoth', status: 'Seed Name Only (Needs Flesh-Out)' }
    ]
  },
  {
    id: 'bloodline-malefic',
    categoryName: '2. Malefic Sorcerers & Hex-Weavers (Deep Occult / Curse-Craft)',
    subtitle: 'Races governed by blood rituals, binding pacts, forbidden glyphs, and metaphysical curses.',
    bloodlines: [
      { name: 'The Maleficari', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Kharonith', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Zul’Goresh', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Vesperi', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Vorak-El', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Rite-Born', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Hex-Matrons of Kael', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Thal’Morath', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Glyph-Carvers', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Morphiad', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Vael-Khem', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Sanguimor', status: 'Seed Name Only (Needs Flesh-Out)' }
    ]
  },
  {
    id: 'bloodline-chaos-night',
    categoryName: '3. Primordial Chaos & Cosmic Night (Tiamat / Nyx / Void-Born)',
    subtitle: 'Entities born from pre-creation dark waters, eternal eclipses, and unshaped magical chaos.',
    bloodlines: [
      { name: 'Tiamorath', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Nyxarion', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Ysh’Kaldor', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Zaharoth', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Khaotic Brood', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Vex’Amon', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Eclipse-Walkers', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Nocturnim', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Kael-Tiamat', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Void-Suckled', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Ushumgal', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Zul-Mantis', status: 'Seed Name Only (Needs Flesh-Out)' }
    ]
  },
  {
    id: 'bloodline-stygian',
    categoryName: '4. Stygian Necromancers & Soul-Carriers',
    subtitle: 'Races intertwined with death-sorcery, dead gods, soul-currents, and underworld rivers.',
    bloodlines: [
      { name: 'The Acheroni', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Thanatar', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Stygian-Born', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Grave-Oracles', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Phlegethi', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Soul-Siphons', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Karon-hai', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Sepulchral', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Cocytan', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Vessel-Thieves', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Marrow-Weavers', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Lethe-Kin', status: 'Seed Name Only (Needs Flesh-Out)' }
    ]
  },
  {
    id: 'bloodline-muspel',
    categoryName: '5. Muspel-Forged & Chthonic Pyromancers',
    subtitle: 'Supernatural hellfire, ancient ash, and earth-splitting chthonic flame—pure elemental magic.',
    bloodlines: [
      { name: 'The Pyrosthath', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Muspel-Brood', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Kharvoth', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Cinder-Seers', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Surtr-Kin', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Ignorath', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Ash-Monarchs', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Pyrovellian', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Slag-Womb', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Brimstone-Archons', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Valthur', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Zul-Ignis', status: 'Seed Name Only (Needs Flesh-Out)' }
    ]
  },
  {
    id: 'bloodline-bestial',
    categoryName: '6. The Bestial Gods & Monstrous Archetypes',
    subtitle: 'Mythical horrors, chimeric beasts, and ancient predators from forgotten underworld bestiaries.',
    bloodlines: [
      { name: 'The Behemoth-Kin', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Lamashtu', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Vrohkari', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Chimera-Born', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Gorgonith', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Dread-Tusked', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Brakori', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Ophidian', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Hydrakor', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'The Horned-Spawn', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Scyllari', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Nemean-Kin', status: 'Seed Name Only (Needs Flesh-Out)' }
    ]
  },
  {
    id: 'bloodline-independent-30',
    categoryName: '7. Independent & Sovereign Demon Lineages (30 Strains)',
    subtitle: 'Cross-pantheon and abyssal bloodlines cataloged across the Nethermost.',
    bloodlines: [
      { name: 'Azazoth', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Baelkhor', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Charnelith', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Drak’Mor', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Erebos-Kin', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Golgath', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Hel-Vael', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Ishtar-Fiends', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Jorgun', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Kallir', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Lilitan', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Makhari', status: 'Detailed' },
      { name: 'Nekroth', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Ourob', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Paimonith', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Quliphot', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Ravana-Spawn', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Shax’ul', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Typhon-Brood', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Ur-Kael', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Vael-Gorgor', status: 'Detailed' },
      { name: 'Xibalbi', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Yama-Kin', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Zaganor', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Belial-Spur', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Molokh-Born', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Asura-Vex', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Geryon', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Kobalith', status: 'Seed Name Only (Needs Flesh-Out)' },
      { name: 'Nergal-hai', status: 'Seed Name Only (Needs Flesh-Out)' }
    ]
  }
];

// 4. ALL 150 ASTRAL ENTITIES + TIER 5/6 & SOUL 1 TEMPORAL ANOMALIES
export const ASTRAL_TAXONOMY_GROUPS: AstralTaxonomyGroup[] = [
  {
    id: 'astral-tier5-6',
    category: 'Cognition Tier 5 & Tier 6 Baseline Astral Species',
    tier: 'Tier 5 (Electromagnetic/Low-Astral) & Tier 6 (10^9 Gap / True Astral Projection)',
    entities: [
      'Astral Trails', 'Apparitions / Phantoms', 'Eidolons', 'Wraiths',
      'Ghosts', 'Jinns', 'Specters', 'Banshees', 'Poltergeists',
      'Un-Born', 'Nachzehrer', 'Pretas', 'Gulon', 'Soul Fragments', 'Keres'
    ]
  },
  {
    id: 'astral-soul1-temporal',
    category: 'Soul 1 Destruction Fallout: Exotic Temporal Horrors',
    tier: 'Tier 7 Breach Phenomena (Triggered when a linear Soul 1 Nuke detonates)',
    entities: [
      'Temporal Spectres', 'Aeon Wraiths', 'Epoch Ghouls', 'Timeline Apparitions',
      'Chronostalkers', 'Time-Reapers', 'Entropy Stalkers', 'Paradox Hounds',
      'Chronophages', 'Temporal Anomalies', 'Chronoclasts ("Time-Breakers")',
      'Null-Timers', 'Static Shades', 'Interval Drifters'
    ]
  },
  {
    id: 'astral-1-trance',
    category: '1. Trance, Mirror & Manifestation Entities',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Speculum', 'The Phantasmagoria', 'Emanation', 'The Ideoplasm', 'The Apparitor',
      'The Simulacrum', 'The Shade of Endor', 'The Resonator', 'The Visualizer', 'The Automatism'
    ]
  },
  {
    id: 'astral-2-goetic',
    category: '2. Goetic, Grimoire & Pactional Spirits',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Familiar', 'A Familiar Stratagem', 'The Legate', 'The Pact-Keeper', 'The Imp',
      'The Cacodaemon', 'The Agathodaemon', 'The Decan', 'The Consort', 'The Under-Sign'
    ]
  },
  {
    id: 'astral-3-funerary',
    category: '3. Funerary, Graveyard & Chthonic Wraiths',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Chthonic Shade', 'The Charon', 'The Revenant', 'The Corpse-Light', 'The Psychopomp',
      'The Lemure', 'The Larva', 'The Genius Loci', 'The Mourning-Weaver', 'The Osseous Ghost'
    ]
  },
  {
    id: 'astral-4-planetary',
    category: '4. Planetary & Astrological Intelligences',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Olympic Spirit', 'The Intelligence', 'The Solar Daemon', 'The Lunar Genius', 'The Saturnian Warden',
      'The Mercurial Trickster', 'The Martial Wraith', 'The Jovial Lord', 'The Node-Walker', 'The Celestial Scribe'
    ]
  },
  {
    id: 'astral-5-liminal',
    category: '5. Liminal, Threshold & Circle Guards',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Guardian of the Threshold', 'The Warden of the Circle', 'The Janiform Spirit', 'The Key-Bearer', 'The Boundary-Stalker',
      'The Crossroads Shadow', 'The Veil-Tearer', 'The Hinge-Spirit', 'The Intermediary', 'The Sentinel of the North'
    ]
  },
  {
    id: 'astral-6-thoughtforms',
    category: '6. Thoughtforms, Tulpas & Egregores',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Egregore', 'The Tulpa', 'The Homunculus', 'The Obsession-Shade', 'The Phantasm',
      'The Malice-Weaver', 'The Glamour-Spirit', 'The Larval Thought', 'The Memory-Keep', 'The Autonomous Will'
    ]
  },
  {
    id: 'astral-7-parasites',
    category: '7. Parasites, Leeches & Energy Siphons',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Incuba', 'The Aura-Leech', 'The Miasma', 'The Cord-Cutter', 'The Golem-Feeder',
      'The Static-Worm', 'The Shadow-Clinger', 'The Vitality Sponge', 'The Discord Daemon', 'The Twilight Tick'
    ]
  },
  {
    id: 'astral-8-archons',
    category: '8. Archons, Hierarchs & Astral Judges',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Archon', 'The Arbiter', 'The Abyssal Lord', 'The Magistellus', 'The Chancellor of the Veil',
      'The Principal', 'The Inquisitor of Souls', 'The Sovereign of Lead', 'The Hierarchy Guide', 'The Aeon'
    ]
  },
  {
    id: 'astral-9-tricksters',
    category: '9. Tricksters, Vagabonds & Unbound Souls',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Vagabond-SoulFragments', 'The Impostor', 'The Fetch-Light', 'The Stray', 'The Changeling Shade',
      'The Rogue Intelligency', 'The Scavenger Wraith', 'The Banshee-Shade', 'The Mirror-Thief', 'The Nomad-Monk'
    ]
  },
  {
    id: 'astral-10-bestial',
    category: '10. Bestial, Totemic & Animal Spirits',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Wolf-Shade', 'The Serpent Guide', 'The Raven Messenger', 'The Stag Warden', 'The Lion Guardian',
      'The Spider Weaver', 'The Owl Seer', 'The Bear Sentinel', 'The Fox Trickster', 'The Dolphin Whisperer'
    ]
  },
  {
    id: 'astral-11-dream',
    category: '11. Dream, Nightmare & Oneiric Entities',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Dreamweaver', 'The Night Terror', 'The Sleepwalker', 'The Lucid Phantom', 'The Sandman',
      'The Nightmare Steed', 'The Hypnos Shade', 'The Slumbering Eidolon', 'The Dreamcatcher', 'The REM Wraith'
    ]
  },
  {
    id: 'astral-12-mythic',
    category: '12. Mythic, Legendary & Archetypal Forms',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Heroic Shade', 'The Trickster Archetype', 'The Mother Spirit', 'The Wise Old One', 'The Shadow Self',
      'The Eternal Child', 'The Warrior Ghost', 'The Sage Apparition', 'The Monster of Legend', 'The Guardian Beast'
    ]
  },
  {
    id: 'astral-13-elemental',
    category: '13. Elemental Phenomena & Weather Spirits',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Storm Herald', 'The Rainmaker', 'The Thunder Wraith', 'The Frost Phantom', 'The Sunflare',
      'The Mist Walker', 'The Gale Rider', 'The Ember Shade', 'The Dew Spirit', 'The Lightning Dancer'
    ]
  },
  {
    id: 'astral-14-machine',
    category: '14. Machine, Synthetic & Technomantic Entities',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    entities: [
      'The Cogmind', 'The Data Ghost', 'The Circuit Shade', 'The Algorithmic Eidolon', 'The Nanite Swarm',
      'The Digital Phantom', 'The Clockwork Apparition', 'The Signal Wraith', 'The Byte Spirit', 'The Mechanist'
    ]
  },
  {
    id: 'astral-15-alchemical',
    category: '15. Alchemical & Elemental Essences',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    formationVector: 'Hermetic calcination, coagulation, and prima materia distillation trails',
    entities: [
      'The Sylph-Adept', 'The Undine-Maiden', 'The Gnome-Elder', 'The Salamander-Spark', 'The Quintessence',
      'The Calcination Ghost', 'The Coagulator', 'The Volatile Spirit', 'The Fixed Daemon', 'The Prima Materia'
    ]
  },
  // NEW EXPANDED ASTRAL CATEGORIES (16 THROUGH 30 — +150 NEW ASTRAL SPECIES = 329 TOTAL ASTRAL SPECIES)
  {
    id: 'astral-16-acoustic',
    category: '16. Acoustic, Resonance & Barbarous-Frequency Spirits',
    tier: 'Tier 5–6 Vibrational & Telepathic Spectrum (Incomplete Soul)',
    formationVector: 'Coalesced from standing acoustic waves, PGM Barbarous Names, and battlefield death-rattles',
    entities: [
      'The Infrasound Wraith', 'The Barbarous Phoneme', 'The Echo-Parasite', 'The Bell-Shiver', 'The Choir-Phantasm',
      'The Sub-Vocal Leech', 'The Shriek-Lattice', 'The Tinnitus Imp', 'The Resonance Eidolon', 'The Dead-Air Sentinel'
    ]
  },
  {
    id: 'astral-17-framework-drm',
    category: '17. Framework-DRM & Neurological Censor Entities ("Astral Hit-Squads")',
    tier: 'Tier 6 Gatekeeping & Telepathic Enforcement Spectrum (Incomplete Soul)',
    formationVector: 'Bound to gatekept Occult Frameworks; triggered when an unauthorized brain simulates a forbidden probability angle',
    entities: [
      'The Agnosia Hound', 'The Wernicke Leech', 'The Chalk-Blindness Specter', 'The Pneuma-Censor', 'The Syntax-Scrambler',
      'The Gaslight Apparition', 'The Rubric-Eraser', 'The Migraine Warden', 'The Amnesia Mite', 'The Clause-Inquisitor'
    ]
  },
  {
    id: 'astral-18-amr-fermenters',
    category: '18. Noble-House Internal Symbionts & AMR-Fermenters',
    tier: 'Tier 6 Domesticated Mindscape-Tank Ecology (Incomplete Soul)',
    formationVector: 'Cultivated inside Noble Demon Mindscape Tanks to harvest Category 4 negative trails and distill Liquid/Solid/Gas AMRs',
    entities: [
      'The Dread-Distiller', 'The Bile-Fermenter', 'The Bael-Crusher Mite', 'The Phenex-Ember Worm', 'The Grief-Vintner',
      'The Paranoia-Spore', 'The Cortisol-Siphon', 'The Marrow-Curdler', 'The Sorrow-Condenser', 'The Tank-Scrubber'
    ]
  },
  {
    id: 'astral-19-battlefield',
    category: '19. Battlefield Aftermath & Mass-Trauma Egregores',
    tier: 'Tier 6 Collective Trauma Condensation (Incomplete Soul)',
    formationVector: 'Spawned when thousands of Category 4 soldiers run simultaneous lethal fight-or-flight precognitive simulations',
    entities: [
      'The Trench-Miasma', 'The Shellshock Eidolon', 'The No-Man’s-Phantom', 'The Bayonet-Reflex Shade', 'The Mass-Grave Chorus',
      'The Shrapnel-Poltergeist', 'The Mutiny-Whisper', 'The Last-Stand Simulacrum', 'The Scorched-Earth Wraith', 'The Ceasefire Ghost'
    ]
  },
  {
    id: 'astral-20-optical',
    category: '20. Optical, Ray-Traced & Photonic Mirages',
    tier: 'Tier 5–6 EM-Photonic Synchronization (Incomplete Soul)',
    formationVector: 'Condenses in high-refraction zones, eclipses, and peripheral blind spots where mental simulations misread ray-traced light',
    entities: [
      'The Blind-Spot Stalker', 'The Refraction Double', 'The Umbra-Split', 'The Glare-Fiend', 'The Albedo-Wraith',
      'The Prism-Apparition', 'The Afterimage Leech', 'The Penumbra-Weaver', 'The Photon-Starved Shade', 'The Specular Mimic'
    ]
  },
  {
    id: 'astral-21-somatic-ki',
    category: '21. Somatic-Ki Exhaust & Martial Residual Ghosts',
    tier: 'Tier 5 Bio-Electromagnetic Kinetic Imprint (Incomplete Soul)',
    formationVector: 'Left behind when masters of Ara-Ki, Gō-Ki, or Mu-Ki vent superheated pore-steam and perish mid-kata',
    entities: [
      'The Kata-Echo', 'The Steam-Revenant', 'The Kiai-Aftershock', 'The Calcified-Stance Shade', 'The Blood-Mist Eidolon',
      'The Dojo-Guardian', 'The Fist-Memory', 'The Reflex-Automaton', 'The Spine-Shiver Spirit', 'The Mu-Ki Shadow'
    ]
  },
  {
    id: 'astral-22-abyssal-sea',
    category: '22. Deep-Sea, Abyssal & Barometric Pressure Phantoms',
    tier: 'Tier 6 Thalassophobic & Barometric Spectrum (Incomplete Soul)',
    formationVector: 'Generated by drowning panic, nitrogen narcosis, and crushing deep-trench isolation',
    entities: [
      'The Nitrogen-Rapture Ghost', 'The Bathyal Siren', 'The Crush-Depth Wraith', 'The Brine-Lung Specter', 'The Bioluminescent Lure-Shade',
      'The Hull-Creak Poltergeist', 'The Undertow Hand', 'The Hadal Eidolon', 'The Bends-Demon', 'The Shipwreck Egregore'
    ]
  },
  {
    id: 'astral-23-urban-brutalist',
    category: '23. Urban, Architectural & Brutalist Megastructure Spirits',
    tier: 'Tier 5–6 High-Density Civic Psyche Grid (Incomplete Soul)',
    formationVector: 'Formed by millions of Category 4 minds compressed into concrete megacities, subways, and liminal transit corridors',
    entities: [
      'The Brutalist Genius-Loci', 'The Subway-Draft Wraith', 'The High-Rise Vertigo Spirit', 'The Fluorescent-Hum Shade', 'The Concrete-Echo',
      'The Dead-Mall Phantasm', 'The Gridlock Miasma', 'The Stairwell Loop-Ghost', 'The Asbestos-Lurker', 'The Neon-Smog Eidolon'
    ]
  },
  {
    id: 'astral-24-contagion',
    category: '24. Contagion, Hypochondria & Plague-Panic Thoughtforms',
    tier: 'Tier 6 Pathogen-Avoidance Hardware Kickback (Incomplete Soul)',
    formationVector: 'Birthed from evolutionary Disgust overrides, quarantine hysteria, and febrile delirium',
    entities: [
      'The Fever-Hallucination', 'The Quarantine-Shade', 'The Miasma-Doctor', 'The Cough-Echo', 'The Pox-Phantasm',
      'The Delirium-Weaver', 'The Contagion-Hound', 'The Sanatorium Wraith', 'The Cytokine-Specter', 'The Leper-Bell Apparition'
    ]
  },
  {
    id: 'astral-25-bibliophilic',
    category: '25. Forbidden Text, Grimoire-Ink & Bibliophilic Parasites',
    tier: 'Tier 6 Semantic & Linguistic Vibrational Spectrum (Incomplete Soul)',
    formationVector: 'Nests inside lead-cinnabar writs, cursed manuscripts, and obsessive scholarly minds',
    entities: [
      'The Marginalia-Imp', 'The Ink-Drinker', 'The Cipher-Wraith', 'The Dead-Language Whisperer', 'The Scroll-Rot Spirit',
      'The Palimpsest Shade', 'The Footnote-Trap', 'The Bibliovore Eidolon', 'The Forbidden-Syllable', 'The Lexicon-Golem'
    ]
  },
  {
    id: 'astral-26-social-gps',
    category: '26. Narcissistic, Vanity & Social-Hierarchy Phantoms',
    tier: 'Tier 5–6 Evolutionary Social-GPS Kickback (Incomplete Soul)',
    formationVector: 'Spawned from tribal banishment terror, Shame, Envy, Moral Outrage, and status-panic simulations',
    entities: [
      'The Exile-Dread', 'The Mirror-Envy', 'The Crown-Illusion', 'The Scandal-Poltergeist', 'The Impostor-Syndrome Shade',
      'The Gossip-Swarm', 'The Pedestal-Idol', 'The Shame-Cringe Wraith', 'The Sycophant-Echo', 'The Guillotine-Specter'
    ]
  },
  {
    id: 'astral-27-cryo-famine',
    category: '27. Sub-Zero, Cryo-Stasis & Starvation Spirits',
    tier: 'Tier 6 Metabolic-Collapse & Hypothermic Spectrum (Incomplete Soul)',
    formationVector: 'Coalesces in blizzards, siege famines, and extreme metabolic conservation states',
    entities: [
      'The Paradoxical-Undressing Shade', 'The Frostbite-Whisper', 'The Wendigo-Trail', 'The Whiteout-Mirage', 'The Glacier-Groan Spirit',
      'The Hunger-Gnaw Preta', 'The Permafrost-Memory', 'The Icicle-Poltergeist', 'The Hypothermic-Lullaby', 'The Winter-Famine Egregore'
    ]
  },
  {
    id: 'astral-28-kill-effect-relics',
    category: '28. Relic-Bound, Weapon-Kill-Effect & Murder-Implement Ghosts',
    tier: 'Tier 6 En-Grafted Trauma & Supernatural Kill-Effect Residue (Incomplete Soul)',
    formationVector: 'Welded to blades, firearms, and execution tools; triggers psychological and sensory Supernatural Kill Effects on impact',
    entities: [
      'The Executioner’s Notch', 'The Guillotine-Drop Echo', 'The Bullet-Trajectory Ghost', 'The Rust-Thirst Spirit', 'The Scabbard-Whine',
      'The Trench-Club Wraith', 'The Gallows-Rope Twitch', 'The Blood-Groove Eidolon', 'The Trigger-Itch Imp', 'The Kill-Cam Phantom'
    ]
  },
  {
    id: 'astral-29-extinct-epochs',
    category: '29. Extinct-Epoch ("Chapters of the Past") Fossil Astral Echoes',
    tier: 'Tier 6 Deep-Time Paleontological Astral Stratum (Incomplete Soul)',
    formationVector: 'Ancient Astral Trails shed by vanished pre-human or alien star-empires millions of years ago, trapped in planetary magnetospheres',
    entities: [
      'The Xeno-Ghost', 'The Dead-Empire Broadcast', 'The Fossil-Eidolon', 'The Star-Wreck Apparition', 'The Post-Human Lament',
      'The Extinction-Flash Shade', 'The Megalith-Hinge Spirit', 'The Pre-Solar Wraith', 'The Forgotten-Tongue Echo', 'The Epoch-Dust Poltergeist'
    ]
  },
  {
    id: 'astral-30-psychic-internet',
    category: '30. Astral Threshold Infrastructure & "Psychic Internet" Routing Daemons',
    tier: 'Tier 6 Telepathic Network & Mirror-Route Infrastructure (Incomplete Soul)',
    formationVector: 'Autonomous network spirits maintaining the Bridges, Mirror Dimensions, and Transversal Routes of the Astral "Psychic Internet"',
    entities: [
      'The Packet-Ferryman', 'The Bridge-Weaver', 'The Frequency-Toll Warden', 'The Mirror-Router', 'The Latency-Leech',
      'The Astral-Firewall Sentinel', 'The Dead-Link Scavenger', 'The Telepathic-Switchboard', 'The Wavelength-Hound', 'The Server-Vault Shade'
    ]
  }
];

// 4B. HOW RACES ARE MADE VS. HOW ASTRAL ENTITIES ARE DISTINCTIVELY MADE (ARCHITECTURAL DOCTRINE)
export const ASTRAL_CONSTRUCTION_DOCTRINE: AstralConstructionRule[] = [
  {
    id: 'ac-rule-1',
    ruleNumber: 1,
    title: 'The "Incomplete Soul" Boundary (Soul < 1 vs. Complete Soul 1 + Soul 2)',
    standardRaceMechanism: 'Bio-Manifold and Netherbound Category 3–5 races possess a complete Soul 1 (linear temporal anchor made of quantum/information particles & time crystals) and Soul 2 (non-Euclidean MWI possibility matrix).',
    astralEntityMechanism: 'An Astral Entity is NEVER a complete soul. It is a sub-soul fractional condensation. By strict canonical law, if an Astral Entity ever achieves soul completeness, it ceases to be an Astral Entity and automatically graduates into a Tier 7 Semi-Spiritual (Soul 1) being.',
    canonicalImplication: 'Destroying an Astral Entity does NOT trigger a Soul 1 Supernatural Nuke, because it lacks a linear temporal crystal core.'
  },
  {
    id: 'ac-rule-2',
    ruleNumber: 2,
    title: 'Genesis: Evolutionary Bottlenecks vs. Unintended Precognitive Kickback ("Astral Trails")',
    standardRaceMechanism: 'Constructed through biological/thermodynamic evolution across the Bio-Manifold or All Tomorrows-scale deep-time Nether-bottlenecks, governed by DNA, chitin, Nether-flesh, and internal Mindscape Tanks.',
    astralEntityMechanism: 'Zero biological reproduction. Whenever Category 4 (or other precognitive) brains run mental simulations weighted by survival emotions (fear, rage, disgust, shame), that simulation causes unintended micro-reality warping—shedding "Astral Trails" every microsecond that cluster and ferment into Astral Entities.',
    canonicalImplication: 'Every human city, battlefield, or storm continuously manufactures billions of new Astral Trails as a byproduct of conscious thought.'
  },
  {
    id: 'ac-rule-3',
    ruleNumber: 3,
    title: 'Substrate: Matter/Nether-Flesh vs. Vibrational Spectrum + Telepathy ("The Psychic Internet")',
    standardRaceMechanism: 'Anchored in physical matter states (carbon biology, silicon-iron calcified bone) or high-density Category 5 Nether-flesh with Somatic Ki channels.',
    astralEntityMechanism: 'Exists purely on the Astral Spectrum—defined canonically as the intersection of the Vibrational Spectrum + Telepathy. They inhabit the "Psychic Internet" (Mirror Dimensions, Voids, Bridges, Transversal Routes, and vibrational frequencies of terrestrial locations).',
    canonicalImplication: 'Astral Entities bypass purely Newtonian barriers unless those barriers are grounded in EM/vibrational dampeners, Suffumigative smoke mediums, or Somatic Ki pressure.'
  },
  {
    id: 'ac-rule-4',
    ruleNumber: 4,
    title: 'The 10⁹ (One Billion×) Magnitude Gap: Tier 5 Low-Astral vs. Tier 6 True Astral',
    standardRaceMechanism: 'Scales across Category 1–7 ontological authority and the 7 Grades of MWI Ammo Types (10⁴ = 10,000× complexity jump per AMR grade).',
    astralEntityMechanism: 'Divided across Cognition Tier 5 (Micro-Telekinesis & Low-End Astral synchronized with biological electromagnetic fields: Astral Trails, Apparitions, Eidolons, Wraiths) and Cognition Tier 6 (True Astral & Telekinesis: Ghosts, Jinns, Specters, Banshees, Poltergeists, Pretas, Egregores)—separated by a massive 10⁹ (1,000,000,000×) magnitude gap!',
    canonicalImplication: 'A Tier 5 Eidolon is barely an electromagnetic static shadow, whereas a Tier 6 Jinn, Preta, or Archon operates a billion times deeper in telekinetic and telepathic complexity.'
  },
  {
    id: 'ac-rule-5',
    ruleNumber: 5,
    title: 'Morphology: Biomechanical Proportions vs. "The Illusion of Myths" Emotional Exaggeration',
    standardRaceMechanism: 'Governed by functional evolutionary anatomy: head-height ratios (e.g., 6.8 heads for brutes, 7.8 for martial ascetics), vascular hydraulics, or Anglerfish/Orchid Mantis convergent mimicry.',
    astralEntityMechanism: 'Because Astral Entities condense out of emotional kickback and collective folklore ("The Illusion of Myths"), their visuals are NOT bound by skeletal gravity—they are emotionally exaggerated: hyper-epic, terrifying, horrific, gross, or geometrically abstract.',
    canonicalImplication: 'An Astral Entity’s silhouette is a direct visual readout of the psychological trauma, cultural myth, or technological anxiety that spawned it.'
  },
  {
    id: 'ac-rule-6',
    ruleNumber: 6,
    title: 'Ecological Function: 50! Population Bedrock, AMR Fermentation & Framework DRM',
    standardRaceMechanism: 'Compete for territorial sovereignty, soul-currency, and extinct-era AMR reserves across the 29 Underworld Sectors and Bio-Manifold.',
    astralEntityMechanism: 'Outnumber all biological life on Earth by over 50! (50 factorial). They serve as the political and metabolic bedrock of the supernatural world: (1) fermenting shed human dread into Liquid/Solid/Gas AMRs inside Noble Demon tanks, and (2) acting as autonomous DRM hit-squads (Agnosia Hounds) protecting gatekept Occult Frameworks.',
    canonicalImplication: 'Without the 50! Astral Ecology, Category 5 Noble Demons could not passively farm negative loops and gatekept Frameworks could not self-censor mortal minds.'
  }
];

// 4C. 11 NEW EXPANDED RACE CATEGORIES ACROSS THE COSMOLOGY (+145 NEW RACES -> 670 TOTAL RACES & ASTRAL SPECIES)
export const EXPANDED_RACE_CATEGORIES: ExpandedRaceCategory[] = [
  {
    id: 'exp-cat1-macro-biomass',
    categoryName: '1. Category 1 Macro-Biomass & Newtonian Apex Fauna (12 Races)',
    ontologicalTier: 'Category 1 (Purely Physical & Newtonian)',
    cognitionTier: 'Tier 1 (Zero Mental or Precognitive Simulation)',
    constructionMechanism: 'Pure Darwinian & extremophile physical evolution without a single neuron of precognitive simulation. Because they never simulate the future, they shed zero Astral Trails and are completely invisible to telepathic or emotional detection.',
    associatedFuelOrKi: 'Version 0 Gen-Ki (Pure Thermodynamic & Mechanical Mass)',
    restrictorPlate: 'Zero magic capability; bound strictly by classical physics and material tensile strength.',
    races: [
      { name: 'Litho-Vore Leviathans', epithet: 'Continental Mantle Grazers', morphologyAndTrait: '12-kilometer silicate-shelled worms that digest tectonic fault tension without nervous systems.' },
      { name: 'The Ferro-Mycelial Continents', epithet: 'Iron-Root Fungal Mats', morphologyAndTrait: 'Planetary-scale metallic fungal networks that conduct lightning purely via passive ohmic resistance.' },
      { name: 'Gravity-Crushed Baro-Whales', epithet: 'Super-Earth Atmospheric Floaters', morphologyAndTrait: 'Hexapodal gas-blimp organisms thriving in 40G high-pressure atmospheres.' },
      { name: 'Silicon-Glass Reef Walkers', epithet: 'Photonic Coral Striders', morphologyAndTrait: 'Brain-less ambulatory reefs that focus solar beams through crystalline carapaces to vaporize predators.' },
      { name: 'Thermal-Vent Titan-Worms', epithet: 'Magma-Tube Filterers', morphologyAndTrait: 'Segmented basalt-plated tubes anchored around abyssal volcanic rifts.' },
      { name: 'Vacuum-Spore Drifters', epithet: 'Interplanetary Exoskeleton Seeds', morphologyAndTrait: 'Lead-hulled dormant macro-spores that ride solar radiation pressure across star systems.' },
      { name: 'Diamond-Carapace Grazers', epithet: 'Carbon-Cruncher Herd-Beasts', morphologyAndTrait: 'Low-slung quadrupeds whose digestive tracts compress coal seams into industrial diamond armor.' },
      { name: 'Acid-Sea Planktonic Mats', epithet: 'Sulfuric Super-Colonies', morphologyAndTrait: 'Floating corrosive super-organisms spanning thousands of square miles on caustic worlds.' },
      { name: 'Magneto-Flora Groves', epithet: 'Lorentz-Force Trees', morphologyAndTrait: 'Metallic forests that whip branches at supersonic speeds whenever planetary magnetic poles fluctuate.' },
      { name: 'Tectonic-Plate Barnacles', epithet: 'Subduction-Zone Anchors', morphologyAndTrait: 'Mountain-sized calcified filter-feeders harvesting mineral upwellings along crust fractures.' },
      { name: 'Sub-Mantle Magma Corals', epithet: 'Pyroclastic Reef Builders', morphologyAndTrait: 'Crystalline lattice organisms growing inside liquid nickel-iron planetary cores.' },
      { name: 'Atmospheric Gas-Blimp Jellyfish', epithet: 'Hydrogen-Sac Sky Drifters', morphologyAndTrait: 'Mile-wide translucent cnidarians trailing electrostatic tentacles through storm clouds.' }
    ]
  },
  {
    id: 'exp-cat2-thinking-nodes',
    categoryName: '2. Category 2 Formless Thinking Nodes & Mathematical Phenomena (12 Races)',
    ontologicalTier: 'Category 2 (Category X — Non-Sentient Thinking Nodes)',
    cognitionTier: 'Tier 2–3 Formless Conceptual Computation',
    constructionMechanism: 'Zero physical body, zero ego, zero emotions, and zero self-awareness—yet capable of pure conceptual thought and Netherarchesial reality warping. They exist as self-executing geometric proofs or standing mathematical equations drifting through realms.',
    associatedFuelOrKi: 'Raw Mathematical Continuity & Ambient MWI Probability Alignment',
    restrictorPlate: 'Lacks ego or survival instinct; can be trapped or neutralized by feeding it an unsolvable recursive geometric paradox.',
    races: [
      { name: 'The Noetic Mycelia', epithet: 'Sub-Quantum Proof Networks', morphologyAndTrait: 'Formless filaments of pure logic that reorganize crystal lattices into computer memory.' },
      { name: 'The Magnetosphere Proofs', epithet: 'Auroral Calculation Belts', morphologyAndTrait: 'Self-solving differential equations orbiting gas giants that warp gravity when ships cross their vectors.' },
      { name: 'The Cauchy-Horizon Thinkers', epithet: 'Boundary-Condition Nodes', morphologyAndTrait: 'Non-sentient thought-loops localized around high-gravity event horizons.' },
      { name: 'The Recursive-Axiom Clouds', epithet: 'Self-Referential Fog', morphologyAndTrait: 'Invisible probability zones that force all matter entering them into bilateral fractal symmetry.' },
      { name: 'The Topology-Weavers', epithet: 'Manifold-Folding Processes', morphologyAndTrait: 'Formless geometric nodes that continuously invert interior and exterior angles of abandoned ruins.' },
      { name: 'The Prime-Interval Lattices', epithet: 'Harmonic Number Fields', morphologyAndTrait: 'Rhythmic temporal nodes that only allow chemical reactions to occur on prime-numbered millisecond intervals.' },
      { name: 'The Zero-Mass Syllogisms', epithet: 'Pure Deductive Currents', morphologyAndTrait: 'Conceptual currents that delete physical effects if their local cause contains a logical contradiction.' },
      { name: 'The Ionospheric Theorems', epithet: 'Upper-Atmosphere Logic Storms', morphologyAndTrait: 'Lightning-fast non-sentient calculations that rewrite weather patterns into geometric grids.' },
      { name: 'The Quantum-Foam Automaton-Equations', epithet: 'Planck-Scale Cellular Automata', morphologyAndTrait: 'Microscopic thinking rules that propagate through vacuum energy like Conway’s Game of Life.' },
      { name: 'The Non-Sentient Geodesics', epithet: 'Trajectory-Optimization Lines', morphologyAndTrait: 'Invisible spatial rails that hijack projectiles and bend them along minimum-energy curves.' },
      { name: 'The Entropy-Minimizer Fields', epithet: 'Spontaneous-Sorting Zones', morphologyAndTrait: 'Formless thinking zones that un-mix gases and sort rubble by atomic weight.' },
      { name: 'The Eigenstate-Solvers', epithet: 'Wave-Collapse Nodes', morphologyAndTrait: 'Pure observational processes that lock surrounding quantum superpositions into rigid crystal stasis.' }
    ]
  },
  {
    id: 'exp-cat3-memoryless-calculators',
    categoryName: '3. Category 3 Emotionless Memoryless Precognitive Calculators (15 Races)',
    ontologicalTier: 'Category 3 (Category X — Emotionless Precognitive Calculators)',
    cognitionTier: 'Tier 3–5 (Sentient & Precognitive, Zero Emotions, Zero Long-Term Mistake Memory)',
    constructionMechanism: 'The minimum threshold required to utilize MAGIC steadily. They possess intellect and precognitive simulation, but completely lack evolutionary emotional overrides and lack permanent pattern recognition ("they learn by the way, predict by the way"). Because they carry zero past trauma or nostalgia, their MWI simulations have zero emotional drag.',
    associatedFuelOrKi: 'Steady Grade 1–2 Non-Specific & Very Specific MWI AMRs',
    restrictorPlate: 'Zero long-term memory of past mistakes: if an enemy breaks their short-term calculation window, they must re-derive the opponent’s combat style from scratch.',
    races: [
      { name: 'The Markovian Lattice (Ephemerids)', epithet: 'Twelve-Second Slate-Wipers', morphologyAndTrait: 'Translucent radial-symmetrical arthropods whose synaptic slates wipe every 12 seconds for zero-bias MWI casting.' },
      { name: 'The Twelve-Second Savants', epithet: 'Instantaneous Ballistic Oracles', morphologyAndTrait: 'Tall, faceless bipeds with 360-degree compound ocular rings that calculate 10,000 future trajectories per second.' },
      { name: 'The Tabula-Rasa Cephalopods', epithet: 'Zero-Nostalgia Deep Navigators', morphologyAndTrait: 'Floating pelagic calculators that rewrite their own neural pathways after every spell discharge.' },
      { name: 'The Tachyon-Arithmeticians', epithet: 'Pure-Vector Geometrists', morphologyAndTrait: 'Six-limbed silicate scholars who communicate exclusively in live probability percentages.' },
      { name: 'The Glass-Craniate Mantids', epithet: 'Exposed-Optic Precogs', morphologyAndTrait: 'Predatory calculators whose transparent skulls glow with real-time quantum gap diagrams.' },
      { name: 'The Zero-Bias Geometry Clans', epithet: 'Un-Mourning Architects', morphologyAndTrait: 'Builders of non-Euclidean cities who abandon entire metropolises the instant a calculation shifts.' },
      { name: 'The Stochastic Swarms of Vael', epithet: 'Distributed Probability Locusts', morphologyAndTrait: 'Swarming nodes where each insect calculates a single MWI branch before expiring.' },
      { name: 'The Amnesiac Navigators', epithet: 'Void-Route Pilots', morphologyAndTrait: 'Elongated navigators immune to Astral gaslighting because they cannot retain false memories.' },
      { name: 'The Cold-Probability Arachnids', epithet: 'Causal-Web Spinners', morphologyAndTrait: 'Eight-legged weavers whose physical silk threads represent calculated future timelines.' },
      { name: 'The Delta-State Amphibians', epithet: 'Still-Pulse Precognitives', morphologyAndTrait: 'Lethargic, cold-blooded casters whose brains operate at zero emotional arousal while bending local physics.' },
      { name: 'The Un-Traumatized Synod', epithet: 'Pain-Blind Tacticians', morphologyAndTrait: 'Caste of pale humanoid calculators lacking pain-memory receptors; impossible to intimidate or demoralize.' },
      { name: 'The Instant-Derivation Hive', epithet: 'On-The-Fly Counter-Casters', morphologyAndTrait: 'Colonial organisms that invent counter-spells in real time and forget them 30 seconds later.' },
      { name: 'The Blank-Slate Cetaceans', epithet: 'Sonar-Simulation Leviathans', morphologyAndTrait: 'Sub-surface giants that map future topography via high-frequency acoustic precognition.' },
      { name: 'The Pure-Vector Avians', epithet: 'Thermals-Of-Tomorrow Gliders', morphologyAndTrait: 'Eyeless raptors that fly by riding wind currents simulated 8 seconds in the future.' },
      { name: 'The Memoryless Chronometers', epithet: 'Tick-By-Tick Reality Aligners', morphologyAndTrait: 'Metronomic organisms whose heartbeats lock local Possibility Resistance to a steady flatline.' }
    ]
  },
  {
    id: 'exp-cat4-biomanifold-civilizations',
    categoryName: '4. Category 4 Non-Human Emotional Civilizations of the Bio-Manifold (15 Races)',
    ontologicalTier: 'Category 4 (Emotional Evolutionary Civilizations)',
    cognitionTier: 'Tier 2–6 (Full Sentience, Long-Term Pattern Recognition & Evolutionary Emotions)',
    constructionMechanism: 'Like Humans, these Bio-Manifold species evolved precompiled hardware/software emotions that weight their precognitive simulations—unconsciously warping reality and spawning massive "Illusion of Myths" pantheons. However, because their evolutionary biology is non-primate, their core emotions and Astral Trails are radically alien.',
    associatedFuelOrKi: 'Emotionally Weighted MWI Simulations & Somatic Ki (Ichirei Shikon)',
    restrictorPlate: 'Evolutionarily blind to their own MWI reality-warping capability; vulnerable to Category 5 predation on their species-specific emotional triggers.',
    races: [
      { name: 'The Molt-Shame Chitinoids of Kael-Vor', epithet: 'Exoskeleton-Vulnerability Civilization', morphologyAndTrait: 'Armored bipeds whose strongest evolutionary emotion is "Molt-Dread" (the vulnerable 48 hours after shedding armor), spawning shell-god myths.' },
      { name: 'The Symbiont-Grief Coral-Minds', epithet: 'Paired-Organism Societies', morphologyAndTrait: 'Dual-species symbiotes whose severing triggers catastrophic metabolic grief-waves that warp local ocean gravity.' },
      { name: 'The Pheromone-Wrath Eusocial Castes', epithet: 'Chemical-Outrage Empires', morphologyAndTrait: 'Hive-cities where Moral Outrage is transmitted via airborne esters, igniting synchronized city-wide Turn Fields.' },
      { name: 'The Bioluminescent-Awe Deep-Dwellers', epithet: 'Abyssal Light-Worshippers', morphologyAndTrait: 'Sub-oceanic humanoids whose skin flashes complex syntactic light patterns when experiencing religious awe.' },
      { name: 'The Echo-Attachment Chiropterans', epithet: 'Acoustic-Bonding Clans', morphologyAndTrait: 'Winged nocturnal civilizations whose love/attachment hardware requires continuous harmonic echolocation with their mate.' },
      { name: 'The Spore-Gratitude Myconids', epithet: 'Reciprocal-Nutrient Networks', morphologyAndTrait: 'Fungal-vascular humanoids whose evolutionary Gratitude algorithm physically grafts generous allies into their regeneration network.' },
      { name: 'The Thermal-Jealousy Saurians', epithet: 'Basking-Territory Dynasties', morphologyAndTrait: 'Endothermic-ectothermic reptiles whose territorial jealousy spikes body heat past 140°F, fueling natural Ara-Ki.' },
      { name: 'The Magnetic-Guilt Migrators', epithet: 'Pole-Aligned Nomads', morphologyAndTrait: 'Horned nomads with cranial magnetite whose internal social-GPS Guilt literally pulls them off-balance if they betray the herd.' },
      { name: 'The Binary-Heart Bonded Avians', epithet: 'Dual-Pulse Sky Kingdoms', morphologyAndTrait: 'High-altitude avians whose twin hearts synchronize across miles; bereavement triggers localized atmospheric vacuum collapses.' },
      { name: 'The Hibernation-Dread Ursines', epithet: 'Long-Winter Prophets', morphologyAndTrait: 'Massive furred scholars whose multi-month winter torpor generates continent-spanning oneiric Astral realms.' },
      { name: 'The Chromatophore-Outrage Cephalopods', epithet: 'Living-Tapestry Judges', morphologyAndTrait: 'Amphibious sophonts incapable of lying because their skin automatically displays their subconscious threat simulations.' },
      { name: 'The Infrasonic-Mourning Titan-Herds', epithet: 'Graveyard-Memory Giants', morphologyAndTrait: 'Four-tusked pachyderm sophonts with 500-year memories whose ancestral mourning rituals crystallize local bedrock.' },
      { name: 'The Brood-Sacrifice Arachno-Sapiens', epithet: 'Matriarchal Silk-Empires', morphologyAndTrait: 'Architects whose maternal attachment hardware overrides self-preservation, generating impenetrable Nigi-Ki silk fortresses.' },
      { name: 'The Silica-Nostalgia Crystalline Clans', epithet: 'Piezoelectric Memory Keepers', morphologyAndTrait: 'Long-lived mineral-organic hybrids whose nostalgia resonates through quartz veins as physical lightning.' },
      { name: 'The Tidal-Panic Amphibians', epithet: 'Lunar-Cycle Civilizations', morphologyAndTrait: 'Coastal empires whose collective endocrine systems surge in lockstep with orbital tidal forces.' }
    ]
  },
  {
    id: 'exp-cat5-benevolent-symbiotes',
    categoryName: '5. Category 5 Non-Malevolent / Symbiotic Ontological Manipulators (12 Races)',
    ontologicalTier: 'Category 5 (Category X — Non-Malevolent Spectrum)',
    cognitionTier: 'Tier 7–9 (Complete Soul 1 + Soul 2 & Symbiotic MWI Alignment)',
    constructionMechanism: 'Canon explicitly states that Category 5 manipulation "doesn’t always mean malicious—other entities that aren’t malevolent exist on the other end of the spectrum." Instead of farming fear/dread like Netherbounders, these Category 5 races cultivate Category 4 Gratitude, Reciprocal Altruism, Awe, and Cohesive Trust Lattices to refine high-grade AMRs.',
    associatedFuelOrKi: 'Symbiotic Trust-Lattice AMRs & Radiant/Cohesive Reserves',
    restrictorPlate: 'Because "Bad is Stronger than Good" in raw individual urgency, they require synchronized multi-person oaths or Trust Lattices; a single act of betrayal or game-theory defection inside their host group snaps their ontological boundary.',
    races: [
      { name: 'The Eunoia-Weavers', epithet: 'Architects of Reciprocal Altruism', morphologyAndTrait: 'Luminous multi-winged geometric sovereigns who link mortal communities into shared precognitive shields.' },
      { name: 'The Covenant Seraphim', epithet: 'Oath-Thermodynamic Engines', morphologyAndTrait: 'Six-armed brass-and-alabaster entities whose internal AMR tanks fill only when mortals keep costly promises under duress.' },
      { name: 'The Axiomatic Symbiotes', epithet: 'Co-Evolutionary Soul Partners', morphologyAndTrait: 'Non-parasitic Category 5 beings that graft onto consenting Category 4 hosts, trading Grade 3 AMRs for shared sensory awe.' },
      { name: 'The Trust-Lattice Architects', epithet: 'Game-Theory Harmonists', morphologyAndTrait: 'Tall, porcelain-masked arbiters who turn marketplace fairness and civic cooperation into city-wide Possibility Resistance barriers.' },
      { name: 'The Martyr-Resonators', epithet: 'Self-Sacrifice Amplifiers', morphologyAndTrait: 'Solemn, bell-chested entities that convert a single mortal’s willing self-sacrifice into a Grade 4 protective miracle.' },
      { name: 'The Reciprocal-Oath Wardens', epithet: 'Hospitality Law-Keepers', morphologyAndTrait: 'Hearth-crowned giants bound to ancient laws of guest-right; unbeatable inside a home where bread and salt were honestly shared.' },
      { name: 'The Agape-Conduits', epithet: 'Parental-Aegis Sovereigns', morphologyAndTrait: 'Fierce, lion-headed guardians fueled by the evolutionary attachment hardware of parents defending offspring.' },
      { name: 'The Sanctuary-Geometers', epithet: 'Asylum-Boundary Carvers', morphologyAndTrait: 'Monastic entities whose footsteps lay down non-violent Turn Fields where weapons suffer 10,000× Possibility Resistance.' },
      { name: 'The Mercy-Binders', epithet: 'Spared-Blade Collectors', morphologyAndTrait: 'Silver-armored judges who harvest the exact quantum potential released when a victor chooses to spare a defeated enemy.' },
      { name: 'The Choral-Harmonists', epithet: 'Polyphonic Mindscape Weavers', morphologyAndTrait: 'Entities that synchronize thousands of mortal voices into a single harmonic precognitive simulation.' },
      { name: 'The Golden-Rule Arbiters', epithet: 'Mirror-Consequence Sovereigns', morphologyAndTrait: 'Symmetric twin-bodied beings whose field forces every combatant to experience the exact physical damage they inflict.' },
      { name: 'The Catharsis-Harvesters', epithet: 'Grief-To-Clarity Alchemists', morphologyAndTrait: 'Gentle, lantern-bearing psychopomps who consume toxic trauma-trails and exhale calm, liquid-feel restorative AMRs.' }
    ]
  },
  {
    id: 'exp-cat5-netherbounder-postspecies',
    categoryName: '6. Category 5 Deep-Time "Netherbounder" Post-Species (All Tomorrows Scale — 20 Races)',
    ontologicalTier: 'Category 5 (Nether-Bounded Deep-Time Divergent Lineages)',
    cognitionTier: 'Tier 6–9 (Post-Sentient Specialized Castes to Proto-Noble Survivors)',
    constructionMechanism: 'Inspired by All Tomorrows and Star Wars "Chapters of the Past." These were once proud alien star-empires, dimensional civilizations, and mortal species dragged across the Nether-boundary millions of years ago. Stripped of their suns and crushed through abyssal evolutionary bottlenecks, they mutated into hyper-specialized survival forms run on the 4-Stage Negative Loop.',
    associatedFuelOrKi: 'Fermented Negative-Loop AMRs (Liquid, Solid & Gas Depletion States)',
    restrictorPlate: 'Carry permanent anatomical and psychological "Chapters of the Past" evolutionary scars; starve if cut off from Category 4 negative Astral Trail fermentation.',
    races: [
      { name: 'The Qu-Broken Trench-Striders', epithet: 'Stilt-Limbed Abyssal Survivors', morphologyAndTrait: 'Once a starfaring bipedal empire, now 40-foot stilt-legged artillery spotters wading through boiling slag seas.' },
      { name: 'The Colonial-Flesh Filters of Dis', epithet: 'Living Tapestry Scavengers', morphologyAndTrait: 'Sentient carpets of fused dermal tissue lining citadel walls, filtering toxic Nether-miasma into pure liquid AMR.' },
      { name: 'The Bone-Spire Acoustic Singers', epithet: 'Hollow-Rib Wind Organs', morphologyAndTrait: 'Sedentary spire-shaped post-sophonts whose wind-carved ribcages howl continuous dread-spores across 50 miles.' },
      { name: 'The Gravity-Flattened Slab-Folk', epithet: 'High-G Basalt Crawlers', morphologyAndTrait: 'Crushed by 100G Nether-wells into wide, centipede-ribbed shields used as living pavement by Goetic legions.' },
      { name: 'The Blind-Savant Calcifiers', epithet: 'Fossil-Tank Mathematicians', morphologyAndTrait: 'Eyeless, coral-crusted descendants of an ancient scholar race, bred to calculate Pactional Jurisprudence clauses.' },
      { name: 'The Symbiotic Armor-Hosts', epithet: 'Living Carapace Wearers', morphologyAndTrait: 'Two distinct extinct species fused into one: an intelligent parasitic spine steering a headless, iron-boned juggernaut.' },
      { name: 'The Tether-Lung Atmospheric Processors', epithet: 'Floating Gas-Bag Dredgers', morphologyAndTrait: 'Bloated, balloon-chested beings tethered to iron chains that inhale sulfur and exhale suffumigation smoke.' },
      { name: 'The Multi-Heart Blood-Refiners', epithet: 'Seven-Ventricle Alchemists', morphologyAndTrait: 'Gaunt, translucent-skinned aristocrats whose seven hearts distill raw mortal terror into solid-feel ruby AMR pellets.' },
      { name: 'The Hollow-Cranial Amplifier Castes', epithet: 'Resonance-Dome Telepaths', morphologyAndTrait: 'Possess elongated, cathedral-like hollow skulls that broadcast Stage-1 vibrational spores into mortal cities.' },
      { name: 'The Chitin-Plow Siege-Draggers', epithet: 'Keel-Chested Earthmovers', morphologyAndTrait: 'Descendants of an avian species whose breastbones hypertrophied into massive obsidian trench-plows.' },
      { name: 'The Living-Vault Organ-Carriers', epithet: 'Dynastic AMR Mules', morphologyAndTrait: 'Engineered by Noble Houses with cavernous rib-tanks to store unstable Grade 3 extinct-era AMRs without rupturing.' },
      { name: 'The Nerve-Stapled Trajectory Calculators', epithet: 'Living Ballistic Computers', morphologyAndTrait: 'Surgically modified Netherbounders wired into citadel walls to run continuous precognitive artillery simulations.' },
      { name: 'The Slag-Gilled Dredgers', epithet: 'Molten-Metal Divers', morphologyAndTrait: 'Asbestos-scaled amphibians that dive into Phlegethon magma rivers to retrieve sunken Soul 1 crystals.' },
      { name: 'The Star-Fossil Navigators', epithet: 'Extinct-Constellation Seers', morphologyAndTrait: 'Ancient beings whose eyes still reflect stars that died three billion years ago, granting them unique cold-light AMRs.' },
      { name: 'The Inverted-Pelvis Chasm-Leapers', epithet: 'Reverse-Jointed Ambushers', morphologyAndTrait: 'Locust-thighed predators capable of silent 300-meter vertical leaps up subterranean cliff faces.' },
      { name: 'The Dermal-Mirror Light-Trappers', epithet: 'Chrome-Skinned Refractors', morphologyAndTrait: 'Evolved mercury-smooth skin to survive ray-traced photonic storms in the Glass Wastes of Paimon.' },
      { name: 'The Pharyngeal-Furnace Smelters', epithet: 'Throat-Kiln Smiths', morphologyAndTrait: 'Swallow raw iron ore and vitriol, regurgitating pre-etched Decanic Alloy Antennas.' },
      { name: 'The Tendon-Loom Bridges', epithet: 'Living Chasm Span-Weavers', morphologyAndTrait: 'Unspool miles of calcified sinew from their wrists to weave suspension bridges across the Barathron.' },
      { name: 'The Fossil-AMR Miners', epithet: 'Deep-Stratum Core Drillers', morphologyAndTrait: 'Spiral-horned burrowers that extract petrified AMR deposits from dead epochs.' },
      { name: 'The Proto-Noble Mimic-Lords', epithet: 'First-Generation Angler-Aristocrats', morphologyAndTrait: 'The transitional evolutionary link showing how chitinous Netherbounders first evolved humanoid courtly masks.' }
    ]
  },
  {
    id: 'exp-inverted-manifold-castes',
    categoryName: '7. The Inverted Beast Manifold Ruling Castes & Mirror-Fauna (15 Races)',
    ontologicalTier: 'Category 5 (Void-Tree Outer Bough Mirror Biospheres)',
    cognitionTier: 'Tier 6–8 Predatory Mirror-Simulation',
    constructionMechanism: 'Native to the 6 Inverted Beast Manifolds tethered to the outer boughs of the Void-Tree (Bast-Irkalla, Mal-Caballus, Canis-Hades, Ophi-Nadir, Vespa-Tartaros, Corvus-Gallow), where mortal animal biology is inverted into non-Euclidean demonic apex castes.',
    associatedFuelOrKi: 'Yō-Ki (Inverted Bestial Warp) & Manifold-Specific Predatory AMRs',
    restrictorPlate: 'Tied to the predatory laws of their mirror animal; bound by acoustic, spatial, or sensory inversions.',
    races: [
      { name: 'The Shadow-Severing Felines of Vepar', epithet: 'Bast-Irkalla Silent Stalkers', morphologyAndTrait: '9.5-head-long void panthers that sever a victim’s shadow to disconnect their motor nerves.' },
      { name: 'The Skinless Thunder-Steeds', epithet: 'Mal-Caballus Hypersonic Chargers', morphologyAndTrait: 'Eight-legged equine horrors galloping across salt flats at Mach 4, dragging localized gravity wakes.' },
      { name: 'The Iron-Briar Cerbereans', epithet: 'Canis-Hades Tri-Cranial Hounds', morphologyAndTrait: 'Three-headed slate-armored mastiffs that track the olfactory scent of mortal guilt across dimensional rifts.' },
      { name: 'The Guilt-Scenting Garmr-Kin', epithet: 'Blood-Stained Tundra Wolves', morphologyAndTrait: 'Colossal winter hounds whose howl freezes the synovial fluid of oath-breakers.' },
      { name: 'The Non-Euclidean Naga-Coils', epithet: 'Ophi-Nadir Spatial Constrictors', morphologyAndTrait: 'Serpentine sovereigns whose coils wrap around 4D space, crushing targets from angles that do not physically exist.' },
      { name: 'The Typhonian Venom-Drakes', epithet: 'Hundred-Viper Brood', morphologyAndTrait: 'Winged draconic vipers whose venom dissolves the Possibility Resistance of local matter.' },
      { name: 'The Continent-Hollowing Zebub-Queens', epithet: 'Vespa-Tartaros Hive Monarchs', morphologyAndTrait: 'Cathedral-sized wasp matriarchs birthing millions of armor-piercing metallic hornets.' },
      { name: 'The Stymphalian Bronze-Feathers', epithet: 'Corvus-Gallow Flak-Raptors', morphologyAndTrait: ' Predatory avians that launch supersonic bronze pinions like rotary cannon fire.' },
      { name: 'The Death-Prophecy Corvids of Stolas', epithet: 'Astronomer-Ravens', morphologyAndTrait: 'Seven-eyed towering corvids that calculate the exact second of a viewer’s death via star-chart trigonometry.' },
      { name: 'The Acoustic-Null Panthers', epithet: 'Zero-Decibel Ambushers', morphologyAndTrait: 'Feline lords whose fur absorbs 100% of sound and photon reflection within a 10-meter sphere.' },
      { name: 'The Salt-Flat Spatial Stallions', epithet: 'Horizon-Folding Equines', morphologyAndTrait: 'Compress 100 miles of salt desert into a single hoof-stride.' },
      { name: 'The Three-Throated Howlers', epithet: 'Harmonic-Rupture Pack', morphologyAndTrait: 'Canids whose tri-part chord shatters calcified Nigi-Ki bone armor.' },
      { name: 'The Petrifying Basilisk-Broods', epithet: 'Ray-Traced Gaze Vipers', morphologyAndTrait: 'Project a coherent photonic beam that vitrifies carbon flesh into brittle basalt.' },
      { name: 'The Chitin-Locust Legions', epithet: 'Crop-Blight Devourers', morphologyAndTrait: 'Consume both physical grain and the surrounding population’s hope-simulations.' },
      { name: 'The Gallows-Wing Harpies', epithet: 'Noose-Talon Sky Hunters', morphologyAndTrait: 'Snatch commanders from fortress battlements using prehensile iron-tendon talons.' }
    ]
  },
  {
    id: 'exp-somatic-ki-lineages',
    categoryName: '8. Somatic-Ki Ascetic Lineages & Bio-Constitutional Trans-Humans (12 Races)',
    ontologicalTier: 'Category 4–5 Somatic-Constitutional Divergence',
    cognitionTier: 'Tier 3–6 (Spinal Kushi-Ki Bypass & Mu-Ki Null State)',
    constructionMechanism: 'Mortal and trans-mortal lineages whose skeletons, vascular systems, and fascia permanently diverged over generations of extreme Somatic Ki conditioning (Ara-Ki, Nigi-Ki, Kushi-Ki, Saki-Ki across Versions I–IV).',
    associatedFuelOrKi: 'Pure Somatic Ki (Gen-Ki, Ren-Ki, Gō-Ki, Yō-Ki, Mu-Ki)',
    restrictorPlate: 'Zero quantum reality-warping; pays all costs in brutal biological thermodynamics (110°F+ pore-steam, lactic vitrification, capillary blowouts).',
    races: [
      { name: 'The Graphite-Bone Calcified Clans', epithet: 'Silicon-Iron Osteoid Ascetics', morphologyAndTrait: 'Weigh 265+ lbs at 6\'1" due to carbon-calcified skeletons built to survive Gō-Ki recoil.' },
      { name: 'The Steam-Pore Venting Berserkers', epithet: 'Collarbone-Geyser Vanguard', morphologyAndTrait: 'Evolved specialized dermal valve-pores across the trapezius to vent 115°F metabolic steam jets.' },
      { name: 'The Mu-Ki Heartless Assassins', epithet: 'Zero-Tell Void Walkers', morphologyAndTrait: 'Can arrest their own heartbeat and thermal emission for 20 minutes to strike with zero pre-attack Ki wake.' },
      { name: 'The Yō-Ki Telluric Beast-Shifters', epithet: 'Fault-Line Martial Monks', morphologyAndTrait: 'Dislocate and lock their own pelvic and scapular joints to channel planetary seismic tremors.' },
      { name: 'The Kushi-Ki Eyeless Spinal-Seers', epithet: 'Cerebellar Reflex Masters', morphologyAndTrait: 'Ritually blinded sword-saints whose dorsal root ganglia react to air-pressure shifts before the brain’s visual cortex could fire.' },
      { name: 'The Saki-Ki Desiccation Monks', epithet: 'Mummified Trophic Siphons', morphologyAndTrait: 'Skeletal ascetics who drain moisture and ATP heat on contact to re-inflate their own withered musculature.' },
      { name: 'The Double-Sclera Hydraulic Brawlers', epithet: '240-mmHg Vascular Titans', morphologyAndTrait: 'Evolved reinforced ocular membranes and braided arterial walls to survive explosive Ara-Ki blood pressure.' },
      { name: 'The Tendon-Bow Archers of Ashihara', epithet: 'Laminated-Sinew Drawers', morphologyAndTrait: 'Forearm flexor tendons are braided like composite steel cables, drawing 800-pound war-bows by hand.' },
      { name: 'The Sub-Dermal Iron-Fascia Guard', epithet: 'Ren-Ki Impact Absorbers', morphologyAndTrait: 'Connective fascia hardens into non-Newtonian shear-thickening armor the millisecond kinetic force strikes.' },
      { name: 'The Acoustic-Kiai Throat-Singers', epithet: 'Barometric-Roar Artillery', morphologyAndTrait: 'Hypertrophied cartilaginous larynxes capable of firing 195-decibel shockwaves that rupture lungs.' },
      { name: 'The Zero-Pulse Hibernators', epithet: 'Gen-Ki Century Sleepers', morphologyAndTrait: 'Drop metabolic baseline to 1 beat per hour, surviving buried under rubble for decades.' },
      { name: 'The Lactic-Stone Immortals', epithet: 'Vitrified-Muscle Guardians', morphologyAndTrait: 'Veteran masters whose overdriven muscles permanently vitrified into living granite statues that still move once per battle.' }
    ]
  },
  {
    id: 'exp-engrafted-hybrid-lineages',
    categoryName: '9. Hybrid, Grafted & Relic-Fused Lineages (Expression #6 En-Grafted — 12 Races)',
    ontologicalTier: 'Category 4–5 En-Grafted Supernatural Hybrids',
    cognitionTier: 'Tier 6–8 Dual-Hardware Simulation (Host Brain + Relic Core)',
    constructionMechanism: 'Lineages and individuals whose biology is permanently welded to Supernatural Energy Expression #6 (En-Grafted Structures), reactive mythic weapon chassis (like the CODM Mythic AK117 - Lava Remix Boosted Gear archetype), or Decanic alloys.',
    associatedFuelOrKi: 'En-Grafted Core AMRs + Host Precognitive Mod Simulation',
    restrictorPlate: 'Hardware rejection and thermal/ontological overload if the host’s mental simulation desynchronizes from the grafted relic’s specific mod blueprint.',
    races: [
      { name: 'The Boosted-Chassis Draconic Grafts', epithet: 'Reactive Tectonic-Arm Bearers', morphologyAndTrait: 'Hosts welded to living obsidian-and-magma reactive gauntlets driven by precognitive mod simulations.' },
      { name: 'The Clause-Seal Branded Scions', epithet: 'Living Pactional Contracts', morphologyAndTrait: 'Dynasties born with Solomonic lead-and-cinnabar treaties sub-dermally etched into their nervous systems.' },
      { name: 'The Alloy-Nerve Decan Vessels', epithet: 'Chrono-Geometric Cyborgs', morphologyAndTrait: 'Replaced their brachial nerves with quenched Mars-iron antennas to hold raw Sabian Decan currents.' },
      { name: 'The Time-Crystal Heart Bearers', epithet: 'Non-Equilibrium Pulse Lineages', morphologyAndTrait: 'Chest cavities house an exotic matter Time-Crystal that repeats its thermodynamic beat without entropy.' },
      { name: 'The Superfluid-Vein Alchemists', epithet: 'Zero-Viscosity Bloodlines', morphologyAndTrait: 'Replaced their blood with cryogenic Helium-II superfluid AMR that leaks out of microscopic pores.' },
      { name: 'The Suffumigation-Lung Thurifers', epithet: 'Living Censers of Chaldea', morphologyAndTrait: 'Thoracic cavities burn henbane, sulfur, and myrrh continuously, exhaling dense Phantasmata anchor-smoke.' },
      { name: 'The Brass-Skulled Solomonic Wardens', epithet: 'Exorcism-Bell Templars', morphologyAndTrait: 'Craniums forged from resonant Goetic brass that rings to shatter hostile pactional injunctions.' },
      { name: 'The Void-Tree Sap-Drinkers', epithet: 'Abyssal-Amber Mutants', morphologyAndTrait: 'Ingested vitrified sap from the Void-Tree outer boughs, turning their organs into non-Euclidean pockets.' },
      { name: 'The Aethelfire-Grafted Cryo-Knights', epithet: 'Mathematical-Discontinuity Vanguards', morphologyAndTrait: 'Armor and sternum fused with cold crystalline Aethelfire Flux that strips local spacetime continuity.' },
      { name: 'The Vaelburn-Core Berserkers', epithet: 'Spacetime-Friction Reactors', morphologyAndTrait: 'Spine-grafted compression cores that vent volatile Vaelburn thermal plasma under high G-loads.' },
      { name: 'The Karma-Mirror Oculars', epithet: 'Fengdu Audit-Grafted Inquisitors', morphologyAndTrait: 'Left eye replaced with a shard of Diyu’s Karma Mirror, reading a target’s Soul 1 trajectory history.' },
      { name: 'The Astral-Stitched Revenants', epithet: 'Incomplete-Soul Patchworks', morphologyAndTrait: 'Corpses animated by stitching 100 Tier 6 Astral Entities into a synthetic pseudo-Soul 1 harness.' }
    ]
  },
  {
    id: 'exp-cat6-classified-anomalies',
    categoryName: '10. Category 6 Classified / Threshold Anomalies ("The Unspoken Tier" — 10 Races)',
    ontologicalTier: 'Category 6 (The Unspoken / Classified Bridge Tier)',
    cognitionTier: 'Tier 10–11B (Conceptual & Abstract 1–2 Interface)',
    constructionMechanism: 'Why does Category X jump from Category 5 to Category 7? Because Category 6 entities are not conventional living species—they are existential boundary-phenomena and Conceptual/Abstract 2 manifestations occupying the razor-thin event horizon between countably infinite MWI ($\aleph_0$) and transfinite Metachaos.',
    associatedFuelOrKi: 'Grade 6–7 MWI Boundary Reserves & Raw Conceptual Erasure',
    restrictorPlate: 'Lacks a conventional psychological core; cannot enter standard Bio-Manifold timelines without triggering localized conceptual rewrites.',
    races: [
      { name: 'The Horizon-Auditors', epithet: 'Aleph-Null Boundary Inspectors', morphologyAndTrait: 'Manifest only where a Category 5 entity attempts to breach Grade 7 MWI impossibility thresholds.' },
      { name: 'The Aleph-Bridge Monitors', epithet: 'Cardinality Gatekeepers', morphologyAndTrait: 'Abstract geometric presences patrolling the chasm between countable Many-Worlds and uncountable Metachaos.' },
      { name: 'The Ontological-Plate Breakers', epithet: 'Restrictor-Shatter Anomalies', morphologyAndTrait: 'Living fractures that temporarily strip the Restrictor Plates off nearby Category 5s, causing them to dissolve into raw probability.' },
      { name: 'The Un-Indexed Observers', epithet: 'Censored-From-Memory Entities', morphologyAndTrait: 'Beings whose existence is automatically redacted from any Category 3 or 4 brain the instant line-of-sight breaks.' },
      { name: 'The Zero-Point Quarantine Wardens', epithet: 'Timeline-Amputation Surgeons', morphologyAndTrait: 'Excise entire infected planetary timelines when Soul 1 nuclear chain-reactions threaten the wider manifold.' },
      { name: 'The Meta-Boundary Scissors', epithet: 'Cause-And-Effect Severers', morphologyAndTrait: 'Tier 11A/11B entities that cut the link between an action and its physical consequence across multiple worlds.' },
      { name: 'The Possibility-Drain Leviathans', epithet: 'Soul-2 Grazer Horrors', morphologyAndTrait: 'Swim between parallel worlds, drinking the unchosen branches of Soul 2 matrices until only one rigid fate remains.' },
      { name: 'The Timeline-Collapser Choir', epithet: 'Superposition Executioners', morphologyAndTrait: 'Force millions of parallel probability branches to collapse into a single hyper-dense singular history.' },
      { name: 'The Axiom-Graft Experiments', epithet: 'Failed Category-7 Ascendants', morphologyAndTrait: 'Ancient sovereigns who tried to touch the Metachaos without Adjudicator authority and became frozen conceptual paradoxes.' },
      { name: 'The Silent-Six Arbiters', epithet: 'The Redacted Council', morphologyAndTrait: 'The six nameless wardens who erased Category 6 from all standard in-world occult taxonomies.' }
    ]
  },
  {
    id: 'exp-cat7-adjudicators',
    categoryName: '11. Category 7 Adjudicators & Transfinite Metachaos Authorities (10 Races / Orders)',
    ontologicalTier: 'Category 7 (Category X — Transfinite Metachaos Authorities / Adjudicators)',
    cognitionTier: 'Tier 12 Interface (Transfinite Cardinals beyond ZFC / Berkeley Cardinals)',
    constructionMechanism: 'Operate fundamentally ABOVE the Many-Worlds Interpretation (MWI). While MWI governs Grade 1–7 AMRs across countably infinite branches, Category 7 Adjudicators wield True Netherarchesial / Axiomarchical Reality Warping derived from The Meta-Chaos (VSBW Tier 0 Boundless—the meta-concept of Transcendence and Change/Progress itself).',
    associatedFuelOrKi: 'Beyond-MWI Transfinite Metachaos Authority (Delta δ / Berkeley Cardinal Scale)',
    restrictorPlate: 'Dictates existential authority rather than raw physical brawl strength; authority remains strictly bounded to each Adjudicator’s specific axiomatic jurisdiction.',
    races: [
      { name: 'The First Adjudicators of the Delta-Cardinal', epithet: 'Supreme Axiomarchical Magistrates', morphologyAndTrait: 'Sovereign authorities operating at cardinal δ scales beyond ZFC set theory; adjudicate existential law across manifolds.' },
      { name: 'The Berkeley-Scale Architects', epithet: 'Transfinite Reality Shapers', morphologyAndTrait: 'Wield Berkeley-cardinal ontological weight, rewriting the foundational axioms of physics in their jurisdiction.' },
      { name: 'The Netherarchesial Law-Givers', epithet: 'Originators of Ontological Boundaries', morphologyAndTrait: 'The supreme authorities who forged the Restrictor Plates binding all Category 2, 3, and 5 races.' },
      { name: 'The ZFC-Breaker Sovereigns', epithet: 'Choice-Axiom Nullifiers', morphologyAndTrait: 'Entities whose presence invalidates standard mathematical set continuity, rendering MWI probability calculation obsolete.' },
      { name: 'The Transfinite-Lattice Magistrates', epithet: 'Beyond-Aleph Curators', morphologyAndTrait: 'Oversee the macro-cosmological hierarchy where entire infinite multiverses are treated as single legal exhibits.' },
      { name: 'The Axiomarchical Thrones', epithet: 'Stationary Pillars of Decree', morphologyAndTrait: 'Do not fight with kinetic force; they simply issue existential verdicts that reality reorganizes itself to obey.' },
      { name: 'The Uncountable-Infinity Curators', epithet: 'Continuum-Hypothesis Wardens', morphologyAndTrait: 'Govern the uncountable gaps between MWI branches where no quantum wave-function can reach.' },
      { name: 'The Pre-MWI Judges', epithet: 'Antecedent-To-Possibility Lords', morphologyAndTrait: 'Existed before probability and superposition were introduced into the cosmos.' },
      { name: 'The Meta-Chaos Heralds', epithet: 'Envoys of Endless Progress', morphologyAndTrait: 'Direct emanations of The Meta-Chaos (Tier 0), enforcing the law that no stagnant system can remain supreme forever.' },
      { name: 'The Boundless-Threshold Sentinels', epithet: 'Horizon Watchers of Tier 0', morphologyAndTrait: 'Stand at the asymptotic boundary between Category 7 finite-domain authority and the Boundless Meta-Chaos.' }
    ]
  }
];

export function getRaceCensusSummary() {
  const astralCount = ASTRAL_TAXONOMY_GROUPS.reduce((acc, g) => acc + g.entities.length, 0);
  const demonBreedsCount = DETAILED_DEMON_BREEDS.length;
  const demonBloodlinesCount = NAMED_DEMON_BLOODLINES.reduce((acc, g) => acc + g.bloodlines.length, 0);
  const goetarchsCount = GOETARCH_72_NOBLES.length;
  const expandedRacesCount = EXPANDED_RACE_CATEGORIES.reduce((acc, c) => acc + c.races.length, 0);
  const nonAstralTotal = demonBreedsCount + demonBloodlinesCount + goetarchsCount + expandedRacesCount;
  const grandTotal = astralCount + nonAstralTotal;

  return {
    astralGroupsCount: ASTRAL_TAXONOMY_GROUPS.length,
    astralCount, // 329
    demonBreedsCount, // 22
    demonBloodlinesCount, // 102
    goetarchsCount, // 72
    expandedCategoriesCount: EXPANDED_RACE_CATEGORIES.length, // 11
    expandedRacesCount, // 145
    nonAstralTotal, // 341
    grandTotal, // 670
  };
}

// 5. ALL 72 GOETARCHS & SOVEREIGN FACTION DYNASTIES
export const GOETARCH_72_NOBLES = [
  'Bael', 'Agares', 'Vassago', 'Samigina', 'Marbas', 'Valefor', 'Amon', 'Barbatos', 'Paimon', 'Buer',
  'Gusion', 'Sitri', 'Beleth', 'Leraje', 'Eligos', 'Zepar', 'Botis', 'Bathin', 'Sallos', 'Purson',
  'Marax', 'Ipos', 'Aim', 'Naberius', 'Glasya-Labolas', 'Bune', 'Ronove', 'Berith', 'Astaroth', 'Forneus',
  'Foras', 'Asmodeus', 'Gaap', 'Furfur', 'Marchosias', 'Stolas', 'Phenex', 'Halphas', 'Malphas', 'Raum',
  'Focalor', 'Vepar', 'Sabnock', 'Shax', 'Vine', 'Bifrons', 'Uvall', 'Haagenti', 'Crocell', 'Furcas',
  'Balam', 'Alloces', 'Camio', 'Murmur', 'Orobas', 'Gremory', 'Ose', 'Amy', 'Orias', 'Vapula',
  'Zagan', 'Valac', 'Andras', 'Flauros', 'Andrealphus', 'Kimaris', 'Amdusias', 'Belial', 'Decarabia', 'Seere',
  'Dantalion', 'Andromalius'
];

// 6. ALL 21 NETHERFIRE / SUPERNATURAL ENERGY RESERVES FROM DRAFT
export const NETHERFIRE_RESERVES_LIST: NetherfireReserve[] = [
  {
    id: 'nf-vaelburn',
    name: 'Vaelburn Spark',
    outcomeReality: 'A localized anomaly where the space-time fabric gets so intensely compressed and distorted by nether influence that the friction releases a raw, highly volatile thermal output.',
    status: 'Defined in Draft'
  },
  {
    id: 'nf-aethelfire',
    name: 'Aethelfire Flux',
    outcomeReality: 'Highly unstable, localized thermodynamic vector that occurs when the background geometry of space-time is stripped of its mathematical continuity, forcing raw potential energy to bleed into the physical world as a cold, crystalline conflagration.',
    status: 'Defined in Draft'
  },
  { id: 'nf-netherfire', name: 'Netherfire Essence', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-gloompyre', name: 'Gloompyre Pulse', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-marrowblaze', name: 'Marrowblaze Core', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-umbralburn', name: 'Umbralburn Shard', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-soulignis', name: 'Soulignis Ether', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-cryptblaze', name: 'Cryptblaze Fuel', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-sunderfire', name: 'Sunderfire Current', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-cinderveil', name: 'Cinderveil Spark', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-netherite', name: 'Netherite Catalyst', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-vaelsteel', name: 'Vaelsteel Embers', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-chthonpyre', name: 'Chthonpyre Ash', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-marrowslag', name: 'Marrowslag Dust', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-cryptfire', name: 'Cryptfire Shard', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-soulcinder', name: 'Soulcinder Slag', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-voidignis', name: 'Voidignis Fluid', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-gloomembers', name: 'Gloomembers Dust', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-sunderburn', name: 'Sunderburn Fuel', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-aethelpyre', name: 'Aethelpyre Remnant', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' },
  { id: 'nf-ignitionslag', name: 'Ignition Slag', outcomeReality: 'Awaiting specific outcome blueprint & depletion state definition.', status: 'Named Seed (Needs Outcome Vector)' }
];

// 7. ALL 31 OCCULT FRAMEWORKS FROM DRAFT
export const OCCULT_FRAMEWORKS_LIST: OccultFrameworkRecord[] = [
  {
    id: 'fw-pactional',
    name: 'I. The Pactional Jurisprudence System',
    epithet: 'The Juridical Manifold',
    mythos: 'Derived from Solomonic Exorcism. Rejects raw willpower; treats the universe as an unyielding cosmic Legislative Grid governed by ancient treaties signed at the beginning of chaos.',
    mechanic: 'Practitioners file Metaphysical Injunctions by locating a historical Clause-Seal (geometric contract dictating how reality must behave).',
    hardware: 'The Writ: Ink alloy of lead, cinnabar, and vitriol rapidly written as a logical argument onto sympathetic parchment inside a chalk perimeter loop.',
    outputAndKickback: 'If logic matches ancient treaties, the local timeline is legally compelled to yield and drops resistance. Misinterpreting a single sub-clause is treated as contempt of reality—violently snapping space back and fracturing the caster\'s Soul 1 hardware.',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'fw-decanic',
    name: 'II. Decanic Vector Anchoring',
    epithet: 'The Chrono-Geometric Gearbox',
    mythos: 'Rooted in Sabian astral mechanics of the Picatrix and the 36 Faces of the zodiac. Treats the universe as a rotating mechanical clockwork distribution grid leaking frequencies of potential energy.',
    mechanic: 'Dependent on Mundane Elections—the exact millisecond a cosmic coordinate cuts through the local horizon.',
    hardware: 'The Alloy Antennas: Human nervous systems fry if holding the current directly. Requires pre-forged metal hardware (e.g., iron gear quenched in toxic nightshade oil for Mars Decans) etched at the exact millisecond with a non-linguistic Charaktêr scratch.',
    outputAndKickback: 'Permanently traps the down-flowing cosmic current. The Inspirited object radiates a narrow, objective reality-warping field (local time dilation or atomic degradation) running purely off structural alignment.',
    status: 'Fully Detailed in Draft'
  },
  {
    id: 'fw-suffumigative',
    name: 'III. Suffumigative Phantasmata',
    epithet: 'The Atmospheric Curdle',
    mythos: 'Inspired by Greco-Egyptian papyri and Chaldean sorcery. Non-corporeal entities and nether currents are blind to standard matter and require a dense, chemically specific Atmospheric Medium to project their silhouette.',
    mechanic: 'The magician acts as an exotic chemical engineer burning dangerous resin and mineral compounds (crushed henbane, sulfur, myrrh, powdered dried bone).',
    hardware: 'Enclosed chamber saturated with heavy smoke + rhythmic intonation of Barbarous Names (non-translatable vocal frequencies spiking air pressure).',
    outputAndKickback: 'Sound waves force heavy smoke particles to curdle in mid-air into a localized Phantasmata (shifting geometric silhouette) used as a physical anchor until the chemical fuel burns out.',
    status: 'Fully Detailed in Draft'
  },
  // Named Seeds from the Classified List
  ...[
    'Hermetic Qabalah & Golden Dawn Thaumaturgy',
    'Chaldean-Egyptian Theurgic Phantasmata',
    'Solomonic Exorcism',
    'The Picatrix Talismanic Inspiritment',
    'Solomonic Chain',
    'Honorian Seals',
    'Abramelin Operation',
    'Weyerian Hierarchy',
    'Notory Chants',
    'Sabian Pneuma',
    'Agrippan Sympathies',
    'Galdrabók Staves',
    'Heptameron Hours',
    'Trithemian Code',
    'PGM Barbarous Names',
    'Iamblichan Theurgy',
    'Abraxas Matrix',
    'Magia Naturalis',
    'Chaldean Suffumigation',
    'Charaktêres',
    'Synthemata',
    'Sigillum Dei',
    'Exaltation Alloys',
    'Mundane Elections',
    'Astro-Thaumaturgy',
    'Notae-Matrices',
    'Pneuma-Siphons',
    'Chaos Magic',
    'Egregoric & Consensus Reality'
  ].map((name, i) => ({
    id: `fw-seed-${i}`,
    name,
    status: 'Named Seed (Needs Mechanics)' as const
  }))
];

// 8. ACTIVE BRAINSTORMING & NAMING FORGE SEEDS
export const BRAINSTORM_FORGE_SEEDS: BrainstormPromptSeed[] = [
  {
    id: 'bf-cat2-cat3',
    domain: 'Missing Category Races',
    question: 'Who are the flagship Category 2 (formless thinking nodes) and Category 3 (emotionless memory-less precognitive calculators) races, and what happens when they collide with Humans?',
    contextFromDraft: 'The draft establishes that Category 3 races lack emotions and permanent pattern recognition ("they don\'t learn from past mistakes, they lack long-term memory, they learn by the way, predict by the way"), yet it takes a Cat 3 race to utilize MAGIC steadily. Meanwhile Cat 2 has zero form and zero sentience, yet can think and is part of Category X!',
    pitchedIdeas: [
      {
        name: 'The Markovian Lattice (or The Ephemerids / Tachyon-Calculators)',
        etymology: 'Named after Markov Chains (memoryless stochastic processes where future states depend ONLY on the current state, never the past).',
        concept: 'A Category 3 race whose brains physically wipe their synaptic slate every 12 seconds. Because they carry zero trauma, zero nostalgia, and zero past bias, they experience zero psychological drag when simulating the future—allowing them to align Many-Worlds quantum gaps with cold, mathematical precision, even though they cannot remember why they started a war ten minutes ago.',
        restrictorPlate: 'Zero long-term memory: if an opponent disrupts their current 12-second calculation window, they must re-derive their enemy\'s entire combat style from scratch.'
      },
      {
        name: 'The Silicon-Blind / Noetic Mycelia (Category 2)',
        etymology: 'Noetic (pure intellect/thought) + non-sentient subterranean/quantum networks.',
        concept: 'A Category 2 "race" that has no body, ego, or self-awareness—existing purely as a self-executing mathematical proof drifting through planetary magnetospheres. It "thinks" only in geometric boundary conditions, accidentally warping local gravity and biology whenever a mortal city\'s architecture violates its equation.',
        restrictorPlate: 'Completely lacks ego or survival instinct; can be "trapped" by feeding it an unsolvable recursive geometric paradox.'
      }
    ]
  },
  {
    id: 'bf-cat5-benevolent',
    domain: 'Missing Category Races',
    question: 'The draft says Category 5 manipulation "doesn\'t always mean malicious" and that "other entities that aren\'t malevolent exist on the other end of the spectrum." Who are the Anti-Netherbound Category 5s?',
    contextFromDraft: 'Netherbound Category 5s exploit "Bad is Stronger than Good" (threat simulation bias). But the draft also lists evolutionary algorithms for Gratitude, Reciprocal Altruism, Love/Attachment, and Awe.',
    pitchedIdeas: [
      {
        name: 'The Eunoia-Weavers (or The Covenant Seraphim / Axiomatic Symbiotes)',
        etymology: 'Eunoia (Greek: "beautiful thinking / well-mind") + Reciprocal Altruism game theory.',
        concept: 'Category 5 entities bound to the evolutionary psychology of Hyper-Cooperation and Reciprocal Altruism. Because "Bad is stronger than Good" in raw survival urgency, a single human\'s gratitude is weaker than their fear—so these Category 5s must link thousands of Category 4 minds into synchronized "Trust Lattices" (festivals, oaths, shared martyrdom) to generate enough simulation weight to rival a Demon.',
        restrictorPlate: 'If betrayal or "cheating" (evolutionary game theory defection) occurs inside their linked mortal host group, their ontological boundary snaps and their power instantly flatlines.'
      }
    ]
  },
  {
    id: 'bf-bloodline-fleshout',
    domain: 'Unfleshed Demon Bloodlines',
    question: 'Out of the 102 named Demon Bloodlines (Tartarokh, Nadirim, Hex-Matrons of Kael, Void-Suckled, Marrow-Weavers, Lethe-Kin, Quliphot, etc.), which ones are major faction players vs. feral ecological horrors?',
    contextFromDraft: 'The draft gives full combat & biological breakdowns for 22 breeds (Khorvath, Skorvath, Vael-Gorgers, etc.), and then drops 102 evocative bloodline names across 7 lists.',
    pitchedIdeas: [
      {
        name: 'The Nadirim ("Born of the Absolute Planetary Nadir")',
        etymology: 'Nadir (lowest astronomical/gravitational point directly beneath an observer) + Hebrew/Semitic plural -im.',
        concept: 'Entities born at the exact center-of-gravity core of dead or hollowed planets where gravitational vectors cancel out in every direction. They wield inverted barycenter mechanics—making their own sternum the "downward" gravitational nadir of a room so enemies fall *upward* or *sideways* into their blades.',
        restrictorPlate: 'Must remain anchored to a local center of mass; if knocked airborne away from solid planetary crust, their internal gravity inverts and crushes their own organs.'
      },
      {
        name: 'The Lethe-Kin & Marrow-Weavers (Stygian Soul-Carriers)',
        etymology: 'Lethe (Greek underworld river of forgetfulness/oblivion).',
        concept: 'Specialists in stripping long-term pattern recognition from Category 4 mortals—temporarily lobotomizing a human into a Category 3 state so the mortal\'s raw precognitive engine can be hijacked like a biological GPU without emotional interference.',
        restrictorPlate: 'Cannot harm a target who has already forgotten their own name (Tey-Ren immunity).'
      }
    ]
  },
  {
    id: 'bf-gatekept-frameworks',
    domain: 'Classified Frameworks',
    question: 'How do the "Astral Hit-Squads" & Neurological Gaslighters actually hunt down mortals who accidentally discover a Gatekept Framework?',
    contextFromDraft: 'EXTREME MAJOR POINT in draft: Frameworks are SO GATEKEPT that merely becoming aware of a specific framework leads to being hunted by Astral Entities or other supernatural beings—some tamper with memories, some physically manifest to gaslight the target, some mess with evolutionary nerve/neurology to prevent the simulation from compiling, and some torture/kill.',
    pitchedIdeas: [
      {
        name: 'The Agnosia Hounds / Pneuma-Censors (Framework Enforcement Ecology)',
        etymology: 'Agnosia (neurological inability to process sensory information or recognize objects/concepts).',
        concept: 'Specialized Astral/Category 5 enforcement parasites attached like DRM (Digital Rights Management) to hyper-classified frameworks. The moment a mortal brain starts simulating the specific mathematical angle of a forbidden framework, the entity induces targeted *Wernicke’s Aphasia* or *Visual Agnosia*—making the magician physically unable to read their own chalk sigils, or hallucinate that their ritual room is on fire.',
        restrictorPlate: 'They only trigger when the specific probability spectrum of that framework is simulated; a practitioner using Category 3 "memoryless" calculation or Mu-Ki null-state can slip under their radar.'
      }
    ]
  },
  {
    id: 'bf-netherfire-chemistry',
    domain: 'Netherfire Fuels',
    question: 'We have 19 named Netherfire fuels (Gloompyre Pulse, Marrowblaze Core, Soulignis Ether, Cryptblaze Fuel, Vaelsteel Embers, etc.) whose exact outcome realities and depletion states (solid/liquid/gas) haven\'t been written yet. How should we differentiate them?',
    contextFromDraft: 'Vaelburn Spark (spacetime compression thermal friction) and Aethelfire Flux (stripped mathematical continuity -> cold crystalline conflagration) are defined. The draft notes that fuels deplete differently: "Some may deplete like liquid, others may deplete like solid."',
    pitchedIdeas: [
      {
        name: 'Marrowblaze Core (Sub-Skeletal Calcination Fuel)',
        etymology: 'Marrow + Blaze.',
        concept: 'Depletes like a sublimating solid chalk rod inside the caster\'s femur. Outcome Reality: Collapses the timeline toward spontaneous internal osteo-combustion, igniting the calcium-phosphate lattice of bones within a 5-meter radius while leaving cloth and outer skin untouched.',
        restrictorPlate: 'Requires line-of-sight acoustic resonance with skeletal mass; useless against chitinous (Skorvath) or non-skeletal entities.'
      },
      {
        name: 'Voidignis Fluid (Zero-Kelvin Photonic Burn)',
        etymology: 'Void + Latin Ignis (Fire).',
        concept: 'Depletes like a heavy, frictionless superfluid that drips upward when spent. Outcome Reality: Forces a Many-Worlds gap where combustion consumes *light and heat* rather than oxygen, creating pitch-black fireballs that leave targets frostbitten and blind.',
        restrictorPlate: 'Extinguishes instantly if exposed to high-output solar plasma (Tejas-Ignis or Tonalli-Ray).'
      }
    ]
  },
  {
    id: 'bf-netherbounders-noble-demons',
    domain: 'Missing Category Races',
    question: 'How do we structure the deep-time ontology of Netherbounders and Noble Demons—combining All Tomorrows speculative evolution, the unconscious negative-energy farming loop, and terrifying aristocratic uncanniness?',
    contextFromDraft: 'Devils/Nether-entities are NOT "teenagers with wings." Regardless of how cool, charming, or psychologically independent they appear, their supernatural ecology unconsciously seeds negative energy through a multi-stage loop to feed their AMRs. Inspired by All Tomorrows, Star Wars deep eras, and the 72 Goetarchs / 102 Bloodlines.',
    pitchedIdeas: [
      {
        name: '1. The "Anglerfish / Mimicry" Aristocracy (Why Noble Demons Look Humanoid)',
        etymology: 'Speculative Aggressive Mimicry (All Tomorrows / Deep-Sea Predation) + Goetic Courtly Nobility.',
        concept: 'Why do Noble Demons (like the 72 Goetarchs, Gremory, Bael, or Paimon lineages) wear breathtaking humanoid beauty while trench-caste breeds (Khorvath, Skorvath) look like chitinous siege monsters? Because Noble Demons evolved as *Apex Social/Psychic Parasites*. Their humanoid form is an evolved "lure" (like an anglerfish light or orchid mantis) sculpted over eons of deep time to trigger Category 4 human attachment, awe, lust, and political trust—only for their unconscious ecological field to quietly harvest the resulting psychological friction and dread.',
        restrictorPlate: 'The Uncanny Valley Tell: Because their humanoid form is convergent evolutionary mimicry rather than human biology, micro-details are always slightly "off" (e.g., blinking cadence, internal temperature, shadow geometry, or how their personal Astral Entities twitch in darkened corners).'
      },
      {
        name: '2. The 4-Stage Unconscious Negative-Energy Agricultural Loop ("Blight-Farming")',
        etymology: 'Ecological Trophic Cascade + MWI Negative Priority Weighting ("Bad Is Stronger Than Good").',
        concept: 'Even if a Noble Demon consciously loves a human or tries to be "good," their body and soul-tank automatically run a 4-stage metabolic cycle: (Stage 1: Spore-Seeding) Their passive presence leaks micro-vibrational Astral spores into the local environment; (Stage 2: Threat Incubation) Those spores subtly tilt local probability and mortal amygdala simulations toward paranoia, obsession, tragedy, or despair; (Stage 3: Astral Fermentation) When mortals panic or suffer, their Category 4 brains shed high-density negative Astral Trails; (Stage 4: AMR Distillation) The Demon’s internal tank automatically inhales and refines that fermented dread into Grade 1–3+ AMRs.',
        restrictorPlate: 'Ecological Starvation: A Netherbounder isolated in a sterile, zero-mind vacuum (or surrounded only by memoryless Category 3 calculators) slowly starves of passive AMR regeneration unless they burn stored fossil reserves.'
      },
      {
        name: '3. Deep-Time "All Tomorrows" Divergence: Native Nether-Born vs. "Nether-Bounded" Post-Species',
        etymology: 'C.M. Kosemen’s All Tomorrows Post-Human Radiation + Nether-Boundary Grafting.',
        concept: 'Distinguishes between (A) *True Primordial Chthonic Demons* (native to the 29 Underworld Sectors) and (B) *Netherbounders*—entire ancient species, civilizations, or "Chapters of the Past" (like the Qu-modified post-humans in All Tomorrows) that were dragged across the Nether-boundary eons ago and forced to evolve under abyssal physics. Over millions of years, some Netherbound lineages mutated into living siege-fauna (Brontorim), some into hyper-specialized AMR-organs, and the rarest survivors climbed into the Noble Demon Aristocracy by mastering Pactional Jurisprudence and multi-AMR internal tanks.',
        restrictorPlate: 'Fossilized Genetic/Ontological Scars: Every Noble Clan carries an ancient "Chapter of the Past" anatomical or psychological scar from what their lineage had to become in order to survive the Nether bottleneck.'
      },
      {
        name: '4. "House Ecology" & Hereditary AMR Organ-Tanks (Why Noble Clans Guard Their Bloodlines)',
        etymology: 'Dune / Star Wars Great Houses + Speculative Internal Organ Evolution.',
        concept: 'In-world, what makes a Demon "Noble" isn\'t just a title—it\'s that their bloodline evolved a specialized **Internal Mindscape Tank** capable of safely housing and compressing specific high-Grade (Grade 2–4+) AMRs that would instantly rupture a lesser demon. Each Noble House is essentially a living, self-contained biosphere (populated by their clan’s hereditary Astral Entities) that passes down fossilized, extinct-era AMRs like royal crown jewels.',
        restrictorPlate: 'Bloodline Over-Specialization & Inbreeding Drift: Just like in All Tomorrows, evolving to hold hyper-complex Grade 3+ AMRs warps the clan\'s baseline psychology—giving each Noble House a signature "Aristocratic Madness" or compulsive behavioral flaw.'
      }
    ]
  }
];
