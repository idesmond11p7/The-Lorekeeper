import {
  CANONICAL_LORE_ARTICLES,
  CACODICTYOLOGY_ROOTS,
  COSMIC_FUEL_RESERVOIRS,
  UNDERWORLD_SECTORS,
  INVERTED_BEAST_MANIFOLDS,
  INITIAL_DOSSIERS,
} from './loreData';
import {
  CATEGORY_RACE_TIERS,
  DETAILED_DEMON_BREEDS,
  NAMED_DEMON_BLOODLINES,
  ASTRAL_TAXONOMY_GROUPS,
  ASTRAL_CONSTRUCTION_DOCTRINE,
  EXPANDED_RACE_CATEGORIES,
  GOETARCH_72_NOBLES,
  NETHERFIRE_RESERVES_LIST,
  OCCULT_FRAMEWORKS_LIST,
  BRAINSTORM_FORGE_SEEDS,
} from './racesAndFrameworksData';
import { VISUAL_ASSETS } from './visualAssets';
import {
  ObservatoryWorkspaceState,
  LoreDocument,
  Entity,
  LocationOrRealm,
  Faction,
  Ability,
  PowerSystem,
  PowerInteraction,
  VisualReference,
  DesignBoard,
  EffectsSequence,
  Idea,
  ResearchRecord,
  Relationship,
  Tag,
  RevisionRecord,
  Project,
} from './observatoryTypes';

const NOW = '2026-10-24T02:25:00Z';

export function buildCanonicalObservatorySeed(): ObservatoryWorkspaceState {
  // 1. Projects
  const projects: Project[] = [
    {
      id: 'proj-foreverworlds-core',
      title: 'Apocrypha DXD: ForeverWorlds — Power System, Power Vibe & Turn Fields',
      summary: 'Primary worldbuilding & mechanics initiative focusing on World Details, Realm Image Direction, the MWI "Gun System", Somatic Ki, Power Vibe aesthetics, and Turn Field spatial conversion.',
      canonStatus: 'Established',
      universeName: 'Ur-Verse / ForeverWorlds',
      focusDomain: 'World Details, Power System, Power Vibe & Turn Fields',
      activeObjectives: [
        'Establish Turn Field mechanics across the 6 Supernatural Energy Expressions (Fields, Reserves, Networks, Essence, Realms of Energy, En-Grafted) and 11 exotic matter phase-states.',
        'Direct Realm Visual & Architectural World Details for all 29 Underworld Sectors and 6 Inverted Beast Manifolds.',
        'Codify Power Vibe sensory rules (industrial, chemical, biological, and ceremonial friction—zero generic fantasy energy beams).',
        'Design Character Proportions & Craniofacial Morphology specs (head-to-body ratios, bone ridges, ocular geometry) in tandem with psychological profiles.',
      ],
      linkedRecordIds: ['ps-turn-fields-6-forms', 'ps-mwi-gun-system', 'ps-somatic-ki-engine', 'tartaros-barathron'],
      tags: ['Ur-Verse', 'Turn Fields', 'Power Vibe', 'World Details', 'Character Proportions'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'proj-cacodictyology-bestiary',
      title: 'Character Proportions, Craniofacial Morphology & Realm Concept Studio',
      summary: 'Systematic somatotype, head-height ratio, facial bone structure, and realm environmental specification for the 6 Demon Castes, 72 Goetarchs, and 102 named bloodline strains.',
      canonStatus: 'Established',
      universeName: 'Ur-Verse / ForeverWorlds',
      focusDomain: 'Character Proportions, Facial Features & Realm Visuals',
      activeObjectives: [
        'Define craniofacial geometry, jaw/brow structures, and head-to-body proportions across Category 3, 4, and 5 entities.',
        'Build structured Realm Image Prompt & World Detail blueprints for every Underworld Sector.',
      ],
      linkedRecordIds: ['dossier-1', 'dossier-2', 'breed-khorvath', 'bast-irkalla'],
      tags: ['Proportions', 'Facial Morphology', 'Realm Visuals', '3D Production'],
      createdAt: NOW,
      updatedAt: NOW,
    },
  ];

  // 2. Lore Documents (from CANONICAL_LORE_ARTICLES + Anti-Aura & AK117 Boosted Gear Doctrine)
  const loreDocuments: LoreDocument[] = [
    {
      id: 'lore-500-plus-race-taxonomy-and-astral-construction',
      title: 'The 670-Race Master Taxonomy & Astral Construction Blueprint: How Standard Races vs. Astral Entities Are Distinctively Made',
      kicker: '6 Canonical Astral Construction Rules, 329 Astral Species (32 Families) & 341 Non-Astral Races & Bloodlines (670 Total)',
      category: 'Cognition & Astral',
      summary: 'Establishes the 6 canonical rules of how standard races (Categories 1–7) are made versus how Astral Entities are distinctively born as incomplete souls (< Soul 1) precipitated from Pre-Cognitive Simulations ("Astral Trails") across the Vibrational + Telepathic Spectrum ("The Psychic Internet")—alongside the 670-Race Master Census.',
      content: `1. ARCHITECTURAL ANALYSIS: HOW STANDARD RACES ARE MADE VS. HOW ASTRAL ENTITIES ARE DISTINCTIVELY MADE
In the Ur-Verse / ForeverWorlds, **Astral Entities** and **Standard Biological / Netherbound Races (Categories 1–7, Demon Breeds & Bloodlines)** are separated by **6 Canonical Construction Rules**:

• **Rule 1 — Incomplete Soul Ontology (Sub-Soul < 1 vs. Full Soul 1 + Soul 2):**
  - *Standard Races (Categories 3–5):* Possess a complete, anchored **Soul 1** (linear time continuity) and **Soul 2** (MWI branching shadow). When a true Soul 1 is violently destroyed, it triggers a cataclysmic **Soul 1 Nuke**.
  - *Astral Entities Only:* An Astral Entity is **NEVER a complete soul**. It is an incomplete soul fragment (< Soul 1). By hard cosmological law, the moment an Astral entity gathers a complete soul, it ceases to be an Astral entity and crosses over into **Tier 7 Semi-Spiritual Soulhood**.

• **Rule 2 — Pre-Cognitive Simulation Byproduct ("Astral Trails") vs. Lineage & Deep-Time Evolution:**
  - *Standard Races:* Created through multi-generational evolution, deep-time Nether adaptation (*All Tomorrows* / "Chapters of the Past"), or dynastic bloodline inheritance.
  - *Astral Entities Only:* Have **zero biological parents, DNA, or breeding cycles**. Whenever Category 3, 4, or 5 minds run **Pre-Cognitive Simulations** weighted with emotion (fear, anger, shame, desire, awe), those mental projections shed unseen wakes into the world (**Astral Trails**) that pool and curdle into autonomous Astral species.

• **Rule 3 — The Vibrational Spectrum & Telepathic Veil ("The Psychic Internet") vs. Physical Mass:**
  - *Standard Races:* Inhabit physical spacetime or heavy semi-spiritual Nether matter with real mass, inertia, and anatomy.
  - *Astral Entities Only:* Inhabit the **Psyche Vibrational Spectrum + Telepathy**—operating across the unseen **"Psychic Internet"** that links minds, shadows, mirrors, and internal mindscape tanks.

• **Rule 4 — The $10^9\\times$ (Billion-Fold) Gulf Between Tier 5 (Low-Astral) & Tier 6 (True Astral):**
  - *Tier 5 (Low-Astral Wakes):* Fleeting sensory wakes and afterimages (*Astral Trails, Apparitions, Phantoms, Eidolons, Wraiths*).
  - *Tier 6 (True Astral Species):* Separated from Tier 5 by a **1,000,000,000× ($10^9$) qualitative gulf**. Here sit the full folkloric, occult, and urban-legend species (*Ghosts, Jinns, Specters, Banshees, Poltergeists, Un-Born, Nachzehrer, Pretas, Gulon, Soul Fragments, Keres*, and the 30 Astral Families).

• **Rule 5 — The Illusion of Myths (Shaped by Belief & Dread) vs. Grounded Anatomical Proportions:**
  - *Standard Races:* Bound by functional biomechanics, skeletal mass, and grounded proportions.
  - *Astral Entities Only:* Governed by **"The Illusion of Myths"**—because they condense out of collective folklore, nightmares, and urban legends, their silhouettes take on exaggerated, paradoxical, or symbolic shapes matching what local minds fear or revere.

• **Rule 6 — The $50!$ Astral Economy: Internal-Tank AMR Fermentation & Gatekept Framework Enforcement:**
  - Across the world, Astral Entities outnumber physical beings by an astronomical factor (**over $50!$**). They serve two indispensable roles in the power economy: (1) cultivated inside a Noble Demon’s or Netherbounder’s **internal mindscape tank** to ferment negative emotional loops into usable **AMRs**, and (2) bound as automatic **Gatekept Framework Enforcement Spirits** (*Agnosia Hounds & Tongue-Lockers*) that memory-wipe, gaslight, blind, or execute uninitiated mortals who pry into the 31 forbidden occult traditions.

2. MASTER CENSUS: 670 CANONICAL RACES, BLOODLINES & ASTRAL SPECIES
• **Part I — All 32 Astral Taxonomy Families (329 Distinct Astral Species):**
  - *Tier 5 & Tier 6 Baseline Species:* 15 species
  - *Soul 1 Destruction Fallout (Temporal Horrors):* 14 species
  - *Foundational Families 1–15 (Trance/Mirror, Goetic/Pactional, Funerary/Chthonic, Planetary Intelligences, Threshold Guards, Thoughtforms/Egregores, Parasites/Siphons, Archons/Judges, Tricksters/Vagabonds, Totemic Beasts, Dream/Nightmare, Mythic Archetypes, Elemental Weather, Machine/Signal Egregores, Alchemical Essences):* 150 species (15 × 10)
  - *Expanded Families 16–30 (Acoustic/Barbarous-Voice, Gatekept Framework Enforcement, Internal-Tank AMR Symbionts, Battlefield/Siege Trauma, Optical/Mindscape-Overlap Phantoms, Somatic-Ki Afterimages, Abyssal-Sea Horrors, Urban/Brutalist Liminal Haunts, Contagion/Fever Spirits, Cursed Grimoire Spirits, Social-Fear/Paranoia Phantoms, Cryo-Famine Wraiths, Supernatural Kill-Effect Relics, Extinct-Epoch Shades, Psychic-Internet Drifters):* **150 species** (15 × 10)
  - **Astral Entities Subtotal = 329 Species**

• **Part II — All Non-Astral Biological, Netherbound, Somatic & Category 1–7 Races (341 Distinct Races & Lineages):**
  - *Detailed Demon Breeds (6 Castes):* 22 breeds
  - *Named Demon Bloodlines (7 Groups):* 102 bloodlines
  - *Sovereign Goetarch Pillar Dynasties:* 72 lineages
  - *11 Expanded Race Categories (+145 Races):*
    1. Category 1 Primeval Flora, Abyssal Leviathans & Zero-Simulation Behemoths (12 races)
    2. Category 2 Formless Thinking Geometries & Living World-Laws (12 races)
    3. Category 3 Passionless & Memoryless Pre-Cognitive Races (15 races)
    4. Category 4 Non-Human Mortal Kindreds & Bio-Manifold Civilizations (15 races)
    5. Category 5 Custodial, Covenant & Non-Malevolent Sovereigns (12 races)
    6. Category 5 Netherbounder Deep-Time Post-Species ("Chapters of the Past" / All Tomorrows Scale — 20 races)
    7. The Six Inverted Beast-Manifolds & Outer-Bough Apex Castes (15 races)
    8. Somatic-Ki Martial Clans & Bio-Tempered Lineages (12 races)
    9. En-Grafted Relic Hosts & Reactive-Armament Lineages (12 races)
    10. Category 6 [REDACTED] Bridge Anomalies & Threshold Wardens (10 races)
    11. Category 7 The High Adjudicators (Above MWI / Below The Meta-Chaos — 10 orders)
  - **Non-Astral Races Subtotal = 341 Races & Lineages**
  - **GRAND TOTAL CANONICAL RACES & ASTRAL SPECIES = 329 + 341 = 670!**`,
      establishedFacts: [
        'Astral Entities are incomplete souls (< Soul 1); if an Astral entity ever completes its soul, it crosses over into Tier 7 Semi-Spiritual Soulhood (Soul 1).',
        'Astral Entities have zero biological birth; they precipitate from the unseen wakes ("Astral Trails") shed whenever Category 3–5 minds run emotion-weighted Pre-Cognitive Simulations.',
        'Tier 5 Low-Astral wakes and Tier 6 True Astral species are separated by a 10⁹× (one-billion-fold) qualitative gulf.',
        'The Master Observatory Census catalogs 670 named races and species: 329 Astral Species across 32 Families and 341 Non-Astral Races, Post-Species, Bloodlines, and Orders.',
      ],
      inferredPrinciples: [
        'Standard races are shaped by biomechanics, bloodline inheritance, or All Tomorrows-scale deep-time evolution, whereas Astral Entities are shaped by The Illusion of Myths.',
      ],
      unresolvedQuestions: [
        'How do Category 3 emotionless/memoryless pre-cognitive seers interact with Gatekept Framework Enforcement Spirits when their wakes lack Category 4 emotional heat?',
      ],
      provenanceNote: 'Canonical 670-Race Taxonomy & Astral Construction Blueprint.',
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft & Creator Canonical Directive — 670-Race Taxonomy & Astral Construction Analysis',
      tags: ['670 Races', 'Astral Entities', '329 Astral Species', 'Category 1-7', 'Netherbounders', 'Soul 1', 'All Tomorrows'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'lore-netherbounders-and-noble-demons-ontology',
      title: 'The Ontology of Netherbounders & Noble Demons: Deep-Time "Chapters of the Past" (All Tomorrows Scale), Sovereign Mimicry, Negative-Loop AMR Harvesting & Dynastic Vaults',
      kicker: 'Deep-Time Post-Species Divergence, Grounded Patrician Sovereignty, 4-Stage Negative-Loop AMR Fermentation & Bloodline Drift',
      category: 'Cacodictyology',
      summary: 'Establishes the four foundational pillars of Netherbounders and Noble Demons (the 72 Goetarchs & 102 Bloodlines): (1) All Tomorrows-scale deep-time divergence between First-Born Chthonic Demons, the 99% reshaped Netherbounder post-species ("Chapters of the Past"), and the 1% Noble Demon Sovereigns; (2) Sovereign Patrician Mimicry; (3) the 4-Stage Negative-Loop AMR Harvest inside their internal mindscape tanks; and (4) Noble Houses as Living Dynastic AMR Vaults.',
      content: `1. DEEP-TIME "CHAPTERS OF THE PAST" (ALL TOMORROWS SCALE): FIRST-BORN CHTHONIC DEMONS VS. NETHERBOUNDERS
• **Why Demons Are Never Generic "Anime Teenagers With Wings":** Inspired by the deep-time evolutionary weight of ***All Tomorrows*** and ***Star Wars*** macro-history, the Underworld is a **stratified graveyard of conquered epochs**.
• **First-Born Chthonic Demons:** Primordial horrors native to the slag, ash, and crushing dark of the 15 Nether-Domains, having never shared a single ancestor with humanity.
• **Netherbounders (Conquered Deep-Time Species):** Across millions of years ("Chapters of the Past"), entire mortal kingdoms, alien civilizations, and vanished epochs were dragged across the Nether-veil when their timelines or realms collapsed:
  - **The 99% Reshaped Post-Species:** Stripped of their native skies and subjected to eons of crushing Nether pressure and selective breeding by the Flesh-Castes, 99% were warped into tragic, specialized post-species—living siege-citadels (*Brontorim*), blind carrion-swarms (*Skul-Vermil*), forty-foot slag-waders, or living wall-tapestries.
  - **The 1% Sovereign Survivors (Noble Demons):** The rare apex bloodlines that refused to degenerate into servitor beasts. Instead, they expanded their internal mindscape tanks to house volatile, high-Grade AMRs and conquered their sectors as the **72 Pillar Houses and 102 Bloodlines**.

2. SOVEREIGN MIMICRY & GROUNDED PATRICIAN REALISM (WHY THE 1% NOBLE HOUSES WEAR HUMANOID FORM)
• **Why Do the 72 Pillar Houses Look Like Patrician Royalty?** While trench-breeds (*Khorvath, Skorvath*) are iron-scaled or chitinous horrors, Noble Demons (*Gremory, Bael, Sitri, Phenex*) stand like living marble monuments of patrician sovereignty.
• **Apex Predators of Category 4 Minds:** Their human likeness is **not genetic kinship with humanity**—it is **Sovereign Predatory Mimicry** refined over deep time.
  - Because **Category 4 mortals** possess the richest emotional pre-cognitive simulations in the cosmos—constantly shedding dense wakes of dread, desire, awe, and obsession—the Great Houses sculpted forms of overwhelming, statue-like human perfection to command mortal devotion and lower psychological defenses without triggering blind flight.
• **The Uncanny Tells of a Noble Demon:** Up close, a Noble Demon never feels like a fragile human:
  - They carry immense, grounded biological density and structural inertia.
  - When they activate their **Mindscape-Aura State**, the room is plunged into their internal world (dark blinding lava, abyssal shadow, and lurking personal Astral symbionts).

3. THE 4-STAGE NEGATIVE-LOOP AMR HARVEST (HOW NETHER ENTITIES FEED THEIR AMRS)
• **Predatory by Ecology, Not Cartoon Villainy:** A Noble Demon does not need to act like a cartoonish villain to be dangerous; **their internal mindscape tank runs a continuous 4-stage harvesting cycle**:
  1. **Stage 1 — Seeding:** Simply by occupying a territory, a Noble Demon’s presence leaks subtle vibrational cues into the local environment.
  2. **Stage 2 — Negative Loop Lock:** Because negative emotional loops (dread, paranoia, obsession, grief, envy) are self-reinforcing and far denser than fleeting joy, the Demon’s presence subtly tilts nearby mortal minds into recurring negative feedback loops.
  3. **Stage 3 — Astral Trail Shedding:** As local mortals run feverish pre-cognitive simulations of their fears or obsessions, they shed thick **Astral Trails** into the Psychic Internet.
  4. **Stage 4 — Internal-Tank Fermentation:** The Demon’s personal Astral symbionts (*Dread-Fermenters and Despair-Stills*) gather those wakes and ferment them inside the Demon’s internal tank into usable **Liquid-Tank, Solid-Chunk, or Gas AMRs**!
• **The Cost of Restraint:** Simply living near a human city quietly sours the district’s dreams and luck to keep the Demon’s tank topped off; suppressing that harvest requires constant, conscious restraint.

4. LIVING DYNASTIC AMR VAULTS & "BLOODLINE DRIFT"
• **What Makes a Demon House "Noble"?** Nobility in the Nether is not a polite court title—a **Great House is a Living Vault of High-Grade & Extinct-Epoch AMRs**:
  - **Hereditary Internal Tanks:** Over millennia, each of the 72 Pillar Houses engineered their bloodline vessels to hold **Grade 2, Grade 3, or Grade 4+ AMRs** ($10^4$ to $10^{12}$ complexity) that would rupture a lesser creature—including heirloom AMRs harvested from extinct epochs ("Chapters of the Past").
  - **Distinct House AMR Profiles:**
    • *House Gremory:* Houses high-grade Destruction AMRs inherited through dynastic convergence.
    • *House Bael:* Their Destruction AMR sits in the reserve like **solid black rock** that disappears chunk by chunk (*boom, boom, boom*) or crushes in an instant.
    • *House Phenex:* Their Immortality AMR drains and refills like **white-hot liquid fuel**, tied to the mental state of burning away and reforming whole.
  - **Bloodline Drift:** Because every AMR is linked to a specific mental state via Pre-Cognitive Simulation, carrying an ancient Grade 3+ AMR across generations permanently shapes the House’s psychology, pride, and obsessions.`,
      establishedFacts: [
        'Netherbounders are conquered mortal kingdoms, alien species, and vanished epochs ("Chapters of the Past") dragged into the Nether across deep time (All Tomorrows scale).',
        'While 99% were reshaped across eons into specialized siege and servitor post-species (Brontorim, Skul-Vermil), the 1% Sovereign Survivors expanded their internal tanks and rose as the Noble Houses.',
        'Noble Demons wear grounded, statue-like patrician human perfection as Sovereign Mimicry to command Category 4 awe and desire.',
        'Nether entities feed their AMRs via a 4-Stage Negative-Loop Harvest: (1) Seeding, (2) Negative Loop Lock, (3) Astral Trail Shedding, and (4) Internal-Tank Fermentation by personal Astral symbionts.',
        'Each Great House is a Living Dynastic Vault housing heirloom Grade 2–4+ AMRs (Liquid-Tank, Solid-Chunk, or Gas) that shape the family’s psychology ("Bloodline Drift").',
      ],
      inferredPrinciples: [
        'A Noble Demon is dangerous by sheer ecological presence; living near a mortal city passively harvests negative loops unless the Demon actively throttles their internal tank.',
      ],
      unresolvedQuestions: [
        'Which extinct epochs ("Chapters of the Past") did the oldest Netherbounder Houses originate from before their fall into the Nether?',
      ],
      provenanceNote: 'Canonical Brainstorming & Ontology Document — Co-designed with Creator.',
      canonStatus: 'Established',
      sourceCitation: 'Creator Canonical Directive — Ontology of Netherbounders, Noble Demons & Negative-Loop AMR Harvesting',
      tags: ['Netherbounders', 'Noble Demons', 'All Tomorrows', '72 Goetarchs', 'Negative Loops', 'AMR', 'Bloodline Drift'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'lore-ammo-specificity-and-nonhuman-devils',
      title: 'The "Captured Bullet" AMR System: 7 MWI Grades (10⁴ Jumps), 400–500+ Reserves, Akeno’s 12+ Storm AMRs & The Meta-Chaos (Tier 0)',
      kicker: 'Canonical Energy Charging, 7 MWI Grades, Akeno Rework, Astral Spectrum & Meta-Chaos',
      category: 'Magic & MWI',
      summary: 'Establishes the 400–500+ Ammo Types (AMRs) and their liquid/solid/gas depletion feels, the 7 Grades of MWI Ammo Types (10⁴ = 10,000× complexity jumps per grade), Akeno’s storm-absorption & 12+ Grade 2–3 Lightning AMRs, the Astral vibrational+telepathic spectrum, The Meta-Chaos (VSBW Tier 0 Boundless), and how innate MWI ontology pairs with evolutionary AMR survival.',
      content: `1. "AMR" AS META-TAG / PLACEHOLDER TERMINOLOGY & DEEP-TIME INSPIRATIONS (ALL TOMORROWS, STAR WARS, CHAPTERS OF THE PAST)
• **AMR is a Meta-Tag / Placeholder Terminology:** Out-of-universe, we use the term **AMR** as a clean meta-tag and structural placeholder. **In-world**, however, because the Ur-Verse / ForeverWorlds is so colossal and changes so rapidly across eras, species, and realms, there is no single uniform textbook word for it.
• **Deep-Time & Speculative Evolution Inspirations:** The scale, rapid mutation of history, and existential weight of the world draw heavily from deep, somewhat traumatizing speculative evolution and macro-history works like ***All Tomorrows*** (C.M. Kosemen), expansive multi-epoch universes like ***Star Wars***, and other "chapters of the past" chronicles—where eons of divergent evolution, extinct empires, and shifting terminology mean every epoch and culture experiences and names these reserves through its own survival history.
• Across the main story (starring **Ira**, the creator's #1 original favorite character) and external/side protagonist stories, there are hundreds to thousands of distinct Supernatural Energy / Ammo Types (**AMRs**), with **400 to 500+ AMRs** potentially appearing across the narrative.
• Three Tiers of Ammo Specificity:
  1. **Highly Specific Ammo Types:** Narrow, hyper-exact outcome reality and strict activation/charging requirements.
  2. **Very Specific Ammo Types:** Defined lane and clear charging requirements, distinct from Highly Specific.
  3. **Non-Specific / Broad Ammo Types:** General-purpose supernatural propellant/reserves.
• Tactile Depletion States (How AMRs Feel When Spent):
  - **Liquid-Feel AMRs:** Feel and deplete like a **liquid fuel tank** draining down.
  - **Solid-Feel AMRs:** Deplete like a **solid rock** disappearing chunk by chunk (*boom, boom, boom*) or getting **crushed in an instant**.
  - **Gas / Other-State AMRs:** Deplete like pressurized gas, superfluid, or non-physical states.
• Mental State & Precognitive Simulation Connection: Every AMR has a direct connection to a **mental state** because all casting is driven by **Precognitive Simulations**. Physical manifestation is a specific circumstance tied to the unique philosophy and history of that AMR (neither inherently stronger nor weaker than non-physical expression).

2. THE 7 GRADES OF MWI AMMO TYPES (10⁴ = 10,000× COMPLEXITY JUMPS) & CATEGORY 7 ADJUDICATORS
• Category 7 / Adjudicators utilize something fundamentally higher than MWI.
• Under MWI, there are **7 Grades of MWI Ammo Types (Grade 1 through Grade 7)**:
  - **Grade 1 → Grade 2:** An order of magnitude jump of **4 (10⁴ = 10,000×)**—not necessarily in raw destructive explosion size, but in **complication, complexity, and the ability to achieve highly impossible things**.
  - **Grade 2 → Grade 3:** Another **10⁴ (10,000×)** jump in complexity and impossibility (and so on up to Grade 7).

3. CASE STUDY — AKENO HIMEJIMA ("AKANO"): STORM ABSORPTION & 12+ GRADE 2–3 LIGHTNING AMRS
• Charging via Real Storm Absorption (Thor's Armor / Electro Style): Akeno does NOT sit around magically converting generic ki into lightning from nothing. To charge her reserves, she **meditates and shifts inside real storms, directly absorbing natural lightning and light phenomena**.
• Fixing Canon DxD's Flaw: In canon DxD (against the Second Queen), Akeno lost because she couldn't tank the lightning she dished out—which made zero sense. In our lore, **she tanks and absorbs the lightning she dishes out**, and fighting inside **thunderstorms gives her a massive ("Superman-level") buff**.
• 12+ Distinct Lightning AMRs (Grade 2 to Grade 3): What looks like a single "lightning pool" is actually a composite arsenal of **more than 12 different Lightning Ammo Types (AMRs)** sitting between **Grade 2 and Grade 3** (10⁴ to 10⁸ complexity). While lightning is her most effective lane, we reject lazy anime "elemental affinity" excuses—she can train other lanes intensely too.

4. ASTRAL VS. TELEPATHIC SPECTRUM
• **Telepathic:** Strictly the mental/cognitive spectrum.
• **Astral:** A **vibrational spectrum combined with telepathy**—Astral entities and phenomena operate on both vibrational frequency and telepathic resonance simultaneously.

5. THE META-CHAOS (VSBW TIER 0 / BOUNDLESS APEX)
• Ur-Verse MWI infinite worlds ("worse than mirrors") are linked to higher orders culminating in **The Meta-Chaos**.
• **The Meta-Chaos scales to VSBW Tier 0 (Boundless)**—above the Cthulhu Mythos / Azathoth, above concept, dimensionality, and quantification.
• **The Meta-Concept of Transcendence & Change:** The Meta-Chaos IS the very meta-concept of Transcendence, Progress, and Change itself. For *anything* to exist, move a single step forward in power, or change in any way, it relies on the Meta-Chaos. Therefore, **transcending the Meta-Chaos is fundamentally impossible** (at most, embodying it might be theorized, and even that is likely impossible).

6. RECONCILING INNATE MWI ONTOLOGY WITH EVOLUTIONARY AMR ECOLOGY ("PILE OF BODIES")
• **MWI Access Is Ontological:** Accessing MWI is an innate ontological capability of any entity possessing Precognitive Simulation (Category 3+).
• **Specific AMRs Are an Evolved Survival Arsenal:** While MWI access itself is innate to precognitive hardware, the **400–500+ specific Ammo Types (Grades 1–7)** and how entities charge, combine, and survive with them were forged through brutal evolutionary trial-and-error ("nature is a bitch; evolution only saves you at the last second on top of a pile of billions of dead bodies").

7. ONTOLOGICAL NON-HUMAN DEVILS & THE UNCONSCIOUS NEGATIVE-ENERGY LOOP
• Devils and Nether-entities are ontologically non-human predators whose ecology unconsciously seeds negative energy in a multi-stage survival loop, retaining a permanent uncanny valley.`,
      establishedFacts: [
        '"AMR" is an out-of-universe meta-tag / placeholder terminology; in-world, because the world is massive and changes rapidly across deep time, terminology and forms vary across epochs, inspired by All Tomorrows, Star Wars, and deep-history works.',
        '400 to 500+ distinct Ammo Types (AMRs) exist across the main story (starring Ira, the creator’s #1 favorite character) and external/side protagonist stories.',
        'AMRs have distinct tactile depletion feels: some drain like a liquid fuel tank, some disappear chunk-by-chunk like solid rock (boom, boom, boom) or crush in an instant, and some deplete like gas.',
        'All AMRs connect to a mental state via Precognitive Simulation; physical manifestation is a specific philosophical/circumstantial expression.',
        'MWI Ammo Types are divided into 7 Grades (Grade 1 to Grade 7). Moving from Grade 1 to Grade 2 is a 10⁴ (10,000×) jump in complexity and ability to achieve impossible outcomes; Grade 2 to Grade 3 is another 10⁴ (10,000×) jump.',
        'Category 7 / Adjudicators utilize a system fundamentally higher than MWI.',
        'Akeno ("Akano") charges by meditating/shifting in real storms and absorbing lightning and light (like Thor’s armor or Electro). She tanks/absorbs her own lightning, gains a massive buff in thunderstorms, and holds 12+ distinct Lightning AMRs at Grade 2–3.',
        'Astral is a vibrational spectrum combined with telepathy (distinct from purely mental telepathy).',
        'The Meta-Chaos is VSBW Tier 0 (Boundless)—the meta-concept of Transcendence and Change/Progress itself. Because any step forward in power or change relies on the Meta-Chaos, transcending it is impossible.',
        'MWI capability is innate to any entity with Precognitive Simulation, while the specific repertoire of Grade 1–7 AMRs is refined through brutal evolutionary survival.',
      ],
      inferredPrinciples: [
        'Using "AMR" as a meta-tag lets us organize 400–500+ reserves cleanly in the Observatory while keeping in-world dialogue and lore organic, fractured, and era-specific like All Tomorrows or Star Wars.',
        'Distinguishing raw destructive yield from Grade 1–7 Complexity (10⁴ jumps in impossibility) allows higher-grade AMRs to win via conceptual/causal intricacy rather than bigger explosions.',
        'Giving Akeno 12+ distinct Grade 2–3 Lightning AMRs (some liquid-depleting, some solid-crushing, etc.) turns her storm absorption into a tactical ammunition management system.',
      ],
      unresolvedQuestions: [
        'What are the specific names, depletion feels (liquid vs. solid rock vs. gas), and functions of Akeno’s 12+ Grade 2–3 Lightning AMRs?',
        'How do Grade 4 through Grade 7 AMRs manifest their 10⁴-per-grade complexity jumps in combat?',
      ],
      canonStatus: 'Established',
      sourceCitation: 'Creator Canonical Directive — AMR Meta-Tag, All Tomorrows / Star Wars Deep-Time Scale, 7 MWI Grades & Meta-Chaos (Tier 0)',
      provenanceNote: 'Directly established by creator explanation of AMR as a meta-tag/placeholder, All Tomorrows & Star Wars deep-time inspiration, 7 MWI Grades (10⁴ complexity jumps), Akeno’s 12+ storm-absorbed lightning AMRs, and Meta-Chaos Tier 0.',
      tags: ['AMR Meta-Tag', 'All Tomorrows', 'Star Wars Scale', '7 MWI Grades', 'Akeno Storm AMRs', 'Meta-Chaos Tier 0', 'Ira'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'lore-anti-aura-raytracing-doctrine',
      title: 'Mindscape-Aura States (Paradoxical/Dualistic Ontology, Tenkaichi Silhouettes & Astral Overlap), Supernatural Kill Effects & CODM Mythic AK117 - Lava Remix Boosted Gear',
      kicker: 'Canonical Visual & Power Philosophy · Paradoxical Aura, Kill Effects & AK117 - Lava Remix',
      category: 'Creative Philosophy',
      summary: 'Establishes the ontological, dualistic, and self-contradictory nature of Auras (which can look like mist or liquid without being physical), Boss-Mode silhouettes, internal Mindscape / Astral Ecology domain overlap, MWI Supernatural Kill Effects, and the CODM Mythic AK117 - Lava Remix Boosted Gear.',
      content: `1. PARADOXICAL & DUALISTIC ONTOLOGY OF AURA IN THE UR-VERSE
We reject the generic anime DBZ "power-up" aura where a glowing outline flares around the body and has to match the character's hair color.
Instead, Aura in the Ur-Verse is **ontological, dualistic, and deliberately paradoxical / self-contradictory**:
• A. Looks Physical ≠ Is Physical (Paradoxical Existence): Just because an aura looks like mist, glowing liquid, or dark lava does NOT mean it is physical material. It can be material, non-physical, or paradoxically both/neither at once—designed to be self-contradictory so it can simply exist.
• B. Game-State / Boss-Mode Silhouette (DBZ Budokai Tenkaichi / Xenoverse / Stickman War Battles Style): Treated like a special state, boss-mode activation, or transition effect—independent of hair color—whose purpose is deeply psychological and ontological.
• C. Mindscape / Domain Overlap ("Imposing Your Internal World"): Drawn from Buddhist internal-world concepts ("internal tank / internal world spirits") and connected to MWI. When a powerful entity uses their special state, they impose their **spirituality, soul, mindscape, and personal Astral Entity economy** (vibrational spectrum + telepathy) onto the surrounding environment.
• D. The Rias Prototype Scene (And Beyond): Imagine a normal, chill room. Suddenly ambient light drops into shadow; it looks as if she is standing on volcanic rock surrounded by **pure, blinding dark-type orange lava** (and lava-lightning) or an abyssal nebula. Ray-traced hellish-orange light reflects upward off her skin while the rest of her frame stays dark; her sclera turn black with glowing red irises and an uneasy dark smile, while controlled reddish-yellow lava-mist flows around her and her personal Astral Entities populate the darkened surroundings. (For Canon Rias's true expanded kit, this will be pushed even further—more exaggerated, embellished, and terrifying.)

2. SUPERNATURAL "KILL EFFECTS" (MWI & NETHER REALITY-WARP FINISHERS)
In the Ur-Verse, normal mundane kills do NOT have Kill Effects. However, **Supernatural Entities—specifically Nether-worlders / Cacodictyology ("Nether-boundary") entities and MWI reality-warpers—inflict signature Kill Effects** scaled to their local power and tier:
• In-Verse MWI Explanation: Because supernatural attacks operate via the MWI "Gun System" (forcing a foreign reality/timeline branch onto the target), when a target is killed by a supernatural payload, local reality warps their death into an exaggerated, unmistakable physical finisher.
• Core Inspirations & Vibe:
  - **Call of Duty Mythic Kill Effects:** E.g., a "leprotic internal fireworks" effect where the victim's skin glows from within like sub-dermal fireworks before violently bursting into glowing dust/ash.
  - **War of the Worlds Tripod Heat-Ray:** Instantaneous vaporization or dust-burst on impact, or leaving behind only empty smoking boots/gear.
  - **Gantz / Dark Sci-Fi & Action Gag-Finisher Physics:** Internal pressure detonation, instant full-body calcification into a brittle statue, vitrification, or bizarre reality-warped states.
  - **Mortal Kombat Fatalities:** Visceral, disgusting, terrifying, and unmistakably cool—making supernatural power feel lethal and distinct from mundane violence.

3. RAY-TRACED LIGHT, PSYCHOLOGICAL WEATHER, MYSTICAL CINEMATIC EPICNESS & CODM MYTHIC AK117 - LAVA REMIX BOOSTED GEAR
• Ray-Traced Light & Gravitational Lensing: Light is simulated with real optical bounce, caustics, and gravitational bending.
• Mystical Cinematic Epicness: Elden Ring, Elder Scrolls, and Dark Souls mythic weight paired with 2D Stickman War / Wargamer Icon explicit weapon geometry.
• Redesigned Boosted Gear (CODM Mythic AK117 - Lava Remix): Modeled specifically on the Call of Duty: Mobile **Mythic AK117 - Lava Remix** template of design—with tectonic obsidian plates, a convective magma core, mechanical acoustics, and reactive stages driven by **precognitive simulation** of any form relating to that specific mod (never emotional willpower).`,
      establishedFacts: [
        'Auras are ontological and dualistic—they can be paradoxical or self-contradictory, and looking like mist or liquid does NOT mean they are physical matter.',
        'Generic DBZ hair-color-matched body outlines are rejected, while Game-Style Auras EXIST as Boss-Mode silhouettes, special states/transitions (DBZ Tenkaichi / Xenoverse / Stickman War style), and Environmental Mindscape Overlaps.',
        'Supernatural "Kill Effects" exist exclusively for supernatural entities (especially Nether-worlders / Cacodictyology entities) because MWI / Nether reality-warping distorts the victim’s death state.',
        'Kill Effect benchmarks include COD Mythic kill effects (sub-dermal leprotic fireworks bursting into dust), War of the Worlds Tripod beams, Gantz finishers, and Mortal Kombat fatalities (ash vaporization, smoking boots left behind, instant calcification).',
        'The Boosted Gear redesign is modeled on the CODM Mythic "AK117 - Lava Remix" (not Lava Lamp) and operates via precognitive simulation tied to that specific mod template rather than emotion.',
      ],
      inferredPrinciples: [
        'Making Aura ontologically paradoxical prevents opponents from countering it with simple physical physics (e.g., you cannot always blow away an ontological mist just because it looks like mist).',
        'Tying Kill Effects to MWI reality-warping gives a hard metaphysical reason for why supernatural kills look like Mythic game finishers rather than mundane wounds.',
      ],
      unresolvedQuestions: [
        'How Rias’s specific expanded power kit and custom terrifying Mindscape-Aura will be differentiated from baseline lava/nebula states.',
        'How Kill Effect tiers scale across local power levels and which specific Cacodictyology castes own which signature Kill Effects.',
      ],
      canonStatus: 'Established',
      sourceCitation: 'Creator Canonical Directive — Paradoxical Mindscape-Aura States, Supernatural Kill Effects & CODM Mythic AK117 - Lava Remix',
      provenanceNote: 'Established directly by creator explanation of paradoxical/dualistic auras, Tenkaichi/Xenoverse state silhouettes, Mindscape Domain Overlap, MWI Supernatural Kill Effects, and CODM Mythic AK117 - Lava Remix.',
      tags: ['Mindscape Aura', 'Paradoxical Ontology', 'Kill Effects', 'AK117 - Lava Remix', 'Astral Economy', 'MWI'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    ...CANONICAL_LORE_ARTICLES.map((art) => ({
      id: art.id,
      title: art.title,
      kicker: art.kicker,
      category: art.category,
      summary: art.summary,
      content: art.content,
      establishedFacts: art.establishedFacts,
      inferredPrinciples: art.inferredPrinciples,
      unresolvedQuestions: art.unresolvedQuestions,
      canonStatus: 'Established' as const,
      sourceCitation: `Primary Ur-Worlds Draft — Section: ${art.sourceSection}`,
      provenanceNote: 'Directly transcribed and analyzed from primary ForeverWorlds / Ur-Worlds draft material.',
      tags: art.tags,
      createdAt: NOW,
      updatedAt: NOW,
    })),
  ];

  // 3. Locations & Realms (All 29 Underworld Realms + 6 Inverted Beast Manifolds) with World Detail & Realm Image Specs
  const sectorCoords: Record<string, { baseX: number; baseY: number }> = {
    'Hellenic & Tartarean': { baseX: 160, baseY: 140 },
    'Vedic & Dharmic': { baseX: 480, baseY: 130 },
    'Goetic & Solomonic': { baseX: 800, baseY: 140 },
    'Mesopotamian & Kur': { baseX: 160, baseY: 310 },
    'Kemetic & Duat': { baseX: 480, baseY: 310 },
    'East Asian (Diyu & Yomi)': { baseX: 800, baseY: 310 },
    'Norse, Germanic & Celtic': { baseX: 180, baseY: 470 },
    'Mesoamerican': { baseX: 500, baseY: 470 },
    'Primordial & Deep-Void': { baseX: 820, baseY: 470 },
  };

  const sectorCounters: Record<string, number> = {};
  const locations: LocationOrRealm[] = [
    ...UNDERWORLD_SECTORS.map((r) => {
      const idx = sectorCounters[r.sector] || 0;
      sectorCounters[r.sector] = idx + 1;
      const base = sectorCoords[r.sector] || { baseX: 400, baseY: 300 };
      const offsetX = (idx % 2) * 115 - 45;
      const offsetY = Math.floor(idx / 2) * 65 - 25;
      return {
        id: r.id,
        title: r.name,
        summary: r.loreContext,
        realmType: (r.sector === 'Primordial & Deep-Void' ? 'Primordial Void' : 'Underworld Sector') as LocationOrRealm['realmType'],
        sector: r.sector,
        visualAtmosphere: r.visuals,
        dominantEntities: r.dominantEntities,
        environmentalLawsAndPhysics: `Governed by ${r.sector} chthonic resonance, ambient Turn Field pressure, and Possibility Resistance constraints.`,
        geopoliticalContext: r.loreContext,
        worldDetailNotes: {
          horizonAndSkyMechanics: `Subterranean / Non-Euclidean ceiling architecture specific to ${r.sector}: ${r.visuals.split('.')[0]}.`,
          architecturalScaleAndMaterials: `Cyclopean brutalist scale (10x–40x human stature); primary materials drawn from ${r.visuals}`,
          ambientTurnFieldBehavior: `Acts as a macro-scale "Realm of Energy" (Expression #5) that passively biases local Turn Fields toward ${r.sector} elemental and pactional vectors.`,
          realmImagePromptSpec: `Wide-angle environmental concept art of ${r.name} (${r.sector} Sector): ${r.visuals} Inhabited by silhouettes of ${r.dominantEntities}. High-contrast obsidian shadows, tactile geological textures, zero generic fantasy glow, museum-grade dark mythic production design, 16:9 aspect ratio.`,
        },
        canonStatus: 'Established' as const,
        sourceCitation: 'Primary Ur-Worlds Draft — 29 Underworld Realms',
        tags: [r.sector, 'Underworld', 'Realm', 'World Detail'],
        mapX: Math.max(60, Math.min(940, base.baseX + offsetX)),
        mapY: Math.max(50, Math.min(550, base.baseY + offsetY)),
        createdAt: NOW,
        updatedAt: NOW,
      };
    }),
    ...INVERTED_BEAST_MANIFOLDS.map((m, i) => ({
      id: m.id,
      title: `${m.name} (Inverted ${m.mirrorAnimal} Manifold)`,
      summary: m.nature,
      realmType: 'Inverted Beast Manifold' as const,
      sector: 'Inverted Beast Manifolds (Void-Tree Outer Boughs)',
      visualAtmosphere: m.nature,
      dominantEntities: m.rulingCaste,
      environmentalLawsAndPhysics: `Predatory mirror biosphere inverting ${m.mirrorAnimal}. ${m.nature}`,
      geopoliticalContext: `Ruled by ${m.rulingCaste}; tethered to the outer boughs of the Void-Tree.`,
      worldDetailNotes: {
        horizonAndSkyMechanics: `Inverted biosphere horizon tethered to the Void-Tree outer boughs; ${m.nature}`,
        architecturalScaleAndMaterials: `Biomorphic predatory architecture mimicking ${m.mirrorAnimal} anatomy (claws, chitin, coils, or bone ravines).`,
        ambientTurnFieldBehavior: `Continuous predatory Turn Field that penalizes standard human sensory reliance and amplifies ${m.rulingCaste} hunting lanes.`,
        realmImagePromptSpec: `Environmental concept art of ${m.name}, the Inverted ${m.mirrorAnimal} Manifold: ${m.nature} Ruled by ${m.rulingCaste}. Non-Euclidean biomorphic architecture, oppressive atmospheric perspective, dark mythic worldbuilding, 16:9.`,
      },
      canonStatus: 'Established' as const,
      sourceCitation: 'Primary Ur-Worlds Draft — Inverted Beast Manifolds',
      tags: ['Inverted Manifold', m.mirrorAnimal, m.rulingCaste, 'World Detail'],
      mapX: 140 + i * 145,
      mapY: 560,
      createdAt: NOW,
      updatedAt: NOW,
    })),
  ];

  // 4. Factions (All 12 Cacodictyology Roots + Major Sovereign Courts)
  const factions: Faction[] = [
    ...CACODICTYOLOGY_ROOTS.map((root, idx) => ({
      id: `root-${root.rootNumber}`,
      title: `${root.romanNumeral}: ${root.title}`,
      summary: `${root.subtitle} — Comprises Hierarchies #${(root.rootNumber - 1) * 12 + 1} through #${root.rootNumber * 12} of the 144 Cacodictyology network.`,
      factionType: 'Cacodictyology Root' as const,
      emblemCode: root.romanNumeral,
      governingPrinciple: root.subtitle,
      territoryOrRoot: `Cacodictyology Root ${root.rootNumber} (${root.hierarchies.length} Sub-Hierarchies)`,
      notableSubHierarchies: root.hierarchies.map((h) => ({
        code: `#${h.number}`,
        name: h.name,
        domain: h.domain,
        tier: h.threatTier,
        description: h.description,
      })),
      canonStatus: 'Established' as const,
      sourceCitation: 'Primary Ur-Worlds Draft — 144 Cacodictyology Hierarchies',
      tags: ['Cacodictyology', root.romanNumeral, root.title],
      mapX: 110 + (idx % 4) * 240,
      mapY: 90 + Math.floor(idx / 4) * 180,
      createdAt: NOW,
      updatedAt: NOW,
    })),
    {
      id: 'faction-goetic-hegemony',
      title: 'The Solomonic-Goetic Hegemony (72 Pillar Noble Clans)',
      summary: 'Feudal infernal superpower anchored in Dite-Sovereign and the Glass Wastes of Paimon, governed by the 72 Goetarchs under the Seven Arch-Princes.',
      factionType: 'Infernal Hegemony',
      emblemCode: 'GOETIA-72',
      governingPrinciple: 'Pactional Jurisprudence, Soul-Currency Monopoly & Feudal Legion Command',
      territoryOrRoot: 'Dite-Sovereign, Glass Wastes of Paimon, Golachab-Foundry',
      notableSubHierarchies: [
        { code: 'Pillar #1', name: 'High House of Bael', domain: 'Eastern Vanguard & Invisibility', tier: 'Prime', description: 'First Principal King commanding 66 legions from Dite-Sovereign.' },
        { code: 'Pillar #9', name: 'Royal Court of Paimon', domain: 'Western Glass Wastes & Arts/Sciences', tier: 'Prime', description: 'Commands 200 legions across vitrified emerald and ruby dunes.' },
        { code: 'Pillar #32', name: 'Asmodean Artificer Crown', domain: 'Wrath, Geometry & Golachab Foundries', tier: 'Prime', description: 'Oversees Qliphothic siege weaponry and blood-knight shock legions.' },
      ],
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Goetic & Solomonic Sector',
      tags: ['Goetia', '72 Pillars', 'Dite-Sovereign', 'Faction'],
      mapX: 780,
      mapY: 220,
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'faction-diyu-naraka-accord',
      title: 'The Diyu-Naraka Judicial Accord (Courts of Yama & Yanluo)',
      summary: 'Imperial bureaucratic alliance linking the Ten Courts of Diyu (Mount Fengdu) and Lord Yama’s Dharmic tribunals in Yamaloka.',
      factionType: 'Underworld Bureaucracy',
      emblemCode: 'JUDICIAL-10',
      governingPrinciple: 'Karmic Ledger Accounting (Agrasamdhani & Scrolls of Mount Fengdu)',
      territoryOrRoot: 'Fengdu-Yamen, Avici-Cube, Maharaurava, Kumbhipaka',
      notableSubHierarchies: [
        { code: 'Court I-X', name: 'Ten Yamen Magistrates of Diyu', domain: 'Karma Mirror & Soul Auditing', tier: 'Prime', description: 'Ox-Head and Horse-Face wardens enforcing imperial judicial decrees.' },
        { code: 'Tribunal', name: 'Chitragupta & Yamaduta Corps', domain: 'Agrasamdhani Ledger Enforcement', tier: 'Prime', description: 'Tracks every mortal simulation and karmic debt across the Bio-Manifold.' },
      ],
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Vedic & East Asian Sectors',
      tags: ['Diyu', 'Naraka', 'Yama', 'Bureaucracy'],
      mapX: 520,
      mapY: 240,
      createdAt: NOW,
      updatedAt: NOW,
    },
  ];

  // 5. Entities with Character Proportions & Craniofacial Features
  const entities: Entity[] = [
    // Initial 4 Detailed Dossiers with full Proportions & Craniofacial specs
    ...INITIAL_DOSSIERS.map((d, idx) => ({
      id: d.id,
      title: d.title,
      summary: d.summary,
      kind: (d.type === 'Character' ? 'Character' : d.type === 'Creature' ? 'Creature' : 'Artifact') as Entity['kind'],
      categoryTier: d.categoryTier,
      cognitionTier: d.categoryTier === 'Category 5' ? 'Tier 7-9 (Soul 1 / MWI)' : 'Tier 2-3 (Somatic / Deep Intuition)',
      factionOrCaste: d.tags[1] || 'Independent',
      originOrRealm: d.tags.includes('Bast-Irkalla') ? 'Bast-Irkalla' : 'Ur-Worlds Frontline',
      metaphysicalNature: d.description,
      appearanceAndSilhouette: d.visualDirection,
      proportionsAndFacialFeatures:
        idx === 0
          ? {
              headHeightRatio: '6.8 Heads Tall (Hyper-Brutalist Top-Heavy Vanguard Ratio)',
              statureAndMass: '9\'2" (279 cm) | 1,140 lbs (517 kg) — Dense iron-scaled dermal plating',
              somatotypeAndLimbRatio: 'Extreme Mesomorph-Endomorph; clavicle span is 3.4x head width; thick apelike forearms hanging to mid-shin for low-center cleaving.',
              craniofacialStructure: 'Heavy prognathic lower mandible with interlocking basalt-enamel tusks; recessed nasal aperture replaced by twin diagonal thermal-vent slits; supraorbital brow ridge fused into four swept-back iron horns.',
              ocularAndFacialFeatures: 'Deep-set orbital sockets protecting small, pupil-less ember-orange sclera; cheek dermis split by sulfurous exhaust fissures that glow when inhaling.',
              postureAndCenterOfGravity: 'Forward-canted 22-degree cervical neck angle; pelvis and knees locked in a coil-spring stomp stance built to absorb Gō-Ki barometric recoil.',
            }
          : idx === 1
          ? {
              headHeightRatio: '7.8 Heads Tall (Classical Lean-Dense Martial Ascetic Ratio)',
              statureAndMass: '6\'1" (185 cm) | 265 lbs (120 kg) — Looks 175 lbs in volume but weighs 265 lbs due to silicon-iron bone calcification',
              somatotypeAndLimbRatio: 'Wiry Ectomorph-Mesomorph; long reach (wingspan 1.06x height); hypertrophied forearm flexors, achilles tendons, and sternocleidomastoid neck columns.',
              craniofacialStructure: 'Angular, high-cheekbone craniofacial geometry; calcified graphite-colored osteoid ridges visibly protruding along the supraorbital brow, zygomatic arch, and jawline.',
              ocularAndFacialFeatures: 'Sclera shows burst crimson capillary webbing from 200+ mmHg hydraulic blood pressure; irises pale slate-grey; skin weathered and taut with dilated steam-venting pores across collarbones.',
              postureAndCenterOfGravity: 'Rooted low-pelvis horse stance (Shiko-dachi); spine vertically plumb like a suspension cable.',
            }
          : idx === 3
          ? {
              headHeightRatio: '9.5 Head-Lengths Long (Elongated Quadrupedal Feline Silhouette)',
              statureAndMass: '4\'6" shoulder height, 11\'0" nose-to-tail | Effective mass fluctuates near zero in darkness',
              somatotypeAndLimbRatio: 'Hyper-attenuated feline anatomy; disproportionately long metacarpals and digitigrade hind legs built for zero-acoustic vertical leaps.',
              craniofacialStructure: 'Narrow, wedge-shaped skull lacking external pinnae (ears replaced by vibration-sensing cranial grooves); jaw unhinges to 110 degrees.',
              ocularAndFacialFeatures: 'Twin horizontal crescent slits of pale violet starlight; zero specular shine on nose or gums—entire face absorbs incoming photons.',
              postureAndCenterOfGravity: 'Belly-low stalking glide; scapulae rise higher than the cranium when prowling.',
            }
          : undefined,
      abilitiesAndPowers: d.description,
      restrictorPlatesAndLimits: `Possibility Resistance Delta: ${d.possibilityResistanceTier}. Bound by ${d.associatedFuelOrKi} hardware limits.`,
      associatedFuelOrKi: d.associatedFuelOrKi,
      possibilityResistanceDelta: d.possibilityResistanceTier,
      soundAndVfxDirection: d.soundDesignNotes,
      production3DBrief: d.production3DNotes,
      canonStatus: 'Established' as const,
      sourceCitation: 'Primary Ur-Worlds Draft & Studio Canonical Dossiers',
      tags: d.tags,
      createdAt: d.createdAt,
      updatedAt: d.updatedAt,
    })),

    // All 7 Category Race Tiers
    ...CATEGORY_RACE_TIERS.map((c, idx) => ({
      id: `cat-race-${idx + 1}`,
      title: `${c.category}: ${c.classification}`,
      summary: `Cognition: ${c.cognition}. Magic Capability: ${c.magicCapability}`,
      kind: 'Category Race' as const,
      categoryTier: c.category,
      cognitionTier: idx === 0 ? 'Tier 1' : idx <= 2 ? 'Tier 2-3 (Category X)' : idx === 3 ? 'Tier 2-6' : idx === 4 ? 'Tier 7-9' : 'Tier 11-12',
      factionOrCaste: 'Ontological Species Classification',
      originOrRealm: 'Pan-Cosmological / Bio-Manifold & Beyond',
      metaphysicalNature: `Cognition Profile: ${c.cognition}\nEmotional Hardware: ${c.emotions}\nKnown Examples: ${c.knownExamples.join(', ')}`,
      appearanceAndSilhouette: idx === 1 ? 'Zero physical form; exists as non-sentient thinking geometry.' : 'Varies across biological and non-corporeal manifolds.',
      proportionsAndFacialFeatures: {
        headHeightRatio: idx === 1 ? 'N/A (Formless Geometric Node)' : idx === 2 ? 'Radial or Bilateral Non-Emotional Symmetry' : idx === 3 ? '7.5–8.0 Heads Tall (Human/Bio-Manifold Baseline)' : 'Variable / Multi-Limbed / Non-Euclidean',
        statureAndMass: idx === 1 ? 'Zero Mass' : 'Biological or Semi-Spiritual density',
        somatotypeAndLimbRatio: idx === 3 ? 'Evolutionary bipedal/terrestrial proportions shaped by gravity and survival hardware.' : 'Ontologically determined by Category tier.',
        craniofacialStructure: idx === 2 ? 'Lacks facial musculature for emotional expression (zero evolutionary social signaling).' : idx === 3 ? '42+ facial muscles wired directly to limbic social GPS (fear, anger, disgust, shame, attachment).' : 'Trans-biological or archetypal.',
        ocularAndFacialFeatures: idx === 2 ? 'Multi-faceted or fixed sensory apertures optimized for 360-degree trajectory calculation.' : 'Evolutionary sensory organs.',
        postureAndCenterOfGravity: 'Governed by local planetary gravity or Turn Field buoyancy.',
      },
      abilitiesAndPowers: c.magicCapability,
      restrictorPlatesAndLimits: `Unresolved / Design Gap Note: ${c.missingInDraft}`,
      associatedFuelOrKi: idx >= 2 ? 'MWI Precognitive Simulation / Supernatural Reserves' : 'None (Newtonian Only)',
      canonStatus: 'Established' as const,
      sourceCitation: 'Primary Ur-Worlds Draft — Category 1 to Omni-Life Taxonomy',
      tags: [c.category, 'Ontology', 'Species Tier', 'Proportions'],
      createdAt: NOW,
      updatedAt: NOW,
    })),

    // All 22 Detailed Demon Breeds with Proportion & Facial Morphology notes
    ...DETAILED_DEMON_BREEDS.map((b) => ({
      id: b.id,
      title: `${b.name} — ${b.epithet}`,
      summary: `${b.caste} breed. ${b.combatRole}`,
      kind: 'Demon Breed' as const,
      categoryTier: 'Category 5',
      cognitionTier: 'Tier 6-8 (Netherbound Category 5)',
      factionOrCaste: b.caste,
      originOrRealm: 'The Nethermost / Underworld Sectors',
      metaphysicalNature: b.description,
      appearanceAndSilhouette: b.description,
      proportionsAndFacialFeatures: {
        headHeightRatio: b.caste.includes('Brute') || b.caste.includes('Vanguard')
          ? '6.2–6.8 Heads Tall (Heavy Chthonic Vanguard Ratio)'
          : b.caste.includes('Sorcerer') || b.caste.includes('Aristocrat')
          ? '8.5–9.2 Heads Tall (Attenuated Aristocratic / Occult Ratio)'
          : '7.5–8.2 Heads Tall (Predatory / Chimeric Ratio)',
        statureAndMass: 'High-density Category 5 Nether-flesh and mineralized chitin/bone.',
        somatotypeAndLimbRatio: `Sculpted for ${b.combatRole}`,
        craniofacialStructure: `Caste-specific cranial silhouette (${b.epithet}): reinforced brow/horn anchor points or elongated occult cranium.`,
        ocularAndFacialFeatures: b.description,
        postureAndCenterOfGravity: `Combat stance tuned for ${b.combatRole}`,
      },
      abilitiesAndPowers: `Combat Doctrine & Role: ${b.combatRole}`,
      restrictorPlatesAndLimits: 'Locked behind Category 5 ontological restrictor plates; vulnerable to specific somatic Ki disruption or Solomonic pactional clauses.',
      associatedFuelOrKi: 'Netherfire Reserves & Negative Psychic Current',
      canonStatus: 'Established' as const,
      sourceCitation: 'Primary Ur-Worlds Draft — 22 Detailed Demon Breeds',
      tags: ['Demon Breed', b.caste, b.name, 'Proportions'],
      createdAt: NOW,
      updatedAt: NOW,
    })),

    // All 7 Named Demon Bloodline Groups (102 Bloodlines)
    ...NAMED_DEMON_BLOODLINES.map((group) => ({
      id: group.id,
      title: `Bloodline Registry: ${group.categoryName}`,
      summary: `${group.subtitle} Contains ${group.bloodlines.length} named bloodline strains (${group.bloodlines.map((b) => b.name).slice(0, 5).join(', ')}...).`,
      kind: 'Demon Bloodline' as const,
      categoryTier: 'Category 5',
      cognitionTier: 'Tier 7-9',
      factionOrCaste: group.categoryName,
      originOrRealm: 'Nethermost & Underworld Sectors',
      metaphysicalNature: `${group.subtitle}\n\nComplete Canonical Strain Roster (${group.bloodlines.length} Strains):\n${group.bloodlines.map((b, i) => `${i + 1}. ${b.name} [${b.status}]`).join('\n')}`,
      appearanceAndSilhouette: 'Distinct hereditary morphological markers, craniofacial bone geometry, and body proportions tied to their primordial underworld sector.',
      abilitiesAndPowers: 'Hereditary bloodline reality-warping lanes and innate Turn Field dominance governed by their clan archetype.',
      restrictorPlatesAndLimits: 'Most strains in this group are currently Named Seeds awaiting individual biological, craniofacial, and restrictor-plate flesh-out.',
      associatedFuelOrKi: 'Bloodline-Specific Netherfire & Cosmic Fuels',
      canonStatus: 'Established' as const,
      sourceCitation: 'Primary Ur-Worlds Draft — 102 Named Demon Bloodlines',
      tags: ['Bloodlines', 'Demon Lineage', group.id],
      createdAt: NOW,
      updatedAt: NOW,
    })),

    // All 32 Astral Taxonomy Groups (329 Distinct Astral Species)
    ...ASTRAL_TAXONOMY_GROUPS.map((ag) => ({
      id: ag.id,
      title: `Astral Taxonomy: ${ag.category}`,
      summary: `${ag.tier} (${ag.entities.length} Species) — Includes: ${ag.entities.join(', ')}.`,
      kind: 'Astral Entity' as const,
      categoryTier: ag.id === 'astral-soul1-temporal' ? 'Tier 7 Breach Phenomenon' : 'Astral Entity (Sub-Soul < Soul 1)',
      cognitionTier: ag.tier,
      factionOrCaste: ag.category,
      originOrRealm: 'The Vibrational Spectrum & Telepathic Veil ("The Psychic Internet")',
      metaphysicalNature: `Tier Classification: ${ag.tier}\nFormation Vector: ${ag.formationVector || 'Precipitated from emotion-weighted Pre-Cognitive Simulations (Astral Trails).'}\n\nCanonical Species in Family (${ag.entities.length}):\n${ag.entities.map((e, i) => `${i + 1}. ${e}`).join('\n')}\n\nAstral Construction Rule: Astral Entities are NEVER a complete soul (gathering a complete soul crosses an entity over into Tier 7 Semi-Spiritual Soulhood). Separated between Tier 5 Low-Astral and Tier 6 True Astral by a 10⁹× (one-billion-fold) qualitative gulf.`,
      appearanceAndSilhouette: 'Paradoxical, folkloric, or urban-legend silhouettes governed by The Illusion of Myths rather than biological evolution.',
      abilitiesAndPowers: ag.id === 'astral-soul1-temporal'
        ? 'Timeline predation, entropy stalking, and temporal anomaly generation following a linear Soul 1 detonation.'
        : 'Operating across the Psychic Internet, fermenting negative emotional loops into AMRs inside internal mindscape tanks, or enforcing Gatekept Occult Frameworks.',
      restrictorPlatesAndLimits: 'Incomplete soul (< Soul 1); bound to specific vibrational frequencies, suffumigation smoke media, or their host’s internal mindscape tank.',
      associatedFuelOrKi: 'Shed Pre-Cognitive Simulation Wakes (Astral Trails) & Suffumigation Smoke',
      canonStatus: 'Established' as const,
      sourceCitation: 'Primary Ur-Worlds Draft & Expanded 32-Family Astral Registry (329 Species)',
      tags: ['Astral', 'Psychic Internet', '329 Astral Species', ag.id],
      createdAt: NOW,
      updatedAt: NOW,
    })),

    // All 11 Expanded Non-Astral Race Categories (145 New Races)
    ...EXPANDED_RACE_CATEGORIES.map((cat) => ({
      id: cat.id,
      title: `Expanded Race Registry: ${cat.categoryName}`,
      summary: `${cat.ontologicalTier} | ${cat.cognitionTier} — ${cat.races.length} Distinct Races (${cat.races.map((r) => r.name).slice(0, 4).join(', ')}...).`,
      kind: 'Category Race' as const,
      categoryTier: cat.ontologicalTier,
      cognitionTier: cat.cognitionTier,
      factionOrCaste: cat.categoryName,
      originOrRealm: 'Pan-Cosmological / Bio-Manifold, Nether-Domains & Inverted Beast-Manifolds',
      metaphysicalNature: `Construction & Evolutionary Mechanism:\n${cat.constructionMechanism}\n\nComplete Roster of ${cat.races.length} Canonical Races:\n${cat.races.map((r, i) => `${i + 1}. ${r.name} (${r.epithet}) — ${r.morphologyAndTrait}`).join('\n')}`,
      appearanceAndSilhouette: cat.races.map((r) => `• ${r.name}: ${r.morphologyAndTrait}`).join('\n'),
      proportionsAndFacialFeatures: {
        headHeightRatio: cat.ontologicalTier.includes('Category 2')
          ? 'N/A (Formless Thinking Geometry)'
          : cat.ontologicalTier.includes('Category 3')
          ? 'Emotionless, Unblinking Pre-Cognitive Symmetry'
          : 'Species-Specific Evolutionary & Deep-Time Proportions',
        statureAndMass: `Varies across ${cat.races.length} constituent species (${cat.ontologicalTier}).`,
        somatotypeAndLimbRatio: cat.constructionMechanism,
        craniofacialStructure: `Adapted to ${cat.cognitionTier} and environmental survival pressure.`,
        ocularAndFacialFeatures: cat.races[0]?.morphologyAndTrait || 'Distinct evolutionary sensory organs.',
        postureAndCenterOfGravity: `Governed by ${cat.associatedFuelOrKi}.`,
      },
      abilitiesAndPowers: `Associated Fuel / Ki Vector: ${cat.associatedFuelOrKi}.\n${cat.constructionMechanism}`,
      restrictorPlatesAndLimits: cat.restrictorPlate,
      associatedFuelOrKi: cat.associatedFuelOrKi,
      canonStatus: 'Established' as const,
      sourceCitation: 'Creator Canonical Directive — 670-Race Master Expansion (145 New Non-Astral Races)',
      tags: ['Expanded Races', '670-Race Census', cat.ontologicalTier, cat.id],
      createdAt: NOW,
      updatedAt: NOW,
    })),

    // The 72 Goetarchs Registry & Noble Demon Ontology
    {
      id: 'entity-goetarch-72-registry',
      title: 'The 72 Goetarchs (Sovereign Pillar Dynasties & Noble Demons)',
      summary: 'Complete canonical roster of the 72 Noble Demon Houses commanding the Goetic-Solomonic Hegemony—ancient sovereigns housing Living Dynastic AMR Vaults.',
      kind: 'Goetarch / Sovereign',
      categoryTier: 'Category 5 (Sovereign Pillar Aristocracy)',
      cognitionTier: 'Tier 8-9 (Full Soul 1 + Soul 2 MWI Sovereignty)',
      factionOrCaste: 'The Solomonic-Goetic Hegemony (The 72 Pillars)',
      originOrRealm: 'Dite-Sovereign & The 72 Pillar Citadels',
      metaphysicalNature: `Complete Canonical Roster of the 72 Goetarch Nobles:\n${GOETARCH_72_NOBLES.map((g, i) => `#${i + 1}. ${g}`).join('  |  ')}\n\nOntology of Noble Demons: The 1% Apex Sovereign Survivors of the Nether whose hereditary internal mindscape tanks were engineered over millennia to house volatile, high-Grade AMRs and command legions of personal Astral symbionts.`,
      appearanceAndSilhouette: 'Towering, statue-like patrician royalty sculpted via Sovereign Mimicry to command Category 4 awe and dread.',
      abilitiesAndPowers: 'Command legion hierarchies, heirloom Grade 2–4+ AMRs (Liquid-Tank, Solid-Chunk, and Gas reserves), 4-Stage Negative-Loop AMR Harvesting, Mindscape-Aura Overlaps, and Pactional treaties.',
      restrictorPlatesAndLimits: 'Bound by primordial Solomonic treaty clauses and Bloodline Drift (hereditary psychological obsessions tied to their house AMR). Must actively throttle their internal tank when living among mortals.',
      associatedFuelOrKi: 'Heirloom Grade 2–4+ House AMRs Fermented via 4-Stage Negative-Loop Harvesting',
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft & Canonical Noble Demon Ontology',
      tags: ['Goetarchs', '72 Pillars', 'Sovereigns', 'Noble Demons', 'Netherbounders', 'Negative Loops', 'AMR'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'entity-netherbounders-and-noble-demons',
      title: 'Netherbounders & Noble Demons (Deep-Time "Chapters of the Past" & Negative-Loop AMR Ecology)',
      summary: 'Canonical distinction between First-Born Chthonic Demons, the 99% reshaped Netherbounder post-species (All Tomorrows scale), and the 1% Noble Demon Sovereigns.',
      kind: 'Demon Bloodline',
      categoryTier: 'Category 3–5 (Reshaped Post-Species to Sovereign Nobles)',
      cognitionTier: 'Tier 6–9 (Servitor Castes up to 72 Pillar Sovereigns)',
      factionOrCaste: 'Nethermost Hierarchy / 102 Bloodlines / 72 Pillars',
      originOrRealm: 'The 15 Nether-Domains & Conquered Deep-Time Epochs ("Chapters of the Past")',
      metaphysicalNature: 'Separates First-Born Chthonic Demons (native to the deep pits) from Netherbounders—entire mortal kingdoms, alien species, and vanished epochs dragged across the Nether-veil millions of years ago (All Tomorrows scale). While 99% were warped into specialized siege and servitor post-species (Brontorim, Skul-Vermil, Slag-Striders), the 1% Sovereign Survivors expanded their internal tanks and rose as the Noble Houses.',
      appearanceAndSilhouette: '99% Netherbounders: Chitinous, iron-scaled, or siege-warped post-species. 1% Noble Demons: Patrician humanoid royalty of immense physical density and structural inertia.',
      abilitiesAndPowers: 'Powered by the 4-Stage Negative-Loop AMR Harvest: (1) Seeding vibrational cues, (2) Locking nearby mortals into negative emotional loops, (3) Harvesting shed Astral Trails, and (4) Fermenting them inside their internal mindscape tank into Liquid, Solid, or Gas AMRs.',
      restrictorPlatesAndLimits: 'Living near mortal cities passively sours local dreams and luck unless throttled. Each Noble House suffers from Bloodline Drift tied to its heirloom AMR.',
      associatedFuelOrKi: '4-Stage Negative-Loop Harvest → Liquid-Tank, Solid-Chunk & Gas AMRs',
      canonStatus: 'Established',
      sourceCitation: 'Creator Canonical Directive — Ontology of Netherbounders & Noble Demons',
      tags: ['Netherbounders', 'Noble Demons', 'All Tomorrows', 'Negative Loops', 'AMR', 'Chapters of the Past'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    // The Redesigned Boosted Gear (CODM Mythic AK117 - Lava Remix Reactive Tectonic Chassis)
    {
      id: 'artifact-boosted-gear-ak117-lava',
      title: 'The Redesigned Boosted Gear (CODM Mythic AK117 - Lava Remix Reactive Tectonic Chassis)',
      summary: 'Canonical Ur-Verse redesign of the Boosted Gear modeled on the Call of Duty: Mobile (CODM) Mythic AK117 - Lava Remix weapon template, driven by precognitive simulation of that specific mod and rendered with Elden Ring / Dark Souls Mystical Cinematic Epicness and 2D Wargamer Icon explicit geometry.',
      kind: 'Artifact',
      categoryTier: 'En-Grafted Reactive Relic (Expression #6)',
      cognitionTier: 'Precognitive Simulation of Specific Mod + Draconic Core Resonance',
      factionOrCaste: 'Mystical Cinematic Epicness / Reactive Armament',
      originOrRealm: 'Ur-Verse / ForeverWorlds Redesigned Sacred Relic',
      metaphysicalNature: `PHILOSOPHY & CODM MYTHIC AK117 - LAVA REMIX TEMPLATE:
Built on the unique design template, interactive reactivity, acoustics, and lighting philosophy of the Call of Duty: Mobile (CODM) **Mythic AK117 - Lava Remix** combined with Elden Ring / Elder Scrolls / Dark Souls Mystical Cinematic Epicness.
• Precognitive Simulation Activation (Zero Emotional Power-Up): Its AMR and reactive stages are NOT driven by emotion or shonen willpower; they are driven by **precognitive simulation of any form relating to this specific mod**.

1. EXPLICIT 2D WARGAMER ICON GEOMETRY:
Described with the hyper-explicit structural clarity of a 2D stickman war-game weapon icon:
• Outer Housing: Segmented, jagged cooling-obsidian tectonic plates (#14151C) with chamfered gunmetal-tungsten edges (#3A3D4D) that split and slide along micro-rails from the dorsal metacarpals up to the proximal ulna.
• The "AK117 - Lava Remix" Magma Core Chamber: Running down the central dorsal spine of the forearm is a recessed, armored borosilicate-slag chamber where dense, viscous molten magma (#FF4D1A to #FFB84D) churns and coalesces across reactive stages.
• Geometric Sight & Vent Apertures: Raised triangular CODM-Mythic iron-sight-style dorsal fins and angled heat-sink louvers along the wrist and knuckle-bridge that physically ratchet open at higher reactive stages.

2. RAY-TRACED LIGHT & GRAVITATIONAL LENSING:
• The viscous magma inside the AK117 - Lava Remix forearm chamber acts as a physical Ray-Traced light source: casting moving, refracted orange-amber caustics onto the wielder's knuckles, wet stone, and nearby metal bevels, while extreme heat creates subtle gravitational-like optical air lensing above the vents.

3. ACOUSTICS & REACTIVE INSPECTION MECHANICS:
• Sound Profile: Heavy firearm-grade metallic receiver clicks, bolt-carrier ratchets, a deep subterranean thermal hum, and a sharp, compressed sub-bass drop + molten snap on each cycle/strike.
• Reactive Stages: Escalates across mechanical-thermal stages (dormant dark obsidian -> cracking ember veins -> full white-amber convective flow with unsealed tectonic plates).`,
      appearanceAndSilhouette: 'Asymmetric, sharp-beveled CODM Mythic AK117 - Lava Remix tectonic obsidian-and-tungsten forearm chassis with an exposed dorsal magma chamber, triangular sight fins, and ray-traced internal caustic glow.',
      proportionsAndFacialFeatures: {
        headHeightRatio: 'Forearm-to-Hand Ratio: 1.35x standard gauntlet length; tapers sharply at the wrist to preserve full hand/finger dexterity.',
        statureAndMass: '38 lbs (17.2 kg) physical tungsten-obsidian dry weight; zero-buoyancy when En-Grafted.',
        somatotypeAndLimbRatio: '2D Wargamer Icon Silhouette: Distinct 3-tier stepped profile—(1) spiked knuckle-breaker prow, (2) recessed translucent AK117 - Lava Remix dorsal magma chamber, (3) flared tectonic elbow exhaust shroud.',
        craniofacialStructure: 'Dorsal Sight-Bridge: Geometric triangular CODM-Mythic iron-sight aperture seated above the carpal joint, framing the internal magma core.',
        ocularAndFacialFeatures: 'Core Aperture: Viscous, churning Lava Remix magma shifting from deep volcanic crimson (#D92B2B) at Stage 1 to blinding solar amber-white (#FFF0B3) at Stage 5.',
        postureAndCenterOfGravity: 'Subtle Hand Mechanics: Wielder keeps fingers half-curled in a relaxed tactical trigger/claw index; power is telegraphed by micro-ratcheting plate shifts and localized Psychological Weather (barometric heat-drop).',
      },
      abilitiesAndPowers: 'AK117 - Lava Remix Reactive Tectonic Cycle Progression, Precognitive Mod Simulation, Ray-Traced Internal Magma Caustics, Acoustic Bass-Drop Kinetic Snap, and Psychological Weather Barometric Pressure Shift.',
      restrictorPlatesAndLimits: 'Strictly bound by Precognitive Simulation of its specific mod template, physical thermal convection, and mechanical stage cycling; never powered by emotional willpower.',
      associatedFuelOrKi: 'AK117 - Lava Remix Mod AMR + Precognitive Simulation + Ray-Traced Thermal Lensing',
      canonStatus: 'Established',
      sourceCitation: 'Creator Canonical Directive — Boosted Gear CODM Mythic AK117 - Lava Remix Redesign',
      tags: ['Boosted Gear', 'AK117 - Lava Remix', 'CODM Mythic', 'Mystical Cinematic Epicness', 'Ray Tracing', 'Precognitive Mod'],
      createdAt: NOW,
      updatedAt: NOW,
    },
  ];

  // 6. Power Systems (Anti-Aura Light & Psychological Weather + Turn Fields & 6 Energy Forms + MWI Gun System + Somatic Ki + 31 Occult Frameworks + 16 Cosmic Fuels + 21 Netherfire Reserves)
  const powerSystems: PowerSystem[] = [
    {
      id: 'ps-anti-aura-light-psych-weather',
      title: 'Mindscape-Aura States (Tenkaichi/Xenoverse Silhouettes & Astral Overlap) & Supernatural Kill Effects',
      summary: 'Broad, flexible framework for Paradoxical/Dualistic State Auras (material liquid/mist, Buddhist internal-world / personal Astral Economy domain overlap, ray-traced light) and MWI Supernatural Kill Effects (COD Mythic, War of the Worlds, Gantz, and Mortal Kombat finishers).',
      systemCategory: 'Turn Field Architecture',
      epithet: 'Internal World Projection, Boss-Mode State Silhouettes & MWI Kill Finishers',
      coreAxiom: 'We reject generic DBZ hair-color-matched energy outlines. Instead, "Aura" in the Ur-Verse is ontologically paradoxical/dualistic and functions as a game-style Special State, Transition, or Environmental Mindscape Overlap (Tenkaichi / Xenoverse / Stickman War Battles style) that projects an entity’s internal world, soul, and personal Astral Entity ecology (vibrational spectrum + telepathy) into the room—while supernatural eliminations trigger MWI-driven "Kill Effects".',
      powerVibeSignature: 'A normal room suddenly plunged into an entity’s internal mindscape (dark blinding orange lava, lava-lightning, abyssal nebula, ray-traced orange skin bounce against pitch shadow, black sclera with glowing eyes, and lurking personal astral entities) paired with visceral COD Mythic / Gantz / War of the Worlds / Mortal Kombat Supernatural Kill Effects.',
      turnFieldMechanics: `BROAD & FLEXIBLE MECHANICS (NEVER RESTRICTING THE SYSTEM):
1. Paradoxical / Dualistic Game-State Aura Silhouettes (Tenkaichi / Xenoverse / Stickman War): Aura functions as an active state, transition, or boss-mode silhouette—independent of hair color—and is ontologically paradoxical (just because it looks like mist or glowing liquid does not mean it is physical matter, though it can be material, non-physical, or both).
2. Mindscape / Domain Overlap (Internal Tank & Personal Astral Economy): Inspired by Buddhist internal worlds. Supernatural entities operate like an "internal tank" housing their own psychic/Astral ecology (vibrational spectrum + telepathy). Activating their state projects this internal world over local space (connected to MWI)—functioning visually like a Domain Overlap without needing to be a stat-buff barrier.
3. Supernatural Kill Effects (Nether / Cacodictyology MWI Finishers): Exclusively for supernatural entities (especially Nether-worlders). Because attacks warp reality via MWI, lethal hits inflict tier-scaled Kill Effects—e.g., leprotic internal fireworks bursting into dust (COD Mythic), Tripod heat-ray ash vaporization, instant calcification, or Gantz/MK-style exaggerated finishers.
4. Ray-Traced Light, Gravitational Lensing & Mystical Cinematic Epicness: Real optical bounce/caustics, Elden Ring / Dark Souls item weight, and CODM Mythic AK117 - Lava Remix reactive hardware.`,
      operationalMechanics: `• State/Transition Aura: Ontologically paradoxical and psychological projection (liquid, mist, shadow, nebula, or Ki state).\n• Personal Astral Economy: The surrounding darkness inside an entity's Mindscape Overlap is populated by their personal Astral Entities (vibrational spectrum + telepathy).\n• MWI Kill Effects: Scaled by the entity's local power and Nether/MWI reality-warping signature.`,
      hardwareOrMediumRequired: 'Internal Soul/Mindscape tank, personal Astral Entity ecology, MWI reality-warping vector, or Somatic Ki state.',
      restrictorPlateAndKickback: 'Broad design rule: Never box characters into hair-color-matched DBZ outlines; keep Aura states open to paradoxical mists, liquids, mindscape overlaps, and boss-mode silhouettes.',
      subComponents: [
        { name: 'Tenkaichi / Xenoverse Boss-Mode State Silhouette', designation: 'State / Transition Aura', description: 'Special ability or boss-mode visual transition state independent of hair color.', stateOrGrade: 'Established' },
        { name: 'Paradoxical Material/Non-Material Aura Media', designation: 'Dualistic Ontology', description: 'Can look like glowing liquid, dark-orange lava mist, or steam without being bound to physical matter.', stateOrGrade: 'Established' },
        { name: 'Mindscape Domain Overlap & Personal Astral Tank', designation: 'Internal World Projection', description: 'Imposes the entity’s soul, mindscape, and personal Astral Entity economy (vibrational spectrum + telepathy) onto the room.', stateOrGrade: 'Established' },
        { name: 'Supernatural Kill Effects (MWI / Nether Finishers)', designation: 'Exaggerated Elimination State', description: 'COD Mythic sub-dermal fireworks dust-burst, War of the Worlds Tripod vaporization, Gantz/MK calcification or smoking-boots finishers.', stateOrGrade: 'Established' },
        { name: 'Ray-Traced Light & CODM Mythic AK117 - Lava Remix Hardware', designation: 'Optical & Relic Spec', description: 'Hellish-orange ray-traced bounce light against pitch shadow + CODM Mythic AK117 - Lava Remix reactive weapon mechanics.', stateOrGrade: 'Established' },
      ],
      canonStatus: 'Established',
      sourceCitation: 'Creator Canonical Directive — Mindscape-Aura States & MWI Supernatural Kill Effects',
      tags: ['Mindscape Aura', 'Kill Effects', 'Tenkaichi / Xenoverse', 'Astral Economy', 'Ray Tracing', 'AK117 - Lava Remix'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'ps-turn-fields-6-forms',
      title: 'Turn Fields & The 6 Supernatural Energy Expressions',
      summary: 'How supernatural energies express as localized Turn Fields, Reserves, Connected Networks, Essence, Realms of Energy, and En-Grafted hardware across 11 exotic matter phase-states and non-physical forms.',
      systemCategory: 'Turn Field Architecture',
      epithet: 'Localized Spatial Phase-Conversion & Field Dominance',
      coreAxiom: 'Supernatural Energies are NOT restricted to glowing projectiles or body outlines. Per the primary draft, they exist in 6 structural forms—1. Fields (Turn Fields), 2. Reserves, 3. Connected Networks, 4. Essence, 5. Realms of Energy, and 6. En-Grafted—and can express in ANY physical matter state (including Quark-Gluon Plasma, Bose-Einstein Condensate, Superfluid, Supersolid, Time Crystals, Superionic Ice) or Completely Non-Physical / Spacetime-Blind forms.',
      powerVibeSignature: 'Industrial, chemical, thermodynamic, or ceremonial pressure governed by Ray-Traced Light, Gravitational Lensing, and Psychological Weather. When a Turn Field deploys, the air curdles, acoustics deaden or ring like struck bronze, shadows lock into geometric facets, or gravity bends light—never shonen body auras.',
      turnFieldMechanics: `HOW TURN FIELDS OPERATE IN COMBAT & WORLD DETAILS:\n1. Spatial Phase-Turning: A practitioner or entity "turns" a bounded volume of local space (or turn-based combat interval) into an active Field governed by their fuel, somatic barometric pressure, or occult framework.\n2. Exotic Matter Phase Expression: Within a Turn Field, energy expresses as real exotic physics—e.g., Time Crystals (repeating temporal oscillation without energy loss), Superionic Ice (black, hot crystalline lattice), or Superfluid (zero-viscosity creeping mire).\n3. Field Dominance & Overwrite: When two Turn Fields collide, the field with lower Possibility Resistance tax (via structural hardware like Decanic Alloy Antennas or Pactional Chalk Perimeters) or denser somatic pressure (Gō-Ki / Yō-Ki) overwrites the rival boundary.`,
      operationalMechanics: `The 6 Canonical Energy Expressions:\n• 1. Fields (Turn Fields): Active localized domains that convert ambient physics, acoustics, light refraction, or probability within a perimeter.\n• 2. Reserves: Pre-encoded internal or vessel ammunition ("Bullets" / AMRs in the Gun System).\n• 3. Connected Networks: Distributed ley, mycelial, or psychic hive-lattices (e.g., Astral Internet, Category 5 Trust/Dread lattices).\n• 4. Essence: Concentrated ontological identity or marrow-core.\n• 5. Realms of Energy: Macro-scale dimensional manifolds (the 29 Underworld Sectors & Inverted Beast Manifolds).\n• 6. En-Grafted: Supernatural energy permanently fused into biological bone/nerves or reactive metallurgical artifacts (such as the CODM Mythic AK117 - Lava Remix Boosted Gear).`,
      hardwareOrMediumRequired: 'Chalk/alloy perimeter, atmospheric chemical medium (Suffumigation smoke), Decanic clockwork antenna, or high-pressure somatic vascular output.',
      restrictorPlateAndKickback: 'Turn Fields require continuous boundary maintenance. If the physical anchor (chalk line, smoke density, or somatic heart rate) is disrupted, the Turn Field violently collapses inward.',
      subComponents: [
        { name: 'Time Crystal Turn Field', designation: 'Exotic Matter State', description: 'Locks a 10m arena into a repeating non-equilibrium temporal oscillation; projectiles repeat their trajectory every 3 seconds.', stateOrGrade: 'Time Crystal' },
        { name: 'Superionic Ice Turn Field', designation: 'Exotic Matter State', description: 'Pressurizes ambient moisture into hot, electrically conductive black crystalline ice under extreme barometric weight.', stateOrGrade: 'Superionic Ice' },
        { name: 'Bose-Einstein Condensate (BEC) Field', designation: 'Exotic Matter State', description: 'Drops local quantum temperature near absolute zero so matter waves coalesce into a single macroscopic quantum smear.', stateOrGrade: 'BEC Condensate' },
        { name: 'Quark-Gluon Plasma Breach Field', designation: 'Exotic Matter State', description: 'Briefly strips hadronic confinement inside a tightly bounded micro-sphere—the apex physical thermal output.', stateOrGrade: 'QGP Plasma' },
        { name: 'Spacetime-Blind Non-Physical Field', designation: 'Metaphysical / Root XII', description: 'Zero mass, untouched by gravity, unrecognizable by time-space; cannot be observed by standard physical optics.', stateOrGrade: 'Non-Corporeal' },
      ],
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Supernatural Ecosystem Energy Ecology-Organizations',
      tags: ['Turn Fields', 'Power Vibe', '6 Energy Forms', 'Time Crystals', 'Superionic Ice'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'ps-mwi-gun-system',
      title: 'The "Gun System": 7 MWI Ammo Grades (10⁴ Jumps), 400–500+ AMRs & The Meta-Chaos (Tier 0)',
      summary: 'Realistic supernatural energy system where 400–500+ Ammo Types (AMRs) operate across 7 MWI Grades (each jump = 10⁴ / 10,000× in complexity & impossibility), driven by Precognitive Simulation and anchored above by The Meta-Chaos (VSBW Tier 0 Boundless).',
      systemCategory: 'MWI Reality Warping',
      epithet: '7 MWI Ammo Grades (10⁴ Complexity Jumps), Tactile Depletion & Precognitive Simulation',
      coreAxiom: 'Willpower and emotional screaming NEVER turn someone into Superman. While MWI access is an innate ontological capability of any entity with Precognitive Simulation (Category 3+), actual abilities depend on the specific "Captured Bullet" / Ammo Type (AMR) loaded—spanning 400–500+ AMRs across 7 MWI Grades (where each Grade jump is 10⁴ = 10,000× in complexity and impossibility). Category 7 / Adjudicators operate above MWI, while The Meta-Chaos sits at VSBW Tier 0 (Boundless) as the meta-concept of Transcendence and Change itself.',
      powerVibeSignature: 'Tactile, realistic ammunition depletion (draining like a liquid fuel tank, disappearing chunk-by-chunk like solid rock "boom, boom, boom", or crushing in an instant) paired with real environmental absorption (like Akeno meditating in thunderstorms to charge 12+ Grade 2–3 Lightning AMRs).',
      turnFieldMechanics: 'Deploys localized Probability Compression Turn Fields and Mindscape Overlaps that lower Possibility Resistance for the specific Grade 1–7 AMR in use.',
      operationalMechanics: `1. Scale & Depletion Feel of AMRs (400–500+ Types Across Main Story [Ira] & Side Stories):
   • Specificity Tiers: Highly Specific, Very Specific, and Non-Specific AMRs.
   • Depletion Feel: Some AMRs deplete like a liquid fuel tank; some deplete like solid rock disappearing chunk by chunk (boom, boom, boom) or crushing in an instant; others deplete like gas.
   • Mental State Link: Every AMR connects to a mental state via Precognitive Simulation; physical manifestation is a specific philosophical circumstance.
2. The 7 Grades of MWI Ammo Types (10⁴ = 10,000× Complexity Jumps):
   • Grade 1 → Grade 2 = 10⁴ (10,000×) increase in complication, complexity, and ability to achieve impossible things (not necessarily raw explosion size).
   • Grade 2 → Grade 3 = another 10⁴ (10,000×) jump in complexity/impossibility, continuing through Grade 7.
   • Category 7 / Adjudicators utilize a system higher than MWI.
3. Case Study — Akeno Himejima ("Akano"):
   • Storm Absorption (Thor's Armor / Electro Style): Meditates/shifts in real storms to absorb lightning and light; immune to/absorbs her own lightning and gets a massive buff in thunderstorms.
   • 12+ Lightning AMRs (Grade 2–3): Her lightning reserve is actually 12+ distinct Lightning AMRs between Grade 2 and Grade 3.
4. The Meta-Chaos (VSBW Tier 0 Boundless):
   • The ultimate meta-concept of Transcendence and Progress/Change itself; impossible to transcend because any forward step or change relies upon it.`,
      hardwareOrMediumRequired: 'Specific Grade 1–7 AMR ("Captured Bullet"), minimum Category 3 precognitive simulation architecture, and matching environmental/ritual charging conditions (e.g., storm absorption for Akeno).',
      restrictorPlateAndKickback: 'Rigid Ontological Restrictor Plates + Grade 1–7 Complexity thresholds + Specific AMR charging & depletion mechanics.',
      subComponents: [
        { name: 'MWI Ammo Grade 1 → Grade 7 Hierarchy', designation: '10⁴ (10,000×) Complexity Jumps', description: '7 Grades of MWI Ammo Types where each grade jump represents a 10,000× order-of-magnitude leap in complexity and impossibility.', stateOrGrade: 'Grades 1–7' },
        { name: 'Akeno’s 12+ Storm-Absorbed Lightning AMRs', designation: 'Grade 2–3 Composite Pool', description: 'Charged by meditating/shifting in real storms (Thor/Electro style); grants lightning immunity/absorption and thunderstorm buffs across 12+ distinct lightning AMRs.', stateOrGrade: 'Grade 2–3' },
        { name: 'The Meta-Chaos (Meta-Concept of Transcendence)', designation: 'VSBW Tier 0 (Boundless)', description: 'Above Cthulhu Mythos/Azathoth, concept, and dimensionality; the meta-concept of Change/Progress itself—impossible to transcend.', stateOrGrade: 'Tier 0 Boundless' },
        ...COSMIC_FUEL_RESERVOIRS.map((f) => ({
          name: f.name,
          designation: `${f.sector} (${f.fuelGrade})`,
          description: `State: ${f.state}. Vector: ${f.axiomaticVector}`,
          stateOrGrade: f.fuelGrade,
        })),
      ],
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft & Creator Directive — 7 MWI Grades, 400–500+ AMRs, Akeno Storm Absorption & Meta-Chaos Tier 0',
      tags: ['MAGIC', 'MWI', '7 Grades', '10^4 Complexity', 'Akeno', 'Meta-Chaos Tier 0', 'Ira'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'ps-somatic-ki-engine',
      title: 'Ichirei Shikon & Gogyo Somatic Ki Engine',
      summary: 'Visceral biological hardware manipulation grounded in Shinto Four-Soul theory (Ara-Mitama, Nigi-Mitama, Kushi-Mitama, Saki-Mitama), Five Versions, and extreme physiological trade-offs.',
      systemCategory: 'Somatic Ki Engine',
      epithet: 'Biological Hardware Overclocking',
      coreAxiom: 'Unlike MWI Magic which negotiates with quantum timelines, Ki operates strictly through cellular density, bio-electric voltage, hydraulic blood pressure, and metabolic heat—zero DBZ body aura.',
      powerVibeSignature: 'Visceral, anatomical, and industrial-organic: scalding 112°F white pore-steam hissing from shoulders, burst scleral capillaries, subtle hand/tendon tension, graphite-calcified knuckles clanging like iron on granite, and sub-bass heartbeat shockwaves.',
      turnFieldMechanics: 'Version 3 (Gō-Ki) and Version 4 (Yō-Ki) project Somatic Barometric & Bio-Magnetic Turn Fields that physically crush ambient air, disperse chemical smoke fields, or jam enemy cranial nerves.',
      operationalMechanics: `Four Primary Ki Types (Ichirei Shikon):\n• Type I: Ara-Ki (荒気 - Valor/Fierce): ATP combustion & myofibril recruitment; risks lactic acidosis and muscle tearing.\n• Type II: Nigi-Ki (和気 - Harmony/Structural): Osteoblast/mineral fortification & autonomic equilibrium.\n• Type III: Kushi-Ki (奇気 - Wisdom/Sensory): Cranial nerve overclocking & barometric/bio-electric radar.\n• Type IV: Saki-Ki (幸気 - Flourishing/Cellular): Accelerated mitosis, platelet sealing, and metabolic regeneration.\n\nFive Operational Versions:\n• Version 1: Gen-Ki (元気) — Baseline vitality.\n• Version 2: Ren-Ki (練気) — Tempered structural hardening.\n• Version 3: Gō-Ki (剛気) — High-pressure barometric discharge & 110°F+ white pore-steam venting.\n• Version 4: Yō-Ki (妖気) — Predatory bio-magnetic cranial-nerve pressure & psychological weather.\n• Version 5: Mu-Ki (無気) — Absolute zero-signature biological stealth (inverts telemetry).`,
      hardwareOrMediumRequired: 'Living biological soma (muscle fibers, skeletal lattice, vascular system, and nervous system).',
      restrictorPlateAndKickback: 'Zero Possibility Resistance tax, but hard-capped by thermal organ cooking (112°F+ core temp), scleral capillary hemorrhage (200+ mmHg), and cellular ATP exhaustion.',
      subComponents: [
        { name: 'Kokotsu (硬骨 - Calcified Bone)', designation: 'Somatic Variant', description: 'Absorbs silicon/iron into bone lattice for mountain-mass strikes.', stateOrGrade: 'Structural' },
        { name: 'Shiden (紫電 - Purple Bio-Static)', designation: 'Somatic Variant', description: 'Converts nervous system potassium/sodium pumps into high-amperage bio-lightning.', stateOrGrade: 'Bio-Electric' },
        { name: 'Kage-Kiri (影斬 - Shadow-Severing)', designation: 'Somatic/Axiomatic Variant', description: 'Targets the ontological tether between physical posture and cast shadow.', stateOrGrade: 'Liminal' },
      ],
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Somatic Ki Mechanics',
      tags: ['Ki', 'Somatics', 'Ichirei Shikon', 'Ara-Ki', 'Gō-Ki', 'Mu-Ki'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    // All 3 Detailed Occult Frameworks as individual PowerSystem records
    ...OCCULT_FRAMEWORKS_LIST.slice(0, 3).map((fw) => ({
      id: fw.id,
      title: `${fw.name} (${fw.epithet})`,
      summary: fw.mythos || '',
      systemCategory: 'Occult Framework' as const,
      epithet: fw.epithet || 'Ceremonial Reality Engineering',
      coreAxiom: fw.mythos || '',
      powerVibeSignature:
        fw.id === 'fw-pactional'
          ? 'Courtroom-meets-exorcism dread: toxic lead-vitriol ink scratching on parchment, harsh chalk geometry, and the terrifying weight of cosmic statutory law.'
          : fw.id === 'fw-decanic'
          ? 'Clockwork astro-industrialism: oil-quenched iron gears, non-linguistic Charaktêr scratches humming with trapped planetary radiation.'
          : 'Toxic alchemical suffumigation: choking clouds of burning henbane, sulfur, and bone dust curdling under rhythmic barbarous vocal frequencies.',
      turnFieldMechanics:
        fw.id === 'fw-pactional'
          ? 'Chalk perimeter establishes a Judicial Turn Field where primordial treaty clauses override local Newtonian/MWI resistance.'
          : fw.id === 'fw-decanic'
          ? 'Inspirited alloy gear radiates a permanent, narrow Chrono-Geometric Turn Field (local time dilation or atomic decay).'
          : 'Saturated smoke chamber becomes an Atmospheric Curdle Turn Field allowing non-corporeal entities to project physical silhouettes.',
      operationalMechanics: fw.mechanic || '',
      hardwareOrMediumRequired: fw.hardware || '',
      restrictorPlateAndKickback: `${fw.outputAndKickback}\n\nGATEKEEPING WARNING: Frameworks are so aggressively gatekept that unauthorized mortals who become aware of them are hunted by Astral Entities and supernatural enforcement squads (memory tampering, neurological gaslighting, or assassination).`,
      subComponents: [],
      canonStatus: 'Established' as const,
      sourceCitation: 'Primary Ur-Worlds Draft — Occult Frameworks',
      tags: ['Occult Framework', 'Turn Field', 'Gatekept', fw.name],
      createdAt: NOW,
      updatedAt: NOW,
    })),
    {
      id: 'ps-classified-28-frameworks',
      title: 'The 28 Classified Occult Frameworks (Gatekept Seed Registry)',
      summary: 'Complete registry of the 28 named ceremonial, theurgic, and astro-thaumaturgical frameworks guarded by Astral enforcement parasites.',
      systemCategory: 'Occult Framework',
      epithet: 'Gatekept Thaumaturgical Protocols',
      coreAxiom: 'Each framework provides an external mechanical scaffold and specialized Turn Field allowing a finite Category 4 mind to compile high-Delta MWI reality warping without frying its own nervous system.',
      powerVibeSignature: 'Esoteric, forbidden, and hunted: every ritual feels like operating classified nuclear encryption while Astral DRM-hounds sniff the psychic air.',
      turnFieldMechanics: 'Each of the 28 frameworks deploys a distinct ritual Turn Field (Solomonic Chain grids, Honorian Seal basins, Galdrabók stave vectors, Heptameron hour-zones).',
      operationalMechanics: 'Contains 28 canonical named seeds from the primary draft awaiting individual hardware, ritual medium, and kickback specifications.',
      hardwareOrMediumRequired: 'Varies by tradition: Solomonic chains, Honorian seals, Galdrabók staves, PGM barbarous names, Picatrix talismans, Exaltation alloys.',
      restrictorPlateAndKickback: 'EXTREME GATEKEEPING: Merely simulating or studying these frameworks triggers Astral Hit-Squads that tamper with memories, induce neurological agnosia, gaslight practitioners, or execute them.',
      subComponents: OCCULT_FRAMEWORKS_LIST.slice(3).map((fw, i) => ({
        name: fw.name,
        designation: `Classified Seed #${i + 4}`,
        description: 'Named in primary draft; awaiting detailed Turn Field, mechanical hardware, and kickback blueprint.',
        stateOrGrade: 'Named Seed',
      })),
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Classified Occult Frameworks List',
      tags: ['Occult Framework', '28 Seeds', 'Gatekept', 'Astral Enforcement'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'ps-21-netherfire-reserves',
      title: 'The 21 Netherfire & Chthonic Energy Reserves',
      summary: 'Specialized chthonic and abyssal ammunition reserves (including Vaelburn Spark and Aethelfire Flux) with solid, liquid, gas, or superfluid depletion states.',
      systemCategory: 'Netherfire Reserve',
      epithet: 'Chthonic Ammunition Ecology',
      coreAxiom: 'Supernatural energy reserves act as pre-programmed bullets in the MWI Gun System, each carrying a distinct physical/metaphysical phase state and depletion behavior.',
      powerVibeSignature: 'Heavy chthonic alchemy: fuels sublimate like dry chalk inside bone marrow, drip upward like zero-Kelvin superfluids, or vitrify air into cold crystalline slag.',
      turnFieldMechanics: 'Sustained discharge converts the impact zone into a lingering Netherfire Turn Field (e.g., Aethelfire stripped-continuity crystal zone).',
      operationalMechanics: 'Vaelburn Spark and Aethelfire Flux have fully defined outcome realities in the draft; 19 additional named reserves are cataloged for outcome-vector expansion.',
      hardwareOrMediumRequired: 'Nether-core graft, demonic vascular system, or insulated alloy containment vessel.',
      restrictorPlateAndKickback: 'Depletes according to phase state (some sublimate like solid chalk, others drain like heavy liquid or superfluid).',
      subComponents: NETHERFIRE_RESERVES_LIST.map((nf) => ({
        name: nf.name,
        designation: nf.status,
        description: nf.outcomeReality,
        stateOrGrade: nf.status === 'Defined in Draft' ? 'Established' : 'Seed',
      })),
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — 21 Netherfire Reserves',
      tags: ['Netherfire', 'Vaelburn', 'Aethelfire', 'Reserves'],
      createdAt: NOW,
      updatedAt: NOW,
    },
  ];

  // 7. Abilities (with 7-stage Ability Mechanics Sequence + Power Vibe + Turn Field Behavior)
  const abilities: Ability[] = [
    {
      id: 'ability-pactional-injunction',
      title: 'Metaphysical Injunction (Solomonic Clause-Seal Turn Field)',
      summary: 'Compels local spacetime to drop Possibility Resistance by inscribing a chalk perimeter and filing a geometric legal writ invoking primordial treaties.',
      powerSystemId: 'fw-pactional',
      powerSystemName: 'I. The Pactional Jurisprudence System',
      possibilityDelta: '0.88 Delta (Reduced to 0.12 via Legal Compulsion)',
      fuelOrSomaticVector: 'Lead-Cinnabar-Vitriol Ink + Heka-Vapor / Solomonic Authority',
      powerVibe: 'Archaic judicial menace: the scratch of toxic metallic ink on parchment sounds like iron gates locking; inside the chalk circle, air pressure feels like a courtroom under martial law.',
      turnField: {
        fieldClassification: '1. Active Turn Field (Localized Space Conversion)',
        matterPhaseState: 'Time Crystal / Statutory Geometric Lattice',
        powerVibeAndSensoryTexture: 'Shadows snap to 90-degree architectural right angles; ambient sound outside the chalk perimeter is muted by -18dB.',
        turnConditionAndTrigger: 'Triggered the instant the chalk perimeter closes and the final Clause-Seal glyph is struck with vitriol ink.',
        fieldBoundaryAndDominance: 'Overwrites standard MWI Possibility Resistance within a 15-meter radius; vulnerable only if the physical chalk boundary is scuffed by pure Newtonian/Somatic force.',
      },
      sequence: {
        source: 'Primordial Legislative Grid (ancient treaties signed at the beginning of chaos) accessed via a historical Clause-Seal.',
        activation: 'Practitioner inscribes a formal logical argument onto sympathetic parchment using an ink alloy of lead, cinnabar, and vitriol inside a closed chalk perimeter.',
        operation: 'The written Clause-Seal cross-references local physical laws against primordial treaty precedents, legally compelling the local timeline to yield.',
        target: 'A localized spatial Turn Field volume (up to 15 meters) or a bound Category 5 / Goetic entity within line of sight.',
        effect: 'Local Possibility Resistance drops to near-zero; forbidden spatial folds, gravity inversions, or entity bindings execute instantaneously without standard fuel burn.',
        costAndLimitation: 'Requires absolute syntactic and geometric accuracy; chalk perimeter must remain unbroken during inscription.',
        consequence: 'Target space or entity is locked under judicial stasis until the parchment writ is physically burned or expires.',
        failureOrKickbackPath: 'CONTEMPT OF REALITY: If a single sub-clause is misinterpreted or slurred, reality violently snaps back, shattering the chalk circle and fracturing the caster\'s Soul 1 hardware.',
      },
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Pactional Jurisprudence System',
      tags: ['Pactional', 'Turn Field', 'Solomonic', 'Injunction', 'Clause-Seal'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'ability-aethelfire-conflagration',
      title: 'Aethelfire Crystalline Conflagration & Continuity-Strip Field',
      summary: 'Strips local space-time of mathematical continuity, bleeding raw potential energy into the world as a freezing crystalline fire and converting the arena into a Superionic Crystal Turn Field.',
      powerSystemId: 'ps-21-netherfire-reserves',
      powerSystemName: 'The 21 Netherfire & Chthonic Energy Reserves',
      possibilityDelta: '0.94 Delta (Extreme Axiomatic Breach)',
      fuelOrSomaticVector: 'Aethelfire Flux Reserve',
      powerVibe: 'Cold, stepped-framerate mathematical horror: flames do not flicker smoothly—they snap in jagged 12fps polygonal increments like shattering bismuth and smoked quartz.',
      turnField: {
        fieldClassification: '1. Active Turn Field (Localized Space Conversion)',
        matterPhaseState: 'Superionic Ice & Non-Continuous Crystalline Lattice',
        powerVibeAndSensoryTexture: 'Air turns bitter cold and refractive; curved trajectories are rejected by local geometry, forcing projectiles to travel in jagged stepped segments.',
        turnConditionAndTrigger: 'Establishes a lingering 20-meter Turn Field corridor for 3 turns/intervals after primary discharge.',
        fieldBoundaryAndDominance: 'Strips mathematical continuity from overlapping elemental fields, freezing standard plasma or fluid abilities into brittle glass clinkers.',
      },
      sequence: {
        source: 'Aethelfire Flux reserve housed within a Category 5 Nether-core or insulated containment locus.',
        activation: 'High-priority precognitive simulation aligns a quantum gap where local metric continuity fails.',
        operation: 'Background geometry of space-time is stripped of mathematical continuity along a directed vector.',
        target: 'Line-of-sight corridor or Turn Field impact zone (up to 20 meters).',
        effect: 'Raw potential energy bleeds into physical reality as a cold, crystalline conflagration that vitrifies matter into brittle geometric shards.',
        costAndLimitation: 'Rapidly drains Aethelfire Flux reserve; high Possibility Resistance requires immense simulation focus.',
        consequence: 'Leaves behind vitrified spacetime crystals that distort light and acoustics for several minutes.',
        failureOrKickbackPath: 'If simulation wavers mid-discharge, crystalline vitrification propagates backward along the caster\'s firing limb.',
      },
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Aethelfire Flux Definition',
      tags: ['Aethelfire', 'Turn Field', 'Netherfire', 'Crystalline', 'Spacetime'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'ability-kokotsu-goki-discharge',
      title: 'Kokotsu Gō-Ki Barometric Shock-Strike & Thermal Steam Field',
      summary: 'Delivers mountain-mass basalt skeletal impact paired with a 112°F pore-steam barometric Turn Field.',
      powerSystemId: 'ps-somatic-ki-engine',
      powerSystemName: 'Ichirei Shikon & Gogyo Somatic Ki Engine',
      possibilityDelta: '0.00 Delta (Pure Somatic Physics — Zero MWI Tax)',
      fuelOrSomaticVector: 'Ara-Ki (Type I) + Nigi-Ki (Type II) + Version 3 Gō-Ki',
      powerVibe: 'Locomotive boiler pressure inside human flesh: scalding white sweat-steam hissing from trapezius pores, veins glowing bruised indigo, and strikes sounding like an iron pile-driver hitting bedrock.',
      turnField: {
        fieldClassification: '6. En-Grafted Hardware Field',
        matterPhaseState: 'High-Pressure Barometric Gas & Superheated Vapor',
        powerVibeAndSensoryTexture: 'Dense 112°F white pore-steam obscures visual targeting within 5 meters while sub-bass barometric pressure blows away toxic gases and suffumigation smoke.',
        turnConditionAndTrigger: 'Activates automatically whenever vascular pressure exceeds 200 mmHg and core temperature crosses 108°F.',
        fieldBoundaryAndDominance: 'Physically disperses gas/smoke-based occult Turn Fields (such as Suffumigative Phantasmata) through raw barometric wind shear.',
      },
      sequence: {
        source: 'Silicon-and-iron calcified osteoblast lattice (Kokotsu variant) driven by peak ATP combustion.',
        activation: 'Practitioner drops into a grounded horse stance, spiking vascular hydraulic pressure above 200 mmHg and core temperature to 112°F.',
        operation: 'Scalding white pore-steam vents from shoulders and forearms to prevent internal organ cooking while kinetic force channels through basalt-dense knuckles.',
        target: 'Direct physical contact or 5-meter forward barometric cone.',
        effect: 'Delivers the structural mass of solid mountain rock; air displacement creates a concussive barometric shockwave that shatters stone and collapses trench lines.',
        costAndLimitation: 'Extreme metabolic ATP drain, acute dehydration from steam venting, and risk of scleral hemorrhage.',
        consequence: 'Completely bypasses anti-magic dampeners (such as Heka-Vapor) because zero MWI probability shifting is used.',
        failureOrKickbackPath: 'Sustaining Gō-Ki beyond 90 seconds without venting triggers thermal encephalopathy and myofibril tearing.',
      },
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Somatic Ki & Kokotsu Ascetic',
      tags: ['Ki', 'Gō-Ki', 'Turn Field', 'Kokotsu', 'Somatic', 'Pore-Steam'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'ability-suffumigative-curdle-field',
      title: 'Suffumigative Phantasmata: Atmospheric Curdle Turn Field',
      summary: 'Saturates an enclosed arena with toxic resin-and-bone smoke that curdles under Barbarous Names, allowing Spacetime-Blind entities to manifest physical silhouettes.',
      powerSystemId: 'fw-suffumigative',
      powerSystemName: 'III. Suffumigative Phantasmata',
      possibilityDelta: '0.52 Delta (Medium-Anchored Projection)',
      fuelOrSomaticVector: 'Henbane-Sulfur-Bone Smoke + Barbarous Acoustic Frequencies',
      powerVibe: 'Choking, claustrophobic Chaldean ritualism: thick yellow-black smoke that moves like curdled milk whenever the magician vibrates non-human consonant clusters.',
      turnField: {
        fieldClassification: '1. Active Turn Field (Localized Space Conversion)',
        matterPhaseState: 'Acoustic-Colloidal Supersolid Smoke Medium',
        powerVibeAndSensoryTexture: 'Heavy sulfurous odor; sound waves visibly freeze smoke particles into towering, shifting geometric silhouettes.',
        turnConditionAndTrigger: 'Requires 1 full turn/interval of chemical combustion to saturate the chamber before Barbarous Names lock the phase state.',
        fieldBoundaryAndDominance: 'Grants physical hitbox and traction to non-corporeal/Astral entities; vulnerable to high-pressure barometric wind dispersion (such as Gō-Ki shockwaves).',
      },
      sequence: {
        source: 'Exotic chemical mixture of crushed henbane, sulfur, myrrh, and powdered dried bone burned in a bronzethurible.',
        activation: 'Magician saturates the local arena with dense particulate smoke and begins intoning non-translatable Barbarous Names.',
        operation: 'Acoustic pressure spikes force the heavy chemical smoke particles to curdle in mid-air into a quasi-solid colloidal lattice.',
        target: '12-meter enclosed or semi-enclosed Turn Field volume.',
        effect: 'Non-corporeal entities and nether currents (normally blind to physical matter) bind to the curdled smoke to project a lethal physical silhouette.',
        costAndLimitation: 'Limited by chemical fuel supply in the thurible and the practitioner\'s vocal cords.',
        consequence: 'Leaves toxic mineral residue across all surfaces once the smoke settles.',
        failureOrKickbackPath: 'Inhaling the un-curdled smoke without a filtration ward induces immediate neurotoxic delirium.',
      },
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Framework III: Suffumigative Phantasmata',
      tags: ['Suffumigation', 'Turn Field', 'Occult Framework', 'Smoke Medium'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'ability-kalakuta-necrosis',
      title: 'Kalakuta Axiom-Dissolution Jet',
      summary: 'Discharges black-purple metallic superfluid that erases the biological and spiritual regenerative axioms of immortals.',
      powerSystemId: 'ps-mwi-gun-system',
      powerSystemName: 'The "Gun System": Many-Worlds Interpretation (MWI) MAGIC',
      possibilityDelta: '1.15 Delta (Axiomatic Erasure)',
      fuelOrSomaticVector: 'Kalakuta (Halahala) Bile (Vedic Superfluid Grade)',
      powerVibe: 'Frictionless world-poison: a silent, mirror-dark metallic liquid that climbs upward against gravity and turns immortal flesh into inert ash-sludge without heat.',
      turnField: {
        fieldClassification: '2. Internal Reserve Locus',
        matterPhaseState: 'Zero-Viscosity Metallic Superfluid',
        powerVibeAndSensoryTexture: 'Complete absence of surface tension; where it spills, even ambient bacteria and Saki-Ki cellular mitosis flatline.',
        turnConditionAndTrigger: 'Instantaneous ballistic discharge; pools on the ground as a 3-meter Anti-Regeneration hazard zone.',
        fieldBoundaryAndDominance: 'Erases Saki-Ki and Sekhem-Pulse healing fields on contact.',
      },
      sequence: {
        source: 'Kalakuta Bile reservoir (primordial world-poison from Samudra Manthan).',
        activation: 'Precognitive simulation locks onto the target\'s regenerative continuity across adjacent timeline branches.',
        operation: 'Discharges a frictionless stream of black-purple metallic superfluid that dissolves local geometric and biological axioms.',
        target: 'Single high-regeneration entity (Category 5 Demon, Asura, or Saki-Ki user).',
        effect: 'Deletes the target\'s "regeneration" concept locally, turning immortal tissue into inert necrotic sludge.',
        costAndLimitation: 'Requires heavy Ojas-Dew or Tapas-Cinder reinforcement so the caster\'s own tissues are not dissolved by recoil.',
        consequence: 'Wounds inflicted cannot be healed by Saki-Ki or standard cellular restructuring.',
        failureOrKickbackPath: 'Uncontained splashback causes immediate systemic necrosis in the caster.',
      },
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — 16 Cosmic Fuel Reservoirs',
      tags: ['Kalakuta', 'Vedic', 'Superfluid', 'Anti-Regeneration'],
      createdAt: NOW,
      updatedAt: NOW,
    },
  ];

  // 8. Power Interactions & Powerscaling Comparisons (including Turn Field Clashes)
  const powerInteractions: PowerInteraction[] = [
    {
      id: 'pi-turn-field-clash-smoke-vs-goki',
      title: 'Turn Field Clash: Suffumigative Curdle Field vs. Kokotsu Gō-Ki Barometric Field',
      summary: 'How physical phase-state mediums in a Turn Field interact when a chemical-acoustic smoke domain meets a somatic barometric shockwave.',
      interactionType: 'Turn Field Clash',
      subjectA: 'Suffumigative Phantasmata Turn Field (Colloidal Smoke Medium)',
      subjectB: 'Kokotsu Gō-Ki Barometric Shock-Strike & Pore-Steam Field',
      premiseAndConditions: 'A Chaldean occultist has saturated a 12-meter subterranean chamber with curdled henbane-sulfur smoke to anchor a non-corporeal shade; a Kokotsu Iron-Monk enters the field and triggers Version 3 Gō-Ki.',
      supportingEvidence: [
        'Framework III (Suffumigative Phantasmata) explicitly requires a dense, chemically specific Atmospheric Medium so non-corporeal entities (which are blind to standard matter) can project a physical silhouette.',
        'Version 3 Gō-Ki generates 112°F superheated pore-steam and concussive barometric air displacement via pure Newtonian force.',
      ],
      counterargumentsAndVulnerabilities: [
        'Before firing Gō-Ki, the Iron-Monk is still a biological organism with lungs—inhaling the henbane-sulfur smoke before dispersing it risks neurotoxic cranial-nerve impairment.',
      ],
      mechanicalResolution: 'If the monk holds his breath and discharges a Gō-Ki barometric shockwave, the violent pressure wave physically blows the colloidal smoke medium apart—instantly stripping the non-corporeal shade of its physical silhouette and collapsing the occultist\'s Turn Field.',
      uncertaintyAndEdgeCases: 'If the occultist reinforces the chamber perimeter with a Pactional Clause-Seal forbidding air displacement, the barometric wave rebounds inward.',
      canonStatus: 'Inferred',
      sourceCitation: 'Analytical synthesis of Turn Field medium physics & Somatic Ki',
      tags: ['Turn Field Clash', 'Suffumigation', 'Gō-Ki', 'Power Vibe'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'pi-hulk-vs-magic-somatic-bypass',
      title: 'Kokotsu Gō-Ki Ascetic vs. Heka-Vapor Counter-Causality Ward',
      summary: 'Why pure somatic Ki strikes bypass ontological spell-dampeners that effortlessly snuff high-tier MWI Magic.',
      interactionType: 'System vs System',
      subjectA: 'Kokotsu Gō-Ki Barometric Shock-Strike (Somatic Ki Engine)',
      subjectB: 'Heka-Vapor Counter-Causality Turn Field (Kemetic MWI Fuel)',
      premiseAndConditions: 'A Kemetic sorcerer saturates a 10-meter chamber with Heka-Vapor (which snaps foreign MWI probability shifts out of the timeline) and faces a Category 4 Kokotsu Iron-Monk.',
      supportingEvidence: [
        'Heka-Vapor operates as an ontological law-enforcer that targets foreign MWI timeline alignments and Possibility Resistance deltas.',
        'Somatic Ki (Ara-Ki / Nigi-Ki / Gō-Ki) operates at 0.00 Possibility Delta—it relies strictly on biological ATP, silicon-calcified bone density, and barometric air pressure within baseline Newtonian/relativistic laws.',
      ],
      counterargumentsAndVulnerabilities: [
        'If the Kemetic sorcerer switches from Heka-Vapor to Melammu-Glaze (neurological dread pressure) or Apep-Sludge (thermodynamic heat extinction), the monk\'s biological nervous system and 112°F thermal balance become vulnerable.',
      ],
      mechanicalResolution: 'The Kokotsu monk walks straight through the Heka-Vapor mirage without dampener resistance and shatters the sorcerer\'s guard, because there is no quantum probability smear for Heka-Vapor to cancel.',
      uncertaintyAndEdgeCases: 'Unclear whether Kage-Kiri (Shadow-Severing variant) carries enough ontological tether interaction to trigger Heka-Vapor.',
      canonStatus: 'Inferred',
      sourceCitation: 'Analytical synthesis from Somatic Ki & Cosmic Fuel rules',
      tags: ['Powerscaling', 'Ki vs Magic', 'Heka-Vapor', 'Gō-Ki'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'pi-cat3-vs-cat4-magic',
      title: 'Category 3 Memoryless Calculator vs. Category 4 Emotional Human Practitioner',
      summary: 'Comparing steady, bias-free Category 3 precognitive calculation against high-spike, emotionally weighted Category 4 human magic.',
      interactionType: 'Powerscaling Comparison',
      subjectA: 'Category 3 Entity (Emotionless, Memoryless Precognitive Calculator)',
      subjectB: 'Category 4 Human Practitioner (Emotional Hardware + Long-Term Pattern Recognition)',
      premiseAndConditions: 'Direct magical duel in a neutral manifold without external Category 5 pacts.',
      supportingEvidence: [
        'The primary draft establishes that Category 3 is the minimum threshold required to utilize MAGIC steadily.',
        'Category 3 lacks evolutionary emotional overrides and lacks permanent long-term memory of past mistakes ("learns by the way, predicts by the way"), meaning zero psychological trauma or fear-drag corrupts their simulation.',
        'Category 4 possesses emotional priority weighting (Fear/Anger survival urgency) which massively spikes simulation weight, but lacks natural Category 5 ontological boundaries—causing hallucinations, Astral Trail shedding, and self-inflicted kickback.',
      ],
      counterargumentsAndVulnerabilities: [
        'Because Category 3 lacks long-term pattern recognition, a Category 4 human using a complex multi-phase tactical feint or an external Occult Framework (like Pactional Jurisprudence) can exploit the Category 3 entity\'s inability to remember past traps.',
      ],
      mechanicalResolution: 'In raw unassisted MWI casting, Category 3 achieves cleaner, steadier timeline forcing, whereas Category 4 produces higher peak output at extreme risk of neurological fry—unless the Category 4 practitioner anchors their casting through a gatekept Occult Framework.',
      uncertaintyAndEdgeCases: 'Exact cognitive refresh interval of flagship Category 3 species remains a Proposed design seed.',
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Category 3 vs Category 4 & Psychological View',
      tags: ['Powerscaling', 'Category 3', 'Category 4', 'MWI Magic'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'pi-soul1-nuke-vs-cognition-tiers',
      title: 'Linear Soul 1 Detonation ("Spiritual Nuke") vs. Tier 8 Spirituality 1 Destiny',
      summary: 'Evaluating the upper destructive boundary of a finite-mathematics Soul 1 detonation against non-Euclidean Soul 2 entities.',
      interactionType: 'Powerscaling Comparison',
      subjectA: 'Soul 1 Container Detonation (Tier 7 Semi-Spiritual Quantum/Temporal Foam)',
      subjectB: 'Soul 2 / Spirituality 1 Entity (Tier 8 Non-Euclidean Destiny)',
      premiseAndConditions: 'A linear Soul 1 container is deliberately ruptured at point-blank range against a Tier 8 Spirituality 1 presence.',
      supportingEvidence: [
        'Draft establishes that a linear Soul 1 is so dense with quantum information particles and temporal crystals that its destruction acts like a nuclear bomb, birthing 14 classes of Exotic Temporal Horrors (Chronophages, Paradox Hounds, Null-Timers).',
        'However, Tier 7 (Soul 1) is explicitly defined as subject to mathematical laws and comprehensible by a finite processing mind.',
        'Tier 8 (Spirituality 1 / Soul 2) is non-Euclidean, unbounded by time and space, has zero mass, breaks mathematical laws, and requires an Infinite Processing Mind.',
      ],
      counterargumentsAndVulnerabilities: [
        'While the Soul 1 detonation devastates Tier 1–7 physical, astral, and local timeline structures, it cannot destroy a Tier 8 entity that has zero mass and exists across all past/present/future possibilities simultaneously.',
      ],
      mechanicalResolution: 'The Soul 1 detonation shatters local Tier 7 spacetime and spawns Temporal Horrors, but fails to register against Tier 8 Spirituality 1.',
      uncertaintyAndEdgeCases: 'Whether Temporal Horrors spawned by the blast can sever a Tier 8 entity\'s lower-tier anchors in the Terra-Realms.',
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Ultimate Hierarchy of Cognition & Soul 1 Fallout',
      tags: ['Powerscaling', 'Soul 1', 'Soul 2', 'Temporal Horrors', 'Cognition Tiers'],
      createdAt: NOW,
      updatedAt: NOW,
    },
  ];

  // 9. Visual References (4 Canonical Generated Assets with Full 10-Category Analysis)
  const visualReferences: VisualReference[] = VISUAL_ASSETS.map((va) => ({
    id: va.id,
    title: va.title,
    summary: va.inWorldGrounding,
    category: va.category,
    src: va.src,
    aspectRatio: va.aspectRatio,
    colorPalette: va.colorPalette,
    inWorldGrounding: va.inWorldGrounding,
    concept2DNotes: `${va.composition} Lighting: ${va.lightingAndAtmosphere}`,
    production3DBrief: {
      polybudgetAndTopology: va.production3DNotes.split('.')[0] + '.',
      materialsAndShaders: va.production3DNotes,
      riggingAndDeformation: va.category === 'Character / Somatics'
        ? 'Anatomical dual-quaternion skinning with tension-driven blendshapes along forearms, trapezius, and jaw (7.8-head heroic martial proportion).'
        : 'Static/modular architectural hierarchy with vertex-animated environmental distortion.',
      lightingAndVolumetrics: va.lightingAndAtmosphere,
    },
    tenCategoryAnalysis: [
      {
        categoryName: '1. Subject & Focal Hierarchy',
        visibleEvidence: va.composition,
        creativeInterpretation: `Anchors the viewer immediately in the ontological weight of ${va.title}, prioritizing silhouette readability over generic fantasy clutter.`,
      },
      {
        categoryName: '2. Composition, Proportions & Silhouette Architecture',
        visibleEvidence: `Aspect ratio ${va.aspectRatio} framing with strong diagonal or centric structural lines.`,
        creativeInterpretation: 'Reinforces the Ur-Worlds principle of rigid ontological lanes, anatomical weight, and harsh structural geometry.',
      },
      {
        categoryName: '3. Color Palette & Value Contrast',
        visibleEvidence: `Dominant swatches: ${va.colorPalette.map((c) => `${c.name} (${c.hex})`).join(', ')}.`,
        creativeInterpretation: 'High value contrast between deep obsidian/charcoal shadows and concentrated emissive energy vectors.',
      },
      {
        categoryName: '4. Lighting & Atmospheric Behavior',
        visibleEvidence: va.lightingAndAtmosphere,
        creativeInterpretation: 'Light behaves as a physical or metaphysical diagnostic indicator (thermal updraft, bio-static sub-dermal glow, or photonic absorption).',
      },
      {
        categoryName: '5. Materiality & Surface Texture',
        visibleEvidence: 'Volcanic glass, weathered adamantine bronze, calcified dermal ridges, and matte light-drinking stone.',
        creativeInterpretation: 'Every surface communicates physical mass, industrial or ascetic wear, and thermodynamic history.',
      },
      {
        categoryName: '6. Scale & Spatial Depth',
        visibleEvidence: 'Multi-layered foreground-to-background scale cues with atmospheric perspective.',
        creativeInterpretation: 'Conveys the cyclopean scale of Underworld sectors and somatic combat arenas.',
      },
      {
        categoryName: '7. Symbolic & Occult Motifs',
        visibleEvidence: 'Non-Euclidean scratches, Solomonic concentric rings, feline-claw spires, and somatic vascular patterns.',
        creativeInterpretation: 'Visually distinguishes between ceremonial framework geometry and visceral biological Ki.',
      },
      {
        categoryName: '8. Motion, Power Vibe & Turn Field Readability',
        visibleEvidence: 'Flowing smokeless magma, venting white pore-steam ribbons, and strobing ceiling lightning.',
        creativeInterpretation: 'Provides clear gameplay/combat telegraphing for Turn Field deployment and energy state transitions.',
      },
      {
        categoryName: '9. 2D Concept Art Translation',
        visibleEvidence: va.prompt,
        creativeInterpretation: 'Serves as the canonical keyframe benchmark for orthographic turnarounds and realm environment sheets.',
      },
      {
        categoryName: '10. 3D Production & Shader Pipeline',
        visibleEvidence: va.production3DNotes,
        creativeInterpretation: 'Directly maps 2D visual phenomena into PBR roughness clamps, POM displacement, and GPU particle emitters.',
      },
    ],
    canonStatus: 'Established',
    sourceCitation: 'Observatory Visual Reference Archive',
    tags: [va.category, 'Visual Reference', '2D/3D Spec'],
    createdAt: NOW,
    updatedAt: NOW,
  }));

  // 10. Design Boards (with arrangeable items)
  const designBoards: DesignBoard[] = [
    {
      id: 'board-underworld-architecture',
      title: 'Underworld Sectors & Inverted Manifold Architecture Board',
      summary: 'Spatial, chromatic, and 3D shader board comparing Tartaros-Barathron volcanic glass against Bast-Irkalla photonic absorption spires.',
      boardDomain: 'Realm & Architecture',
      mode: '3D Production',
      canonStatus: 'Established',
      tags: ['Tartaros', 'Bast-Irkalla', 'Architecture', '3D Shaders'],
      createdAt: NOW,
      updatedAt: NOW,
      items: [
        {
          id: 'bi-1',
          boardId: 'board-underworld-architecture',
          itemType: 'image',
          title: 'Tartaros-Barathron & Phlegethon Keyframe',
          content: 'Smokeless crimson magma cutting through mirror-sharp volcanic glass beneath strobing blue ceiling lightning.',
          imageSrc: '/images/urworlds_chthonic_tartaros_1792769525621.jpg',
          linkedRecordId: 'tartaros-barathron',
          x: 24,
          y: 24,
          width: 340,
          height: 260,
        },
        {
          id: 'bi-2',
          boardId: 'board-underworld-architecture',
          itemType: 'image',
          title: 'Bast-Irkalla Inverted Felis Spire Keyframe',
          content: 'Zero-acoustic matte architecture curving like unsheathed feline claws under indigo aurora.',
          imageSrc: '/images/bast_irkalla_inverted_realm_1792769527088.jpg',
          linkedRecordId: 'bast-irkalla',
          x: 390,
          y: 24,
          width: 340,
          height: 260,
        },
        {
          id: 'bi-3',
          boardId: 'board-underworld-architecture',
          itemType: 'palette',
          title: 'Chthonic vs. Inverted Chromatic Contrast',
          content: 'Contrast between high-emissive Phlegethon slag and negative-specular Bast-Irkalla void stone.',
          swatches: [
            { name: 'Obsidian Basalt', hex: '#0B0D10' },
            { name: 'Phlegethon Crimson', hex: '#DC2626' },
            { name: 'Abyssal Violet', hex: '#581C87' },
            { name: 'Cold Strobe Blue', hex: '#38BDF8' },
          ],
          x: 24,
          y: 304,
          width: 340,
          height: 170,
        },
        {
          id: 'bi-4',
          boardId: 'board-underworld-architecture',
          itemType: 'spec3d',
          title: '3D Environment Shader Callout',
          content: '• Tartaros Magma: Dual flow-map UV distortion + Fresnel emissive bloom.\n• Bast-Irkalla Stone: Roughness clamp >= 0.96, negative specular multiplier, -12dB acoustic reverb zone.',
          linkedRecordId: 'tartaros-phlegethon',
          x: 390,
          y: 304,
          width: 340,
          height: 170,
        },
      ],
    },
    {
      id: 'board-somatic-and-seals',
      title: 'Character Proportions, Craniofacial Morphology & Hardware Board',
      summary: 'Character anatomy, head-height ratios, craniofacial bone structure, and occult hardware board contrasting biological pore-steam somatics with Solomonic seals.',
      boardDomain: 'Character Design',
      mode: '2D Concept',
      canonStatus: 'Established',
      tags: ['Somatic Ki', 'Proportions', 'Craniofacial', 'Character Design'],
      createdAt: NOW,
      updatedAt: NOW,
      items: [
        {
          id: 'bi-5',
          boardId: 'board-somatic-and-seals',
          itemType: 'image',
          title: 'Kokotsu Gō-Ki Ascetic (7.8-Head Ratio)',
          content: 'Calcified bone ridges along knuckles, brow, and zygomatic arch; bruised violet bio-currents; high-pressure white pore-steam.',
          imageSrc: '/images/somatic_ki_warrior_1792769526285.jpg',
          linkedRecordId: 'dossier-2',
          x: 24,
          y: 24,
          width: 300,
          height: 310,
        },
        {
          id: 'bi-6',
          boardId: 'board-somatic-and-seals',
          itemType: 'image',
          title: 'Root IV Pactional Clause-Seal',
          content: 'Weathered bronze and lead ingot seal etched with non-linguistic Charaktêres scratches.',
          imageSrc: '/images/cacodictyology_astral_seal_1792769527671.jpg',
          linkedRecordId: 'dossier-3',
          x: 350,
          y: 24,
          width: 300,
          height: 310,
        },
      ],
    },
  ];

  // 11. Effects Sequences (5-Stage Audiovisual Sequence Designer)
  const effectsSequences: EffectsSequence[] = [
    {
      id: 'fx-aethelfire-sequence',
      title: 'Aethelfire Flux: Crystalline Spacetime Breach & Turn Field Sequence',
      summary: '5-stage audiovisual combat VFX breakdown for stripping mathematical continuity and deploying a Superionic Crystalline Turn Field.',
      linkedAbilityOrFuel: 'ability-aethelfire-conflagration',
      dominantColors: ['#76D5E0', '#9A82E8', '#E9E1D2', '#101117'],
      canonStatus: 'Established',
      tags: ['VFX Sequence', 'Aethelfire', 'Turn Field', 'Crystalline'],
      createdAt: NOW,
      updatedAt: NOW,
      stages: [
        {
          stageName: 'Anticipation',
          timingMs: '0ms – 350ms',
          visualGeometryAndParticles: 'Ambient dust particles freeze in mid-air around the caster\'s hand; faint wireframe Delaunay triangulation lines appear across local space.',
          colorAndShaderBehavior: 'Screen-space chromatic aberration pulls warm colors out of the radius, leaving cold Astral Cyan (#76D5E0) edge highlights.',
          soundAndAcousticProfile: 'Sudden vacuum suction drop; high-pitched mathematical sine-wave whine rising from 4kHz to 14kHz.',
          environmentalReaction: 'Local shadows sharpen into harsh polygonal facets; breath vapor crystallizes instantly.',
        },
        {
          stageName: 'Activation',
          timingMs: '350ms – 500ms',
          visualGeometryAndParticles: 'A jagged geometric fracture splits the air in front of the palm like cracked obsidian glass.',
          colorAndShaderBehavior: 'Blinding Parchment-white (#E9E1D2) core flash bordered by Arcane Violet (#9A82E8) refractive prisms.',
          soundAndAcousticProfile: 'Dry, deafening crack of a glacier shearing mixed with a metallic tuning-fork transient.',
          environmentalReaction: 'Ground stone directly beneath the fracture frosts over with non-Euclidean bismuth-like step crystals.',
        },
        {
          stageName: 'Expansion',
          timingMs: '500ms – 1100ms',
          visualGeometryAndParticles: 'A roaring torrent of angular, faceted crystal-flame erupts forward—flames move in stepped, low-framerate geometric increments (12fps stepped interpolation) against 60fps world motion.',
          colorAndShaderBehavior: 'Unlit obsidian core wrapped in refractive cyan-violet Fresnel fire that casts negative shadows.',
          soundAndAcousticProfile: 'Polyphonic chorus of shattering chandeliers layered over a sub-bass tectonic grind.',
          environmentalReaction: 'Air moisture and projectiles caught in the lane vitrify and fall as heavy glass clinkers.',
        },
        {
          stageName: 'Impact',
          timingMs: '1100ms – 1450ms',
          visualGeometryAndParticles: 'Target surface is encased in radially branching crystalline spires that lock limbs and armor plates.',
          colorAndShaderBehavior: 'Subsurface cyan luminescence pulses through the crystal lattice before hardening into dark smoked quartz.',
          soundAndAcousticProfile: 'Heavy crystalline implosion thud followed by rapid high-frequency ice-cracking ticks.',
          environmentalReaction: '10-meter radial frost-shock ring; local Turn Field rejects curved trajectories for 3 turns/intervals.',
        },
        {
          stageName: 'Aftermath',
          timingMs: '1450ms – 4000ms',
          visualGeometryAndParticles: 'Crystalline spires sublimate upward into drifting geometric motes that dissolve back into the quantum foam.',
          colorAndShaderBehavior: 'Lingering refractive distortion shimmer along the scorched glass trench.',
          soundAndAcousticProfile: 'Faint wind-chime resonance fading into eerie acoustic deadness.',
          environmentalReaction: 'Ground remains vitrified into frictionless black glass; caster\'s fingertips show frostbite rime.',
        },
      ],
    },
    {
      id: 'fx-goki-pore-steam',
      title: 'Kokotsu Gō-Ki: 112°F Pore-Steam & Basalt Impact Sequence',
      summary: 'Visceral somatic martial arts VFX sequence showing hydraulic vascular pressure, white pore-steam venting, and mountain-mass impact.',
      linkedAbilityOrFuel: 'ability-kokotsu-goki-discharge',
      dominantColors: ['#F8FAFC', '#F18A82', '#9A82E8', '#242633'],
      canonStatus: 'Established',
      tags: ['VFX Sequence', 'Gō-Ki', 'Somatic', 'Pore-Steam'],
      createdAt: NOW,
      updatedAt: NOW,
      stages: [
        {
          stageName: 'Anticipation',
          timingMs: '0ms – 280ms',
          visualGeometryAndParticles: 'Heels sink 2 inches into stone bedrock; calcified graphite bone ridges visibly protrude along knuckles and brow.',
          colorAndShaderBehavior: 'Sub-dermal arterial crimson (#F18A82) and bruised indigo bio-currents pulse along forearm vein maps.',
          soundAndAcousticProfile: 'Deep diaphragm inhale like a blacksmith bellows; rhythmic double-thump heartbeat at 190 BPM.',
          environmentalReaction: 'Loose gravel vibrates around the practitioner\'s feet.',
        },
        {
          stageName: 'Activation',
          timingMs: '280ms – 420ms',
          visualGeometryAndParticles: 'High-velocity jets of dense white pore-steam hiss outward from collarbones, shoulders, and dorsal ports.',
          colorAndShaderBehavior: 'Volumetric white steam particles with warm subsurface scatter from internal 112°F body heat.',
          soundAndAcousticProfile: 'Sharp, violent locomotive steam-valve release hiss.',
          environmentalReaction: 'Thermal mirage ripples distort the air silhouette around the upper torso.',
        },
        {
          stageName: 'Expansion',
          timingMs: '420ms – 550ms',
          visualGeometryAndParticles: 'Fist drives forward, trailing a spiral ribbon of vaporized sweat and a translucent barometric Mach cone.',
          colorAndShaderBehavior: 'Sharp air-refraction ring along the leading knuckle edge; zero magical glow—pure physical pressure.',
          soundAndAcousticProfile: 'Whip-crack vacuum snap followed by a compressed sub-bass boom.',
          environmentalReaction: 'Floor tiles beneath the lunge vector spiderweb and lift from air displacement.',
        },
        {
          stageName: 'Impact',
          timingMs: '550ms – 750ms',
          visualGeometryAndParticles: 'Hemispherical barometric shockwave ring expands 5 meters behind the target; basalt dust and sparks fly from knuckle contact.',
          colorAndShaderBehavior: 'Brief kinetic white-out frame (2-frame hitstop) with radial motion blur.',
          soundAndAcousticProfile: 'Deafening metallic clang of an iron sledgehammer striking solid granite, triggering a brief low-pass filter on ambient audio.',
          environmentalReaction: 'Conical trench blown out behind the point of impact.',
        },
        {
          stageName: 'Aftermath',
          timingMs: '750ms – 2500ms',
          visualGeometryAndParticles: 'Practitioner exhales a thick plume of superheated vapor; lingering steam shrouds the shoulders as heart rate stabilizes.',
          colorAndShaderBehavior: 'Vein luminescence dims from crimson-violet back to charcoal slate.',
          soundAndAcousticProfile: 'Slow, raspy exhale and settling rubble clatter.',
          environmentalReaction: 'Knuckle imprints remain fused 3 inches deep into target armor or stone.',
        },
      ],
    },
  ];

  // 12. Ideas (from BRAINSTORM_FORGE_SEEDS, strictly marked 'Proposed')
  const ideas: Idea[] = [];
  BRAINSTORM_FORGE_SEEDS.forEach((seed, sIdx) => {
    seed.pitchedIdeas.forEach((pitch, pIdx) => {
      ideas.push({
        id: `${seed.id}-pitch-${pIdx + 1}`,
        title: pitch.name,
        summary: pitch.concept,
        domain: seed.domain,
        promptQuestion: seed.question,
        contextFromDraft: seed.contextFromDraft,
        etymology: pitch.etymology,
        coreConcept: pitch.concept,
        restrictorPlate: pitch.restrictorPlate,
        canonStatus: 'Proposed',
        sourceCitation: 'Observatory Idea Constellation — Proposed Expansion on Primary Draft Gaps',
        tags: [seed.domain, 'Proposed', 'Brainstorm Seed'],
        canvasX: 160 + sIdx * 170 + pIdx * 45,
        canvasY: 130 + (pIdx % 2) * 210 + (sIdx % 2) * 50,
        createdAt: NOW,
        updatedAt: NOW,
      });
    });
  });

  // 13. Research Records
  const researchRecords: ResearchRecord[] = [
    {
      id: 'res-mwi-everett',
      title: 'Hugh Everett III’s Many-Worlds Interpretation (MWI) & Quantum Decoherence',
      summary: 'Quantum-mechanical foundation for the Ur-Worlds "Gun System" and Possibility Resistance.',
      researchQuestion: 'How does real-world quantum mechanics model alternate outcomes without wave-function collapse, and how does that translate into fuel-based magic?',
      claimInvestigated: 'Every quantum measurement or transition branches into a countably infinite set of non-communicating relative states (timelines).',
      sourceTitle: '"Relative State" Formulation of Quantum Mechanics (Reviews of Modern Physics, Vol. 29)',
      sourceAuthorOrTradition: 'Hugh Everett III / Bryce DeWitt (Quantum Physics)',
      sourceDateOrEra: '1957 / 1970',
      sourceUrlOrReference: 'https://doi.org/10.1103/RevModPhys.29.454',
      verbatimExcerptOrPrinciple: 'The universal wave function never collapses; instead, observers and systems enter entangled superpositions where every physically possible outcome is realized in a distinct branch.',
      analyticalFindings: 'In standard physics, macroscopic branches decohere and cannot interact. The Ur-Worlds draft turns this barrier into a quantifiable mechanical metric: Possibility Resistance. Low-probability branches sit "farther" across the Hilbert space manifold, requiring higher supernatural energy ("gunpowder") to bridge.',
      confidenceAndLimitations: 'High conceptual alignment; Note that Root XII entities in the draft explicitly violate even countably infinite MWI possibilities ("Transfinite Incursion").',
      supportingSources: ['Max Tegmark — The Mathematical Universe Hypothesis (Level III Multiverse)', 'David Deutsch — The Fabric of Reality'],
      contradictingOrAlternativeViews: ['Copenhagen Interpretation (Observer-driven wave collapse)', 'Pilot-Wave / De Broglie–Bohm Deterministic Theory'],
      inVerseTranslation: 'Directly powers Tier 9 Spirituality 2 (MAGIC): Precognitive Simulation selects the target branch; Supernatural Reserves act as the pre-encoded bullet + propellant.',
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Psychological View & Quantum Mechanics',
      tags: ['Quantum Mechanics', 'MWI', 'Physics', 'Gun System'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'res-baumeister-negativity-bias',
      title: 'Evolutionary Threat Simulation & "Bad Is Stronger Than Good"',
      summary: 'Evolutionary biology and psychology research explaining why negative psychic energy and Netherbound Category 5s dominate mortal history.',
      researchQuestion: 'Why do negative emotions (fear, dread, anger, disgust) exert greater priority weight on precognitive simulations than positive emotions?',
      claimInvestigated: 'Organisms that treat threats as more urgent than opportunities survive at higher rates—creating asymmetric neurological hardware.',
      sourceTitle: 'Bad Is Stronger Than Good (Review of General Psychology) & Threat Simulation Theory',
      sourceAuthorOrTradition: 'Roy F. Baumeister et al. (2001) / Antti Revonsuo (2000)',
      sourceDateOrEra: '2000–2001',
      sourceUrlOrReference: 'https://doi.org/10.1037/1089-2680.5.4.323',
      verbatimExcerptOrPrinciple: 'Across everyday events, trauma, close relationships, and learning processes, bad emotions and threats produce faster, heavier, and more durable cognitive prioritization than good ones.',
      analyticalFindings: 'Because missing a single meal is recoverable while missing a single apex predator is fatal, natural selection hardwired the amygdala and sympathetic nervous system to give threat simulations maximum metabolic and cognitive bandwidth.',
      confidenceAndLimitations: 'Directly quoted and synthesized inside the user\'s primary lore draft.',
      supportingSources: ['Randolph Nesse — Evolutionary Psychiatry & Smoke Detector Principle', 'Leda Cosmides & John Tooby — Evolutionary Psychology of Social Exchange'],
      contradictingOrAlternativeViews: ['Broaden-and-Build Theory of Positive Emotions (Barbara Fredrickson) — used for Proposed Category 5 Eunoia-Weavers'],
      inVerseTranslation: 'Explains why Category 4 human fear/anger unintentionally sheds massive Astral Trails (50! population) and why Netherbound Category 5 demons harvest human threat simulations.',
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Evolutionary Biology & Psychology Section',
      tags: ['Evolutionary Biology', 'Evolutionary Psychology', 'Negativity Bias', 'Illusion of Myths'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'res-picatrix-decans',
      title: 'The Picatrix (Ghāyat al-Ḥakīm), 36 Sabian Decans & Charaktêres',
      summary: 'Historical grimoire and Greco-Egyptian magical papyri sources for Decanic Vector Anchoring and Suffumigative Phantasmata Turn Fields.',
      researchQuestion: 'How did historical astrological talismanry and Greco-Egyptian ritual magic conceptualize non-linguistic glyphs, smoke mediums, and planetary currents?',
      claimInvestigated: 'Planetary rays can be trapped inside specific metal alloys at precise astronomical elections using non-linguistic ring-letter signs (Charaktêres).',
      sourceTitle: 'Ghāyat al-Ḥakīm (The Picatrix) & Papyri Graecae Magicae (PGM)',
      sourceAuthorOrTradition: 'Maslama al-Majriti (attr.) / Sabian Harranian & Greco-Egyptian Traditions',
      sourceDateOrEra: '10th–11th Century CE / 2nd Century BCE – 5th Century CE',
      sourceUrlOrReference: 'Warburg Institute Critical Edition (David Pingree)',
      verbatimExcerptOrPrinciple: 'Each 10-degree face (Decan) of the zodiac radiates a specific celestial force that can be drawn down into sympathetic metals, stones, and suffumigations at the exact moment of culmination.',
      analyticalFindings: 'Rather than treating talismans as symbolic charms, historical theurgy treated them as literal condensers or "statue-bodies" for cosmic currents—matching the draft\'s Alloy Antenna and Chrono-Geometric Gearbox mechanics.',
      confidenceAndLimitations: 'High fidelity to historical occult texts.',
      supportingSources: ['Iamblichus — De Mysteriis (Synthemata & Theurgy)', 'Heinrich Cornelius Agrippa — Three Books of Occult Philosophy'],
      contradictingOrAlternativeViews: ['Post-Enlightenment psychological-only interpretations of ritual magic'],
      inVerseTranslation: 'Directly grounds Framework II (Decanic Vector Anchoring) and Framework III (Suffumigative Phantasmata).',
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Occult Frameworks II & III',
      tags: ['Picatrix', 'Decans', 'PGM', 'Charaktêres', 'Occult Research'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'res-ichirei-shikon',
      title: 'Shinto Ichirei Shikon (一霊四魂 — One Spirit, Four Souls)',
      summary: 'Classical Kokugaku and Shinto metaphysical architecture underlying Ara-Ki, Nigi-Ki, Kushi-Ki, and Saki-Ki.',
      researchQuestion: 'How does the classical Shinto fourfold division of the spirit map onto biological somatic combat functions?',
      claimInvestigated: 'A single overarching spirit (Naohi) expresses through four functional aspects: Ara-mitama (valor/aggression), Nigi-mitama (harmony/order), Kushi-mitama (wisdom/miraculous transformation), and Saki-mitama (blessing/flourishing).',
      sourceTitle: 'Ichirei Shikon Doctrine (Honda Chikaatsu & Deguchi Onisaburo commentaries)',
      sourceAuthorOrTradition: 'Classical Shinto / Chinkon Kishin Tradition',
      sourceDateOrEra: 'Edo to Meiji Era Codification',
      sourceUrlOrReference: 'Kokugakuin University Encyclopedia of Shinto — Mitama',
      verbatimExcerptOrPrinciple: 'Ara-mitama rules courage and forward breakthrough; Nigi-mitama rules peace and structural cohesion; Kushi-mitama rules mysterious perception and intellect; Saki-mitama rules growth, reproduction, and nourishment.',
      analyticalFindings: 'The Ur-Worlds draft strips away ethereal mysticism and maps each of the four Mitama directly onto human anatomy: Ara-Ki -> myofibril ATP burst; Nigi-Ki -> osteoblast mineral density; Kushi-Ki -> cranial nerve sensory radar; Saki-Ki -> mitotic cellular repair.',
      confidenceAndLimitations: 'Established canonical mapping.',
      supportingSources: ['Traditional Gogyo (Five-Phase) physiological meridian theory'],
      contradictingOrAlternativeViews: ['Generic anime energy-beam "Ki" tropes (explicitly rejected by the Ur-Worlds somatic philosophy)'],
      inVerseTranslation: 'Forms the exact 4-Type matrix of the Somatic Ki Engine.',
      canonStatus: 'Established',
      sourceCitation: 'Primary Ur-Worlds Draft — Somatic Ki Mechanics',
      tags: ['Shinto', 'Ichirei Shikon', 'Somatic Ki', 'Mitama'],
      createdAt: NOW,
      updatedAt: NOW,
    },
    {
      id: 'res-ak117-lava-lamp-cod',
      title: 'COD Mobile Mythic AK117 - Lava Remix Reactive Blueprint & Elden Ring Mystical Cinematic Epicness',
      summary: 'Gaming aesthetic, acoustic, reactive-stage, and ray-traced lighting research grounding the Ur-Verse Boosted Gear redesign (CODM Mythic AK117 - Lava Remix) and precognitive-mod activation doctrine.',
      researchQuestion: 'How do reactive weapon blueprints (specifically the CODM Mythic AK117 - Lava Remix) and FromSoftware / Elder Scrolls dark-mythic item design create visceral power progression driven by precognitive simulation rather than emotional willpower?',
      claimInvestigated: 'Weapon and relic escalation is far more tactile when localized inside reactive mechanical hardware, molten magma chambers, firearm acoustics, and ray-traced caustics rather than external glowing character outlines.',
      sourceTitle: 'Call of Duty: Mobile (CODM BR/MP) Mythic AK117 - Lava Remix / FromSoftware Elden Ring & Dark Souls Weapon Design',
      sourceAuthorOrTradition: 'TiMi Studio Group / Activision (CODM BR/MP) & FromSoftware / Bethesda Game Studios',
      sourceDateOrEra: 'Modern Gaming / Interactive Audio-Visual Design',
      sourceUrlOrReference: 'Observatory Gaming Aesthetics & Weapon Reactivity Archive',
      verbatimExcerptOrPrinciple: 'The CODM Mythic AK117 - Lava Remix replaces static weapon skins with a unique template of multi-stage tectonic casing shifts, pressurized molten magma chambers, custom geometric iron sights, mechanical receiver ratchets, and deep thermal bass-drop acoustics.',
      analyticalFindings: 'Combining (1) the CODM Mythic AK117 - Lava Remix reactive chamber physics + acoustic inspection loops driven by precognitive simulation of that specific mod, (2) Elden Ring / Dark Souls / Elder Scrolls "Mystical Cinematic Epicness", and (3) 2D Stickman Wargamer Icon explicit blade/bevel geometry keeps all power inside tangible hardware, ray-traced light, gravitational lensing, and psychological weather.',
      confidenceAndLimitations: 'Directly mandated by creator canonical philosophy.',
      supportingSources: [
        'Elden Ring & Dark Souls III Armament Lore & PBR Materiality',
        '2D Stickman War / Wargamer High-Contrast Weapon Icon Silhouette Design',
      ],
      contradictingOrAlternativeViews: [
        'Shonen / Post-DBZ Emotional Willpower & Hair-Color-Matched Aura Tropes (Explicitly rejected in the Ur-Verse)',
      ],
      inVerseTranslation: 'Directly governs the Redesigned Boosted Gear (artifact-boosted-gear-ak117-lava), the Mindscape-Aura & Kill Effect Doctrine (lore-anti-aura-raytracing-doctrine), and the Mystical Cinematic Epicness technique pack.',
      canonStatus: 'Established',
      sourceCitation: 'Creator Canonical Directive — CODM Mythic AK117 - Lava Remix Boosted Gear & Mystical Cinematic Epicness',
      tags: ['AK117 - Lava Remix', 'CODM Mythic', 'Boosted Gear', 'Mystical Cinematic Epicness', 'Elden Ring', 'Ray Tracing'],
      createdAt: NOW,
      updatedAt: NOW,
    },
  ];

  // 14. Cross-Workspace Relationships
  const relationships: Relationship[] = [
    {
      id: 'rel-1',
      sourceId: 'dossier-1',
      sourceType: 'entity',
      sourceTitle: 'Ash-Vanguard Warlord (Khorvath Strikecaster)',
      targetId: 'tartaros-barathron',
      targetType: 'location',
      targetTitle: 'Tartaros-Barathron (The Iron Well)',
      relationType: 'Located within',
      notes: 'Commands vanguard shock-legions along the Tartarean and Phlegethon foundry borders.',
      canonStatus: 'Established',
      createdAt: NOW,
    },
    {
      id: 'rel-2',
      sourceId: 'dossier-2',
      sourceType: 'entity',
      sourceTitle: 'Somatic Iron-Monk (Kokotsu Ascetic)',
      targetId: 'ability-kokotsu-goki-discharge',
      targetType: 'ability',
      targetTitle: 'Kokotsu Gō-Ki Barometric Shock-Strike & Thermal Steam Field',
      relationType: 'Associated with',
      notes: 'Signature high-pressure somatic technique and Turn Field of the Kokotsu ascetic lineage.',
      canonStatus: 'Established',
      createdAt: NOW,
    },
    {
      id: 'rel-3',
      sourceId: 'dossier-3',
      sourceType: 'entity',
      sourceTitle: 'The Charaktêr Decanic Gearbox',
      targetId: 'fw-decanic',
      targetType: 'powerSystem',
      targetTitle: 'II. Decanic Vector Anchoring (The Chrono-Geometric Gearbox)',
      relationType: 'Originates from',
      notes: 'Primary hardware antenna forged during a Mars Decan election.',
      canonStatus: 'Established',
      createdAt: NOW,
    },
    {
      id: 'rel-4',
      sourceId: 'dossier-4',
      sourceType: 'entity',
      sourceTitle: 'Bast-Irkalla Shadow-Severer',
      targetId: 'bast-irkalla',
      targetType: 'location',
      targetTitle: 'Bast-Irkalla (Inverted Felines (Cats / Panthers) Manifold)',
      relationType: 'Originates from',
      notes: 'Indigenous apex shadow-predator of the inverted feline manifold.',
      canonStatus: 'Established',
      createdAt: NOW,
    },
    {
      id: 'rel-5',
      sourceId: 'faction-goetic-hegemony',
      sourceType: 'faction',
      sourceTitle: 'The Solomonic-Goetic Hegemony (72 Pillar Noble Clans)',
      targetId: 'dite-sovereign',
      targetType: 'location',
      targetTitle: 'Dite-Sovereign (Citadel of Three Crowns)',
      relationType: 'Governed by',
      notes: 'Dite-Sovereign serves as the political capital of the High House of Bael and the 72 Pillar Clans.',
      canonStatus: 'Established',
      createdAt: NOW,
    },
    {
      id: 'rel-6',
      sourceId: 'faction-goetic-hegemony',
      sourceType: 'faction',
      sourceTitle: 'The Solomonic-Goetic Hegemony (72 Pillar Noble Clans)',
      targetId: 'tartaros-barathron',
      targetType: 'location',
      targetTitle: 'Tartaros-Barathron (The Iron Well)',
      relationType: 'Opposed to',
      notes: 'Solomonic reconnaissance scouts actively probe the Hellenic underworld borders along Acheron and Tartaros.',
      canonStatus: 'Established',
      createdAt: NOW,
    },
    {
      id: 'rel-7',
      sourceId: 'ability-aethelfire-conflagration',
      sourceType: 'ability',
      sourceTitle: 'Aethelfire Crystalline Conflagration & Continuity-Strip Field',
      targetId: 'fx-aethelfire-sequence',
      targetType: 'effectsSequence',
      targetTitle: 'Aethelfire Flux: Crystalline Spacetime Breach & Turn Field Sequence',
      relationType: 'Associated with',
      notes: '5-stage audiovisual combat VFX specification for Aethelfire Flux discharge.',
      canonStatus: 'Established',
      createdAt: NOW,
    },
    {
      id: 'rel-8',
      sourceId: 'ps-mwi-gun-system',
      sourceType: 'powerSystem',
      sourceTitle: 'The "Gun System": Many-Worlds Interpretation (MWI) MAGIC',
      targetId: 'res-mwi-everett',
      targetType: 'research',
      targetTitle: 'Hugh Everett III’s Many-Worlds Interpretation (MWI) & Quantum Decoherence',
      relationType: 'Depends upon',
      notes: 'Real-world theoretical physics basis for Possibility Resistance and timeline forcing.',
      canonStatus: 'Established',
      createdAt: NOW,
    },
    {
      id: 'rel-9',
      sourceId: 'root-12',
      sourceType: 'faction',
      sourceTitle: 'Root XII: The Metaphysical Impossible Outcasts',
      targetId: 'chasm-of-erebos-prime',
      targetType: 'location',
      targetTitle: 'The Chasm of Erebos-Prime',
      relationType: 'Located within',
      notes: 'Root I and Root XII converge at the absolute bottom of the Nethermost in Erebos-Prime.',
      canonStatus: 'Established',
      createdAt: NOW,
    },
  ];

  // 15. Tags
  const tags: Tag[] = [
    { id: 'tag-mwi', label: 'MWI Magic', category: 'Power', colorHex: '#9A82E8' },
    { id: 'tag-turn-fields', label: 'Turn Fields', category: 'Power', colorHex: '#D3B477' },
    { id: 'tag-ki', label: 'Somatic Ki', category: 'Power', colorHex: '#76D5E0' },
    { id: 'tag-caco', label: 'Cacodictyology', category: 'Cosmology', colorHex: '#D3B477' },
    { id: 'tag-underworld', label: 'Underworld Sectors', category: 'Realm', colorHex: '#F18A82' },
    { id: 'tag-proportions', label: 'Character Proportions', category: 'Visual', colorHex: '#9A82E8' },
  ];

  // 16. Initial Revision History
  const revisions: RevisionRecord[] = [
    {
      id: 'rev-init-1',
      recordId: 'ps-turn-fields-6-forms',
      recordType: 'powerSystem',
      recordTitle: 'Turn Fields & The 6 Supernatural Energy Expressions',
      newStatus: 'Established',
      changeSummary: 'Integrated Turn Field spatial conversion mechanics, Power Vibe sensory architecture, Realm Visual Prompt specs, and Character Proportions & Craniofacial Morphology.',
      timestamp: NOW,
    },
    {
      id: 'rev-init-2',
      recordId: 'cosmology-ontology',
      recordType: 'lore',
      recordTitle: 'Cosmic Architecture: Physical, Metaphysical, and the Non-Corporeal',
      newStatus: 'Established',
      changeSummary: 'Ingested primary ForeverWorlds / Ur-Worlds draft into Lore Library with explicit separation of Established Facts, Inferred Principles, and Unresolved Questions.',
      timestamp: NOW,
    },
  ];

  return {
    version: '3.0.0-clean-observatory',
    lastSavedAt: NOW,
    projects,
    loreDocuments,
    entities,
    locations,
    factions,
    abilities,
    powerSystems,
    powerInteractions,
    visualReferences,
    designBoards,
    effectsSequences,
    ideas,
    researchRecords,
    relationships,
    tags,
    revisions,
    recentRecordIds: [
      { id: 'lore-500-plus-race-taxonomy-and-astral-construction', type: 'lore', title: 'The 670-Race Master Taxonomy & Astral Construction Blueprint: How Standard Races vs. Astral Entities Are Distinctively Made', timestamp: NOW },
      { id: 'lore-netherbounders-and-noble-demons-ontology', type: 'lore', title: 'The Ontology of Netherbounders & Noble Demons: Deep-Time "Chapters of the Past" (All Tomorrows Scale), Sovereign Mimicry, Negative-Loop AMR Harvesting & Dynastic Vaults', timestamp: NOW },
      { id: 'entity-netherbounders-and-noble-demons', type: 'entity', title: 'Netherbounders & Noble Demons (Deep-Time "Chapters of the Past" & Negative-Loop AMR Ecology)', timestamp: NOW },
      { id: 'lore-ammo-specificity-and-nonhuman-devils', type: 'lore', title: 'The "Captured Bullet" AMR System: 7 MWI Grades (10⁴ Jumps), 400–500+ Reserves, Akeno’s 12+ Storm AMRs & The Meta-Chaos (Tier 0)', timestamp: NOW },
      { id: 'ps-mwi-gun-system', type: 'powerSystem', title: 'The "Gun System": 7 MWI Ammo Grades (10⁴ Jumps), 400–500+ AMRs & The Meta-Chaos (Tier 0)', timestamp: NOW },
      { id: 'artifact-boosted-gear-ak117-lava', type: 'entity', title: 'The Redesigned Boosted Gear (CODM Mythic AK117 - Lava Remix Reactive Tectonic Chassis)', timestamp: NOW },
    ],
  };
}
