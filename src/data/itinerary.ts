import { TravelGuide } from "../types/guide";

export const travelGuide: TravelGuide = {
  "days": [
    {
      "date": "2025-07-13",
      "title": "Nice → Antibes → Grasse → Saint-Paul-de-Vence",
      "concept": "Coastal charm, art, perfume, medieval sunset.",
      "drivingDistance": "~90km",
      "weather": "Sunny, 26°C",
      "emoji": "🌞",
      "hotel": {
        "name": "Le Mas des Alizes B&B",
        "address": "674 bis Rte du Pont de Pierre, 06480 La Colle-sur-Loup, France",
        "mapsLink": "https://maps.google.com/?q=Le+Mas+des+Alizes+B%26B+674+bis+Route+du+Pont+de+Pierre+06480+La+Colle-sur-Loup+France"
      },
      "stops": [
        {"time": "08:00", "title": "Breakfast at Marché aux Fleurs Nice", "expect": "Historic flower & food market with local delicacies.", "tip": "Try socca pancakes and pissaladière (onion tart) from Chez Theresa.", "town": "Nice", "emoji": "🥐", "duration": "1 hour"},
        {"time": "09:00", "title": "Drive to Antibes", "expect": "Easy coastal drive, light traffic on Sunday morning.", "tip": "Skip paid parking by using Port Vauban's first free hour.", "town": "Nice → Antibes", "emoji": "🚗", "duration": "30 min"},
        {"time": "09:30", "title": "Antibes Old Town & Picasso Museum", "expect": "Stone lanes, sea views, small but punchy Picasso collection.", "tip": "Grab a socca (chick-pea crêpe) from the market to eat on the ramparts.", "town": "Antibes", "emoji": "🎨", "duration": "1h15min", "cost": "€6", "priority": "must-see"},
        {"time": "10:45", "title": "Antibes Market Hall", "expect": "Fresh local produce, olive oils, and artisanal goods.", "tip": "Sample the tapenade varieties before buying – the green one with almonds is unique.", "town": "Antibes", "emoji": "🛍️", "duration": "45 min"},
        {"time": "11:30", "title": "Coffee + Croissant break", "expect": "Plenty of cafés on Rue Aubernon.", "tip": "Order 'noisette' if you just want an espresso with a splash of milk.", "town": "Antibes", "emoji": "☕", "duration": "30 min", "cost": "€4-6"},
        {"time": "12:00", "title": "Fort Carré viewpoint", "expect": "16th-century star-shaped fort with panoramic bay views.", "tip": "The 20-minute walk up is worth it for yacht harbor photos.", "town": "Antibes", "emoji": "🏰", "duration": "30 min", "priority": "recommended"},
        {"time": "12:30", "title": "Drive to Grasse", "expect": "Winding inland road, 1 hr max.", "tip": "Set playlist now; 4G gets patchy on hillside.", "town": "Antibes → Grasse", "emoji": "🚗", "duration": "1 hour"},
        {"time": "13:30", "title": "Fragonard Perfume Museum", "expect": "30-min guided visit, free samples at the exit.", "tip": "Ask staff to stamp your leaflet—makes a cute keepsake.", "town": "Grasse", "emoji": "🌹", "duration": "45 min", "cost": "Free", "priority": "must-see"},
        {"time": "14:15", "title": "Grasse Old Town stroll + gelato", "expect": "Steep streets, pastel houses.", "tip": "Best views from Place aux Aires.", "town": "Grasse", "emoji": "🍦", "duration": "30 min"},
        {"time": "14:45", "title": "International Perfume Museum", "expect": "Interactive exhibits on perfume history and production.", "tip": "The garden outside has over 400 fragrant plant species—smell them all!", "town": "Grasse", "emoji": "🏛️", "duration": "15 min", "cost": "€4"},
        {"time": "15:00", "title": "Drive to Saint-Paul-de-Vence", "expect": "1 hr; pretty olive-grove scenery.", "tip": "Stop at road-side fruit stand for fresh figs.", "town": "Grasse → Saint-Paul-de-Vence", "emoji": "🚗", "duration": "1 hour"},
        {"time": "16:00", "title": "Check-in & relax", "expect": "Stone village vibes, cicadas.", "tip": "Hotel pool time = recharge before evening.", "town": "Saint-Paul-de-Vence", "emoji": "🏨", "duration": "1h30"},
        {"time": "17:30", "title": "Fondation Maeght", "expect": "World-class modern art museum with Miró sculptures in garden.", "tip": "The Giacometti courtyard is perfect for Instagram photos.", "town": "Saint-Paul-de-Vence", "emoji": "🎭", "duration": "30 min", "cost": "€16", "priority": "must-see"},
        {"time": "18:00", "title": "Village walk & art galleries", "expect": "Tiny alleys, local artists, Chagall's tomb at the cemetery.", "tip": "Galleries shut ~19:00—peek in early.", "town": "Saint-Paul-de-Vence", "emoji": "🚶", "duration": "1h30", "priority": "recommended"},
        {"time": "19:30", "title": "Apéro on the ramparts", "expect": "Golden hour over valley.", "tip": "Order a kir pêche; cheaper than rosé by the glass.", "town": "Saint-Paul-de-Vence", "emoji": "🥂", "duration": "1 hour", "cost": "€6-8"},
        {"time": "20:30", "title": "Dinner in the square", "expect": "Outdoor tables, Provençal menu.", "tip": "Share one starter—the mains are huge.", "town": "Saint-Paul-de-Vence", "emoji": "🍽️", "duration": "1h30", "cost": "€25-35", "reservation": true},
        {"time": "22:00", "title": "Nightcap at La Colombe d'Or", "expect": "Historic artist hangout with original Picassos on walls.", "tip": "Just have one drink at the bar if dinner is too pricey.", "town": "Saint-Paul-de-Vence", "emoji": "🥃", "duration": "1 hour", "cost": "€10-15"}
      ]
    },
    {
      "date": "2025-07-14",
      "title": "Saint-Paul → Fayence → Moustiers (Bastille Day)",
      "concept": "Hilltop villages, scenic gorges, fireworks at night.",
      "drivingDistance": "~160km",
      "weather": "Sunny with afternoon clouds, 28°C",
      "emoji": "🎆",
      "notes": "It's Bastille Day! Expect festive atmosphere with celebrations and fireworks in the evening.",
      "hotel": {
        "name": "Hotel in Moustiers-Sainte-Marie",
        "address": "Place de l'église, 04360 Moustiers-Sainte-Marie, France",
        "mapsLink": "https://maps.google.com/?q=Place+de+l%27%C3%A9glise+04360+Moustiers-Sainte-Marie+France"
      },
      "stops": [
        {"time": "08:30", "title": "Morning walk to viewpoint", "expect": "Quiet paths, valley views, birdsong.", "tip": "The eastern walkway has better morning light for photos.", "town": "Saint-Paul-de-Vence", "emoji": "🌄", "duration": "30 min"},
        {"time": "09:00", "title": "Drive to Fayence", "expect": "1 h15 through forested hills.", "tip": "Fill up fuel in Tourettes—the cheap station.", "town": "Saint-Paul-de-Vence → Fayence", "emoji": "🚗", "duration": "1h15"},
        {"time": "10:15", "title": "Coffee & quick stroll in Fayence", "expect": "Quiet Monday market, panoramic terrace.", "tip": "Public WC behind the church (rare!).", "town": "Fayence", "emoji": "☕", "duration": "30 min"},
        {"time": "10:45", "title": "Fayence Clock Tower", "expect": "Climb narrow steps to 19th-century tower.", "tip": "The entrance is easy to miss—look for small door next to café.", "town": "Fayence", "emoji": "🕰️", "duration": "30 min", "priority": "optional"},
        {"time": "11:15", "title": "Drive to Moustiers", "expect": "2 hrs via A8 then D952—views of Verdon gorge.", "tip": "Stop at 'Pont de l'Artuby' for 5-min photo.", "town": "Fayence → Moustiers", "emoji": "🚗", "duration": "2 hours"},
        {"time": "12:00", "title": "Scenic stop at Valensole", "expect": "Famous lavender fields if in season (June-July).", "tip": "The plateau has the best wide-angle views—follow signs to 'plateau'.", "town": "Valensole", "emoji": "💜", "duration": "1h15", "priority": "must-see"},
        {"time": "13:15", "title": "Lunch in Moustiers", "expect": "Terrace restaurants under plane trees.", "tip": "Order the local lavender honey goat cheese.", "town": "Moustiers-Sainte-Marie", "emoji": "🍽️", "duration": "1h15", "cost": "€15-25"},
        {"time": "14:30", "title": "Pottery shops & narrow streets", "expect": "Fayence-style ceramics everywhere.", "tip": "Shops close 12-14h—good timing now they're open.", "town": "Moustiers-Sainte-Marie", "emoji": "🏺", "duration": "30 min"},
        {"time": "15:00", "title": "Visit to Notre-Dame de Beauvoir", "expect": "12th-century church with golden star suspended above.", "tip": "Look for the mysterious metal star hanging between cliffs above town.", "town": "Moustiers-Sainte-Marie", "emoji": "⭐", "duration": "30 min", "priority": "recommended"},
        {"time": "15:30", "title": "Hike to Notre-Dame de Beauvoir chapel", "expect": "20-min steep stair climb, epic canyon view.", "tip": "Carry 1 L water; zero shade.", "town": "Moustiers-Sainte-Marie", "emoji": "⛪", "duration": "1h15", "priority": "must-see"},
        {"time": "16:45", "title": "Walk to town star viewpoint", "expect": "Best angle to see Moustiers' famous suspended star.", "tip": "The legend says a knight hung it after returning from the Crusades.", "town": "Moustiers-Sainte-Marie", "emoji": "⭐", "duration": "15 min"},
        {"time": "17:00", "title": "Siesta / cool-down", "expect": "Hotel or riverside shade.", "tip": "Dip feet in the Verdonnette stream below the bridge.", "town": "Moustiers-Sainte-Marie", "emoji": "😴", "duration": "1h30"},
        {"time": "18:30", "title": "Pre-dinner walk to waterfall", "expect": "Small cascade in town center, refreshing mist.", "tip": "Fill your water bottle here—pure mountain spring.", "town": "Moustiers-Sainte-Marie", "emoji": "💦", "duration": "1 hour"},
        {"time": "19:30", "title": "Dinner on Place de l'Église", "expect": "Village lights coming on, festive mood.", "tip": "Try pistou soup—the local version of minestrone.", "town": "Moustiers-Sainte-Marie", "emoji": "🍽️", "duration": "1h30", "cost": "€25-35", "reservation": true},
        {"time": "21:00", "title": "Join Bastille Day celebrations", "expect": "Local band, dancing in the square.", "tip": "The mairie hands out free French flag pins—grab one.", "town": "Moustiers-Sainte-Marie", "emoji": "🇫🇷", "duration": "1 hour"},
        {"time": "22:00", "title": "Bastille-Day fireworks", "expect": "Small-town show, stars overhead.", "tip": "Stand by the carpark edge—fewer crowds, same view.", "town": "Moustiers-Sainte-Marie", "emoji": "🎆", "duration": "30 min"},
        {"time": "22:30", "title": "After-fireworks drinks", "expect": "Locals out celebrating national holiday.", "tip": "Café des Arts stays open late for the holiday.", "town": "Moustiers-Sainte-Marie", "emoji": "🥂", "duration": "1 hour+", "cost": "€5-10"}
      ]
    },
    {
      "date": "2025-07-15",
      "title": "Moustiers → Cotignac → Hyères",
      "concept": "Troglodyte cliffs, vineyard tastings, first sea breeze.",
      "drivingDistance": "~120km",
      "weather": "Sunny, 30°C",
      "emoji": "🍷",
      "hotel": {
        "name": "Best Western Plus Hyères Côte D'Azur",
        "address": "153 Avenue de Hyères, 83250 La Londe-les-Maures, France",
        "mapsLink": "https://maps.google.com/?q=Best+Western+Plus+Hy%C3%A8res+C%C3%B4te+D%27Azur+153+Avenue+de+Hyeres+83250+La+Londe-les-Maures+France"
      },
      "stops": [
        {"time": "08:00", "title": "Breakfast with Verdon view", "expect": "Pastries and coffee overlooking the valley.", "tip": "Ask for pain aux raisins—often better than croissants here.", "town": "Moustiers-Sainte-Marie", "emoji": "🥐", "duration": "1 hour"},
        {"time": "09:00", "title": "Drive to Cotignac", "expect": "1 h15 through pine forest.", "tip": "Play the 'French Riviera' Spotify mix for vibes.", "town": "Moustiers-Sainte-Marie → Cotignac", "emoji": "🚗", "duration": "1h15"},
        {"time": "10:00", "title": "Scenic stop at Lac de Sainte-Croix", "expect": "Turquoise alpine lake, electric boat rentals.", "tip": "15-minute photo stop at the bridge viewpoint.", "town": "Sainte-Croix-du-Verdon", "emoji": "🏞️", "duration": "15 min", "priority": "recommended"},
        {"time": "10:15", "title": "Cotignac cliff walk & market", "expect": "Limestone wall with caves, Provencal stalls.", "tip": "Buy dried lavender sachets—lightweight souvenir.", "town": "Cotignac", "emoji": "🛍️", "duration": "45 min", "priority": "must-see"},
        {"time": "11:00", "title": "Troglodyte dwellings tour", "expect": "Ancient cave homes built into cliff face.", "tip": "The walking route is marked with yellow arrows.", "town": "Cotignac", "emoji": "🏠", "duration": "45 min", "cost": "€3", "priority": "must-see"},
        {"time": "11:45", "title": "Cotignac waterfall", "expect": "Hidden cascade behind main square.", "tip": "Follow the sound of water down the alley past the bakery.", "town": "Cotignac", "emoji": "💦", "duration": "15 min"},
        {"time": "12:00", "title": "Lunch on Cours Gambetta", "expect": "Shaded plaza, fountains trickling.", "tip": "Order the plat du jour to stay under €15.", "town": "Cotignac", "emoji": "🍽️", "duration": "1h30", "cost": "€15-20"},
        {"time": "13:30", "title": "Optional winery stop (Château Margüi)", "expect": "30-min tasting, Spielberg family estate.", "tip": "Spit, don't sip, if driving 😉", "town": "Châteauvert", "emoji": "🍷", "duration": "45 min", "cost": "€10", "priority": "optional"},
        {"time": "14:15", "title": "Visit Clos de l'Ours vineyard", "expect": "Family-run organic winery with mountain backdrop.", "tip": "Their rosé magnums are great value for beach picnics.", "town": "Cotignac", "emoji": "🍷", "duration": "45 min", "cost": "€12", "priority": "recommended"},
        {"time": "15:00", "title": "Drive to Hyères", "expect": "1 h30, flat vineyards then palms.", "tip": "Turn on AC early—Hyères gets hot.", "town": "Cotignac → Hyères", "emoji": "🚗", "duration": "1h30"},
        {"time": "16:30", "title": "Check-in & beach cooldown", "expect": "Drop bags, quick change.", "tip": "Free parking at Almanarre after 17:00.", "town": "Hyères", "emoji": "🏨", "duration": "45 min"},
        {"time": "17:15", "title": "L'Almanarre Beach swim", "expect": "Shallow warm water, windsurfers in distance.", "tip": "Northern end is less crowded and has softer sand.", "town": "Hyères", "emoji": "🏖️", "duration": "45 min", "priority": "must-see"},
        {"time": "18:00", "title": "Giens Peninsula sunset walk", "expect": "Pink sky over salt flats, flamingos sometimes.", "tip": "Flip-flops okay, but bring bug spray.", "town": "Hyères", "emoji": "🌅", "duration": "1h15", "priority": "recommended"},
        {"time": "19:15", "title": "Villa Noailles viewpoint", "expect": "Modernist 1920s villa, panoramic terrace.", "tip": "Free entry, amazing architecture photos at sunset.", "town": "Hyères", "emoji": "🏛️", "duration": "45 min", "cost": "Free"},
        {"time": "20:00", "title": "Seafood dinner at port", "expect": "Fresh catch, harbour lights.", "tip": "Ask for 'menu du soir'—cheaper set price.", "town": "Hyères", "emoji": "🦞", "duration": "1h30", "cost": "€30-40", "reservation": true},
        {"time": "21:30", "title": "Evening stroll in Old Town", "expect": "Medieval streets, hidden squares.", "tip": "Follow the heritage trail markers on the ground.", "town": "Hyères", "emoji": "🚶", "duration": "1 hour"}
      ]
    },
    {
      "date": "2025-07-16",
      "title": "Hyères → Porquerolles → Toulon",
      "concept": "Island bikes, turquoise bays, mellow coastal finale.",
      "drivingDistance": "~40km",
      "weather": "Sunny, 29°C",
      "emoji": "🏝️",
      "stops": [
        {"time": "07:30", "title": "Early breakfast", "expect": "Quick meal before ferry departure.", "tip": "Grab extra pastries for the boat ride.", "town": "Hyères", "emoji": "🥐", "duration": "30 min"},
        {"time": "08:00", "title": "Ferry to Porquerolles", "expect": "15-min ride, salty breeze.", "tip": "Sit starboard for Giens photo.", "town": "Hyères → Porquerolles", "emoji": "⛴️", "duration": "15 min", "cost": "€19 round-trip", "priority": "must-see"},
        {"time": "08:30", "title": "Rent bikes in village square", "expect": "€20/day, quick paperwork.", "tip": "Grab free island map at rental desk.", "town": "Porquerolles", "emoji": "🚲", "duration": "15 min", "cost": "€20/day"},
        {"time": "08:45", "title": "Historical Fort Sainte-Agathe", "expect": "16th-century fortress, maritime museum.", "tip": "The roof terrace has the best harbor photos.", "town": "Porquerolles", "emoji": "🏰", "duration": "15 min", "priority": "optional"},
        {"time": "09:00", "title": "Cycle to Plage Notre-Dame", "expect": "30 min shady path, mild hills.", "tip": "Last WC is at the start of trail.", "town": "Porquerolles", "emoji": "🚲", "duration": "30 min"},
        {"time": "09:30", "title": "Beach chill & swim", "expect": "Clear shallow water, pine scent.", "tip": "No food stalls—bring picnic.", "town": "Porquerolles", "emoji": "🏖️", "duration": "1h30", "priority": "must-see"},
        {"time": "11:00", "title": "Snorkeling at Notre-Dame", "expect": "Fish visible from shore, rocky outcrops.", "tip": "The eastern side of the beach has better visibility.", "town": "Porquerolles", "emoji": "🤿", "duration": "1 hour"},
        {"time": "12:00", "title": "Picnic under pine trees", "expect": "Natural shade, cicada soundtrack.", "tip": "There's a freshwater shower at the bike rack.", "town": "Porquerolles", "emoji": "🧺", "duration": "30 min"},
        {"time": "12:30", "title": "Bike back via Plage d'Argent", "expect": "Quick look at silver-sand cove.", "tip": "This one has a snack bar if hungry.", "town": "Porquerolles", "emoji": "🚲", "duration": "30 min"},
        {"time": "13:00", "title": "Lighthouse viewpoint", "expect": "Panoramic views of neighboring islands.", "tip": "Bikes not allowed on final path—lock them at the rack.", "town": "Porquerolles", "emoji": "🔭", "duration": "30 min", "priority": "recommended"},
        {"time": "13:30", "title": "Lunch in Porquerolles village", "expect": "Terrace cafés under eucalyptus.", "tip": "Order a pan-bagnat for authentic Riviera vibe.", "town": "Porquerolles", "emoji": "🍽️", "duration": "1 hour", "cost": "€15-25"},
        {"time": "14:30", "title": "Return bikes & ferry back", "expect": "Usually space on 15:00 boat.", "tip": "Line up 10 min early for shade seats.", "town": "Porquerolles → Hyères", "emoji": "⛴️", "duration": "1 hour"},
        {"time": "15:30", "title": "Drive to Toulon", "expect": "30 min coastal highway.", "tip": "If tired, crank AC and hydrate.", "town": "Hyères → Toulon", "emoji": "🚗", "duration": "30 min"},
        {"time": "16:00", "title": "Check-in & harbour walk", "expect": "Naval port, wide promenade.", "tip": "Buy nougat at market for road snacks home.", "town": "Toulon", "emoji": "🏨", "duration": "1 hour"},
        {"time": "17:00", "title": "Mount Faron cable car", "expect": "Panoramic ride up coastal mountain.", "tip": "Last car up is at 19:00 in summer.", "town": "Toulon", "emoji": "🚡", "duration": "1 hour", "cost": "€8", "priority": "must-see"},
        {"time": "18:00", "title": "Faron Zoo visit", "expect": "Small conservation zoo specializing in big cats.", "tip": "The Barbary macaques roam freely—don't feed them!", "town": "Toulon", "emoji": "🦁", "duration": "1 hour", "cost": "€10", "priority": "optional"},
        {"time": "19:00", "title": "Sunset at Mount Faron", "expect": "Golden light over Med, Navy ships below.", "tip": "The east-facing benches catch the light longest.", "town": "Toulon", "emoji": "🌅", "duration": "1 hour", "priority": "recommended"},
        {"time": "20:00", "title": "Dinner in Mourillon district", "expect": "Local neighborhood with authentic restaurants.", "tip": "Restaurant Le Chantilly has the best bouillabaisse.", "town": "Toulon", "emoji": "🍽️", "duration": "1h30", "cost": "€30-45", "reservation": true},
        {"time": "21:30", "title": "Final evening walk", "expect": "Historic harbor, illuminated forts.", "tip": "Perfect spot for night photos is by Carré du Port.", "town": "Toulon", "emoji": "🚶", "duration": "1 hour"}
      ]
    }
  ],
  "emergencyContacts": {
    "police": "17 or +33 4 93 62 17 17",
    "ambulance": "15 or 112",
    "tourist": "Office de Tourisme: +33 4 93 01 73 68"
  },
  "generalTips": [
    "Most shops close between 12:30-2:30pm for lunch break",
    "Credit cards are widely accepted, but carry some cash for small shops",
    "Always greet shopkeepers with 'Bonjour' when entering",
    "Water from public fountains marked 'eau potable' is safe to drink",
    "Many restaurants offer a fixed price 'menu du jour' which is often good value",
    "Be aware that topless sunbathing is common at many beaches",
    "Museum entries are often reduced or free on first Sunday of the month"
  ]
};
