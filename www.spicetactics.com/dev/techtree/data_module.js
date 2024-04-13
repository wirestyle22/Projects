const technologies = [
    { id: '1', name: 'Local Community', description: '+5 Plascrete Production\nUnlocks Maintenance Center Village Building\nUnlocks Investment Office Village Building', type: 'technology', position: { x: 100, y: 100 } },
    { id: '2', name: 'Modular Parts', description: '+1 Maximum Crew in Harvesters\nUnlocks the Spice Silos Village Building\nUnlocks Harvestor Works Building in Main Base', type: 'technology', position: { x: 300, y: 100 }, parentIds: ['1'] },
    { id: '3', name: 'Urban Planning', description: 'Allow Constructing Multiple Village Buildings Simultaneously\nUnlocks MAson Guild Building in Arrakeen', type: 'technology', position: { x: 500, y: 100 }, parentIds: ['1'] },
    { id: '4', name: 'CHOAM Integration', description: 'See Next Periods Spice Exchange Rate in the Spice Report\nUnlocks CHOAM Branch building in Main Base\n+1 Agent Slot in CHOAM Information', type: 'technology', position: { x: 700, y: 100 }, parentIds: ['2'] },
    { id: '5', name: 'Insulated Valley', description: 'Controlled Villages in Regions with at most 2 Wind Strength gain:\n-30% Building Solari Upkeep\nBuildings Require -1 Water', type: 'technology', position: { x: 900, y: 100 }, parentIds: ['3'] },
    { id: '6', name: 'Geothermal Condensers', description: 'Fuel Cell Factories Produce +10 Solari\nFuel Cell Factories Produce +5 Water\n+10% Resource Production In Villages with Fuel Cell Factory', type: 'technology', position: { x: 1100, y: 100 }, parentIds: ['3'] },
    { id: '7', name: 'Riches of Arrakis', description:'+10 Solari Production Per Controlled Special Region\n+2% Total Solari Production Per Controlled Special Region', type: 'technology', position: { x: 1300, y: 100 }, parentIds: ['3'] },
    { id: '8', name: 'Atreides Foreman', description:'+2 Maximum Crew in Harvestors\nAfter Successfully Paying the Imperial Tax , Every Harvester with full crew gains +15% Gathering Rate Permanently (x3 Max)', type: 'technology', position: { x: 1500, y: 100 }, parentIds: ['3'] },
    { id: '9', name: 'CHOAM Support', description:'-15% CHOAM Share Buying Price\n+0.1 Spice Exchange Rate per 5% CHOAM Share', type: 'technology', position: { x: 1700, y: 100 }, parentIds: ['3'] },
    { id: '10', name: 'Atreides Sympathizers', description:'+5 Landsraad Standing per LAndsraaad Information Level, On Council Opening\n+2 Influence Production', type: 'technology', position: { x: 1900, y: 100 } },
    { id: '11', name: 'Diplomatic Manuevers', description:'Houses Minor Deliver a House Gift near Arrakeen after every Council\nUnlocks Political Agreement Treaty\nUnlocks Landraad Quarters building in Arrakeen', type: 'technology', position: { x: 2100, y: 100 }, parentIds: ['10'] },
    { id: '12', name: 'Spying Logistic', description:'Allows training of Assassins\n+200% Agent Recruitment Speed\nUnlocks Intelligence Agency Building in Main Base', type: 'technology', position: { x: 2300, y: 100 }, parentIds: ['10'] },
    { id: '13', name: 'Political Entente', description:'When another faction betrays a Truce with House Atreides, receive 4 free Lansdraad Guards\nUnlocks the Council Chamber building in Arrakeen', type: 'technology', position: { x: 2500, y: 100 }, parentIds: ['11'] },
    { id: '14', name: 'Landrsraad Support', description:'+50 Max Influence per Agent Assigned to Lansdraad Information Slot\n+1 Agent Slot in Lansdraad Information', type: 'technology', position: { x: 2700, y: 100 }, parentIds: ['11'] },
    { id: '15', name: 'Sustainable Spying', description:'Agents Assigned on CHOAM Information, Landsraad Information, or Spacing Guild Information Slots Produce +100% of their associated resources\nAgent Traits present in only once on an information field apply their effects twice', type: 'technology', position: { x: 2900, y: 100 }, parentIds: ['12'] },
    { id: '16', name: 'Active Surveillance', description:'+1 Influence and Intel Production per Agent assigned to Counterintelligence\n+1 Agent Slot in Counterintelligence', type: 'technology', position: { x: 3100, y: 100 }, parentIds: ['12'] },
    { id: '17', name: 'Insider Trading', description:'+20% CHOAM Share selling price\nSelling CHOAM Shares grants +1 Influence per share', type: 'technology', position: { x: 3300, y: 100 }, parentIds: ['14'] },
    { id: '18', name: 'Spying Mastery', description:'-50% Impact from number of agents on the time it takes to recruit a new one\n+5 Max Agents', type: 'technology', position: { x: 3500, y: 100 }, parentIds: ['15'] },
    { id: '19', name: 'Survival Training', description:'Unlocks the Armory to customize Units equipment\nUnlocks Military Base Village Building ', type: 'technology', position: { x: 3700, y: 100 } },
    { id: '20', name: 'Army Logistics', description:'+10 Water\nUnlocks the Second Gear Slot in the Armory', type: 'technology', position: { x: 3900, y: 100 }, parentIds: ['19'] },
    { id: '21', name: 'Mechanization', description:'Unlocks the Fusion Plant Building in the Main Base\nUnlocks the Support Drone Unit', type: 'technology', position: { x: 4100, y: 100 }, parentIds: ['19'] },
    { id: '22', name: 'Post-Trauma Reintegration', description:'+5 Command Points\n-30% non-mechanical Units regeneration costs\Unlocks Command Post Building in Arrakeen', type: 'technology', position: { x: 4300, y: 100 }, parentIds: ['19'] },
    { id: '23', name: 'Energy Efficiency', description:'+30% Fuel Cell\n-1 Mechanical Units Fuel Cell Requirement', type: 'technology', position: { x: 4500, y: 100 }, parentIds: ['21'] },
    { id: '24', name: 'Parallel Training', description:'+@ Training Slots\nUnlocks the Military Academy Building in Main Base\n+1 Agent Slot in Spacing Guild Information', type: 'technology', position: { x: 4700, y: 100 }, parentIds: ['22'] },
    { id: '25', name: 'Parts Production', description:'+20% Mechanical Units Health\n+50% Mechanical Units Regeneration Speed\n-30% Mechanical Units Regeneration Costs', type: 'technology', position: { x: 4900, y: 100 }, parentIds: ['23'] },
    { id: '26', name: 'Military Propaganda', description:'+10 Command Points\n+20% Authority Production if no other factions use more Command Points', type: 'technology', position: { x: 5100, y: 100 }, parentIds: ['24'] },
    { id: '27', name: 'Proud Liberator', description:'Non-mechanical Units get +2% Max Health per 25 Landsraad Standing\nUnits Liberating or Annexing a village from a Faction with less Landsraad Standing heal 20% of their Health', type: 'technology', position: { x: 5300, y: 100 }, parentIds: ['24'] },
    { id: '28', name: 'Local Dialect Studies', description:'-15% Authority Cost to Annex a Village\nControlled Villages Produce +1 Water', type: 'technology', position: { x: 5500, y: 100 } },
    { id: '29', name: 'Lay of the Land', description:'+0.5 Knowledge per Controlled Village\nUnlocks Research Agreement Treaty', type: 'technology', position: { x: 4100, y: 100 }, parentIds: ['28'] },
    { id: '30', name: 'Air Network', description:'-70% Airfield Consutrction Costs\n-70% Airfield Upkeep\nShuttles are 100% faster', type: 'technology', position: { x: 4100, y: 100 }, parentIds: ['28'] },
    { id: '31', name: 'Native Customs', description:'+20% Authority from Agents on Arrakis Information Slots\n-30% Authority cost to Annex a Village in a region with a revealed Sietch', type: 'technology', position: { x: 4100, y: 100 }, parentIds: ['28'] },
    { id: '32', name: 'Veteran Militia', description:'-15% Damage Received by Military Units within Atreides Borders\n+100% Militia Health\n+50% Militia Power', type: 'technology', position: { x: 4100, y: 100 }, parentIds: ['30'] },
    { id: '33', name: 'Cultural Assimilation', description:'-20% Authority and Influence cost to use Peaceful Annexation\nUnlocks Concord Chamber Village Building\n+1 Agent Slot in Arrakis Information', type: 'technology', position: { x: 4100, y: 100 }, parentIds: ['31'] },
    { id: '34', name: 'Valuable Trinkets', description:'+100% Resources Received from trading with an allied Sietch\nUnlocks the Crafts Workshop Village Building', type: 'technology', position: { x: 4100, y: 100 }, parentIds: ['31'] },
    { id: '35', name: 'Border Defense', description:'+1 Missile Battery Limit\n+30% Missile Battery Power\n+2 Militia Armor', type: 'technology', position: { x: 4100, y: 100 }, parentIds: ['32'] },
    { id: '36', name: 'Wonders of the Desert', description:'+30% Resource Production in Special Regions\nNo Penalty Authority Cost to Annex a Village in a Special Region', type: 'technology', position: { x: 4100, y: 100 }, parentIds: ['34'] },


  
  
  ];

  