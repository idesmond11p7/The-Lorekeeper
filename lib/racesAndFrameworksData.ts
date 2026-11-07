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
    category: '14. Machine, Signal & Modern Egregores',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    formationVector: 'Dead-channel broadcasts, blackouts, and collective dread around modern infrastructure and machinery',
    entities: [
      'The Ghost in the Machine', 'The Static-Wraith', 'The Glitch-Daemon', 'The Wire-Walker', 'The Signal-Phantom',
      'The Cyber-Tulpa', 'The Data-Leech', 'The Blackout-Spirit', 'The Frequency-Haunt', 'The Iron-Automaton'
    ]
  },
  {
    id: 'astral-15-alchemical',
    category: '15. Alchemical & Elemental Essences',
    tier: 'Psyche Vibrational Spectrum (Incomplete Soul)',
    formationVector: 'Hermetic calcination, coagulation, and prima materia distillation wakes',
    entities: [
      'The Sylph-Adept', 'The Undine-Maiden', 'The Gnome-Elder', 'The Salamander-Spark', 'The Quintessence',
      'The Calcination Ghost', 'The Coagulator', 'The Volatile Spirit', 'The Fixed Daemon', 'The Prima Materia'
    ]
  },
  // EXPANDED ASTRAL FAMILIES (16 THROUGH 30 — 329 TOTAL ASTRAL SPECIES)
  {
    id: 'astral-16-acoustic',
    category: '16. Acoustic, Infrasound & Barbarous-Voice Entities',
    tier: 'Tier 5–6 Vibrational & Acoustic Dread Spectrum (Incomplete Soul)',
    formationVector: 'Born from PGM Barbarous Names, 19Hz fear-frequency infrasound, Kiai shockwaves, and dying screams',
    entities: [
      'The Infrasound Hound', 'The Barbarous Echo', 'The Dead-Bell Wraith', 'The Throat-Clutch Specter', 'The Choir of the Slain',
      'The Sub-Bass Apparition', 'The Keening Gale', 'The Shattered-Chord Phantom', 'The Whispering Agnosia', 'The Dead-Air Dread'
    ]
  },
  {
    id: 'astral-17-framework-drm',
    category: '17. Gatekept Framework Enforcement & Seal-Hunter Spirits',
    tier: 'Tier 6 Forbidden-Framework Enforcement Spectrum (Incomplete Soul)',
    formationVector: 'Bound to the 31 Gatekept Occult Frameworks; automatically drawn to uninitiated mortals who simulate, read, or pry into forbidden rites—inflicting memory wipes, gaslighting, blindness, or execution',
    entities: [
      'The Agnosia Hound', 'The Tongue-Locker', 'The Seal-Hunter', 'The Writ-Eraser', 'The Script-Blinder',
      'The Memory-Scrubber', 'The Gaslight Phantom', 'The Circle-Breaker', 'The Clause-Inquisitor', 'The Forbidden-Name Stalker'
    ]
  },
  {
    id: 'astral-18-amr-fermenters',
    category: '18. Internal-Tank & AMR-Fermenter Symbionts',
    tier: 'Tier 6 Internal-World / Mindscape Tank Ecology (Incomplete Soul)',
    formationVector: 'Domesticated inside the Buddhist-style internal mindscape tanks of Noble Demons and Netherbounders to ferment negative emotional loops (terror, despair, envy, obsession) into usable AMR reserves',
    entities: [
      'The Dread-Fermenter', 'The Despair-Still', 'The Bael-Hound', 'The Phenex-Ash Worm', 'The Grief-Siphon',
      'The Night-Sweat Leech', 'The Panic-Churner', 'The Marrow-Curdler', 'The Envy-Filter', 'The Tank-Shade'
    ]
  },
  {
    id: 'astral-19-battlefield',
    category: '19. Battlefield Trauma, Siege & Shell-Shock Egregores',
    tier: 'Tier 6 Mass-Slaughter & Siege Condensation (Incomplete Soul)',
    formationVector: 'Precipitates out of the overlapping pre-cognitive terror of thousands of dying soldiers in trenches, sieges, and scorched war-zones',
    entities: [
      'The No-Man’s-Land Fog', 'The Trench-Stalker', 'The Artillery-Shudder', 'The Broken-Vanguard Shade', 'The Charnel-Chorus',
      'The Siege-Wall Groan', 'The Deserter’s Shadow', 'The Last-Sentry Eidolon', 'The Scorched-Earth Wraith', 'The Ceasefire-Phantom'
    ]
  },
  {
    id: 'astral-20-optical',
    category: '20. Optical, Refraction & Mindscape-Overlap Phantoms',
    tier: 'Tier 5–6 Optical-Shift & Domain-Overlap Spectrum (Incomplete Soul)',
    formationVector: 'Inhabits dusk refraction shifts, peripheral blind spots, ray-traced caustics, and the dark-orange boundary of an active Mindscape Overlap',
    entities: [
      'The Blind-Spot Fetch', 'The Caustic-Double', 'The Eclipse-Silhouette', 'The Noon-Glare Wraith', 'The Dusk-Refraction Shade',
      'The Refraction-Lure', 'The Dusk-Stalker', 'The Mirror-Lag Apparition', 'The Heat-Haze Phantom', 'The Pitch-Shadow Watcher'
    ]
  },
  {
    id: 'astral-21-somatic-ki',
    category: '21. Somatic-Ki & Bio-Thermal Afterimage Spirits',
    tier: 'Tier 5 Bio-Electric & Blood-Steam Wake Spectrum (Incomplete Soul)',
    formationVector: 'Shed violently from the 112°F+ pore-steam, burst capillaries, and bio-electric discharges of extreme Gō-Ki and Yō-Ki martial artists',
    entities: [
      'The Steam-Shroud Fetch', 'The Iron-Pulse Echo', 'The Kiai-Remnant', 'The Stance-Shadow', 'The Blood-Mist Wraith',
      'The Dojo-Lingering Will', 'The Calcified-Fist Phantom', 'The Headless-Brawler Shade', 'The Heartbeat-Drummer', 'The Mu-Ki Void-Double'
    ]
  },
  {
    id: 'astral-22-abyssal-sea',
    category: '22. Abyssal-Sea, Trench & Thalassophobia Entities',
    tier: 'Tier 6 Hadal-Pressure & Drowned-Terror Spectrum (Incomplete Soul)',
    formationVector: 'Born from the primal terror of crushing black ocean depths, shipwrecked hulls, and what waits beneath the continental shelf',
    entities: [
      'The Hadal-Fetch', 'The Trench-Siren', 'The Black-Current Wraith', 'The Drowned-Lung Ghost', 'The St. Elmo’s Corpse-Light',
      'The Hull-Knocker', 'The Undertow-Dragger', 'The Abyssal-Mourner', 'The Ghost-Rigging', 'The Derelict-Haunt'
    ]
  },
  {
    id: 'astral-23-urban-brutalist',
    category: '23. Urban, Brutalist & Liminal-Alley Haunts',
    tier: 'Tier 5–6 Dead-Zone & Concrete-Labyrinth Spectrum (Incomplete Soul)',
    formationVector: 'Coalesces in abandoned subway tunnels, brutalist concrete towers, dead shopping arcades, and rain-slicked 3:00 AM back alleys',
    entities: [
      'The Concrete-Genius', 'The Third-Rail Wraith', 'The High-Rise Jumper Shade', 'The Flickering-Fluorescent', 'The Subway-Tunnel Echo',
      'The Dead-Mall Phantasm', 'The Overpass-Watcher', 'The Stairwell-Loop Spirit', 'The Basement-Boiler Lurker', 'The Wet-Asphalt Fetch'
    ]
  },
  {
    id: 'astral-24-contagion',
    category: '24. Contagion, Fever-Dream & Plague-Miasma Spirits',
    tier: 'Tier 6 Quarantine-Dread & Delirium Spectrum (Incomplete Soul)',
    formationVector: 'Precipitates from quarantined wards, collective fear of unseen infection, and 105°F fever hallucinations',
    entities: [
      'The Fever-Dream Fetch', 'The Quarantine-Shade', 'The Pestilence-Crow', 'The Dry-Rattle Wraith', 'The Pox-Weaver',
      'The Delirium-Spinner', 'The Miasma-Hound', 'The Ward-Bell Phantom', 'The Cold-Sweat Clinger', 'The Plague-Pit Apparition'
    ]
  },
  {
    id: 'astral-25-bibliophilic',
    category: '25. Forbidden Grimoire, Cursed-Script & Archive Spirits',
    tier: 'Tier 6 Lead-Vitriol Ink & Cursed-Text Spectrum (Incomplete Soul)',
    formationVector: 'Nests inside Solomonic scrolls, lead-bound grimoires, and forbidden archives—feeding on the obsession of scholars who read them',
    entities: [
      'The Marginalia-Imp', 'The Vitriol-Ink Drinker', 'The Clause-Seal Wraith', 'The Dead-Tongue Whisperer', 'The Parchment-Rot Spirit',
      'The Palimpsest-Shade', 'The False-Rubric', 'The Archive-Eidolon', 'The Unspoken-Page', 'The Chained-Tome Guardian'
    ]
  },
  {
    id: 'astral-26-social-gps',
    category: '26. Social-Fear, Paranoia & Scapegoat Phantoms',
    tier: 'Tier 5–6 Category-4 Limbic & Social-Panic Spectrum (Incomplete Soul)',
    formationVector: 'Spawned directly from Category 4 human social terror: public humiliation, mob paranoia, exile, envy, and obsessive self-loathing',
    entities: [
      'The Scapegoat-Shade', 'The Cracked-Mirror Envy', 'The Impostor-Double', 'The Mob-Whisper', 'The Paranoia-Stalker',
      'The Rumor-Swarm', 'The Golden-Idol Egregore', 'The Public-Shame Wraith', 'The Sycophant-Echo', 'The Outcast-Fetch'
    ]
  },
  {
    id: 'astral-27-cryo-famine',
    category: '27. Cryo-Famine, Permafrost & Starvation Wraiths',
    tier: 'Tier 6 Deep-Winter & Famine-Trauma Spectrum (Incomplete Soul)',
    formationVector: 'Coalesces in snowbound mountain passes, starved sieges, and the paradoxical warmth-delusions of fatal hypothermia',
    entities: [
      'The Paradox-Warmth Shade', 'The Frostbite-Whisper', 'The Starvation-Walker', 'The Whiteout-Mirage', 'The Ice-Crevasse Groan',
      'The Gnawing-Preta', 'The Permafrost-Memory', 'The Black-Ice Lurker', 'The Snow-Sleep Lullaby', 'The Lean-Winter Egregore'
    ]
  },
  {
    id: 'astral-28-kill-effect-relics',
    category: '28. Supernatural Kill-Effect & Cursed-Relic Haunts',
    tier: 'Tier 6 En-Grafted MWI Finisher & Relic Residue (Incomplete Soul)',
    formationVector: 'Bound into reactive mythic weapons, executioner blades, and Nether-relics; manifests during lethal strikes to trigger exaggerated MWI Supernatural Kill Effects (calcification, sub-dermal ember bursts, ash-vaporization)',
    entities: [
      'The Calcification-Wraith', 'The Ember-Burst Imp', 'The Ash-Pillar Shade', 'The Smoking-Boot Phantom', 'The Magma-Vein Haunt',
      'The Salt-Statue Spirit', 'The Glass-Shatter Eidolon', 'The Fuller-Groove Leech', 'The Execution-Notch Ghost', 'The Finisher-Silhouette'
    ]
  },
  {
    id: 'astral-29-extinct-epochs',
    category: '29. Extinct-Epoch & Deep-Time Remnant Shades',
    tier: 'Tier 6 Pre-Human & Vanished-Epoch Stratum (Incomplete Soul)',
    formationVector: 'Ancient Astral fossils left behind by extinct pre-human civilizations and conquered deep-time worlds ("Chapters of the Past")',
    entities: [
      'The First-Epoch Shade', 'The Sunken-Continent Lament', 'The Megalith-Eidolon', 'The Cyclopean-Ruin Ghost', 'The Pre-Flood Mourner',
      'The Ash-Era Wraith', 'The Obsidian-Monolith Spirit', 'The Dead-Sun Shade', 'The Extinct-Tongue Echo', 'The Fossil-Poltergeist'
    ]
  },
  {
    id: 'astral-30-psychic-internet',
    category: '30. Psychic-Internet & Telepathic-Veil Drifters',
    tier: 'Tier 6 Collective Astral-Network & Telepathic Spectrum (Incomplete Soul)',
    formationVector: 'Native drifters, couriers, and predators of the collective Psychic Internet (the vibrational-telepathic veil connecting pre-cognitive minds across the world)',
    entities: [
      'The Veil-Courier', 'The Thread-Watcher', 'The Mind-Bridge Warden', 'The Telepathic-Lure', 'The Dream-Crossroads Walker',
      'The Astral-Hound', 'The Severed-Cord Shade', 'The Collective-Panic Bell', 'The Ley-Current Drifter', 'The Threshold-Door Sentinel'
    ]
  }
];

// 4B. HOW RACES ARE MADE VS. HOW ASTRAL ENTITIES ARE DISTINCTIVELY MADE (CANONICAL 6-RULE DOCTRINE)
export const ASTRAL_CONSTRUCTION_DOCTRINE: AstralConstructionRule[] = [
  {
    id: 'ac-rule-1',
    ruleNumber: 1,
    title: 'Incomplete Soul Ontology (Sub-Soul < 1 vs. Full Soul 1 + Soul 2)',
    standardRaceMechanism: 'Standard biological and Netherbound races (Categories 3–5) possess a complete, anchored Soul 1 (linear time continuity) and Soul 2 (MWI branching shadow across timelines).',
    astralEntityMechanism: 'An Astral Entity is NEVER a complete soul. It is a fractional, incomplete soul fragment (< Soul 1). By hard cosmological law, the moment an Astral entity gathers a complete soul, it ceases to be an Astral entity and crosses over into Tier 7 Semi-Spiritual Soulhood.',
    canonicalImplication: 'Destroying an Astral Entity never triggers a linear Soul 1 Nuke, because there is no complete Soul 1 core to detonate.'
  },
  {
    id: 'ac-rule-2',
    ruleNumber: 2,
    title: 'Pre-Cognitive Simulation Byproduct ("Astral Trails") vs. Lineage & Evolution',
    standardRaceMechanism: 'Created through multi-generational evolution, deep-time Nether adaptation ("Chapters of the Past"), or dynastic bloodline inheritance with physical/semi-spiritual anatomy.',
    astralEntityMechanism: 'Have zero biological parents, DNA, or breeding cycles. Whenever Category 3, 4, or 5 minds run pre-cognitive simulations weighted with emotion (fear, anger, shame, desire, awe), those mental projections shed unseen wakes into the world ("Astral Trails") that pool and curdle into autonomous Astral species.',
    canonicalImplication: 'Every city, battlefield, or haunted district passively spawns new Astral species purely from the pre-cognitive dread and beliefs of its inhabitants.'
  },
  {
    id: 'ac-rule-3',
    ruleNumber: 3,
    title: 'The Vibrational Spectrum & Telepathic Veil ("The Psychic Internet") vs. Physical Mass',
    standardRaceMechanism: 'Inhabit physical spacetime or heavy semi-spiritual Nether matter with real mass, inertia, and anatomy.',
    astralEntityMechanism: 'Inhabit the Psyche Vibrational Spectrum + Telepathy—operating across the unseen "Psychic Internet" that links minds, shadows, mirrors, and internal mindscape tanks.',
    canonicalImplication: 'Physical blows pass through them unless backed by Somatic Ki (Gō-Ki / Yō-Ki), Solomonic pactional bindings, or Chaldean suffumigation smoke.'
  },
  {
    id: 'ac-rule-4',
    ruleNumber: 4,
    title: 'The 10⁹× (Billion-Fold) Gulf Between Tier 5 (Low-Astral) & Tier 6 (True Astral)',
    standardRaceMechanism: 'Scale through bloodline density, somatic training, and the Grade 1–7 complexity of their loaded AMRs.',
    astralEntityMechanism: 'Divided by a massive 10⁹× (one-billion-fold) qualitative gulf: Tier 5 holds fleeting low-astral wakes (Astral Trails, Apparitions, Phantoms, Eidolons, Wraiths), while Tier 6 holds full folkloric and occult entities (Ghosts, Jinns, Specters, Banshees, Poltergeists, Un-Born, Nachzehrer, Pretas, Gulon, Keres).',
    canonicalImplication: 'A Tier 5 Eidolon is a fleeting sensory afterimage, whereas a Tier 6 Jinn, Banshee, or Nachzehrer is a billion times denser in psychic weight and can tear apart a room or a human mind.'
  },
  {
    id: 'ac-rule-5',
    ruleNumber: 5,
    title: 'The Illusion of Myths (Shaped by Belief & Dread) vs. Grounded Anatomical Proportions',
    standardRaceMechanism: 'Bound by functional biomechanics, skeletal mass, and grounded proportions (or, for Noble Demons, high-density patrician sovereignty).',
    astralEntityMechanism: 'Governed by "The Illusion of Myths"—because they condense out of collective folklore, nightmares, and urban legends, their silhouettes take on exaggerated, paradoxical, or symbolic shapes matching what local minds fear or revere.',
    canonicalImplication: 'An Astral entity’s appearance is a direct mirror of the cultural trauma, superstition, or mythic archetype that birthed it.'
  },
  {
    id: 'ac-rule-6',
    ruleNumber: 6,
    title: 'The 50! Astral Economy: Internal-Tank AMR Fermentation & Gatekept Framework Enforcement',
    standardRaceMechanism: 'Rule territories, wage wars, and wield AMRs across the mortal world and the 29 Underworld Sectors.',
    astralEntityMechanism: 'Outnumber all physical beings by an astronomical factor (50!). They serve two indispensable roles in the world’s power economy: (1) cultivated inside a Noble Demon’s or Netherbounder’s internal mindscape tank to ferment negative emotional loops into usable AMRs, and (2) bound as automatic enforcement spirits that hunt, memory-wipe, or gaslight uninitiated mortals who pry into Gatekept Occult Frameworks.',
    canonicalImplication: 'Every Mindscape Overlap and every Gatekept Framework relies on this unseen 50! ecology of Astral entities.'
  }
];

// 4C. 11 EXPANDED RACE CATEGORIES ACROSS THE COSMOLOGY (+145 RACES -> 670 TOTAL RACES & ASTRAL SPECIES)
export const EXPANDED_RACE_CATEGORIES: ExpandedRaceCategory[] = [
  {
    id: 'exp-cat1-macro-biomass',
    categoryName: '1. Category 1 Primeval Flora, Abyssal Leviathans & Zero-Simulation Behemoths (12 Races)',
    ontologicalTier: 'Category 1 (Purely Physical & Zero-Simulation Life)',
    cognitionTier: 'Tier 1 (Zero Pre-Cognitive Simulation / Zero Astral Wake)',
    constructionMechanism: 'Colossal flora, deep-crust worms, and abyssal leviathans that operate purely on instinct and physical reflex without pre-cognitive future simulation. Because they never mentally simulate tomorrow, they shed zero Astral Trails—making them completely invisible to telepathic radar and spirit-sight.',
    associatedFuelOrKi: 'Version 0 Gen-Ki (Raw Crushing Mass, Metabolic Heat & Physical Momentum)',
    restrictorPlate: 'Zero MWI magic capability and zero Astral presence; operates strictly through raw physical mass and environment-shaping biology.',
    races: [
      { name: 'The Earth-Swallower Worms', epithet: 'Deep-Mantle Grazers', morphologyAndTrait: 'Mile-long, blind worms plated in grey slate that grind through mountain roots without a single pre-cognitive thought.' },
      { name: 'The Iron-Root Forests of Old', epithet: 'Rust-Bark Groves', morphologyAndTrait: 'Continent-spanning timberlands whose iron-hard roots drink mineral veins and ground out natural lightning.' },
      { name: 'The Blind Chasm-Whales', epithet: 'Deep-Trench Leviathans', morphologyAndTrait: 'Slumbering white-skinned leviathans of the sunless sea-trenches whose slow heartbeats stir deep ocean currents.' },
      { name: 'The Glass-Coral Striders', epithet: 'Salt-Reef Walkers', morphologyAndTrait: 'Sightless, many-legged reef-behemoths that carry towering spires of sea-glass across the ocean floor.' },
      { name: 'The Caldera-Serpents', epithet: 'Ash-Throat Wyrms', morphologyAndTrait: 'Slumber coiled inside volcanic craters for centuries, waking only to feed on molten sulfur and pumice.' },
      { name: 'The Ash-Spore Drifters', epithet: 'Black-Cloud Blooms', morphologyAndTrait: 'Silent, drifting fungal canopies that float on high mountain winds and rain sleeping-ash over valleys.' },
      { name: 'The Basalt-Herd Grazers', epithet: 'Stone-Hoofed Behemoths', morphologyAndTrait: 'Broad-backed, six-legged herd beasts whose bellies grind raw coal and limestone into black diamond scutes.' },
      { name: 'The Bitter-Sea Shoals', epithet: 'Brine-Crusted Leviathans', morphologyAndTrait: 'Vast, floating islands of salt-crusted shell and weed that drift across dead inland seas.' },
      { name: 'The Lodestone-Groves', epithet: 'Iron-Drawing Trees', morphologyAndTrait: 'Twisted black-timber woods whose sap is heavy with lodestone, wrenching iron blades and mail from travelers’ hands.' },
      { name: 'The Mountain-Barnacles', epithet: 'Cliff-Face Filterers', morphologyAndTrait: 'House-sized shells fused to sheer mountain crags that drink the mist and hail of high passes.' },
      { name: 'The Hearth-Core Corals', epithet: 'Deep-Fire Reefs', morphologyAndTrait: 'Crimson stone-growths that bloom like thorny roses along the banks of subterranean magma rivers.' },
      { name: 'The Storm-Cloud Medusae', epithet: 'Sky-Drifting Bells', morphologyAndTrait: 'Vast, translucent bells that drift inside thunderheads, trailing mile-long tendrils of raw lightning.' }
    ]
  },
  {
    id: 'exp-cat2-thinking-nodes',
    categoryName: '2. Category 2 Formless Thinking Geometries & Living World-Laws (12 Races)',
    ontologicalTier: 'Category 2 (Category X — Formless Thinking Presences)',
    cognitionTier: 'Tier 2–3 Non-Emotional Spatial & Geometric Intelligence',
    constructionMechanism: 'Directly from the Category 2 canon: entities that have ZERO physical body and ZERO emotional drives, yet actively think, measure, and reshape local reality like living spatial laws or unseen architectural presences.',
    associatedFuelOrKi: 'Ambient Spatial & Environmental Alignment',
    restrictorPlate: 'Zero ego, zero fear, and zero survival instinct; bound strictly to their ancient geometric or environmental rule.',
    races: [
      { name: 'The Silent Ordinances', epithet: 'Unseen Measure-Keepers', morphologyAndTrait: 'Bodiless presences in forgotten sanctuaries that crush any stone or pillar built out of true geometric measure.' },
      { name: 'The Star-Tide Currents', epithet: 'Night-Sky Drifters', morphologyAndTrait: 'Unseen tides of cold, bodiless thought that flow down when certain dead stars cross the winter zenith.' },
      { name: 'The Horizon-Watchers', epithet: 'Edge-of-the-World Presences', morphologyAndTrait: 'Formless weights that sit upon desolate mountain ridges, turning travelers back by folding the path.' },
      { name: 'The Mirror-Mist of Vael', epithet: 'Twin-Shaping Fog', morphologyAndTrait: 'A pale, thinking mist that forces every tree, stone, and ruin within it to grow an exact symmetrical twin.' },
      { name: 'The Labyrinth-Turners', epithet: 'Hall-Twisting Wills', morphologyAndTrait: 'Silent, bodiless intelligences dwelling in sunken keeps that slowly fold corridors back upon themselves.' },
      { name: 'The Seventh-Hour Tides', epithet: 'Bell-Measure Currents', morphologyAndTrait: 'Invisible ordinances that allow fire to burn or blood to spill only upon every seventh interval.' },
      { name: 'The Unspoken Verdicts', epithet: 'Oath-Weighing Winds', morphologyAndTrait: 'Cold, thinking currents that snuff out every hearth and torch in a hall the instant a falsehood is spoken.' },
      { name: 'The Red-Sky Omens', epithet: 'High-Gale Presences', morphologyAndTrait: 'Thinking tempests that arrange storm-clouds into vast geometric patterns before a dynasty falls.' },
      { name: 'The Hollow-Wind Voices', epithet: 'Canyon-Carving Thoughts', morphologyAndTrait: 'Bodiless wills that whistle through desert gorges, eroding cliff-faces into intricate acoustic chambers.' },
      { name: 'The Way-Benders', epithet: 'Road-Lengthening Wills', morphologyAndTrait: 'Silent presences of the old roads that stretch a three-mile walk into a three-day march.' },
      { name: 'The Stillness-of-Ashes', epithet: 'Sorting-Winds of the Waste', morphologyAndTrait: 'Quiet, unseen currents that endlessly sort the bones and cinders of ruined cities by weight and age.' },
      { name: 'The Stone-Lock Presences', epithet: 'Time-Freezing Wards', morphologyAndTrait: 'Formless wills that lock decaying ruins in eternal stillness until a living foot crosses the threshold.' }
    ]
  },
  {
    id: 'exp-cat3-memoryless-calculators',
    categoryName: '3. Category 3 Passionless & Memoryless Pre-Cognitive Races (15 Races)',
    ontologicalTier: 'Category 3 (Category X — Emotionless, Memoryless Pre-Cognitive Species)',
    cognitionTier: 'Tier 3–5 (Real-Time Pre-Cognitive Simulation Without Emotion or Long-Term Memory)',
    constructionMechanism: 'Directly from the Category 3 canon: the minimum cognitive threshold required to use MWI Magic consistently. These unsettling races have zero emotional drives (no fear, anger, grief, or shame) and no long-term autobiographical memory ("they don\'t learn from past mistakes, they lack long-term memory, they learn by the way, predict by the way"). Because their pre-cognitive simulations are never clouded by panic or trauma, they cast Grade 1–2 AMRs with terrifying, mechanical calm.',
    associatedFuelOrKi: 'Unclouded Grade 1–2 Pre-Cognitive AMRs',
    restrictorPlate: 'Zero long-term memory Retention: if an opponent survives their immediate pre-cognitive window and breaks their rhythm, they cannot remember the opponent’s past feints and must re-read them from scratch.',
    races: [
      { name: 'The Ephemerids of the White Fen', epithet: 'Twelve-Breath Seers', morphologyAndTrait: 'Pale, slender reed-folk whose memory clears with every twelfth breath, firing Grade 1–2 AMRs with unclouded stillness.' },
      { name: 'The Sightless Oracles of Kael', epithet: 'Hundred-Eyed Diviners', morphologyAndTrait: 'Tall, veiled figures crowned with rings of unblinking eyes that pre-cognitively simulate every projectile before it is loosed.' },
      { name: 'The Lethe-Water Dwellers', epithet: 'Unmourning Deep-Folk', morphologyAndTrait: 'Silent, web-fingered scholars of subterranean lakes who wash away their own yesterday after every spell.' },
      { name: 'The Star-Abacus Monks', epithet: 'Cold-Measure Astrologers', morphologyAndTrait: 'Six-armed, stone-pale ascetics who cast flawless spatial magic yet never remember why their monastery went to war.' },
      { name: 'The Glass-Browed Mantids', epithet: 'Clear-Skulled Seers', morphologyAndTrait: 'Stalking hunters of the salt-wastes whose translucent brows shimmer with real-time pre-cognitive strike paths.' },
      { name: 'The Unmourning Masons', epithet: 'Builders of the Shifting Spires', morphologyAndTrait: 'Raise cyclopean stone towers in complete silence and walk away the instant the immediate simulation ends.' },
      { name: 'The Locust-Seers of Vael', epithet: 'Swarm-Augurs', morphologyAndTrait: 'Winged covenants where each individual holds a single branch of immediate pre-cognitive simulation.' },
      { name: 'The Mist-Pilots of the Shallows', epithet: 'Nameless Ferry-Guides', morphologyAndTrait: 'Long-limbed helmsmen whom no illusion or fear-aura can shake because they possess neither fear nor yesterday.' },
      { name: 'The Fate-Loom Spiders', epithet: 'White-Silk Weavers', morphologyAndTrait: 'Ancient cavern-weavers whose webs map the next hour’s bloodshed, only to be eaten and spun anew.' },
      { name: 'The Cold-Blooded Augurs', epithet: 'Still-Hearted Marsh-Lords', morphologyAndTrait: 'Serpent-eyed marsh nobles whose pulse never quickens even as they call down lightning AMRs upon an army.' },
      { name: 'The Painless Synod', epithet: 'Ashen-Skinned Tacticians', morphologyAndTrait: 'An emotionless order that feels neither wound nor terror, reading the battlefield purely in the present tense.' },
      { name: 'The Counter-Chant Choir', epithet: 'Present-Breath Singers', morphologyAndTrait: 'Weave counter-spells on the breath of the moment and forget the chant the instant silence falls.' },
      { name: 'The Blind Whale-Singers', epithet: 'Deep-Current Prophets', morphologyAndTrait: 'Sea-giants who map shifting probability currents through low, echoing songs across dark water.' },
      { name: 'The Tomorrow-Wind Hawks', epithet: 'Eyeless Crag-Raptors', morphologyAndTrait: 'Pre-cognitively simulate wind currents eight heartbeats ahead, striking prey where it is about to dodge.' },
      { name: 'The Still-Bell Wardens', epithet: 'Bronze-Hearted Sentinels', morphologyAndTrait: 'Keepers of border-shrines whose emotionless pre-cognitive focus dampens wild Astral wakes within earshot.' }
    ]
  },
  {
    id: 'exp-cat4-biomanifold-civilizations',
    categoryName: '4. Category 4 Non-Human Mortal Kindreds & Bio-Manifold Civilizations (15 Races)',
    ontologicalTier: 'Category 4 (Mortal Species with Full Emotion, Memory & Pre-Cognitive Wakes)',
    cognitionTier: 'Tier 2–6 (Full Emotional Drives + Long-Term Memory + Astral Trail Generation)',
    constructionMechanism: 'Parallel mortal civilizations to Humanity. Like humans, they possess full emotional drives (fear, wrath, shame, attachment, pride) wired into long-term memory and pre-cognitive simulation—meaning they shed rich Astral Trails into the Psychic Internet, though shaped by their own unique biology and ancient taboos.',
    associatedFuelOrKi: 'Emotion-Weighted Pre-Cognitive AMRs & Somatic Ki (Ichirei Shikon)',
    restrictorPlate: 'Like humanity, they are naturally blind to the unseen Astral wakes they shed and are heavily farmed by Category 5 Nether-entities.',
    races: [
      { name: 'The Shell-Shedding Kin of Kael-Vor', epithet: 'Carapace-Mourning Folk', morphologyAndTrait: 'Tall, shell-armored warriors whose deepest vulnerability and dread is the soft-skinned week of the autumn molt.' },
      { name: 'The Twin-Bound Coral Peoples', epithet: 'Tide-Wedded Dwellers', morphologyAndTrait: 'Sea-cliff kindreds bonded in life-long pairs; when one dies, the survivor’s grief-wake turns the surrounding reef to black salt.' },
      { name: 'The Amber-Hives of the South', epithet: 'Incense-Sworn Matriarchies', morphologyAndTrait: 'Ancient walled cities where royal wrath is carried on scented smoke, rousing ten thousand spears in a single breath.' },
      { name: 'The Deep-Lantern Peoples', epithet: 'Sunless-Sea Pilgrims', morphologyAndTrait: 'Pale-skinned abyssal folk whose brows glow with golden light when gripped by sacred awe.' },
      { name: 'The Night-Winged Clans of the Crags', epithet: 'Echo-Sworn Highlanders', morphologyAndTrait: 'Leathery-winged mountain clans who sing their blood-feuds and marriage vows across moonlit gorges.' },
      { name: 'The Root-Sworn Myconids', epithet: 'Barrow-Moss Elders', morphologyAndTrait: 'Ancient forest-folk who bury their dead beneath their own feet, sharing the memories of ten generations through the soil.' },
      { name: 'The Sun-Stone Saurians', epithet: 'Gold-Scaled Dynasty Lords', morphologyAndTrait: 'Proud, sun-worshipping lizard-kings whose blood runs like molten copper when their honor is slighted.' },
      { name: 'The North-Horned Nomads', epithet: 'Star-Guided Herd-Folk', morphologyAndTrait: 'Great-horned wanderers of the tundra who feel a physical pull in their bones whenever an oath to the clan is broken.' },
      { name: 'The Twin-Hearted Sky-Folk', epithet: 'High-Aerie Nobles', morphologyAndTrait: 'Feathered cliff-lords whose two hearts beat in unison with their sworn shield-brother across leagues of sky.' },
      { name: 'The Winter-Dreaming Ursines', epithet: 'Barrow-Sleeping Sages', morphologyAndTrait: 'Towering, fur-cloaked giants whose four-month winter slumbers fill the northern valleys with shared prophetic dreams.' },
      { name: 'The Shifting-Skin Elders', epithet: 'Truth-Marked Coast-Folk', morphologyAndTrait: 'Sea-peoples who cannot speak a falsehood without their skin flushing with the colors of their secret fear.' },
      { name: 'The Grave-Keeping Behemoths', epithet: 'Four-Tusked Chroniclers', morphologyAndTrait: 'Towering, grey-hided ancients who remember every treaty and betrayal for five hundred years, weeping tears that harden into amber.' },
      { name: 'The Silk-Matriarchs of the Loom', epithet: 'Web-Walled Queens', morphologyAndTrait: 'Spin fortress-curtains of iron-tough silk to guard their young, infused with fierce maternal Nigi-Ki.' },
      { name: 'The Singing-Quartz Clans', epithet: 'Cavern-Chime Artisans', morphologyAndTrait: 'Dwellers in deep crystal vaults whose ancestral songs of longing make the mountain veins hum with lightning.' },
      { name: 'The Moon-Tide Peoples', epithet: 'Silver-Shoal Mariners', morphologyAndTrait: 'Island kindreds whose blood-rage and sorrow rise and fall with the pull of the moons.' }
    ]
  },
  {
    id: 'exp-cat5-benevolent-symbiotes',
    categoryName: '5. Category 5 Custodial, Covenant & Non-Malevolent Sovereigns (12 Races)',
    ontologicalTier: 'Category 5 (Category X — Non-Malicious & Custodial Spectrum Counterparts)',
    cognitionTier: 'Tier 7–9 (Full Soul 1 + Soul 2 MWI Sovereignty)',
    constructionMechanism: 'Directly from the Category 5 canon: "they aren\'t always malicious... other entities that aren\'t malevolent exist on the other end of the spectrum." While Netherbound Category 5s harvest negative emotional loops (terror, despair, obsession), these austere, awe-inspiring Category 5 beings cultivate positive, custodial resonance—kept oaths, guest-right, valor under siege, and willing self-sacrifice.',
    associatedFuelOrKi: 'Custodial Covenant & Valor-Charged Grade 2–4 AMRs',
    restrictorPlate: 'Because mortal terror is quick and easy while true trust and courage are fragile, a single act of treachery or oath-breaking within their warded circle shatters theirAMR flow on the spot.',
    races: [
      { name: 'The Eunoia-Weavers', epithet: 'Lords of the Unbroken Circle', morphologyAndTrait: 'Multi-winged figures of tarnished gold who weave the courage of a besieged town into an unbreakable Turn Field.' },
      { name: 'The Six-Winged Covenant Seraphim', epithet: 'Keepers of the Sworn Word', morphologyAndTrait: 'Towering brass-and-ivory guardians whose internal vessels fill with white fire only when mortals keep a deadly oath.' },
      { name: 'The Soul-Sworn Custodians', epithet: 'Willing-Bond Spirits', morphologyAndTrait: 'Ancient, noble presences that bind themselves only to consenting champions, sharing both wounds and power.' },
      { name: 'The Pillar-Judges of the Market', epithet: 'Scales-of-Salt Arbiters', morphologyAndTrait: 'Tall, porcelain-masked magistrates who turn honest trade and kept treaties into warded city walls.' },
      { name: 'The Martyr’s-Bell Sovereigns', epithet: 'Toll-Keepers of the Fallen', morphologyAndTrait: 'Solemn, bell-chested ancients who catch the final breath of a hero dying for his kin and forge it into a high-grade AMR.' },
      { name: 'The Hearth-Right Giants', epithet: 'Lords of Bread and Salt', morphologyAndTrait: 'Ash-bearded giants bound to the oldest law of hospitality; invincible beneath any roof where a stranger was honestly sheltered.' },
      { name: 'The Lion-Crowned Wardens', epithet: 'Aegis of the Cradle', morphologyAndTrait: 'Fierce, golden-maned guardians drawn to the side of parents standing between monsters and their children.' },
      { name: 'The Sanctuary-Builders', epithet: 'Threshold-Consecrators', morphologyAndTrait: 'Silent monastic beings whose footsteps bless the ground so deeply that drawn weapons grow too heavy to lift.' },
      { name: 'The Mercy-Blades', epithet: 'Collectors of the Spared Stroke', morphologyAndTrait: 'Silver-armored knights who harvest the grace released when a conqueror stays his hand and spares a beaten foe.' },
      { name: 'The Choir-Lords of the Vigil', epithet: 'Night-Watch Harmonists', morphologyAndTrait: 'Gather the whispered prayers and vigils of a thousand hearths into a single dawn-breaking Turn Field.' },
      { name: 'The Mirror-Scales of Justice', epithet: 'Twin-Faced Arbiters', morphologyAndTrait: 'Solemn sovereigns under whose gaze every strike dealt in malice is carved simultaneously into the striker’s own flesh.' },
      { name: 'The Lantern-Bearers of Rest', epithet: 'Cleaners of the Troubled Field', morphologyAndTrait: 'Gentle, hooded guides who drink the bitter hauntings of old battlefields and exhale quiet, restorative dew.' }
    ]
  },
  {
    id: 'exp-cat5-netherbounder-postspecies',
    categoryName: '6. Category 5 Netherbounder Deep-Time Post-Species ("Chapters of the Past" / All Tomorrows Scale — 20 Races)',
    ontologicalTier: 'Category 5 (Nether-Bounded Conquered Species & Deep-Time Post-Species)',
    cognitionTier: 'Tier 6–9 (Reshaped Servitor & Siege Castes to Ancient Survivor Bloodlines)',
    constructionMechanism: 'Inspired by the deep-time evolutionary trauma of All Tomorrows and "Chapters of the Past": these are once-proud mortal kingdoms, alien civilizations, and elder races dragged across the Nether-veil millions of years ago. Stripped of their native skies and reshaped across eons of crushing Nether pressure, war, and selective breeding by the Great Houses, 99% were warped into grotesque, tragic post-species specialized for siege warfare, dread-fermentation, or living architecture.',
    associatedFuelOrKi: 'Negative-Loop Fermented AMRs (Liquid Fuel Tanks, Solid Rock Chunks & Gas Reserves)',
    restrictorPlate: 'Carry the permanent anatomical and psychological scars of what their ancestors were forced to become in the Nether; dependent on negative-loop AMR harvesting to stave off atrophy.',
    races: [
      { name: 'The Stilt-Striders of the Slag-Seas', epithet: 'Forty-Foot Ash-Waders', morphologyAndTrait: 'Once a proud royal people of high plains, stretched across eons into gaunt, forty-foot lookouts wading through boiling lakes of slag.' },
      { name: 'The Weeping-Wall Tapestries of Dis', epithet: 'Colonial Flesh-Curtains', morphologyAndTrait: 'A conquered philosopher-race flattened and colonialized into living, sentient tapestries that line the halls of Dis, filtering miasma and weeping liquid AMR fuel.' },
      { name: 'The Bone-Spire Singers', epithet: 'Living Siren-Towers', morphologyAndTrait: 'Rooted permanently into basalt crags, their hollowed ribcages catch the Nether-gales to broadcast terrifying infrasound loops across fifty leagues.' },
      { name: 'The Crushed-Slab Bearers', epithet: 'High-Gravity Siege-Crawlers', morphologyAndTrait: 'Compressed by eons in the deepest, heaviest pits into wide, six-limbed, iron-shelled crawlers that carry entire siege-citadels on their backs.' },
      { name: 'The Blind Pact-Processors', epithet: 'Coral-Brained Chroniclers', morphologyAndTrait: 'Eyeless descendants of a conquered sage-species whose overgrown skulls are used as living archives to cross-reference millions of Solomonic treaty clauses.' },
      { name: 'The Twin-Grafted Riders', epithet: 'Host-and-Hulk Post-Species', morphologyAndTrait: 'Two vanished rebel races fused by ancient punishment into one: a cunning, atrophied strategist grown permanently into the open cervical spine of a headless war-brute.' },
      { name: 'The Censer-Lung Dredgers', epithet: 'Bellows-Chested Thralls', morphologyAndTrait: 'Swollen-chested post-humans tethered to bronze chains who inhale raw brimstone ash and exhale dense Chaldean suffumigation smoke.' },
      { name: 'The Seven-Hearted Distillers', epithet: 'Living AMR-Vintners', morphologyAndTrait: 'Gaunt, translucent-veined court attendants whose seven sequential hearts refine raw mortal terror into high-grade liquid AMR draughts.' },
      { name: 'The Cathedral-Skulled Heralds', epithet: 'Telepathic Horn-Bearers', morphologyAndTrait: 'Bear elongated, vaulted acoustic skulls that project their Sovereign Lord’s nightmares directly into the sleeping minds of mortal cities.' },
      { name: 'The Obsidian-Keel Trenchers', epithet: 'Breast-Plow Earthmovers', morphologyAndTrait: 'Descendants of an avian species whose keels thickened into massive black-glass plows for carving siege-trenches through bedrock.' },
      { name: 'The Vault-Ribbed Carriers', epithet: 'Living Ammo-Caissons', morphologyAndTrait: 'Bred by the Great Houses with padlocked iron-and-bone ribcages to transport volatile, solid-chunk Grade 3 AMRs across war fronts.' },
      { name: 'The Wall-Mortared Oracles', epithet: 'Battlement-Grafted Seers', morphologyAndTrait: 'Conquered Category 3 seers mortared alive into fortress walls to pre-cognitively simulate incoming artillery and spell trajectories.' },
      { name: 'The Phlegethon Dredgers', epithet: 'Magma-Gill Divers', morphologyAndTrait: 'Silicate-scaled divers who plunge into rivers of liquid flame to salvage sunken Soul-stones and ancient relics.' },
      { name: 'The Dead-Star Navigators', epithet: 'Void-Bough Pilots', morphologyAndTrait: 'Ancient wanderers whose eyes still reflect constellations that died millions of years ago, guiding war-fleets between realms.' },
      { name: 'The Chasm-Leaper Stalkers', epithet: 'Reverse-Kneed Ambushers', morphologyAndTrait: 'Gaunt, locust-limbed post-predators that bound silently up sheer subterranean cliffs to drag sentries into the dark.' },
      { name: 'The Mirror-Skinned of Paimon', epithet: 'Quicksilver Courtiers', morphologyAndTrait: 'Clothed in living, mercury-reflective dermis that bends ray-traced light and heat in the Glass Wastes of Paimon.' },
      { name: 'The Gut-Forge Smiths', epithet: 'Internal-Crucible Artisans', morphologyAndTrait: 'Swallow raw meteoric iron and nightshade oil, regurgitating red-hot alloy talismans already etched with Decanic sigils.' },
      { name: 'The Sinew-Bridge Weavers', epithet: 'Barathron Chasm-Spinners', morphologyAndTrait: 'Draw leagues of bone-white tendon cord from their own wrists to rig swaying war-bridges across bottomless rifts.' },
      { name: 'The Deep-Stratum Miners', epithet: 'Spiral-Horned Delvers', morphologyAndTrait: 'Tunnel into the oldest geological layers of the Underworld to quarry petrified veins of extinct-epoch AMRs.' },
      { name: 'The First-Mask Mimics', epithet: 'Early-Epoch Lure-Nobles', morphologyAndTrait: 'Surviving transitional bloodlines showing the eerie halfway point when monstrous Nether-entities first began sculpting human-like patrician faces.' }
    ]
  },
  {
    id: 'exp-inverted-manifold-castes',
    categoryName: '7. The Six Inverted Beast-Manifolds & Outer-Bough Apex Castes (15 Races)',
    ontologicalTier: 'Category 5 (Inverted Beast-Manifold Sovereign Apex Castes)',
    cognitionTier: 'Tier 6–8 Predatory Pre-Cognitive Sovereignty',
    constructionMechanism: 'Native to the 6 Inverted Beast-Manifolds hanging from the outer boughs of the Void-Tree (Bast-Irkalla, Mal-Caballus, Canis-Hades, Ophi-Nadir, Vespa-Tartaros, Corvus-Gallow), where non-human predatory archetypes evolved into towering demonic royalty.',
    associatedFuelOrKi: 'Yō-Ki (Predatory Bio-Magnetic Pressure) & Manifold-Specific AMRs',
    restrictorPlate: 'Bound to the predatory laws of their specific Beast-Manifold (stalking shadow, unstoppable stampede, pack-guilt, constriction, hive-mind, or prophetic omen).',
    races: [
      { name: 'The Shadow-Severing Felines of Vepar', epithet: 'Bast-Irkalla Silent Stalkers', morphologyAndTrait: 'Eleven-foot panthers of velvet darkness whose claws sever a target’s cast shadow from their heels, paralyzing motor nerves.' },
      { name: 'The Skinless Thunder-Steeds', epithet: 'Mal-Caballus Salt-Chargers', morphologyAndTrait: 'Eight-legged war-steeds that gallop across salt-wastes faster than sound, dragging crushing barometric wakes behind them.' },
      { name: 'The Iron-Briar Cerbereans', epithet: 'Canis-Hades Three-Headed Hounds', morphologyAndTrait: 'Three-headed, slate-armored mastiffs that scent broken oaths and blood-guilt across realm borders.' },
      { name: 'The Guilt-Scenting Garmr-Kin', epithet: 'Blood-Stained Tundra Wolves', morphologyAndTrait: 'Colossal winter wolves whose baying freezes the marrow in the bones of perjurers and kin-slayers.' },
      { name: 'The Coiled Naga-Sovereigns', epithet: 'Ophi-Nadir Crushing Wyrms', morphologyAndTrait: 'Crowned serpents whose coils constrict from unseen angles, crushing armor without touching the breastplate.' },
      { name: 'The Typhonian Venom-Drakes', epithet: 'Hundred-Viper Brood', morphologyAndTrait: 'Winged draconic vipers whose black venom rots both stone fortifications and defensive Turn Fields.' },
      { name: 'The Continent-Hollowing Zebub-Queens', epithet: 'Vespa-Tartaros Hive Monarchs', morphologyAndTrait: 'Cathedral-sized wasp matriarchs whose paper-and-bone hives hang from cavern roofs, birthing swarms of bronze-stingered hornets.' },
      { name: 'The Stymphalian Bronze-Feathers', epithet: 'Corvus-Gallow Razor-Pinions', morphologyAndTrait: 'Great carrion-birds that shake their wings to loose storms of sword-sharp bronze feathers.' },
      { name: 'The Death-Prophecy Corvids of Stolas', epithet: 'Seven-Eyed Star-Ravens', morphologyAndTrait: 'Towering, seven-eyed ravens that read the night sky to speak the exact hour of a viewer’s doom.' },
      { name: 'The Silence-Cloaked Panthers', epithet: 'Sound-Drinking Ambushers', morphologyAndTrait: 'Feline lords whose coal-black fur drinks all sound and ray-traced light within ten paces.' },
      { name: 'The Salt-Flat Coursers', epithet: 'Horizon-Folding Steeds', morphologyAndTrait: 'Cross a hundred leagues of salt desert in three bounds under an eclipsed moon.' },
      { name: 'The Three-Throated Barghests', epithet: 'Bone-Shattering Pack', morphologyAndTrait: 'Graveyard hounds whose three-part howl cracks tempered steel and stone shields.' },
      { name: 'The Stone-Gaze Basilisks', epithet: 'Salt-Vitriol Vipers', morphologyAndTrait: 'Crested serpents whose heavy yellow gaze triggers an instant calcification kill-effect.' },
      { name: 'The Chitin-Locust Legions', epithet: 'Harvest-Blight Swarms', morphologyAndTrait: 'Devour both the standing grain in the field and the courage in the defender’s chest.' },
      { name: 'The Gallows-Wing Harpies', epithet: 'Noose-Talon Sky Hunters', morphologyAndTrait: 'Snatch commanders from castle battlements with long, iron-corded talons.' }
    ]
  },
  {
    id: 'exp-somatic-ki-lineages',
    categoryName: '8. Somatic-Ki Martial Clans & Bio-Tempered Lineages (12 Races)',
    ontologicalTier: 'Category 4–5 Somatic-Ki Tempered Lineages',
    cognitionTier: 'Tier 3–6 (Kushi-Ki Cranial-Nerve Reflex & Mu-Ki Zero-Signature Stealth)',
    constructionMechanism: 'Warrior clans and ascetic bloodlines that reject MWI spellcraft entirely, pushing biological tissue, bone density, blood pressure, and bio-electricity to extreme physical limits via the Four Ki Types (Ara-Ki, Nigi-Ki, Kushi-Ki, Saki-Ki) and Five Operational Versions (Gen-Ki to Mu-Ki).',
    associatedFuelOrKi: 'Pure Somatic Ki (Gen-Ki, Ren-Ki, Gō-Ki, Yō-Ki, Mu-Ki)',
    restrictorPlate: 'Zero MWI magic; hard-capped by 112°F+ internal organ heat, 200+ mmHg burst capillaries, and torn myofibrils.',
    races: [
      { name: 'The Kokotsu Iron-Bone Clans', epithet: 'Silicon-Iron Skeleton Ascetics', morphologyAndTrait: 'Look 175 lbs in volume yet weigh 265+ lbs due to silicon-iron bone calcification built to survive the recoil of their own strikes.' },
      { name: 'The Gō-Ki Steam Vanguards', epithet: '112°F Boiling-Blood Fighters', morphologyAndTrait: 'Fight in winter snows stripped to the waist, venting scalding white plumes of steam from dilated collarbone pores.' },
      { name: 'The Mu-Ki Void Walkers', epithet: 'Zero-Signature Assassins', morphologyAndTrait: 'Drop their heart rate and bio-electric output to zero for twenty minutes at a time, slipping past Astral radar like cold stone.' },
      { name: 'The Fault-Stance Monks', epithet: 'Nigi-Ki Structural Masters', morphologyAndTrait: 'Lock their pelvis and heels into the bedrock to redirect the kinetic force of a charging beast back into its own chest.' },
      { name: 'The Kushi-Ki Blind Duelists', epithet: 'Barometric-Skin Swordsmen', morphologyAndTrait: 'Ritually blinded masters whose scarred skin reads micro-barometric air shifts before an enemy’s blade leaves the scabbard.' },
      { name: 'The Shiden Bio-Static Clans', epithet: 'Purple-Arc Nerve Strikers', morphologyAndTrait: 'Overclock sodium-potassium nerve pumps to discharge high-amperage purple bio-electricity on open-palm contact.' },
      { name: 'The Crimson-Sclera Pugilists', epithet: 'Ara-Ki Overdrive Brawlers', morphologyAndTrait: 'Broad-chested fighters whose eyes flush solid crimson as hydraulic blood pressure spikes for bone-shattering bursts.' },
      { name: 'The Sinew-Bow Archers of Ashihara', epithet: 'Iron-Tendon Bowmen', morphologyAndTrait: 'Draw great horn-and-steel warbows that take four men to string, loosing shafts that punch through siege plating.' },
      { name: 'The Iron-Flesh Wardens', epithet: 'Blade-Stopping Guards', morphologyAndTrait: 'Lock myofibril density at the millisecond of impact so swung blades bounce off their forearms with a dull metallic ring.' },
      { name: 'The Kiai Thunder-Monks', epithet: 'Sub-Bass Shockwave Singers', morphologyAndTrait: 'Barrel-chested ascetics whose single shouted Kiai ruptures eardrums and shatters लकड़ी/stone shields at thirty paces.' },
      { name: 'The Cairn-Sleeping Immortals', epithet: 'Saki-Ki Hibernation Masters', morphologyAndTrait: 'Old masters sealed in stone cairns who draw one breath an hour, waiting a century for their clan’s war-horn.' },
      { name: 'The Calcified Veterans', epithet: 'Stone-Locked Elders', morphologyAndTrait: 'Ancient champions whose over-used muscles have partially mineralized into grey stone, rising for one final war.' }
    ]
  },
  {
    id: 'exp-engrafted-hybrid-lineages',
    categoryName: '9. En-Grafted Relic Hosts & Reactive-Armament Lineages (12 Races)',
    ontologicalTier: 'Category 4–5 En-Grafted Relic Hosts (Supernatural Energy Expression #6)',
    cognitionTier: 'Tier 6–8 Pre-Cognitive Mod Simulation + Relic Core Resonance',
    constructionMechanism: 'Dynasties and lone wielders whose bodies are permanently fused with En-Grafted supernatural hardware (Expression #6)—ranging from reactive tectonic dragon-gauntlets (like the CODM Mythic AK117 - Lava Remix Boosted Gear template) to Decanic star-metal gears and Solomonic treaty-brands.',
    associatedFuelOrKi: 'En-Grafted Mod AMRs + Pre-Cognitive Simulation of the Specific Relic',
    restrictorPlate: 'Operates strictly through pre-cognitive simulation of the relic’s specific mod/stages—never emotional willpower. If the host’s body cannot vent the relic’s thermal or statutory kickback, the graft consumes them.',
    races: [
      { name: 'The Tectonic Dragon-Gauntlet Hosts', epithet: 'Reactive Magma-Chamber Bearers', morphologyAndTrait: 'Wielders whose forearm is fused with a segmented obsidian-and-tungsten reactive chassis (AK117 - Lava Remix template) casting ray-traced magma caustics across five mechanical stages.' },
      { name: 'The Clause-Branded Scions', epithet: 'Living Solomonic Writ Heirs', morphologyAndTrait: 'Noble heirs born with lead-cinnabar-vitriol Pactional clauses inscribed beneath their skin, dropping local Possibility Resistance on command.' },
      { name: 'The Decanic Alloy Vessels', epithet: 'Star-Metal Gear Hosts', morphologyAndTrait: 'Warriors with nightshade-quenched iron gears etched with non-linguistic Charaktêr scratches set along their collarbones to anchor planetary currents.' },
      { name: 'The Time-Crystal Heart Lineages', epithet: 'Repeating-Pulse Bearers', morphologyAndTrait: 'Carry an En-Grafted Time-Crystal core beneath their sternum that resets their physical state across a three-second oscillation loop.' },
      { name: 'The Superionic-Vein Alchemists', epithet: 'Black-Ice Bloodlines', morphologyAndTrait: 'Old alchemical houses whose En-Grafted vessels pressurize moisture into hot, electrically conductive black superionic ice.' },
      { name: 'The Suffumigation Thurifers', epithet: 'Internal-Censer Priests', morphologyAndTrait: 'Chaldean priest-warriors whose grafted chest-vents burn henbane, sulfur, and bone-dust, exhaling dense Phantasmata-curdling smoke.' },
      { name: 'The Brass-Bell Exorcists', epithet: 'Solomonic Resonator Templars', morphologyAndTrait: 'Wear helms of consecrated Solomonic brass fused to their craniums that ring at frequencies lethal to Tier 6 Astral entities.' },
      { name: 'The Void-Sap Grafted', epithet: 'Outer-Bough Resin Hosts', morphologyAndTrait: 'Drank the bitter golden resin of the Void-Tree’s outer boughs, turning their marrow and sclera into amber.' },
      { name: 'The Aethelfire Rime Knights', epithet: 'Continuity-Strip Vanguards', morphologyAndTrait: 'Clad in dark plate fused with Aethelfire shards that strip local spatial continuity into cold crystalline fire.' },
      { name: 'The Vaelburn Core Berserkers', epithet: 'Compressed-Spacetime Hosts', morphologyAndTrait: 'Carry a Vaelburn Spark grafted to their spine that vents intense ray-traced thermal distortion when its plates unseal.' },
      { name: 'The Karma-Mirror Inquisitors', epithet: 'Diyu-Shard Judges', morphologyAndTrait: 'Replaced one eye with a polished shard of Diyu’s bronze mirror, reading every negative loop and crime in a target’s wake.' },
      { name: 'The Hundred-Shade Revenants', epithet: 'Astral-Colony Armor Hosts', morphologyAndTrait: 'Fallen champions kept walking by an En-Grafted colony of a hundred bound battlefield Astral spirits inside their plate armor.' }
    ]
  },
  {
    id: 'exp-cat6-classified-anomalies',
    categoryName: '10. Category 6 [REDACTED] Bridge Anomalies & Threshold Wardens (10 Races)',
    ontologicalTier: 'Category 6 (The Missing / Redacted Ontological Bridge Tier)',
    cognitionTier: 'Tier 10–11B (Trans-MWI Threshold Presences)',
    constructionMechanism: 'Why does the canonical table jump from Category 5 to Category 7? Because Category 6 entities are the self-redacting Threshold Wardens standing between the Many-Worlds (MWI) and the Category 7 Adjudicators—erasing their own records whenever lower beings attempt to catalog them.',
    associatedFuelOrKi: 'Trans-MWI Threshold Authority',
    restrictorPlate: 'Cannot manifest fully inside a standard MWI timeline without erasing local memory and historical continuity around them.',
    races: [
      { name: 'The Threshold-Watchers', epithet: 'Keepers of the Outer Gate', morphologyAndTrait: 'Manifest only when a Category 5 Sovereign or mortal ritual threatens to breach the boundary above MWI.' },
      { name: 'The Veil-Keepers of the Abyss', epithet: 'Silent Border-Lords', morphologyAndTrait: 'Tall, faceless silhouettes standing upon the shore where branching timelines end.' },
      { name: 'The Seal-Breakers', epithet: 'Shatterers of Ancient Bounds', morphologyAndTrait: 'Step into a realm only when its ruling powers violate the foundational treaties of chaos.' },
      { name: 'The Unremembered Walkers', epithet: 'Self-Redacting Strangers', morphologyAndTrait: 'Beings whose faces, names, and actions vanish from mortal memory and written ledgers the instant they turn away.' },
      { name: 'The Branch-Pruners', epithet: 'Reapers of Doomed Timelines', morphologyAndTrait: 'Sever entire corrupted timeline branches when a Soul 1 detonation threatens to cascade.' },
      { name: 'The Thread-Cutters', epithet: 'Shears of the Unseen Loom', morphologyAndTrait: 'Sever the link between an entity’s pre-cognitive simulation and its AMR reserves, leaving its power inert.' },
      { name: 'The Possibility-Drinkers', epithet: 'Serpents of the Unchosen Road', morphologyAndTrait: 'Coil between worlds, drinking up alternate MWI outcomes until only one unavoidable fate remains.' },
      { name: 'The Choir of the Collapse', epithet: 'Singers of the Single Outcome', morphologyAndTrait: 'Their solemn chord forces a thousand branching possibilities to collapse into one heavy reality.' },
      { name: 'The Frozen-Ascendants', epithet: 'Salt-Pillar Usurpers', morphologyAndTrait: 'Ancient Category 5 Sovereigns who tried to force their way into Category 7 and were locked into timeless monuments on the threshold.' },
      { name: 'The Six Redacted Judges', epithet: 'The Blotted Council', morphologyAndTrait: 'The six threshold wardens who struck Category 6 from every grimoire and archive in existence.' }
    ]
  },
  {
    id: 'exp-cat7-adjudicators',
    categoryName: '11. Category 7 The High Adjudicators (Above MWI / Below The Meta-Chaos — 10 Orders)',
    ontologicalTier: 'Category 7 (Category X — Supreme Adjudicators Operating Above MWI)',
    cognitionTier: 'Tier 12 Interface (Above MWI Grades 1–7, Anchored Below Tier 0 Meta-Chaos)',
    constructionMechanism: 'Directly from the canonical hierarchy: Category 7 Adjudicators operate on a system HIGHER than MWI (above all 7 MWI Ammo Grades and all 10⁴ complexity jumps), serving as the existential magistrates of reality beneath only The Meta-Chaos (VSBW Tier 0 Boundless).',
    associatedFuelOrKi: 'Trans-MWI Adjudication Decree (Above Grade 7 AMRs)',
    restrictorPlate: 'Do not engage in brawls or spell-duels; they act strictly as existential adjudicators bound to the foundational laws beneath The Meta-Chaos.',
    races: [
      { name: 'The First Adjudicators', epithet: 'Magistrates of the Highest Writ', morphologyAndTrait: 'Ancient, hooded sovereigns whose spoken decree sets the baseline laws of physics, soul weight, and Possibility Resistance.' },
      { name: 'The World-Shapers of the Deep', epithet: 'Founders of the Pillars', morphologyAndTrait: 'The elder powers who laid down the architecture of the realms before the first timeline branched.' },
      { name: 'The Law-Givers of the Covenant', epithet: 'Forgers of the Ancient Seals', morphologyAndTrait: 'Those who hammered out the inescapable Pactional laws that bind all Goetarchs, spirits, and gods.' },
      { name: 'The Unbound Sovereigns', epithet: 'Lords Beyond Pre-Cognition', morphologyAndTrait: 'Walk completely outside MWI; no Category 3–5 pre-cognitive simulation can ever foresee or target them.' },
      { name: 'The Magistrates of the Outer Dark', epithet: 'Keepers of the Great Ledger', morphologyAndTrait: 'Weigh entire epochs and fallen manifolds upon their scales.' },
      { name: 'The Silent Thrones', epithet: 'Unmoving Pillars of Decree', morphologyAndTrait: 'Never draw a weapon; when they pass judgment, reality itself rearranges to obey.' },
      { name: 'The Keepers of the Unwritten', epithet: 'Wardens of the Blank Scroll', morphologyAndTrait: 'Rule the silent spaces between manifolds where no history has yet been inscribed.' },
      { name: 'The Judges Before Time', epithet: 'Elders of the First Dawn', morphologyAndTrait: 'Sat in council before linear Soul 1 time or MWI branching began.' },
      { name: 'The Heralds of the Meta-Chaos', epithet: 'Voices of Eternal Change', morphologyAndTrait: 'Direct envoys of The Meta-Chaos (Tier 0), ensuring that no empire, god, or cosmic order can stagnate forever.' },
      { name: 'The Watchers of the Last Horizon', epithet: 'Sentinels of the Uttermost Rim', morphologyAndTrait: 'Stand guard at the furthest rim of creation where all worlds return to the boundless deep.' }
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
    question: 'Who are the flagship Category 2 (formless thinking geometries) and Category 3 (emotionless, memoryless pre-cognitive) races, and how do they interact with Category 4–5 factions?',
    contextFromDraft: 'The draft establishes that Category 3 entities lack emotional drives and lack long-term memory ("they don\'t learn from past mistakes, they lack long-term memory, they learn by the way, predict by the way"), yet Category 3 is the minimum threshold required to cast MWI Magic consistently. Meanwhile Category 2 has zero physical form and zero emotion, yet actively thinks.',
    pitchedIdeas: [
      {
        name: 'The Ephemerids of the White Fen (Category 3 Twelve-Breath Seers)',
        etymology: 'Greek Ephemeros (lasting only a moment / present-breath).',
        concept: 'An eerie, pale-eyed Category 3 race whose autobiographical memory clears every twelve breaths. Because they carry zero emotional panic, zero trauma, and zero fear of death, their pre-cognitive simulations are crystal-clear—allowing them to fire Grade 1–2 AMRs without hesitation, even though they cannot remember why their elders started a war an hour ago.',
        restrictorPlate: 'Zero long-term memory: if an opponent survives their twelve-breath pre-cognitive window, they forget the foe’s prior habits and must re-simulate from scratch.'
      },
      {
        name: 'The Silent Ordinances (Category 2 Formless Thinking Geometries)',
        etymology: 'Archaic decree + unseen spatial presence.',
        concept: 'A Category 2 presence with zero physical body and zero emotion—drifting through ruined sanctuaries and mountain passes like a living geometric law that crushes any structure or intruder moving out of measure.',
        restrictorPlate: 'Possesses no ego or survival instinct; can be trapped or bypassed by a paradox or an unbroken Solomonic circle.'
      }
    ]
  },
  {
    id: 'bf-cat5-benevolent',
    domain: 'Missing Category Races',
    question: 'The draft notes that Category 5 entities "aren\'t always malicious" and that "other entities that aren\'t malevolent exist on the other end of the spectrum." Who are the non-malicious / custodial Category 5 counterparts to the Nether-Lords?',
    contextFromDraft: 'Netherbound Category 5s feed their AMRs via negative emotional loops (terror, despair, paranoia). Yet Category 4 mortal minds also generate fierce positive resonance: kept oaths, sanctuary, valor, and willing sacrifice.',
    pitchedIdeas: [
      {
        name: 'The Eunoia-Weavers & Six-Winged Covenant Seraphim',
        etymology: 'Greek Eunoia (goodwill / noble mind) + ancient covenant guardians.',
        concept: 'Austere, awe-inspiring Category 5 powers on the custodial end of the spectrum. Where Nether-Lords farm negative loops, these beings charge their Grade 2–4 AMRs from unbroken circles of trust, kept oaths, and shared courage under siege.',
        restrictorPlate: 'Because fear is easy to trigger while trust is fragile, a single act of betrayal or oath-breaking inside their warded perimeter collapses their AMR charging loop on the spot.'
      }
    ]
  },
  {
    id: 'bf-bloodline-fleshout',
    domain: 'Unfleshed Demon Bloodlines',
    question: 'Out of the 102 named Demon Bloodlines (Tartarokh, Nadirim, Hex-Matrons of Kael, Void-Suckled, Marrow-Weavers, Lethe-Kin, Quliphot, etc.), which ones rule great courts vs. stalk the deep pits?',
    contextFromDraft: 'The draft gives full breakdowns for 22 breeds (Khorvath, Skorvath, Vael-Gorgers, etc.), and names 102 ancient bloodlines across 7 lists.',
    pitchedIdeas: [
      {
        name: 'The Nadirim ("Born of the Uttermost Pit")',
        etymology: 'Nadir (lowest point beneath the world) + archaic plural -im.',
        concept: 'Ancient lords born in the deepest gravity-null cores of hollowed worlds. In combat, their own sternum becomes the local "downward" floor of the Turn Field—causing enemies and projectiles to fall sideways or upward onto their blades.',
        restrictorPlate: 'Must keep their heels planted on solid ground; if knocked airborne, their own inverted gravity crushes inward on their ribs.'
      },
      {
        name: 'The Lethe-Kin & Marrow-Weavers (Stygian Memory-Strippers)',
        etymology: 'Lethe (the underworld river of oblivion).',
        concept: 'Pale river-lords of the Stygian sectors who temporarily strip a Category 4 human’s emotional drives and long-term memories—reducing the victim to a temporary Category 3 state so their unclouded pre-cognitive simulation can be yoked to cast spells.',
        restrictorPlate: 'Cannot affect a warrior operating in Mu-Ki stillness or someone who has already surrendered their name.'
      }
    ]
  },
  {
    id: 'bf-gatekept-frameworks',
    domain: 'Classified Frameworks',
    question: 'How do the Gatekept Framework Enforcement Spirits hunt down uninitiated mortals who pry into the 31 forbidden occult traditions?',
    contextFromDraft: 'Frameworks are so fiercely gatekept that merely becoming aware of or simulating a forbidden rite draws Astral Entities and enforcement squads—some tamper with memories, some gaslight the practitioner, some induce agnosia/blindness to ritual script, and some execute them.',
    pitchedIdeas: [
      {
        name: 'The Agnosia Hounds & Tongue-Lockers (Framework Enforcement Spirits)',
        etymology: 'Agnosia (inability to recognize shapes/symbols) + occult seal-hounds.',
        concept: 'Tier 6 enforcement spirits bound into the 31 Gatekept Frameworks. The moment an uninitiated mortal pre-cognitively simulates a restricted Clause-Seal or Decanic glyph, these spirits ride back along the practitioner’s Astral Trail—making the chalk lines writhe unintelligibly, scrubbing short-term memory, or locking the vocal cords before the invocation can finish.',
        restrictorPlate: 'They track the emotional pre-cognitive wake of Category 4 minds; a passionless Category 3 seer or a fighter in Mu-Ki leaves no wake for them to lock onto.'
      }
    ]
  },
  {
    id: 'bf-netherfire-chemistry',
    domain: 'Netherfire Fuels',
    question: 'We have 19 named Netherfire reserves (Gloompyre Pulse, Marrowblaze Core, Soulignis Ether, Cryptblaze Fuel, Vaelsteel Embers, etc.). How do their depletion states (liquid tank, solid rock chunks, or gas) and effects differ?',
    contextFromDraft: 'Vaelburn Spark and Aethelfire Flux are defined, and AMRs deplete in distinct tactile states: some drain like liquid fuel in a tank, some disappear chunk-by-chunk like solid rock ("boom, boom, boom") or crush in an instant, and others vent like gas.',
    pitchedIdeas: [
      {
        name: 'Marrowblaze Core (Solid-Chunk Bone-Calcining AMR)',
        etymology: 'Marrow + Blaze.',
        concept: 'Sits in the reserve like a dense rod of white stone that disappears chunk-by-chunk ("boom, boom, boom") with each shot. It ignites the calcium inside an enemy’s bone marrow from within while leaving outer armor and cloth untouched.',
        restrictorPlate: 'Requires skeletal bone to catch; useless against chitin-plated Skorvath or non-corporeal Astral spirits.'
      },
      {
        name: 'Voidignis Fluid (Liquid-Tank Black-Frost AMR)',
        etymology: 'Void + Latin Ignis (Fire).',
        concept: 'Depletes like heavy black liquid draining from a fuel tank. Its black flame drinks ambient heat and ray-traced light rather than oxygen, vitrifying moisture into black ice and plunging the room into pitch shadow.',
        restrictorPlate: 'Dispersed by intense solar/light-based AMRs or high-temperature Gō-Ki steam venting.'
      }
    ]
  },
  {
    id: 'bf-netherbounders-noble-demons',
    domain: 'Missing Category Races',
    question: 'How do we ground the ontology of Netherbounders and Noble Demons—combining All Tomorrows-scale deep-time history ("Chapters of the Past"), the 4-Stage Negative-Loop AMR Harvest, and the Grounded Sovereign Realism of the 72 Pillar Houses?',
    contextFromDraft: 'In our verse, Noble Demons are never generic "anime teenagers with wings." Their world combines deep-time evolutionary history (All Tomorrows / Star Wars scale), negative emotional loops feeding AMRs inside their internal mindscape tanks, and grounded physical sovereignty.',
    pitchedIdeas: [
      {
        name: '1. Sovereign Mimicry & Grounded Patrician Density (Why the 1% Noble Houses Wear Humanoid Form)',
        etymology: 'Sovereign Apex Predation + Grounded Realism.',
        concept: 'Why do the 72 Pillar Houses (Gremory, Bael, Paimon) stand like living marble monuments of patrician sovereignty while the 99% lower Netherbounders are chitinous or siege-warped horrors? Because the Great Houses are apex predators of Category 4 awe and dread. Over deep time, their bloodlines sculpted an overwhelming, statue-like humanoid sovereignty that commands mortal devotion and lowers psychological defenses.',
        restrictorPlate: 'Real Biomechanical Weight: They obey high-fidelity 3D realism (damped inertia, dense skeletal mass, zero cartoon physics) and carry the uncanny stillness of a higher-tier predator.'
      },
      {
        name: '2. The 4-Stage Negative-Loop AMR Harvest (How Nether Entities Feed Their AMRs)',
        etymology: 'Negative Emotional Feedback Loops + Internal Mindscape Tank.',
        concept: 'Even when a Noble Demon isn’t actively fighting, their internal mindscape tank runs a 4-stage harvesting cycle: (1) *Seeding*: Their presence leaks subtle vibrational cues into the local environment; (2) *Negative Loop Lock*: Mortal minds nearby slip into self-reinforcing loops of dread, obsession, envy, or paranoia; (3) *Astral Trail Shedding*: Those pre-cognitive simulations shed dense wakes into the Psychic Internet; (4) *Internal-Tank Fermentation*: The demon’s personal Astral symbionts gather and ferment those wakes into liquid-tank, solid-chunk, or gas AMRs.',
        restrictorPlate: 'Starvation in Barren Zones: Cut off from Category 4 mortal populations, a Nether-entity cannot passively recharge and must rely strictly on the heirloom AMR vaults stored inside their bloodline.'
      },
      {
        name: '3. Deep-Time "Chapters of the Past" (All Tomorrows Split: First-Born Chthonic vs. 99% Netherbounders vs. 1% Nobles)',
        etymology: 'All Tomorrows Deep-Time Evolutionary Divergence.',
        concept: 'Distinguishes *First-Born Chthonic Demons* (native to the 15 Nether-Domains) from *Netherbounders*—entire mortal kingdoms, alien species, and vanished epochs dragged into the Nether millions of years ago. Across eons of crushing Nether pressure and selective breeding, 99% were reshaped into tragic post-species (siege-beasts, living wall-tapestries, blind pact-scribes), while the 1% Sovereign Survivors conquered their sectors and became the Noble Houses.',
        restrictorPlate: 'Every Netherbounder lineage bears the permanent anatomical and ancestral memory scars of the epoch their species fell.'
      },
      {
        name: '4. Living Dynastic AMR Vaults (Why Noble Bloodlines Guard Their Inheritance)',
        etymology: 'Hereditary Internal Tanks + Grade 2–4+ AMR Hoards.',
        concept: 'What makes a Demon "Noble" is not a polite title—it is the structural capacity of their hereditary internal tank to hold volatile, high-Grade AMRs (like House Gremory’s Power of Destruction) that would rupture a lesser creature, plus ancestral vaults of extinct-epoch AMRs passed down through the bloodline.',
        restrictorPlate: 'Bloodline Drift: Housing a specific high-Grade AMR across generations permanently shapes the House’s temperament, thermal aura, and obsessions.'
      }
    ]
  }
];
