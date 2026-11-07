'use client';

import React, { useState } from 'react';
import {
  ObservatoryWorkspaceState,
  PowerSystem,
  Ability,
  PowerInteraction,
  CanonStatus,
  TurnFieldBehavior,
} from '@/lib/observatoryTypes';
import { COSMIC_FUEL_RESERVOIRS } from '@/lib/loreData';
import { CanonBadge } from './CanonBadge';
import {
  Zap,
  GitCommitHorizontal,
  Scale,
  Plus,
  AlertTriangle,
  ArrowRight,
  Flame,
  Activity,
  ShieldAlert,
  Radio,
  Sparkles,
  Layers,
} from 'lucide-react';

interface PowerForgeViewProps {
  state: ObservatoryWorkspaceState;
  selectedRecordId: string | null;
  onSelectRecord: (id: string) => void;
  onAddAbility: (ability: Ability) => void;
  onAddInteraction: (interaction: PowerInteraction) => void;
  onAddPowerSystem: (ps: PowerSystem) => void;
}

const EXOTIC_MATTER_STATES = [
  {
    name: 'Time Crystals',
    vibe: 'Stepped, repeating temporal geometry; fractures and projectiles oscillate on a fixed 3-second loop without losing energy.',
    turnEffect: 'Locks local turn-field intervals into a repeating causal cadence; enemies must move on the beat or suffer temporal shear.',
  },
  {
    name: 'Superionic Ice',
    vibe: 'Pitch-black, scorching-hot crystalline ice that forms under crushing barometric pressure and conducts high-voltage bio-static.',
    turnEffect: 'Turns floor and air moisture into conductive black crystal spires; amplifies lightning/Shiden vectors while rooting targets.',
  },
  {
    name: 'Bose-Einstein Condensate (BEC)',
    vibe: 'Zero-Kelvin quantum fog where distinct particles merge into a single ghostly macroscopic wave-blur.',
    turnEffect: 'Blurs spatial coordinates inside the Turn Field; single-target precision attacks smear across the entire condensate volume.',
  },
  {
    name: 'Quark-Gluon Plasma (QGP)',
    vibe: 'Pre-hadronic primordial white-violet fire that strips atomic nuclei apart—silent, blinding, and hyper-dense.',
    turnEffect: 'Micro-radius absolute annihilation field; bypasses conventional armor hardness by dissolving baryon bonds.',
  },
  {
    name: 'Superfluid & Supersolid',
    vibe: 'Frictionless metallic or vitrified liquid that climbs upward over walls and seeps through microscopic armor seams.',
    turnEffect: 'Coats the Turn Field floor in zero-friction hazard mire (e.g., Kalakuta Bile or Apep-Sludge) that cannot be walled off.',
  },
  {
    name: 'Spacetime-Blind (Completely Non-Physical)',
    vibe: 'Zero mass, untouched by gravity, invisible to physical optics—requires Suffumigative smoke or Kushi-Ki nerve radar to detect.',
    turnEffect: 'Phases through all physical shields; can only be anchored or countered via medium-saturation Turn Fields.',
  },
];

export const PowerForgeView: React.FC<PowerForgeViewProps> = ({
  state,
  selectedRecordId,
  onSelectRecord,
  onAddAbility,
  onAddInteraction,
}) => {
  const [subTab, setSubTab] = useState<'turnFields' | 'systems' | 'abilities' | 'scaling' | 'merlinBarrier'>('merlinBarrier');
  const [showNewAbilityModal, setShowNewAbilityModal] = useState(false);
  const [showNewScalingModal, setShowNewScalingModal] = useState(false);

  // Interactive Merlin Barrier / MWI Probability & Realm Solidity Sandbox state
  const [simulatorProbability, setSimulatorProbability] = useState<number>(35);
  const [causalSteps, setCausalSteps] = useState<number>(4);
  const [hybridLogicRatio, setHybridLogicRatio] = useState<number>(75);
  const [realmSolidity, setRealmSolidity] = useState<'Liquid Realm' | 'Sub-Hybrid (Terra / Bio-Manifold)' | 'Solid Realm (Temporal-Axis Will)'>('Sub-Hybrid (Terra / Bio-Manifold)');
  const [entityType, setEntityType] = useState<'Rias Gremory (Sovereign Hybrid MWI)' | 'Noble Demon (Patrician Hybrid)' | 'Netherbounder (Negative Loop AMR)' | 'Conservative Practitioner (Pure Conventional)'>('Rias Gremory (Sovereign Hybrid MWI)');

  // Interactive Turn Field & Power Vibe Architect state
  const [tfTitle, setTfTitle] = useState('');
  const [tfClassification, setTfClassification] = useState<TurnFieldBehavior['fieldClassification']>(
    '1. Active Turn Field (Localized Space Conversion)'
  );
  const [tfPhaseState, setTfPhaseState] = useState(EXOTIC_MATTER_STATES[0].name);
  const [tfFuelOrFramework, setTfFuelOrFramework] = useState('Aethelfire Flux + Pactional Perimeter');
  const [tfVibe, setTfVibe] = useState('');
  const [tfTrigger, setTfTrigger] = useState('');
  const [tfDominance, setTfDominance] = useState('');

  // Interactive MWI Possibility & Somatic Calibration Sandbox state
  const [naturalProb, setNaturalProb] = useState(18);
  const [selectedFuelId, setSelectedFuelId] = useState('tejas-flame');
  const [kiOutput, setKiOutput] = useState(80);
  const [kiVersion, setKiVersion] = useState<'Gen-Ki' | 'Ren-Ki' | 'Gō-Ki' | 'Yō-Ki' | 'Mu-Ki'>('Gō-Ki');

  const selectedSystem =
    state.powerSystems.find((p) => p.id === selectedRecordId) || state.powerSystems[0];
  const selectedAbility =
    state.abilities.find((a) => a.id === selectedRecordId) || state.abilities[0];
  const selectedInteraction =
    state.powerInteractions.find((i) => i.id === selectedRecordId) || state.powerInteractions[0];

  // New Ability Form State
  const [abTitle, setAbTitle] = useState('');
  const [abSummary, setAbSummary] = useState('');
  const [abSysId, setAbSysId] = useState(state.powerSystems[0]?.id || 'ps-turn-fields-6-forms');
  const [abDelta, setAbDelta] = useState('0.65 Delta');
  const [abVector, setAbVector] = useState('');
  const [abVibe, setAbVibe] = useState('');
  const [seqSource, setSeqSource] = useState('');
  const [seqActivation, setSeqActivation] = useState('');
  const [seqOperation, setSeqOperation] = useState('');
  const [seqTarget, setSeqTarget] = useState('');
  const [seqEffect, setSeqEffect] = useState('');
  const [seqCost, setSeqCost] = useState('');
  const [seqConsequence, setSeqConsequence] = useState('');
  const [seqFailure, setSeqFailure] = useState('');
  const [abStatus, setAbStatus] = useState<CanonStatus>('Proposed');

  // New Powerscaling / Interaction Form State
  const [piTitle, setPiTitle] = useState('');
  const [piType, setPiType] = useState<PowerInteraction['interactionType']>('Turn Field Clash');
  const [piSubA, setPiSubA] = useState('');
  const [piSubB, setPiSubB] = useState('');
  const [piPremise, setPiPremise] = useState('');
  const [piEvidence, setPiEvidence] = useState('');
  const [piCounter, setPiCounter] = useState('');
  const [piResolution, setPiResolution] = useState('');
  const [piUncertainty, setPiUncertainty] = useState('');

  // Simulator computations
  const activeFuel =
    COSMIC_FUEL_RESERVOIRS.find((f) => f.id === selectedFuelId) || COSMIC_FUEL_RESERVOIRS[0];
  const possibilityResistance = Math.max(0.05, ((100 - naturalProb) / 100) * 1.45).toFixed(2);
  const somaticCoreTemp = (
    98.6 +
    kiOutput * 0.16 * (kiVersion === 'Gō-Ki' ? 1.25 : kiVersion === 'Mu-Ki' ? 0.1 : 0.85)
  ).toFixed(1);
  const somaticMmHg = Math.round(115 + kiOutput * (kiVersion === 'Gō-Ki' ? 1.15 : 0.7));

  const selectedPhasePreset =
    EXOTIC_MATTER_STATES.find((m) => m.name === tfPhaseState) || EXOTIC_MATTER_STATES[0];

  const handleForgeTurnFieldAbility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tfTitle.trim()) return;
    const now = new Date().toISOString();
    const effectiveVibe = tfVibe.trim() || selectedPhasePreset.vibe;
    const effectiveTrigger =
      tfTrigger.trim() || 'Deploys across a 15-meter arena perimeter upon medium/hardware alignment.';
    const effectiveDominance = tfDominance.trim() || selectedPhasePreset.turnEffect;

    const newAb: Ability = {
      id: `ability-tf-${Date.now()}`,
      title: tfTitle.trim(),
      summary: `${tfClassification} expressing as ${tfPhaseState}. ${effectiveDominance}`,
      powerSystemId: 'ps-turn-fields-6-forms',
      powerSystemName: 'Turn Fields & The 6 Supernatural Energy Expressions',
      possibilityDelta: '0.72 Delta (Field-Stabilized)',
      fuelOrSomaticVector: tfFuelOrFramework,
      powerVibe: effectiveVibe,
      turnField: {
        fieldClassification: tfClassification,
        matterPhaseState: tfPhaseState,
        powerVibeAndSensoryTexture: effectiveVibe,
        turnConditionAndTrigger: effectiveTrigger,
        fieldBoundaryAndDominance: effectiveDominance,
      },
      sequence: {
        source: `${tfFuelOrFramework} channeled into ${tfClassification}.`,
        activation: effectiveTrigger,
        operation: `Converts local arena phase-state into ${tfPhaseState}.`,
        target: '15-meter bounded Turn Field volume.',
        effect: effectiveDominance,
        costAndLimitation: 'Requires continuous boundary integrity; collapses if anchor is severed.',
        consequence: `Leaves lingering ${tfPhaseState} residue across realm architecture.`,
        failureOrKickbackPath: 'Premature field rupture causes inward phase-state implosion on the caster.',
      },
      canonStatus: 'Proposed',
      tags: ['Turn Field', tfPhaseState, 'Power Vibe'],
      createdAt: now,
      updatedAt: now,
    };
    onAddAbility(newAb);
    onSelectRecord(newAb.id);
    setSubTab('abilities');
    setTfTitle('');
    setTfVibe('');
    setTfTrigger('');
    setTfDominance('');
  };

  const handleCreateAbility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!abTitle.trim()) return;
    const now = new Date().toISOString();
    const sysObj = state.powerSystems.find((s) => s.id === abSysId);
    const newAb: Ability = {
      id: `ability-${Date.now()}`,
      title: abTitle.trim(),
      summary: abSummary.trim() || 'Structured ability mechanics sequence.',
      powerSystemId: abSysId,
      powerSystemName: sysObj?.title || 'Custom Power System',
      possibilityDelta: abDelta,
      fuelOrSomaticVector: abVector.trim() || 'Supernatural Reserve',
      powerVibe: abVibe.trim() || 'Visceral, high-friction supernatural manifestation.',
      sequence: {
        source: seqSource.trim() || 'Primary reserve / somatic core.',
        activation: seqActivation.trim() || 'Precognitive simulation / somatic stance trigger.',
        operation: seqOperation.trim() || 'Timeline alignment or bio-hydraulic transmission.',
        target: seqTarget.trim() || 'Direct line-of-sight vector.',
        effect: seqEffect.trim() || 'Target reality state or physical impact realized.',
        costAndLimitation: seqCost.trim() || 'Fuel reserve drain and restrictor plate bounds.',
        consequence: seqConsequence.trim() || 'Post-activation environmental residue.',
        failureOrKickbackPath:
          seqFailure.trim() || 'Causal snapback or somatic thermal strain on misfire.',
      },
      canonStatus: abStatus,
      tags: ['Ability', abDelta, abVector].filter(Boolean),
      createdAt: now,
      updatedAt: now,
    };
    onAddAbility(newAb);
    onSelectRecord(newAb.id);
    setAbTitle('');
    setAbSummary('');
    setAbVibe('');
    setShowNewAbilityModal(false);
  };

  const handleCreateInteraction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!piTitle.trim()) return;
    const now = new Date().toISOString();
    const newPi: PowerInteraction = {
      id: `pi-${Date.now()}`,
      title: piTitle.trim(),
      summary: `${piSubA} vs. ${piSubB} — ${piResolution.slice(0, 100)}`,
      interactionType: piType,
      subjectA: piSubA.trim(),
      subjectB: piSubB.trim(),
      premiseAndConditions: piPremise.trim() || 'Neutral manifold encounter.',
      supportingEvidence: piEvidence
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      counterargumentsAndVulnerabilities: piCounter
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      mechanicalResolution: piResolution.trim(),
      uncertaintyAndEdgeCases: piUncertainty.trim() || 'Subject to environmental fuel availability.',
      canonStatus: 'Inferred',
      tags: ['Powerscaling', piType, piSubA, piSubB].filter(Boolean),
      createdAt: now,
      updatedAt: now,
    };
    onAddInteraction(newPi);
    onSelectRecord(newPi.id);
    setPiTitle('');
    setShowNewScalingModal(false);
  };

  return (
    <div className="h-full flex flex-col bg-[#101117] overflow-hidden">
      {/* Sub-Navigation Bar */}
      <div className="p-4 lg:px-6 bg-[#191B25] border-b border-[#353744] flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSubTab('merlinBarrier')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium border transition-all ${
              subTab === 'merlinBarrier'
                ? 'bg-[#242633] border-[#F18A82] text-[#E9E1D2]'
                : 'border-transparent text-[#A4A6B5] hover:text-[#E9E1D2]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#F18A82]" />
            <span>The Merlin Barrier &amp; Probability</span>
          </button>

          <button
            onClick={() => setSubTab('turnFields')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium border transition-all ${
              subTab === 'turnFields'
                ? 'bg-[#242633] border-[#D3B477] text-[#E9E1D2]'
                : 'border-transparent text-[#A4A6B5] hover:text-[#E9E1D2]'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-[#D3B477]" />
            <span>Turn Fields &amp; Power Vibe Architect</span>
          </button>

          <button
            onClick={() => setSubTab('systems')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium border transition-all ${
              subTab === 'systems'
                ? 'bg-[#242633] border-[#9A82E8] text-[#E9E1D2]'
                : 'border-transparent text-[#A4A6B5] hover:text-[#E9E1D2]'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-[#9A82E8]" />
            <span>Power Systems, Frameworks &amp; Fuels ({state.powerSystems.length})</span>
          </button>

          <button
            onClick={() => setSubTab('abilities')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium border transition-all ${
              subTab === 'abilities'
                ? 'bg-[#242633] border-[#76D5E0] text-[#E9E1D2]'
                : 'border-transparent text-[#A4A6B5] hover:text-[#E9E1D2]'
            }`}
          >
            <GitCommitHorizontal className="w-3.5 h-3.5 text-[#76D5E0]" />
            <span>Ability Mechanics &amp; Field Sequences ({state.abilities.length})</span>
          </button>

          <button
            onClick={() => setSubTab('scaling')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium border transition-all ${
              subTab === 'scaling'
                ? 'bg-[#242633] border-[#D3B477] text-[#E9E1D2]'
                : 'border-transparent text-[#A4A6B5] hover:text-[#E9E1D2]'
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-[#D3B477]" />
            <span>Field Clashes &amp; Powerscaling ({state.powerInteractions.length})</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {subTab === 'abilities' && (
            <button
              onClick={() => setShowNewAbilityModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#9A82E8] text-[#101117] font-semibold text-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Ability Sequence</span>
            </button>
          )}
          {subTab === 'scaling' && (
            <button
              onClick={() => setShowNewScalingModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#D3B477] text-[#101117] font-semibold text-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Clash / Comparison</span>
            </button>
          )}
        </div>
      </div>

      {/* Sub-Tab -1: The Merlin Barrier, Realm Solidity & Defensive Network Feed */}
      {subTab === 'merlinBarrier' && (
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header Banner: Multi-Axis MWI, Merlin Barrier & Defensive Network Durability */}
            <div className="p-6 rounded-lg bg-[#191B25] border border-[#F18A82]/50 space-y-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F18A82]">
                  Core Mechanics · The Merlin Barrier, Realm Solidity &amp; Defensive Network Architecture
                </span>
                <CanonBadge status="Established" size="sm" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#E9E1D2]">
                The Merlin Barrier, Liquid-to-Solid Realms &amp; Durability as a Defensive Network
              </h2>
              <p className="text-xs sm:text-sm text-[#A4A6B5] leading-relaxed">
                Durability in the Ur-Verse is <strong>not discarded</strong>—rather, it is <strong>a Multi-Node Defensive Network of interlocking abilities</strong> instead of a single monolithic RPG attribute. Rather than a flat &ldquo;pump Ki/Mana into the body to face-tank a nuke like Superman&rdquo; stat bar, supernatural entities weave a live <strong>Defensive Network</strong> combining outer causal/vector abilities (such as <strong>Rias Gremory&apos;s Localized Gravity / Vector Field</strong> or <em>Gojo-style</em> spatial convergence), mid-layer Precognitive Simulation &amp; AMR routing, and inner somatic/metaphysical chassis resilience—all operating through a <strong>Hybrid MWI Architecture</strong> across realms of varying ontological solidity.
              </p>

              {/* Three Core Pillars of MWI Operation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded bg-[#101117] border border-[#76D5E0]/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-[#76D5E0]">1. Purely Conventional (Pre-Merlin)</span>
                    <span className="text-[10px] font-mono bg-[#76D5E0]/10 text-[#76D5E0] px-2 py-0.5 rounded">Objective Laws</span>
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#E9E1D2]">Grounded Multi-Step Causation</h3>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    Used by low-end practitioners or hyper-conservative entities by choice. Follows high natural probability and baseline physical laws (e.g., calling lightning from storm clouds). Because objective laws show zero favoritism, stray backfire can burn the caster.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#101117] border border-[#F18A82]/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-[#F18A82]">2. Purely Unconventional (Post-Merlin)</span>
                    <span className="text-[10px] font-mono bg-[#F18A82]/10 text-[#F18A82] px-2 py-0.5 rounded">Rare / Volatile</span>
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#E9E1D2]">Acausal Probability Brute-Force</h3>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    Forcing random, zero-logic outcomes across the Merlin Barrier costs astronomical Precognitive Simulation / IR and triggers severe thermodynamic kickback. Worse, when two pure unconventional MWI effects clash without equal stabilization, they create a catastrophic reality mess—so it is rarely used raw.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#101117] border border-[#D3B477]/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-[#D3B477]">3. The Hybrid MWI Standard</span>
                    <span className="text-[10px] font-mono bg-[#D3B477]/10 text-[#D3B477] px-2 py-0.5 rounded">Sovereign Standard</span>
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#E9E1D2]">Super-Logical + Post-Merlin Ratio</h3>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    Far superior to either extreme. Combines <strong>super-logical causal chains</strong> with post-Merlin quantum states in custom ratios (varying by culture, philosophy, and AMR). Powers multi-layered <strong>Defensive Networks</strong> and enables Countable-Infinity universal collapse in Liquid Realms via a single-photon micro-wormhole paradox.
                  </p>
                </div>
              </div>
            </div>

            {/* Durability as a Multi-Node Defensive Network (Not a Single Attribute) */}
            <div className="p-6 rounded-lg bg-[#191B25] border border-[#D3B477]/50 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D3B477]">
                    Defensive Topology · Why Durability Is an Interconnected Network of Abilities
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#E9E1D2]">
                    The 4-Node Defensive Network (Replacing the Single &ldquo;Durability Stat&rdquo;)
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#101117] border border-[#353744] text-[#76D5E0]">
                  Networked Defense: Causal Field + Precog/AMR + Somatic/Soul Chassis
                </span>
              </div>
              <p className="text-xs text-[#A4A6B5] leading-relaxed">
                Intrinsic physical and metaphysical resilience still exist, but they never operate in isolation as a single flat number. Instead, an entity&apos;s survivability is a <strong>Defensive Network</strong> where distinct nodes handle vector deflection, probability filtering, AMR dampening, and structural anchoring in sequence:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded bg-[#101117] border border-[#D3B477]/40 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#D3B477] uppercase">Node 01 · Outer Perimeter</span>
                    <span className="text-[#E9E1D2]">Active Ability</span>
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">
                    Causal &amp; Vector Boundary
                  </div>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    The signature outer ability (e.g., <strong>Rias&apos;s Localized Gravity / Vector Field</strong>, thermodynamic shear, or <em>Gojo-style</em> spatial convergence). Redirects, decelerates, or strips incoming kinetic and energetic vectors before physical contact occurs.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#101117] border border-[#9A82E8]/40 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#9A82E8] uppercase">Node 02 · Probability Filter</span>
                    <span className="text-[#E9E1D2]">Hybrid MWI</span>
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">
                    Precognitive &amp; Turn Field Routing
                  </div>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    Uses Precognitive Simulation and Turn Field authority to select micro-states where lethal transfer fails to resolve cleanly, preventing raw unconventional MWI attacks from bypassing the outer vector boundary.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#101117] border border-[#76D5E0]/40 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#76D5E0] uppercase">Node 03 · Reserve Buffer</span>
                    <span className="text-[#E9E1D2]">AMR Sink</span>
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">
                    AMR &amp; Thermodynamic Shunt
                  </div>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    Any residual force or causal bleed that penetrates the outer field is shunted across the entity&apos;s <strong>AMR</strong> and environmental ground-paths rather than dumping raw megajoules into the physical frame.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#101117] border border-[#F18A82]/40 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#F18A82] uppercase">Node 04 · Core Anchor</span>
                    <span className="text-[#E9E1D2]">Somatic + Soul</span>
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">
                    Biomechanical &amp; Metaphysical Chassis
                  </div>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    High-density skeletal/muscular architecture interlocked with deeper metaphysical/soul cohesion. Keeps the body structurally whole under high-G maneuvers and handles residual shock that clears the outer three nodes.
                  </p>
                </div>
              </div>
            </div>

            {/* Realm Solidity & Ontological Will Architecture */}
            <div className="p-6 rounded-lg bg-[#191B25] border border-[#9A82E8]/40 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9A82E8]">
                    Cosmological Topography · Why Possibility Resistance Varies Across Dimensions
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#E9E1D2]">
                    The Three Realm Solidity States: Liquid, Sub-Hybrid (Terra), and Solid (Temporal-Axis Will)
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#101117] border border-[#353744] text-[#D3B477]">
                  MWI Scale: Lower-to-Mid Ur-Verse Tier (Below Cat 7 Metachaos)
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded bg-[#101117] border border-[#76D5E0]/40 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#76D5E0] uppercase">I. Liquid Realms</span>
                    <span className="text-[#E9E1D2]">~0% External Resistance</span>
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">
                    99% Psyche-Shaped Mirror Loops
                  </div>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    Dimensions lacking Category 3–7 observers and lacking their own objective realm will. Reality here is a liquid mirror loop (~99% mathematically shaped by the observer&apos;s psyche). Because ambient Possibility Resistance is practically zero, <strong>Rias Gremory</strong> can achieve <strong>Countable Infinity (VSBW High 3-A) universal destruction</strong> using a hyper-logical, energy-efficient Hybrid MWI trigger (e.g., sending a single photon backward through a micro-wormhole to prevent its own creation).
                  </p>
                </div>

                <div className="p-4 rounded bg-[#101117] border border-[#D3B477]/40 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#D3B477] uppercase">II. Sub-Hybrid Realms</span>
                    <span className="text-[#E9E1D2]">High Collective Anchor</span>
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">
                    The Bio-Manifold &amp; &ldquo;Terra&rdquo; (Earth)
                  </div>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    A sub-hybrid between liquid psyche-shaping and objective physical law. Billions of overlapping <strong>Category 3–7 beings</strong> continuously run unconscious and conscious precognitive simulations, creating an active multi-entity interference shield. Universal-scale timeline erasure is blocked by collective observer resistance, forcing entities to use balanced <strong>Hybrid MWI</strong> &amp; localized Turn Fields.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#101117] border border-[#F18A82]/50 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#F18A82] uppercase">III. Solid Objective Realms</span>
                    <span className="text-[#F18A82]">MWI Locked (&lt; Cat 7)</span>
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">
                    Autonomous Realm Will &amp; Temporal-Axis Simulation
                  </div>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    High-tier objective realms that possess their own <strong>Will and Psyche</strong>. In many Solid Realms, the <strong>Temporal Axis itself (3D Spatial + 1D Temporal)</strong> serves as the realm&apos;s precognitive simulation. These realms <strong>do NOT follow Many-Worlds Theory</strong> (altering the past does not branch timelines) and completely reject all MWI reality-warping below <strong>Category 7</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive 4-Axis Hybrid MWI, Realm Solidity & Defensive Network Sandbox */}
            <div className="p-6 rounded-lg bg-[#191B25] border border-[#353744] space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#E9E1D2]">
                    4-Axis Hybrid MWI, Realm Solidity &amp; Defensive Network Planner
                  </h3>
                  <p className="text-xs text-[#A4A6B5]">
                    Test how Realm Solidity, Hybrid Logic Ratio, and Causal Steps govern Precognitive Simulation cost, clash stability, and Defensive Network routing.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#A4A6B5]">Realm Type:</span>
                    <select
                      value={realmSolidity}
                      onChange={(e: any) => setRealmSolidity(e.target.value)}
                      className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#D3B477]"
                    >
                      <option value="Liquid Realm">Liquid Realm (~99% Psyche Mirror)</option>
                      <option value="Sub-Hybrid (Terra / Bio-Manifold)">Sub-Hybrid (Terra / Bio-Manifold)</option>
                      <option value="Solid Realm (Temporal-Axis Will)">Solid Realm (Temporal-Axis Will / Non-MWI)</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#A4A6B5]">Archetype:</span>
                    <select
                      value={entityType}
                      onChange={(e: any) => setEntityType(e.target.value)}
                      className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                    >
                      <option value="Rias Gremory (Sovereign Hybrid MWI)">Rias Gremory (Sovereign Hybrid MWI)</option>
                      <option value="Noble Demon (Patrician Hybrid)">Noble Demon (Sovereign Patrician)</option>
                      <option value="Netherbounder (Negative Loop AMR)">Netherbounder (Negative Loop AMR)</option>
                      <option value="Conservative Practitioner (Pure Conventional)">Conservative Practitioner (Pure Conventional)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 4-Axis Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4 rounded bg-[#101117] border border-[#353744]">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A4A6B5]">Natural Probability Spectrum:</span>
                    <span className="font-mono text-[#D3B477]">{simulatorProbability}%</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={95}
                    value={simulatorProbability}
                    onChange={(e) => setSimulatorProbability(Number(e.target.value))}
                    className="w-full accent-[#D3B477]"
                  />
                  <p className="text-[10px] text-[#A4A6B5]">
                    {simulatorProbability > 50
                      ? 'High natural probability (Pre-Merlin baseline)'
                      : simulatorProbability > 15
                      ? 'Post-Merlin threshold (Requires Hybrid MWI framing)'
                      : 'Near-Zero Quantum Anomaly (e.g., Single-Photon Time Paradox)'}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A4A6B5]">Hybrid Logic-to-Unconventional:</span>
                    <span className="font-mono text-[#9A82E8]">{hybridLogicRatio}% Logical</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    value={hybridLogicRatio}
                    onChange={(e) => setHybridLogicRatio(Number(e.target.value))}
                    className="w-full accent-[#9A82E8]"
                  />
                  <p className="text-[10px] text-[#A4A6B5]">
                    {hybridLogicRatio >= 90
                      ? 'Pure Conventional / Hyper-Conservative'
                      : hybridLogicRatio >= 60
                      ? 'Balanced Sovereign Hybrid (Optimal Network Stability)'
                      : 'Unconventional-Heavy (High Clash Mess & IR Cost)'}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A4A6B5]">Causal / Network Nodes Engaged:</span>
                    <span className="font-mono text-[#76D5E0]">{causalSteps} Nodes / Steps</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={6}
                    value={causalSteps}
                    onChange={(e) => setCausalSteps(Number(e.target.value))}
                    className="w-full accent-[#76D5E0]"
                  />
                  <p className="text-[10px] text-[#A4A6B5]">
                    {causalSteps >= 4
                      ? 'Full 4-Node Defensive Network / Multi-Step Chain'
                      : 'Single-node / acausal brute-force (Spikes kickback)'}
                  </p>
                </div>

                <div className="flex flex-col justify-center p-3 rounded bg-[#191B25] border border-[#353744] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#A4A6B5]">
                    Realm &amp; Defensive Network Resolution
                  </span>
                  <div className="text-xs font-serif font-semibold text-[#E9E1D2]">
                    {realmSolidity === 'Solid Realm (Temporal-Axis Will)' ? (
                      <span className="text-[#F18A82]">⛔ LOCKED: Solid Realm Rejects MWI Nodes (&lt; Cat 7; Node 04 Chassis Only)</span>
                    ) : realmSolidity === 'Liquid Realm' && simulatorProbability <= 10 && causalSteps >= 4 ? (
                      <span className="text-[#D3B477]">🌌 VSBW High 3-A: Countable Infinity Liquid Realm Collapse</span>
                    ) : hybridLogicRatio >= 60 && causalSteps >= 3 ? (
                      <span className="text-[#76D5E0]">✓ Coherent 4-Node Defensive Network Active</span>
                    ) : (
                      <span className="text-[#F18A82]">⚡ Unstable Single-Node / Unconventional Clash Kickback</span>
                    )}
                  </div>
                  <p className="text-[10px] text-[#A4A6B5]">
                    Ambient Resistance:{' '}
                    <strong className="font-mono text-[#E9E1D2]">
                      {realmSolidity === 'Liquid Realm'
                        ? '0.01 Delta (Near-Zero)'
                        : realmSolidity === 'Solid Realm (Temporal-Axis Will)'
                        ? '∞ (Non-MWI Temporal Will)'
                        : `${Math.max(0.15, ((100 - simulatorProbability) * (115 - hybridLogicRatio)) / (causalSteps * 180)).toFixed(2)} Delta-Bar`}
                    </strong>
                  </p>
                </div>
              </div>

              {/* Canonical Defensive Network & Power Manifestation Matrix */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase text-[#D3B477]">
                    Canonical Defensive Network &amp; MWI Manifestation Matrix (Networked Abilities vs. Single-Stat Tanking)
                  </h4>
                  <span className="text-[10px] font-mono text-[#A4A6B5]">
                    Note: Terminology varies across Ur-Verse cultures due to information degradation &amp; local frameworks
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#353744] text-[#A4A6B5] font-mono text-[11px]">
                        <th className="pb-2 pr-3">Entity / Manifestation</th>
                        <th className="pb-2 px-3">MWI Architecture &amp; Ratio</th>
                        <th className="pb-2 px-3">Defensive Network Nodes / Causal Mechanism</th>
                        <th className="pb-2 pl-3">Realm &amp; Clash Behavior</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#353744]/50 text-[#E9E1D2]">
                      <tr>
                        <td className="py-3 pr-3 font-medium">
                          Rias Gremory — Sovereign Defensive Network
                          <span className="block text-[10px] font-mono text-[#D3B477]">72 Pillar Sovereign Hybrid</span>
                        </td>
                        <td className="py-3 px-3 text-[#76D5E0]">
                          Sovereign Hybrid MWI
                          <span className="block text-[10px] font-mono text-[#A4A6B5]">~75% Super-Logical / 25% Post-Merlin</span>
                        </td>
                        <td className="py-3 px-3 text-[#A4A6B5]">
                          Operates as a <strong>4-Node Defensive Network</strong>: (1) Outer <strong>Localized Gravity / Vector Deflection Field</strong> strips incoming kinetic/baryonic trajectories; (2) Precognitive Turn-Field filter blocks acausal bypass; (3) AMR thermodynamic shunt disperses bleed; (4) Somatic &amp; soul chassis anchors the core.
                        </td>
                        <td className="py-3 pl-3 text-[#A4A6B5]">
                          High stability in Sub-Hybrid (Terra) clashes; if one node is taxed, adjacent nodes absorb and reroute load without reality-mess.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-3 font-medium">
                          Rias Gremory — Single-Photon Micro-Wormhole Paradox
                          <span className="block text-[10px] font-mono text-[#F18A82]">VSBW High 3-A (Countable Infinity)</span>
                        </td>
                        <td className="py-3 px-3 text-[#D3B477]">
                          Advanced Super-Logical Hybrid
                          <span className="block text-[10px] font-mono text-[#A4A6B5]">Near-0% Natural Prob / 95% Logical Coherence</span>
                        </td>
                        <td className="py-3 px-3 text-[#A4A6B5]">
                          Manipulates a single quantum particle via a microscopic wormhole, sending one photon backward in time to prevent its own creation—unraveling the entire timeline with minimal energy cost.
                        </td>
                        <td className="py-3 pl-3 text-[#A4A6B5]">
                          <strong>Lethal to Liquid Realms</strong> (where Cat 3–7 resistance is ~0). Blocked in Sub-Hybrid Terra by collective Cat 3–7 precog resistance, and impossible in Solid Realms.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-3 font-medium">
                          Spatial Convergence / Asymptotic Network
                          <span className="block text-[10px] font-mono text-[#9A82E8]">Gojo &ldquo;Infinity&rdquo; Archetype</span>
                        </td>
                        <td className="py-3 px-3 text-[#76D5E0]">
                          Mathematical Hybrid MWI
                          <span className="block text-[10px] font-mono text-[#A4A6B5]">High Mathematical Coherence</span>
                        </td>
                        <td className="py-3 px-3 text-[#A4A6B5]">
                          Allocates ~90% of its Defensive Network into <strong>Node 01 (Spatial Convergence)</strong> &amp; <strong>Node 02 (Continuous Precognitive Automated Filtering)</strong>, recursively dividing space so attacks decelerate infinitely before reaching Node 04 (Somatic Body).
                        </td>
                        <td className="py-3 pl-3 text-[#A4A6B5]">
                          Requires continuous precognitive simulation + AMR fuel; vulnerable if an opponent collapses Node 01 via Turn Field dominance or Solid Realm rules.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-3 font-medium">
                          Raw Acausal Probability Warping
                          <span className="block text-[10px] font-mono text-[#F18A82]">Pure Unconventional MWI</span>
                        </td>
                        <td className="py-3 px-3 text-[#F18A82]">
                          Unbalanced Post-Merlin
                          <span className="block text-[10px] font-mono text-[#A4A6B5]">&lt;20% Logical / &gt;80% Random Anomaly</span>
                        </td>
                        <td className="py-3 px-3 text-[#A4A6B5]">
                          Lacks a structured Defensive Network; attempts to brute-force impossible outcomes (e.g., face-tanking nuclear yield with zero field/routing nodes or firing lightning from eyes with no step-chain).
                        </td>
                        <td className="py-3 pl-3 text-[#A4A6B5]">
                          <strong>Rarely used:</strong> Astronomical IR/Precog cost, severe thermodynamic kickback, and creates chaotic reality-shattering feedback when clashing.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-3 font-medium">
                          Atmospheric / Multi-Step Conductive Strike &amp; Ward
                          <span className="block text-[10px] font-mono text-[#76D5E0]">Pure Conventional / Conservative</span>
                        </td>
                        <td className="py-3 px-3 text-[#76D5E0]">
                          Pre-Merlin Conventional
                          <span className="block text-[10px] font-mono text-[#A4A6B5]">100% Objective Physical Chain</span>
                        </td>
                        <td className="py-3 px-3 text-[#A4A6B5]">
                          Uses existing barometric charge, dielectric grounding, and somatic armor (Nodes 01 &amp; 04 purely conventional). Zero Merlin Barrier tax, but bound by objective thermodynamics.
                        </td>
                        <td className="py-3 pl-3 text-[#A4A6B5]">
                          Works even in high-resistance environments, but objective physics does not respect the user—stray arcs or heat can burn the caster if grounding fails.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 0: Turn Fields & Power Vibe Architect */}
      {subTab === 'turnFields' && (
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Banner Explaining Mindscape-Aura States, Supernatural Kill Effects & Turn Fields */}
            <div className="p-6 rounded-lg bg-[#191B25] border border-[#D3B477]/50 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D3B477]">
                  Canonical Energy Architecture · Mindscape-Aura States, Kill Effects &amp; Turn Fields
                </span>
                <CanonBadge status="Established" size="sm" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#E9E1D2]">
                Mindscape-Aura States, Personal Astral Overlap, Supernatural Kill Effects &amp; Turn Fields
              </h2>
              <p className="text-xs sm:text-sm text-[#A4A6B5] leading-relaxed">
                We reject generic DBZ hair-color-matched glowing outlines. Instead, <strong>Aura</strong> in
                the Ur-Verse functions as a <strong>Game-Style Special State, Boss-Mode Silhouette, Material Medium, or Mindscape Overlap</strong>{' '}
                (like <em>DBZ Budokai Tenkaichi / Xenoverse / Stickman War Battles</em>), while lethal
                supernatural hits trigger exaggerated, MWI-driven <strong>Supernatural Kill Effects</strong>:
              </p>

              {/* 4 Broad Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                <div className="p-3.5 rounded bg-[#101117] border border-[#353744] space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#76D5E0]">
                    1. Tenkaichi / Xenoverse State Aura
                  </div>
                  <div className="text-xs font-serif font-semibold text-[#E9E1D2]">
                    Boss Silhouette &amp; Material Media
                  </div>
                  <p className="text-[11px] text-[#A4A6B5] leading-relaxed">
                    Treated as an active state, transition, or boss-mode silhouette independent of hair
                    color. Can be material—glowing viscous liquid, controlled dark-orange lava mist,
                    steam, or a Ki state.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#101117] border border-[#353744] space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#9A82E8]">
                    2. Mindscape Overlap &amp; Astral Tank
                  </div>
                  <div className="text-xs font-serif font-semibold text-[#E9E1D2]">
                    Imposing Your Internal World
                  </div>
                  <p className="text-[11px] text-[#A4A6B5] leading-relaxed">
                    Projects the entity&apos;s internal tank, soul, and personal Astral Entity ecology
                    onto the room (e.g., chill room plunged into dark blinding-orange lava, nebula,
                    ray-traced orange skin reflection, black sclera + glowing red eyes).
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#101117] border border-[#353744] space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#D3B477]">
                    3. Supernatural Kill Effects
                  </div>
                  <div className="text-xs font-serif font-semibold text-[#E9E1D2]">
                    MWI &amp; Nether Reality-Warp Finishers
                  </div>
                  <p className="text-[11px] text-[#A4A6B5] leading-relaxed">
                    Exclusively for supernatural / Nether entities: MWI reality-warping turns lethal
                    hits into COD Mythic sub-dermal fireworks dust-bursts, Tripod heat-ray ash,
                    Gantz/MK calcification, or smoking-boots finishers.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#101117] border border-[#353744] space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#F18A82]">
                    4. 7 MWI Grades (10⁴ Jumps) &amp; AK117 - Lava Remix
                  </div>
                  <div className="text-xs font-serif font-semibold text-[#E9E1D2]">
                    400–500+ AMRs, Storm Absorption &amp; Mythic Hardware
                  </div>
                  <p className="text-[11px] text-[#A4A6B5] leading-relaxed">
                    7 MWI Ammo Grades (10,000× complexity jump per grade), Akeno&apos;s 12+ Grade 2–3
                    storm-absorbed Lightning AMRs, The Meta-Chaos (Tier 0), and CODM Mythic{' '}
                    <strong>AK117 - Lava Remix</strong> reactive hardware.
                  </p>
                </div>
              </div>

              {/* Canonical Flagship Relic Redesign: CODM Mythic AK117 - Lava Remix Boosted Gear */}
              <div className="p-4 rounded bg-[#101117] border border-[#F18A82]/50 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#F18A82]" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#F18A82]">
                      Flagship En-Grafted Relic Redesign · Precognitive Mod Simulation &amp; Ray-Traced Caustics
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-semibold text-[#E9E1D2]">
                    The Redesigned Boosted Gear — CODM Mythic &ldquo;AK117 - Lava Remix&rdquo; Chassis
                  </h3>
                  <p className="text-xs text-[#A4A6B5] leading-relaxed">
                    Modeled on the <strong>Call of Duty: Mobile Mythic AK117 - Lava Remix</strong>{' '}
                    template: segmented cooling-obsidian tectonic plates bolted over a pressurized
                    molten magma chamber, geometric triangular sight apertures, firearm-grade
                    mechanical clicks + thermal bass-drop acoustics, and real{' '}
                    <strong>ray-traced orange-amber caustics</strong>—driven by{' '}
                    <strong>precognitive simulation</strong> of that specific mod rather than emotion.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectRecord('artifact-boosted-gear-ak117-lava')}
                  className="px-3 py-2 rounded bg-[#242633] hover:bg-[#F18A82]/20 border border-[#F18A82]/50 text-xs font-mono text-[#E9E1D2] shrink-0 transition-colors"
                >
                  Inspect AK117 - Lava Remix Spec →
                </button>
              </div>
            </div>

            {/* Interactive Turn Field & Power Vibe Forge + Exotic Matter Reference */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              {/* Left: Exotic Matter Phase-States & Vibe Cards (7 cols) */}
              <div className="xl:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#76D5E0]">
                  <Layers className="w-4 h-4" />
                  <span>Exotic Matter Phase-States &amp; Turn-Field Vibe Reference</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {EXOTIC_MATTER_STATES.map((st) => {
                    const isPicked = tfPhaseState === st.name;
                    return (
                      <div
                        key={st.name}
                        onClick={() => setTfPhaseState(st.name)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all space-y-2 ${
                          isPicked
                            ? 'bg-[#242633] border-[#D3B477]'
                            : 'bg-[#191B25] border-[#353744] hover:border-[#9A82E8]/60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-serif font-semibold text-[#E9E1D2]">
                            {st.name}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#101117] text-[#D3B477] border border-[#353744]">
                            Phase State
                          </span>
                        </div>
                        <div className="text-xs text-[#A4A6B5] leading-relaxed">
                          <strong className="text-[#9A82E8] font-mono text-[10px] uppercase block">
                            Power Vibe &amp; Sensory Texture:
                          </strong>
                          {st.vibe}
                        </div>
                        <div className="text-xs text-[#E9E1D2] leading-relaxed pt-1 border-t border-[#353744]">
                          <strong className="text-[#76D5E0] font-mono text-[10px] uppercase block">
                            Turn Field Mechanic:
                          </strong>
                          {st.turnEffect}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Forge New Turn Field Ability (5 cols) */}
              <form
                onSubmit={handleForgeTurnFieldAbility}
                className="xl:col-span-5 p-5 rounded-lg bg-[#191B25] border border-[#9A82E8]/50 space-y-4 self-start"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9A82E8]">
                  <Sparkles className="w-4 h-4" />
                  <span>Forge New Turn Field &amp; Power Vibe Spec</span>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                    Turn Field / Technique Name
                  </label>
                  <input
                    type="text"
                    required
                    value={tfTitle}
                    onChange={(e) => setTfTitle(e.target.value)}
                    placeholder="e.g., Chronoclast Time-Crystal Arena Lock"
                    className="w-full px-3 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                      Energy Expression Form
                    </label>
                    <select
                      value={tfClassification}
                      onChange={(e) =>
                        setTfClassification(
                          e.target.value as TurnFieldBehavior['fieldClassification']
                        )
                      }
                      className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                    >
                      <option value="1. Active Turn Field (Localized Space Conversion)">
                        1. Active Turn Field
                      </option>
                      <option value="2. Internal Reserve Locus">2. Internal Reserve Locus</option>
                      <option value="3. Connected Ley/Psychic Network">
                        3. Connected Network
                      </option>
                      <option value="4. Pure Essence Projection">4. Pure Essence</option>
                      <option value="5. Micro-Realm of Energy">5. Micro-Realm of Energy</option>
                      <option value="6. En-Grafted Hardware Field">6. En-Grafted Field</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                      Matter / Metaphysical Phase
                    </label>
                    <select
                      value={tfPhaseState}
                      onChange={(e) => setTfPhaseState(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                    >
                      {EXOTIC_MATTER_STATES.map((m) => (
                        <option key={m.name} value={m.name}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                    Driving Fuel, Ki Variant, or Occult Framework
                  </label>
                  <input
                    type="text"
                    value={tfFuelOrFramework}
                    onChange={(e) => setTfFuelOrFramework(e.target.value)}
                    className="w-full px-3 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#D3B477] mb-1">
                    Power Vibe &amp; Sensory Texture (Visual, Acoustic, Tactile)
                  </label>
                  <textarea
                    rows={2}
                    value={tfVibe}
                    onChange={(e) => setTfVibe(e.target.value)}
                    placeholder={selectedPhasePreset.vibe}
                    className="w-full px-3 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#76D5E0] mb-1">
                    Turn Condition, Field Boundary &amp; Dominance Rule
                  </label>
                  <textarea
                    rows={2}
                    value={tfDominance}
                    onChange={(e) => setTfDominance(e.target.value)}
                    placeholder={selectedPhasePreset.turnEffect}
                    className="w-full px-3 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 rounded bg-[#9A82E8] text-[#101117] font-semibold text-xs hover:opacity-90"
                >
                  Save Turn Field to Power Forge
                </button>
              </form>
            </div>

            {/* Power Vibe Comparison Across Core Systems */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D3B477]">
                Canonical Power Vibe &amp; Turn-Field Matrix Across All Major Systems
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {state.powerSystems.map((ps) => (
                  <div
                    key={ps.id}
                    onClick={() => {
                      onSelectRecord(ps.id);
                      setSubTab('systems');
                    }}
                    className="p-4 rounded-lg bg-[#191B25] border border-[#353744] hover:border-[#D3B477] cursor-pointer space-y-2 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-[#9A82E8]">
                        {ps.systemCategory}
                      </span>
                      <CanonBadge status={ps.canonStatus} size="xs" />
                    </div>
                    <div className="text-sm font-serif font-semibold text-[#E9E1D2]">
                      {ps.title}
                    </div>
                    {ps.powerVibeSignature && (
                      <div className="p-2.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]">
                        <span className="block text-[10px] font-mono uppercase text-[#D3B477] mb-0.5">
                          Power Vibe:
                        </span>
                        {ps.powerVibeSignature}
                      </div>
                    )}
                    {ps.turnFieldMechanics && (
                      <div className="text-xs text-[#A4A6B5] leading-relaxed">
                        <span className="font-mono text-[10px] uppercase text-[#76D5E0] block">
                          Turn Field Behavior:
                        </span>
                        {ps.turnFieldMechanics}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 1: Power Systems, Frameworks & Fuels */}
      {subTab === 'systems' && (
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-96 border-r border-[#353744] bg-[#191B25]/50 overflow-y-auto divide-y divide-[#353744] shrink-0">
            {state.powerSystems.map((ps) => {
              const isSelected = selectedSystem?.id === ps.id;
              return (
                <button
                  key={ps.id}
                  onClick={() => onSelectRecord(ps.id)}
                  className={`w-full p-4 text-left transition-colors space-y-1 ${
                    isSelected ? 'bg-[#242633] border-l-2 border-l-[#9A82E8]' : 'hover:bg-[#191B25]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase text-[#9A82E8]">
                      {ps.systemCategory}
                    </span>
                    <CanonBadge status={ps.canonStatus} size="xs" />
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">{ps.title}</div>
                  <p className="text-xs text-[#A4A6B5] line-clamp-2">{ps.summary}</p>
                </button>
              );
            })}
          </div>

          {selectedSystem && (
            <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
              <div className="space-y-2 border-b border-[#353744] pb-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9A82E8]">
                    {selectedSystem.systemCategory} · {selectedSystem.epithet}
                  </span>
                  <CanonBadge status={selectedSystem.canonStatus} size="sm" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#E9E1D2]">
                  {selectedSystem.title}
                </h2>
                <p className="text-sm text-[#A4A6B5]">{selectedSystem.summary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-lg bg-[#191B25] border border-[#353744] space-y-2 md:col-span-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#D3B477]">
                    Core Ontological Axiom
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9E1D2] leading-relaxed">
                    {selectedSystem.coreAxiom}
                  </p>
                </div>

                {selectedSystem.powerVibeSignature && (
                  <div className="p-5 rounded-lg bg-[#191B25] border border-[#D3B477]/50 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#D3B477]">
                      Power Vibe &amp; Sensory Aesthetic
                    </div>
                    <p className="text-xs sm:text-sm text-[#E9E1D2] leading-relaxed">
                      {selectedSystem.powerVibeSignature}
                    </p>
                  </div>
                )}

                {selectedSystem.turnFieldMechanics && (
                  <div className="p-5 rounded-lg bg-[#191B25] border border-[#76D5E0]/50 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#76D5E0]">
                      Turn Field Deployment &amp; Domain Mechanics
                    </div>
                    <p className="text-xs sm:text-sm text-[#E9E1D2] whitespace-pre-line leading-relaxed">
                      {selectedSystem.turnFieldMechanics}
                    </p>
                  </div>
                )}

                <div className="p-5 rounded-lg bg-[#191B25] border border-[#353744] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#76D5E0]">
                    Operational Mechanics
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9E1D2] whitespace-pre-line leading-relaxed">
                    {selectedSystem.operationalMechanics}
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-[#191B25] border border-[#353744] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#9A82E8]">
                    Hardware &amp; Medium Requirements
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9E1D2] leading-relaxed">
                    {selectedSystem.hardwareOrMediumRequired}
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-[#191B25] border border-[#F18A82]/40 space-y-2 md:col-span-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F18A82]">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Restrictor Plates, Kickback &amp; Gatekeeping Enforcement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9E1D2] whitespace-pre-line leading-relaxed">
                    {selectedSystem.restrictorPlateAndKickback}
                  </p>
                </div>
              </div>

              {/* Interactive Diagnostic Bench for MWI Gun System or Somatic Ki */}
              {selectedSystem.id === 'ps-mwi-gun-system' && (
                <div className="p-5 rounded-lg bg-[#191B25] border border-[#9A82E8]/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9A82E8]">
                      <Flame className="w-4 h-4" />
                      <span>Interactive MWI Possibility Resistance Calibration Bench</span>
                    </div>
                    <span className="font-mono text-xs text-[#D3B477]">
                      Resistance Delta: {possibilityResistance} Δ
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A4A6B5] mb-1">
                        Natural Timeline Probability ({naturalProb}%)
                      </label>
                      <input
                        type="range"
                        min={1}
                        max={99}
                        value={naturalProb}
                        onChange={(e) => setNaturalProb(Number(e.target.value))}
                        className="w-full accent-[#9A82E8]"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-[#A4A6B5] mt-1">
                        <span>1% (Axiom Breach)</span>
                        <span>50% (Plausible)</span>
                        <span>99% (Coincidental)</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#A4A6B5] mb-1">
                        Loaded Cosmic Fuel (&ldquo;Bullet&rdquo;)
                      </label>
                      <select
                        value={selectedFuelId}
                        onChange={(e) => setSelectedFuelId(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                      >
                        {COSMIC_FUEL_RESERVOIRS.map((f) => (
                          <option key={f.id} value={f.id}>
                            {f.name} ({f.sector} · {f.fuelGrade})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-[#101117] border border-[#353744] text-xs space-y-1">
                    <div className="font-mono text-[#76D5E0]">
                      Encoded Outcome Vector: {activeFuel.axiomaticVector}
                    </div>
                    <div className="text-[#A4A6B5]">
                      Physical/Metaphysical State: {activeFuel.state}
                    </div>
                  </div>
                </div>
              )}

              {selectedSystem.id === 'ps-somatic-ki-engine' && (
                <div className="p-5 rounded-lg bg-[#191B25] border border-[#76D5E0]/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#76D5E0]">
                      <Activity className="w-4 h-4" />
                      <span>Somatic Hardware Thermal &amp; Hydraulic Stress Simulator</span>
                    </div>
                    <span className="font-mono text-xs text-[#F18A82]">
                      Core Temp: {somaticCoreTemp}°F · Pressure: {somaticMmHg} mmHg
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A4A6B5] mb-1">
                        Myofibril &amp; ATP Output ({kiOutput}%)
                      </label>
                      <input
                        type="range"
                        min={10}
                        max={100}
                        value={kiOutput}
                        onChange={(e) => setKiOutput(Number(e.target.value))}
                        className="w-full accent-[#76D5E0]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#A4A6B5] mb-1">
                        Operational Ki Version
                      </label>
                      <div className="flex gap-1.5">
                        {(['Gen-Ki', 'Ren-Ki', 'Gō-Ki', 'Yō-Ki', 'Mu-Ki'] as const).map((v) => (
                          <button
                            key={v}
                            onClick={() => setKiVersion(v)}
                            className={`px-2 py-1 rounded text-[11px] font-mono border ${
                              kiVersion === v
                                ? 'bg-[#76D5E0] text-[#101117] font-semibold border-[#76D5E0]'
                                : 'bg-[#101117] text-[#A4A6B5] border-[#353744]'
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-[#101117] border border-[#353744] text-xs font-mono text-[#E9E1D2]">
                    {Number(somaticCoreTemp) >= 108
                      ? 'WARNING: Core temp exceeds 108°F — White pore-steam Turn Field venting active to prevent internal organ cooking.'
                      : kiVersion === 'Mu-Ki'
                      ? 'MU-KI STEALTH: Autonomic and electromagnetic signature collapsed to zero.'
                      : 'Somatic equilibrium nominal.'}
                  </div>
                </div>
              )}

              {/* Sub-Components / Reserves / Seed List */}
              {selectedSystem.subComponents.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#D3B477]">
                    Registered Reserves, Variants &amp; Framework Seeds (
                    {selectedSystem.subComponents.length})
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {selectedSystem.subComponents.map((sub, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded bg-[#191B25] border border-[#353744] space-y-1"
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-[#76D5E0]">{sub.designation}</span>
                          {sub.stateOrGrade && (
                            <span className="px-1.5 py-0.5 rounded bg-[#101117] text-[#D3B477] border border-[#353744]">
                              {sub.stateOrGrade}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-serif font-semibold text-[#E9E1D2]">
                          {sub.name}
                        </div>
                        <p className="text-xs text-[#A4A6B5] leading-relaxed">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Sub-Tab 2: Ability Mechanics Sequence Editor */}
      {subTab === 'abilities' && (
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-96 border-r border-[#353744] bg-[#191B25]/50 overflow-y-auto divide-y divide-[#353744] shrink-0">
            {state.abilities.map((ab) => {
              const isSelected = selectedAbility?.id === ab.id;
              return (
                <button
                  key={ab.id}
                  onClick={() => onSelectRecord(ab.id)}
                  className={`w-full p-4 text-left transition-colors space-y-1 ${
                    isSelected ? 'bg-[#242633] border-l-2 border-l-[#76D5E0]' : 'hover:bg-[#191B25]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase text-[#76D5E0] truncate">
                      {ab.possibilityDelta}
                    </span>
                    <CanonBadge status={ab.canonStatus} size="xs" />
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">{ab.title}</div>
                  <p className="text-xs text-[#A4A6B5] line-clamp-2">{ab.summary}</p>
                </button>
              );
            })}
          </div>

          {selectedAbility && (
            <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
              <div className="space-y-2 border-b border-[#353744] pb-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#76D5E0]">
                    {selectedAbility.powerSystemName} · {selectedAbility.possibilityDelta}
                  </span>
                  <CanonBadge status={selectedAbility.canonStatus} size="sm" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#E9E1D2]">
                  {selectedAbility.title}
                </h2>
                <p className="text-sm text-[#A4A6B5]">{selectedAbility.summary}</p>
                <div className="text-xs font-mono text-[#D3B477]">
                  Fuel / Somatic Vector: {selectedAbility.fuelOrSomaticVector}
                </div>
              </div>

              {/* Power Vibe & Turn Field Profile */}
              {(selectedAbility.powerVibe || selectedAbility.turnField) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedAbility.powerVibe && (
                    <div className="p-4 rounded-lg bg-[#191B25] border border-[#D3B477]/50 space-y-1.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#D3B477]">
                        Power Vibe &amp; Sensory Signature
                      </div>
                      <p className="text-xs sm:text-sm text-[#E9E1D2] leading-relaxed">
                        {selectedAbility.powerVibe}
                      </p>
                    </div>
                  )}
                  {selectedAbility.turnField && (
                    <div className="p-4 rounded-lg bg-[#191B25] border border-[#76D5E0]/50 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono uppercase text-[#76D5E0]">
                        <span>{selectedAbility.turnField.fieldClassification}</span>
                        <span className="text-[#D3B477]">
                          {selectedAbility.turnField.matterPhaseState}
                        </span>
                      </div>
                      <p className="text-xs text-[#E9E1D2] leading-relaxed">
                        <strong>Turn Trigger:</strong>{' '}
                        {selectedAbility.turnField.turnConditionAndTrigger}
                      </p>
                      <p className="text-xs text-[#A4A6B5] leading-relaxed">
                        <strong>Field Dominance:</strong>{' '}
                        {selectedAbility.turnField.fieldBoundaryAndDominance}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 7-Stage Causal Pipeline */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9A82E8]">
                  7-Stage Ability Mechanics Sequence (Causal Pipeline)
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {(
                    [
                      { label: '1. Source (Reserve / Hardware Locus)', val: selectedAbility.sequence.source, color: '#D3B477' },
                      { label: '2. Activation (Simulation / Somatic Trigger)', val: selectedAbility.sequence.activation, color: '#9A82E8' },
                      { label: '3. Operation (Timeline Alignment / Mechanism)', val: selectedAbility.sequence.operation, color: '#76D5E0' },
                      { label: '4. Target (Vector & Turn-Field Envelope)', val: selectedAbility.sequence.target, color: '#E9E1D2' },
                      { label: '5. Effect (Realized Outcome State)', val: selectedAbility.sequence.effect, color: '#9A82E8' },
                      { label: '6. Cost & Limitation (Restrictor Plate)', val: selectedAbility.sequence.costAndLimitation, color: '#D3B477' },
                      { label: '7. Consequence (Aftermath & Residue)', val: selectedAbility.sequence.consequence, color: '#76D5E0' },
                    ] as const
                  ).map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-[#191B25] border border-[#353744] flex flex-col sm:flex-row sm:items-center gap-3"
                    >
                      <div className="sm:w-64 shrink-0 flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" style={{ color: step.color }} />
                        <span
                          className="text-xs font-mono font-semibold uppercase"
                          style={{ color: step.color }}
                        >
                          {step.label}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#E9E1D2] leading-relaxed flex-1">
                        {step.val}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Failure / Kickback Branch */}
                <div className="p-5 rounded-lg bg-[#191B25] border border-[#F18A82]/50 space-y-1.5 mt-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F18A82]">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Failure Branch &amp; Causal / Somatic Kickback</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9E1D2] leading-relaxed">
                    {selectedAbility.sequence.failureOrKickbackPath}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sub-Tab 3: Power Interactions & Powerscaling Workspace */}
      {subTab === 'scaling' && (
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-96 border-r border-[#353744] bg-[#191B25]/50 overflow-y-auto divide-y divide-[#353744] shrink-0">
            {state.powerInteractions.map((pi) => {
              const isSelected = selectedInteraction?.id === pi.id;
              return (
                <button
                  key={pi.id}
                  onClick={() => onSelectRecord(pi.id)}
                  className={`w-full p-4 text-left transition-colors space-y-1 ${
                    isSelected ? 'bg-[#242633] border-l-2 border-l-[#D3B477]' : 'hover:bg-[#191B25]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase text-[#D3B477]">
                      {pi.interactionType}
                    </span>
                    <CanonBadge status={pi.canonStatus} size="xs" />
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E9E1D2]">{pi.title}</div>
                  <p className="text-xs text-[#A4A6B5] line-clamp-2">{pi.summary}</p>
                </button>
              );
            })}
          </div>

          {selectedInteraction && (
            <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
              <div className="space-y-2 border-b border-[#353744] pb-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D3B477]">
                    {selectedInteraction.interactionType} · Contextual Evidence Analysis
                  </span>
                  <CanonBadge status={selectedInteraction.canonStatus} size="sm" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#E9E1D2]">
                  {selectedInteraction.title}
                </h2>
                <p className="text-sm text-[#A4A6B5]">{selectedInteraction.summary}</p>
              </div>

              {/* Combatants / Subjects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#191B25] border border-[#9A82E8]/50">
                  <div className="text-[10px] font-mono uppercase text-[#9A82E8]">Subject A</div>
                  <div className="text-base font-serif font-semibold text-[#E9E1D2] mt-0.5">
                    {selectedInteraction.subjectA}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#191B25] border border-[#76D5E0]/50">
                  <div className="text-[10px] font-mono uppercase text-[#76D5E0]">Subject B</div>
                  <div className="text-base font-serif font-semibold text-[#E9E1D2] mt-0.5">
                    {selectedInteraction.subjectB}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-[#191B25] border border-[#353744] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#D3B477]">
                  1. Premise, Arena &amp; Boundary Conditions
                </div>
                <p className="text-xs sm:text-sm text-[#E9E1D2] leading-relaxed">
                  {selectedInteraction.premiseAndConditions}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-lg bg-[#191B25] border border-[#353744] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#76D5E0]">
                    2. Supporting Canonical Evidence
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#E9E1D2]">
                    {selectedInteraction.supportingEvidence.map((ev, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#76D5E0] font-mono">•</span>
                        <span>{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-lg bg-[#191B25] border border-[#353744] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#F18A82]">
                    3. Counterarguments &amp; Vulnerabilities
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#E9E1D2]">
                    {selectedInteraction.counterargumentsAndVulnerabilities.map((ca, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#F18A82] font-mono">•</span>
                        <span>{ca}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-[#191B25] border border-[#9A82E8]/50 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9A82E8]">
                  4. Mechanical Resolution
                </div>
                <p className="text-xs sm:text-sm text-[#E9E1D2] leading-relaxed">
                  {selectedInteraction.mechanicalResolution}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#101117] border border-[#353744] space-y-1">
                <div className="text-[11px] font-mono uppercase text-[#A4A6B5]">
                  5. Uncertainty &amp; Open Edge Cases
                </div>
                <p className="text-xs text-[#A4A6B5] leading-relaxed">
                  {selectedInteraction.uncertaintyAndEdgeCases}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* New Ability Modal */}
      {showNewAbilityModal && (
        <div className="fixed inset-0 z-50 bg-[#101117]/80 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateAbility}
            className="w-full max-w-2xl bg-[#191B25] border border-[#353744] rounded-lg p-6 space-y-3 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-lg font-serif font-semibold text-[#E9E1D2]">
              Create 7-Stage Ability Mechanics Sequence
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                  Ability Title
                </label>
                <input
                  type="text"
                  required
                  value={abTitle}
                  onChange={(e) => setAbTitle(e.target.value)}
                  placeholder="e.g., Sacred Itz Shadow-Pinning"
                  className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                  Parent Power System
                </label>
                <select
                  value={abSysId}
                  onChange={(e) => setAbSysId(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                >
                  {state.powerSystems.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                  Possibility Resistance Delta
                </label>
                <input
                  type="text"
                  value={abDelta}
                  onChange={(e) => setAbDelta(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                  Fuel or Somatic Vector
                </label>
                <input
                  type="text"
                  value={abVector}
                  onChange={(e) => setAbVector(e.target.value)}
                  placeholder="e.g., Sacred Itz (Heavy Nectar)"
                  className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-mono uppercase text-[#D3B477] mb-1">
                Power Vibe &amp; Sensory Signature
              </label>
              <input
                type="text"
                value={abVibe}
                onChange={(e) => setAbVibe(e.target.value)}
                placeholder="How does it look, sound, and distort local space?"
                className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                Summary
              </label>
              <input
                type="text"
                value={abSummary}
                onChange={(e) => setAbSummary(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <input
                type="text"
                value={seqSource}
                onChange={(e) => setSeqSource(e.target.value)}
                placeholder="1. Source (Reserve / Hardware)..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
              <input
                type="text"
                value={seqActivation}
                onChange={(e) => setSeqActivation(e.target.value)}
                placeholder="2. Activation trigger..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
              <input
                type="text"
                value={seqOperation}
                onChange={(e) => setSeqOperation(e.target.value)}
                placeholder="3. Operation mechanism..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
              <input
                type="text"
                value={seqTarget}
                onChange={(e) => setSeqTarget(e.target.value)}
                placeholder="4. Target vector..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
              <input
                type="text"
                value={seqEffect}
                onChange={(e) => setSeqEffect(e.target.value)}
                placeholder="5. Realized Effect..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
              <input
                type="text"
                value={seqCost}
                onChange={(e) => setSeqCost(e.target.value)}
                placeholder="6. Cost & Limitation..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
              <input
                type="text"
                value={seqConsequence}
                onChange={(e) => setSeqConsequence(e.target.value)}
                placeholder="7. Consequence..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
              <input
                type="text"
                value={seqFailure}
                onChange={(e) => setSeqFailure(e.target.value)}
                placeholder="8. Failure / Kickback Path..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#F18A82]/50 text-xs text-[#E9E1D2]"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowNewAbilityModal(false)}
                className="px-3 py-1.5 text-xs text-[#A4A6B5]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded bg-[#9A82E8] text-[#101117] font-semibold text-xs"
              >
                Save Ability Sequence
              </button>
            </div>
          </form>
        </div>
      )}

      {/* New Powerscaling Comparison Modal */}
      {showNewScalingModal && (
        <div className="fixed inset-0 z-50 bg-[#101117]/80 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateInteraction}
            className="w-full max-w-2xl bg-[#191B25] border border-[#353744] rounded-lg p-6 space-y-3 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-lg font-serif font-semibold text-[#E9E1D2]">
              Document Turn Field Clash / Powerscaling Analysis
            </h3>
            <div>
              <label className="block text-[11px] font-mono uppercase text-[#A4A6B5] mb-1">
                Comparison Title
              </label>
              <input
                type="text"
                required
                value={piTitle}
                onChange={(e) => setPiTitle(e.target.value)}
                placeholder="e.g., Time Crystal Turn Field vs. Decanic Gearbox Field"
                className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={piSubA}
                onChange={(e) => setPiSubA(e.target.value)}
                placeholder="Subject / Turn Field A..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
              <input
                type="text"
                required
                value={piSubB}
                onChange={(e) => setPiSubB(e.target.value)}
                placeholder="Subject / Turn Field B..."
                className="px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
              />
            </div>
            <input
              type="text"
              value={piPremise}
              onChange={(e) => setPiPremise(e.target.value)}
              placeholder="Premise and environmental conditions..."
              className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
            />
            <textarea
              rows={2}
              value={piEvidence}
              onChange={(e) => setPiEvidence(e.target.value)}
              placeholder="Supporting canonical evidence (one per line)..."
              className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
            />
            <textarea
              rows={2}
              value={piCounter}
              onChange={(e) => setPiCounter(e.target.value)}
              placeholder="Counterarguments & vulnerabilities (one per line)..."
              className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
            />
            <textarea
              rows={2}
              required
              value={piResolution}
              onChange={(e) => setPiResolution(e.target.value)}
              placeholder="Mechanical resolution..."
              className="w-full px-2.5 py-1.5 rounded bg-[#101117] border border-[#353744] text-xs text-[#E9E1D2]"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowNewScalingModal(false)}
                className="px-3 py-1.5 text-xs text-[#A4A6B5]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded bg-[#D3B477] text-[#101117] font-semibold text-xs"
              >
                Save Powerscaling Record
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
