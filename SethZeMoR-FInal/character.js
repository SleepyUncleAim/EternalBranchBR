document.addEventListener("DOMContentLoaded", () => {
  
  // Remove loading class after page loads
  setTimeout(() => {
    document.body.classList.remove('page-loading');
  }, 100);

  // === CHARACTER DATA ===
  const characters = [
    {
      name: "Richaf Erpicht",
      role: "Main Protagonist",
      icon: "⚔️",
      description: "The main protagonist of The Eternal Branch series. Wielder of the legendary Bladeforge Creation ability, Richaf possesses the unique power to create and manipulate weapons from pure energy. As the story progresses, he evolves from a warrior fighting for survival into a protector of reality itself.",
      stats: {
        "Power": "Bladeforge Creation",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Bladeforge Creation - Can forge weapons from energy",
        "Master Combatant - Skilled in various fighting styles",
        "Energy Manipulation - Control over weapon manifestation",
        "Strategic Mind - Tactical genius in battle"
      ]
    },
    {
      name: "Aika",
      role: "Human Ally",
      icon: "👤",
      description: "An ordinary human caught in an extraordinary world. Despite having no supernatural powers, Aika's courage, intelligence, and determination make her an invaluable ally. She represents the human perspective in a world dominated by beings of immense power.",
      stats: {
        "Power": "Ordinary Human",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Human Resilience - Extraordinary willpower",
        "Strategic Thinking - Sharp tactical mind",
        "Adaptability - Quick to adjust to situations",
        "Support Role - Provides crucial assistance to powered allies"
      ]
    },
    {
      name: "Richard",
      role: "Fire Wielder",
      icon: "🔥",
      description: "Master of the devastating Flames of Fury. Richard's power stems from pure rage and passion, manifesting as uncontrollable crimson flames that can reduce anything to ash. His volatile nature makes him both a powerful ally and a dangerous wildcard.",
      stats: {
        "Power": "Flames of Fury",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Flames of Fury - Devastating fire manipulation",
        "Pyrokinesis - Complete control over fire",
        "Rage Empowerment - Grows stronger through emotion",
        "Inferno Creation - Can create massive firestorms"
      ]
    },
    {
      name: "Rebel",
      role: "Time Manipulator",
      icon: "⏰",
      description: "The enigmatic Time Master who exists outside the normal flow of causality. Rebel can manipulate time itself, seeing all possible futures and pasts simultaneously. This power comes at the cost of experiencing time non-linearly, making normal relationships difficult.",
      stats: {
        "Power": "Time Master",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Time Manipulation - Control over temporal flow",
        "Temporal Sight - Can see past and future",
        "Time Stop - Ability to freeze time",
        "Paradox Immunity - Unaffected by timeline changes"
      ]
    },
    {
      name: "Fiend",
      role: "Defensive Specialist",
      icon: "🛡️",
      description: "Master of defensive techniques through Forcefield Energy. Fiend can create impenetrable barriers and shields, protecting allies while trapping enemies. His power is the ultimate defense, capable of withstanding even the most powerful attacks.",
      stats: {
        "Power": "Forcefield Energy",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Forcefield Creation - Generate protective barriers",
        "Energy Shields - Create multiple shield layers",
        "Barrier Manipulation - Shape and control force fields",
        "Defensive Mastery - Unbreakable protection"
      ]
    },
    {
      name: "Will of Evil - Sky Kun",
      role: "Dual Power Wielder",
      icon: "⚡",
      description: "A rare individual possessing two distinct powers: Bladeforge Creation and Blue Flames of Fury. This combination makes Sky Kun one of the most versatile fighters, capable of both creating weapons and engulfing them in azure flames for devastating attacks.",
      stats: {
        "Power": "Bladeforge & Blue Flames",
        "Affiliation": "Devil Castle",
        "Status": "Dead"
      },
      abilities: [
        "Dual Power System - Two distinct abilities",
        "Bladeforge Creation - Can create energy weapons",
        "Blue Flames of Fury - Azure fire manipulation",
        "Rolling Pierce - Summons a spike dealing 150% DMG (AoE)",
        "Bladeforge: Slash of Creation - Deals 350% DMG in area (AoE)",
        "Bladeforge: Slash - Deals 200% DMG to target"
      ]
    },
    {
      name: "Sky Kun",
      role: "Dual Power Wielder",
      icon: "⚡",
      description: "A rare individual possessing two distinct powers: Bladeforge Creation and Blue Flames of Fury. This combination makes Sky Kun one of the most versatile fighters, capable of both creating weapons and engulfing them in azure flames for devastating attacks.",
      stats: {
        "Power": "Bladeforge",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Rolling Pierce - Summons spike dealing 150% DMG (AoE)",
        "Bladeforge Creation - Can create energy weapons",
        "Bladeforge: Slash of Creation - Deals 350% DMG in area (AoE)",
        "Bladeforge: Slash - Deals 200% DMG to target"
      ]
    },
    {
      name: "Herobrine",
      role: "Lightning Lord",
      icon: "⚡",
      description: "The legendary Lightning Lord who commands the power of Elecztrek. Herobrine's mastery over electricity is absolute, able to summon devastating lightning storms and move at the speed of light. His white eyes glow with electrical energy.",
      stats: {
        "Power": "Elecztrek - Lightning Lord",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Lightning Manipulation - Complete control over electricity",
        "Elecztrek - Divine lightning power",
        "Speed of Light - Move at incredible speeds",
        "Storm Creation - Summon massive electrical storms"
      ]
    },
    {
      name: "Kuro Edward / Entity 303",
      role: "Obsidian Master",
      icon: "🌑",
      description: "Also known as Entity 303, Kuro Edward wields the power of obsidian—the hardest material in existence. He can create, manipulate, and become one with obsidian, making him nearly indestructible and capable of devastating attacks.",
      stats: {
        "Power": "Master of Obsidian",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Obsidian Manipulation - Control over the hardest material",
        "Near Invulnerability - Obsidian armor protection",
        "Material Creation - Generate obsidian structures",
        "Entity Form - Transform into pure obsidian"
      ]
    },
    {
      name: "Sirina",
      role: "Ice Wielder",
      icon: "❄️",
      description: "Cold as Ice personified. Sirina's power allows her to manipulate ice and cold to absolute zero temperatures. She can freeze anything instantly and create elaborate ice constructs. Her calm demeanor matches her freezing abilities.",
      stats: {
        "Power": "Cold As Ice",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Cryokinesis - Complete ice manipulation",
        "Absolute Zero - Freeze anything to zero kelvin",
        "Ice Construction - Create complex ice structures",
        "Temperature Control - Master over cold"
      ]
    },
    {
      name: "Izumi Hana",
      role: "Nature Guardian",
      icon: "🌸",
      description: "Blessed with the Hands of Nature, Izumi Hana has a deep connection to all living things. She can control plant life, accelerate growth, and communicate with nature itself. Her power represents life and renewal in their purest forms.",
      stats: {
        "Power": "Hands of Nature",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Nature Manipulation - Control over plant life",
        "Accelerated Growth - Speed up natural processes",
        "Healing Touch - Can heal using nature's energy",
        "Nature Communication - Speak with all living things"
      ]
    },
    {
      name: "Will of Evil / Sky Kun Spirit Form",
      role: "Spirit Entity",
      icon: "👻",
      description: "The dark spiritual form of Sky Kun, representing the Will of Evil. This entity exists between the physical and spiritual realms, possessing abilities that transcend normal reality. Neither fully alive nor dead, it embodies corruption and dark power.",
      stats: {
        "Power": "The Spirit",
        "Affiliation": "Unknown",
        "Status": "Active"
      },
      abilities: [
        "Spirit Form - Exists between realms",
        "Possession - Can take control of others",
        "Ethereal Travel - Move through solid matter",
        "Dark Energy - Corrupting spiritual power"
      ]
    },
    {
      name: "Leonardo",
      role: "Ender Master",
      icon: "🌌",
      description: "Master of the Enderkinds, Leonardo possesses powers connected to the End dimension. He can teleport, manipulate space, and harness the mysterious energy of the End. His connection to this dimension gives him abilities beyond normal comprehension.",
      stats: {
        "Power": "Enderkinds",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Teleportation - Instant dimensional travel",
        "Space Manipulation - Bend and warp space",
        "End Energy - Harness dimensional power",
        "Void Walking - Move through dimensional rifts"
      ]
    },
    {
      name: "R. / Rough",
      role: "Enhanced Cyborg",
      icon: "🤖",
      description: "A cybernetically enhanced warrior known as Rough. Part human, part machine, this cyborg possesses superhuman strength, speed, and durability. Advanced technology integrated into their body provides various tactical advantages and weapons systems.",
      stats: {
        "Power": "Cyborg",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Superhuman Strength - Enhanced mechanical power",
        "Advanced Systems - Integrated weapon systems",
        "Tactical Analysis - Computer-assisted combat",
        "Self-Repair - Automated healing systems"
      ]
    },
    {
      name: "Muhiga Seif Erpicht",
      role: "Azure Flame Master",
      icon: "💙",
      description: "Wielder of the Blue Flames of Fury, a more refined and controlled version of the crimson flames. Muhiga Seif Erpicht has mastered the azure fire, making it both more precise and more deadly than its red counterpart.",
      stats: {
        "Power": "Blue Flames of Fury",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Blue Flames - Controlled azure fire",
        "Precision Pyrokinesis - Exact flame control",
        "Enhanced Burn - Hotter than normal flames",
        "Flame Shaping - Create complex fire constructs"
      ]
    },
    {
      name: "Skylor Morrigan",
      role: "Memory Shaper",
      icon: "🧠",
      description: "Master of Memoria Demiurge, Skylor Morrigan can manipulate memories and reshape reality through the power of recollection. By accessing and altering the collective memory of existence, they can change the very fabric of reality itself.",
      stats: {
        "Power": "Memoria Demiurge",
        "Affiliation": "Morrigan Bloodline (Heritage)",
        "Status": "Active"
      },
      abilities: [
        "Enhanced Bladeforge Slash of Creation - Deals 200% DMG (AoE)",
        "Enhanced Rolling Pierce - Summons spike ignoring 150% RES",
        "Memory of Them - Summon multiple Eidolons from memories",
        "Memory of It - Summon 1 Eidolon from memories",
        "Memory of Me - Summon personal Eidolons",
        "Suffering is Not Essential - Summon 'Memory of Me' and teleport to target",
        "Memorial Garden - Teleport enemies to Memory Garden (AoE)",
        "Justice of The Remembrance - Massive DMG via Memorial Garden (AoE)",
        "Answer Me, Mortal - 100% DMG RES, Eidolons act independently, use Justice after all fall"
      ]
    },
    {
      name: "Seth Zephyra Morrigan",
      role: "Void Demiurge",
      icon: "⚫",
      description: "Wielder of Memoria Demiurge—The Void Demiurge variant. Unlike other Memoria users, Seth commands the memories of the void, the space between existence. This power allows them to unmake reality by erasing it from memory itself.",
      stats: {
        "Power": "Memoria Demiurge - Void",
        "Affiliation": "Morrigan Bloodline",
        "Status": "Active"
      },
      abilities: [
        "Memory of It - Summon 1 Eidolon from memories",
        "Memory of Me - Summon personal Eidolons",
        "Memory of Them - Summon multiple Eidolons",
        "Fading Fate - Deals 200% of Lilith's DMG",
        "Unceasing Slash - Deals 250% DMG, ignoring 25% RES and 10% weapon durability",
        "Debuff Point - Decrease enemy combat capabilities",
        "Domain of Void - Summon blackhole pulling enemies (AoE)",
        "Bawl Not For The Discarded - Massive DMG via Domain of Void",
        "Silent Sorrow - 100% DMG RES, Eidolons act independently",
        "But Suffering is Essential - Summon 'Memory of Me' and teleport to target",
        "Joints of Darkness - 'Memory of Me' deals 100% DMG, then Zephyra deals 500% AoE ignoring 50% DEF"
      ]
    },
    {
      name: "Richaf Nikador Erpicht",
      role: "Memory Creator",
      icon: "✨",
      description: "Another master of Memoria Demiurge, Richaf Nikador possesses the ability to create new memories and implant them into reality. This power can rewrite history itself and create entirely new timelines based on fabricated memories.",
      stats: {
        "Power": "Memoria Demiurge",
        "Affiliation": "Erpicht Family",
        "Status": "Active"
      },
      abilities: [
        "Memory Creation - Forge new memories",
        "History Rewriting - Alter past events",
        "Timeline Creation - Generate new timelines",
        "Demiurge Authority - God-like memory power"
      ]
    },
    {
      name: "Jeff",
      role: "Lightning Lord",
      icon: "⚡",
      description: "Another wielder of Lightning Lord abilities. Jeff commands electricity with devastating precision, able to channel millions of volts through his body and unleash them in concentrated attacks. His power rivals that of natural lightning storms.",
      stats: {
        "Power": "Lightning Lord",
        "Affiliation": "Heaven House",
        "Status": "Active"
      },
      abilities: [
        "Electrokinesis - Complete lightning control",
        "Voltage Manipulation - Control electrical power",
        "Lightning Speed - Move at incredible speeds",
        "Thunder Creation - Generate massive storms"
      ]
    },
    {
      name: "Anasrava",
      role: "Great God of Memory",
      icon: "👁️",
      description: "A divine being who has ascended to Memoria Great God status. Anasrava exists beyond normal reality, able to view and manipulate the memories of entire universes. Their power dwarfs that of regular Memoria users, approaching true godhood.",
      stats: {
        "Power": "Memoria Great God",
        "Affiliation": "Divine Realm",
        "Status": "Transcendent"
      },
      abilities: [
        "Universal Memory - Access all memories in existence",
        "Divine Authority - God-level power",
        "Reality Oversight - Observe all of existence",
        "Cosmic Memory - Memories spanning universes"
      ]
    },
    {
      name: "Fal",
      role: "Great God of the Void",
      icon: "🌀",
      description: "The Void Great God, counterpart to Anasrava. Fal commands the absolute nothingness that exists beyond reality, wielding the power to unmake existence itself. As a Great God, their power transcends normal comprehension.",
      stats: {
        "Power": "The Void Great God",
        "Affiliation": "Void Realm",
        "Status": "Transcendent"
      },
      abilities: [
        "Absolute Void - Command total nothingness",
        "Existence Negation - Unmake reality",
        "Void Transcendence - Beyond normal existence",
        "Divine Destruction - God-level erasure"
      ]
    },
    {
      name: "Null",
      role: "Embodiment of Void",
      icon: "⬛",
      description: "The living embodiment of The Will of Void. Null is neither alive nor dead, existing as pure absence. They represent the ultimate nothing, the void that existed before creation and will exist after all things end. To encounter Null is to face oblivion itself.",
      stats: {
        "Power": "The Will of Void",
        "Affiliation": "None",
        "Status": "Eternal"
      },
      abilities: [
        "Void Embodiment - Physical manifestation of nothingness",
        "Conceptual Erasure - Delete concepts from reality",
        "Null Space - Create pockets of pure void",
        "Inevitable Nothing - Cannot be truly destroyed"
      ]
    },
    {
      name: "Eddie",
      role: "Undead",
      icon: "💀",
      description: "One of the Undead, Eddie exists in the liminal space between life and death. No longer truly alive but not completely dead, the Undead possess unique abilities stemming from their cursed state, immune to many mortal weaknesses.",
      stats: {
        "Power": "Undead",
        "Affiliation": "Undead Faction",
        "Status": "Undead"
      },
      abilities: [
        "Immortality - Cannot die naturally",
        "Pain Immunity - Feels no physical pain",
        "Dark Energy - Harness necromantic power",
        "Undeath Resilience - Resistant to damage"
      ]
    },
    {
      name: "Tom",
      role: "Undead",
      icon: "💀",
      description: "Another of the Undead beings. Tom shares the cursed existence of the living dead, possessing unnatural strength and endurance. The Undead form a unique faction, neither fully aligned with the living nor the dead.",
      stats: {
        "Power": "Undead",
        "Affiliation": "Undead Faction",
        "Status": "Undead"
      },
      abilities: [
        "Undead Strength - Enhanced physical power",
        "Regeneration - Slowly heal from injuries",
        "Life Drain - Absorb life energy",
        "Curse Resistance - Immune to most curses"
      ]
    },
    {
      name: "Victor",
      role: "Undead",
      icon: "💀",
      description: "The third of the notable Undead. Victor has embraced his cursed state, using the powers granted by undeath to fight on. Each of the Undead brings their own personality and fighting style to their immortal existence.",
      stats: {
        "Power": "Undead",
        "Affiliation": "Undead Faction",
        "Status": "Undead"
      },
      abilities: [
        "Undeath Powers - Various undead abilities",
        "Corruption Touch - Spread undeath to others",
        "Shadow Blend - Merge with darkness",
        "Eternal Endurance - Limitless stamina"
      ]
    }
  ];

  // === RENDER CHARACTERS ===
  const wrapper = document.querySelector(".characters-wrapper");

  characters.forEach((character, index) => {
    const box = document.createElement("div");
    box.classList.add("character-box");
    box.dataset.characterIndex = index;

    // Create header
    const header = document.createElement("div");
    header.classList.add("character-header");

    const info = document.createElement("div");
    info.classList.add("character-info");

    const icon = document.createElement("div");
    icon.classList.add("character-icon");
    icon.textContent = character.icon;

    const nameContainer = document.createElement("div");
    const name = document.createElement("h2");
    name.classList.add("character-name");
    name.textContent = character.name;

    const role = document.createElement("p");
    role.classList.add("character-role");
    role.textContent = character.role;

    nameContainer.appendChild(name);
    nameContainer.appendChild(role);

    info.appendChild(icon);
    info.appendChild(nameContainer);

    const expandIcon = document.createElement("span");
    expandIcon.classList.add("expand-icon");
    expandIcon.textContent = "▼";

    header.appendChild(info);
    header.appendChild(expandIcon);

    // Create content
    const content = document.createElement("div");
    content.classList.add("character-content");

    const details = document.createElement("div");
    details.classList.add("character-details");

    const description = document.createElement("p");
    description.textContent = character.description;
    details.appendChild(description);

    // Stats
    const stats = document.createElement("div");
    stats.classList.add("character-stats");
    
    Object.entries(character.stats).forEach(([label, value]) => {
      const statItem = document.createElement("div");
      statItem.classList.add("stat-item");
      
      const statLabel = document.createElement("div");
      statLabel.classList.add("stat-label");
      statLabel.textContent = label;
      
      const statValue = document.createElement("div");
      statValue.classList.add("stat-value");
      statValue.textContent = value;
      
      statItem.appendChild(statLabel);
      statItem.appendChild(statValue);
      stats.appendChild(statItem);
    });
    details.appendChild(stats);

    // Abilities
    const abilitiesTitle = document.createElement("p");
    abilitiesTitle.innerHTML = "<strong>Abilities & Powers:</strong>";
    abilitiesTitle.style.marginTop = "1.5rem";
    abilitiesTitle.style.marginBottom = "0.5rem";
    details.appendChild(abilitiesTitle);

    const abilities = document.createElement("ul");
    abilities.classList.add("abilities-list");
    
    character.abilities.forEach(ability => {
      const li = document.createElement("li");
      li.textContent = ability;
      abilities.appendChild(li);
    });
    details.appendChild(abilities);

    content.appendChild(details);

    // Add click event to header
    header.addEventListener("click", () => {
      const isExpanded = box.classList.contains("expanded");
      
      // Close all other boxes
      document.querySelectorAll(".character-box").forEach(b => {
        b.classList.remove("expanded");
      });

      // Toggle current box
      if (!isExpanded) {
        box.classList.add("expanded");
      }
    });

    box.appendChild(header);
    box.appendChild(content);
    wrapper.appendChild(box);
  });

  // === VIDEO BACKGROUND QUEUE ===
  const videoElement = document.getElementById('bg-video');
  const videoQueue = [
    'vid/mistake.mp4',
    'vid/skykun.mp4',
    'vid/anasrava.mp4'
    // Add more video paths here
  ];
  
  let currentVideoIndex = 0;

  function playNextVideo() {
    if (videoQueue.length === 0) return;
    
    currentVideoIndex = currentVideoIndex % videoQueue.length;
    videoElement.src = videoQueue[currentVideoIndex];
    videoElement.load();
    
    // Play with error handling
    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
    
    currentVideoIndex++;
  }

  // When video ends, play next in queue
  videoElement.addEventListener('ended', () => {
    playNextVideo();
  });

  // Start playing first video
  playNextVideo();

  // === PAGE TRANSITION ===
  const backBtn = document.querySelector(".back-btn");
  
  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("page-exit");
    
    setTimeout(() => {
      window.location.href = backBtn.href;
    }, 500);
  });
});