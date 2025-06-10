
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
      "highlights": [
        {
          "title": "Cours Saleya Market",
          "description": "Nice's most vibrant market, alive since 1897. A feast for all senses with locals haggling over produce, flower vendors arranging bouquets, and the aroma of fresh herbs filling the air.",
          "image": "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80",
          "tips": [
            "Best socca is from Chez Pipo or Chez Theresa - crispy outside, creamy inside",
            "Buy olive oil from Alziari - family business since 1868",
            "Flower vendors offer free sprigs of lavender if you're polite",
            "Visit early Sunday for best selection and authentic local atmosphere"
          ],
          "address": "Cours Saleya, 06300 Nice, France",
          "mapsLink": "https://maps.app.goo.gl/YvQQs96gpEgUxcf18"
        },
        {
          "title": "Picasso Museum Antibes",
          "description": "Housed in the 17th-century Château Grimaldi where Picasso worked in 1946. The museum showcases his Mediterranean period with sea-inspired ceramics and paintings filled with mythological creatures.",
          "image": "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&q=80",
          "tips": [
            "Look for 'La Joie de Vivre' - Picasso's celebration of Mediterranean life",
            "The terrace offers the same sea view that inspired his work",
            "Photography allowed in most rooms - perfect for art-loving couples",
            "Combine with ramparts walk for romantic coastal views"
          ],
          "address": "Place Mariejol, 06600 Antibes, France",
          "mapsLink": "https://maps.app.goo.gl/7amknF1UXY2aMk4p8"
        },
        {
          "title": "Grasse Perfume Legacy",
          "description": "The world's perfume capital where jasmine, rose, and tuberose are transformed into liquid gold. The microclimate and skilled 'noses' have made Grasse legendary since the Renaissance.",
          "image": "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?auto=format&fit=crop&w=600&q=80",
          "tips": [
            "Visit during jasmine harvest (August) for the ultimate sensory experience",
            "Learn about the 'enfleurage' technique - extracting scent with animal fat",
            "Create your own perfume at Fragonard's workshop",
            "The gardens have over 400 fragrant plant species to discover together"
          ],
          "address": "20 Boulevard Fragonard, 06130 Grasse, France",
          "mapsLink": "https://maps.app.goo.gl/EecbByz99AhMExJP6"
        }
      ],
      "localSpecialties": [
        "Socca - Chickpea pancake, crispy and warm, perfect street food",
        "Pissaladière - Onion tart with anchovies and olives, Nice's pizza",
        "Fougasse - Herb-filled bread, ideal for picnics",
        "Pan Bagnat - 'Bathed bread' with tuna, vegetables, and olive oil",
        "Salade Niçoise - But NEVER with green beans (locals will judge!)",
        "Pastis - Anise-flavored aperitif, turns cloudy with water",
        "Local rosé wines from Bellet appellation"
      ],
      "shoppingRecommendations": [
        "Oliviera (Nice) - Artisanal olive oils and tapenades since 1822",
        "Confiserie Florian (Nice) - Candied flowers and traditional sweets",
        "Henri Auer (Nice) - Historic confectionery, try the fruits confits",
        "Local markets - Lavender sachets, Provençal fabrics, handmade soaps",
        "Antique shops in Saint-Paul-de-Vence for unique art pieces"
      ],
      "stops": [
        {"time": "08:00", "title": "Breakfast at Marché aux Fleurs Nice", "expect": "Historic flower & food market buzzing with locals. Vendors setting up stalls of mimosas, roses, and carnations while bakers arrange fresh pastries. The aroma of roasting coffee mixes with jasmine perfume.", "tip": "Try socca pancakes from Chez Theresa (yellow food truck) - order 'bien cuite' for extra crispy edges. Pair with a café noisette and watch flower vendors create bouquets.", "town": "Nice", "emoji": "🥐", "duration": "1 hour", "address": "Cours Saleya, 06300 Nice, France", "mapsLink": "https://maps.app.goo.gl/YvQQs96gpEgUxcf18"},
        
        {"time": "09:00", "title": "Drive to Antibes", "expect": "Scenic coastal route along Baie des Anges. Pass luxury hotels, Belle Époque villas, and glimpses of the Mediterranean through palm trees. Traffic is light on Sunday mornings.", "tip": "Take the coastal N98 instead of highway for better views. Stop at Villeneuve-Loubet beach for a quick photo of the Riviera coastline.", "town": "Nice → Antibes", "emoji": "🚗", "duration": "30 min"},
        
        {"time": "09:30", "title": "Antibes Old Town & Picasso Museum", "expect": "Medieval ramparts protecting narrow cobblestone streets. The Château Grimaldi houses Picasso's Mediterranean works in rooms where he actually painted. Sea views from ancient walls where Romans once walked.", "tip": "Start at Place du Safranier for the most photogenic entrance. The museum's terrace offers the same inspiring sea view Picasso had. Buy combined ticket with Fort Carré for savings.", "town": "Antibes", "emoji": "🎨", "duration": "1h15min", "cost": "€6", "priority": "must-see", "address": "Place Mariejol, 06600 Antibes, France", "mapsLink": "https://maps.app.goo.gl/7amknF1UXY2aMk4p8"},
        
        {"time": "10:45", "title": "Antibes Market Hall (Marché Provençal)", "expect": "Covered market bursting with local produce: Cavaillon melons, Niçois tomatoes, fresh herbs, and artisanal cheeses. Vendors offer tastings while explaining local specialties in animated French and broken English.", "tip": "Try different tapenade varieties - green olive with almonds is unique to this region. Buy picnic supplies: local goat cheese, fig jam, and crusty bread for later.", "town": "Antibes", "emoji": "🛍️", "duration": "45 min", "address": "12 Cours Masséna, 06600 Antibes, France", "mapsLink": "https://maps.app.goo.gl/dZXsGARF5A89UhF7A"},
        
        {"time": "11:30", "title": "Coffee break at Café de la Place", "expect": "Traditional French café with zinc bar, checkered tablecloths, and locals reading newspapers. Perfect for people-watching while savoring proper French coffee culture.", "tip": "Order 'café noisette' (espresso with milk foam) and pain au chocolat. Sit outside to watch French daily life unfold - it's like a live movie.", "town": "Antibes", "emoji": "☕", "duration": "30 min", "cost": "€4-6", "address": "Rue Aubernon, 06600 Antibes, France", "mapsLink": "https://maps.app.goo.gl/z5mzKzWALnMyWYY79"},
        
        {"time": "12:00", "title": "Fort Carré panoramic viewpoint", "expect": "16th-century star-shaped fortress offering 360° views: luxury yachts in Port Vauban marina, the Alps backdrop, and Antibes' red-tiled roofs. A photographer's paradise.", "tip": "The 20-minute uphill walk is worth every step. Best light for photos is around noon. Free entry to grounds, paid entry to fort interior (skip if short on time).", "town": "Antibes", "emoji": "🏰", "duration": "30 min", "priority": "recommended", "address": "Avenue du 11 Novembre, 06600 Antibes, France", "mapsLink": "https://maps.app.goo.gl/Z23DAGrYQmcN69BN7"},
        
        {"time": "12:30", "title": "Scenic drive to Grasse via perfume route", "expect": "Winding D2085 through olive groves and lavender fields. The landscape transforms from coastal palms to inland Mediterranean vegetation. Views of hilltop villages perched like eagles' nests.", "tip": "Stop in Vallauris for pottery shops if interested in ceramics. Fill up with fuel in Antibes - mountain stations are more expensive. Play French café music for ambiance.", "town": "Antibes → Grasse", "emoji": "🚗", "duration": "1 hour"},
        
        {"time": "13:30", "title": "Fragonard Perfume Museum & Workshop", "expect": "Historic perfume factory where the art of scent-making unfolds. Copper distillation vats, antique bottles, and the intoxicating aroma of jasmine, rose, and tuberose. Free guided tours reveal centuries-old secrets.", "tip": "Book the perfume creation workshop (€40) to blend your own signature scent as a couple. The museum shop offers exclusive fragrances not sold elsewhere.", "town": "Grasse", "emoji": "🌹", "duration": "45 min", "cost": "Free", "priority": "must-see", "address": "20 Boulevard Fragonard, 06130 Grasse, France", "mapsLink": "https://maps.app.goo.gl/EecbByz99AhMExJP6"},
        
        {"time": "14:15", "title": "Grasse Cathedral & Old Town exploration", "expect": "12th-century Notre-Dame du Puy cathedral with Rubens paintings, narrow medieval streets lined with perfume boutiques, and hidden squares where jasmine flowers dry in the sun.", "tip": "Visit Place aux Aires for the best Old Town atmosphere. Local perfumers offer free scent consultations - learn about top, middle, and base notes.", "town": "Grasse", "emoji": "⛪", "duration": "30 min", "address": "Place du Petit Puy, 06130 Grasse, France", "mapsLink": "https://maps.app.goo.gl/VQbPfKEzM4LGYQV47"},
        
        {"time": "14:45", "title": "International Perfume Museum gardens", "expect": "Aromatic paradise with over 400 fragrant plant species: Damascus roses, Grasse jasmine, tuberose, and rare herbs. Each plant labeled with its perfume properties and historical significance.", "tip": "Touch and smell everything - it's encouraged! The greenhouse contains tropical scent plants. Perfect for romantic photos among the flower beds.", "town": "Grasse", "emoji": "🌺", "duration": "30 min", "cost": "€4", "address": "2 Boulevard du Jeu de Ballon, 06130 Grasse, France", "mapsLink": "https://maps.app.goo.gl/P4RbJ7aVsjh7C4F66"},
        
        {"time": "15:15", "title": "Drive to Saint-Paul-de-Vence", "expect": "Spectacular mountain route through Alpes-Maritimes. Pass through Vence with its Marc Chagall chapel, then wind up to the fortified village. Olive groves and cypress trees frame ancient stone walls.", "tip": "Stop at roadside fruit stands for fresh figs and local honey. The approach to Saint-Paul offers the classic postcard view - have camera ready.", "town": "Grasse → Saint-Paul-de-Vence", "emoji": "🚗", "duration": "45 min"},
        
        {"time": "16:00", "title": "Check-in at Le Mas des Alizes & pool time", "expect": "Charming B&B with traditional Provençal architecture, lavender gardens, and a refreshing pool overlooking the valley. Cicadas provide the soundtrack to your romantic retreat.", "tip": "Request the room with terrace for sunset views. The pool area is perfect for afternoon relaxation before exploring the village. Fresh towels and local lavender soap provided.", "town": "Saint-Paul-de-Vence", "emoji": "🏨", "duration": "1h30", "address": "674 bis Rte du Pont de Pierre, 06480 La Colle-sur-Loup, France", "mapsLink": "https://maps.google.com/?q=Le+Mas+des+Alizes+B%26B+674+bis+Route+du+Pont+de+Pierre+06480+La+Colle-sur-Loup+France"},
        
        {"time": "17:30", "title": "Fondation Maeght modern art museum", "expect": "World-renowned modern art foundation set in pine forests. Outdoor sculptures by Miró, Giacometti works in a dedicated courtyard, and rotating exhibitions of 20th-century masters. Architecture and art in perfect harmony.", "tip": "The sculpture garden is magical at golden hour. Don't miss the Giacometti courtyard - it's like stepping into an art history book. Museum café has excellent views for a break.", "town": "Saint-Paul-de-Vence", "emoji": "🎭", "duration": "45 min", "cost": "€16", "priority": "must-see", "address": "623 Chem. des Gardettes, 06570 Saint-Paul-de-Vence, France", "mapsLink": "https://maps.app.goo.gl/xRwyjjeZqGkhLssv9"},
        
        {"time": "18:15", "title": "Medieval village walk & artist galleries", "expect": "Fortified 16th-century village where artists like Chagall, Picasso, and Matisse found inspiration. Narrow cobbled streets lined with galleries, boutiques, and hidden courtyards with fountains.", "tip": "Visit Marc Chagall's grave in the cemetery (simple white stone). Gallery owners are often artists themselves - engage in conversation. Buy original art as a romantic memento.", "town": "Saint-Paul-de-Vence", "emoji": "🚶", "duration": "1h15", "priority": "recommended", "address": "Place de la Grande Fontaine, 06570 Saint-Paul-de-Vence, France", "mapsLink": "https://maps.app.goo.gl/Ef9Foux36D3ytDzs5"},
        
        {"time": "19:30", "title": "Sunset apéro on medieval ramparts", "expect": "Golden hour transforms the valley below into a patchwork of vineyards and olive groves. Ancient stone walls provide the perfect perch for romantic toasts as church bells chime the hour.", "tip": "Order kir pêche (white wine with peach liqueur) - romantic and affordable. Café de la Place has the best rampart tables. Bring a light jacket as evening breeze picks up.", "town": "Saint-Paul-de-Vence", "emoji": "🥂", "duration": "1 hour", "cost": "€6-8", "address": "Ramparts, 06570 Saint-Paul-de-Vence, France", "mapsLink": "https://maps.app.goo.gl/HFZBefcQRERnwKML8"},
        
        {"time": "20:30", "title": "Romantic dinner at Restaurant Le Tilleul", "expect": "Intimate terrace dining under century-old linden trees. Traditional Provençal cuisine with modern touches: ratatouille, bouillabaisse, and local wines. Fairy lights create magical ambiance.", "tip": "Share the cheese course - local goat cheeses are exceptional. Ask sommelier for Bellet wine pairing. Reserve the corner table for most privacy and best views.", "town": "Saint-Paul-de-Vence", "emoji": "🍽️", "duration": "1h30", "cost": "€35-45", "reservation": true, "address": "Place du Jeu de Boules, 06570 Saint-Paul-de-Vence, France", "mapsLink": "https://maps.app.goo.gl/3C6WAFDDQQibjsd19"},
        
        {"time": "22:00", "title": "Nightcap at legendary La Colombe d'Or", "expect": "Historic inn where Picasso, Matisse, and Chagall paid for meals with artwork. Original masterpieces hang casually on walls while jazz music plays softly. Living art history.", "tip": "Sit at the bar to admire the Leger mural up close. Order a Marc de Provence (local brandy) for authentic experience. Even a simple drink lets you soak in incredible art atmosphere.", "town": "Saint-Paul-de-Vence", "emoji": "🥃", "duration": "1 hour", "cost": "€12-18", "address": "Place du Général de Gaulle, 06570 Saint-Paul-de-Vence, France", "mapsLink": "https://maps.app.goo.gl/E7NXkQbMdSEev7Se6"}
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
        "name": "La Bastide de Moustiers",
        "address": "Chemin de Quinson, 04360 Moustiers-Sainte-Marie, France",
        "mapsLink": "https://maps.app.goo.gl/vFkz8fBpmy6s6g1t7"
      },
      "highlights": [
        {
          "title": "Valensole Lavender Fields",
          "description": "Endless purple waves stretching to the horizon during peak bloom. The largest lavender producing region in France, where the air itself is perfumed and bees work tirelessly among the rows.",
          "image": "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=600&q=80",
          "tips": [
            "Best lighting for photos: early morning (8-10am) or late afternoon (6-8pm)",
            "Lavender is harvested in July - time your visit perfectly",
            "Buy essential oil directly from farmers for authentic quality",
            "Respect the crops - don't walk through the fields"
          ],
          "address": "Plateau de Valensole, 04210 Valensole, France",
          "mapsLink": "https://maps.app.goo.gl/ZkCYcdFUFGTeAS9N9"
        },
        {
          "title": "Moustiers-Sainte-Marie Star Legend",
          "description": "The mysterious golden star suspended between cliffs above the village. Legend says a Crusader knight hung it as thanks for safe return, though the current star dates to 1957.",
          "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
          "tips": [
            "Best viewpoint is from the village square looking up",
            "The star is 125cm wide and hangs on a 135m chain",
            "Original legend involves Blacas family from the Crusades",
            "Evening illumination creates magical atmosphere"
          ],
          "address": "Place de l'Église, 04360 Moustiers-Sainte-Marie, France",
          "mapsLink": "https://maps.app.goo.gl/vFkz8fBpmy6s6g1t7"
        }
      ],
      "localSpecialties": [
        "Faience pottery - Moustiers is famous for hand-painted ceramics since 1668",
        "Lavender honey - crystallized and creamy, perfect with goat cheese",
        "Agneau de Sisteron - local lamb with herbs de Provence",
        "Crottin de Banon - goat cheese wrapped in chestnut leaves",
        "Huile d'olive AOP Provence - cold-pressed from ancient trees",
        "Herbes de Provence - wild thyme, rosemary, and oregano blend",
        "Fruits confits from Apt - candied fruits, a Provençal tradition"
      ],
      "stops": [
        {"time": "08:30", "title": "Morning sunrise walk to Chapelle Saint-Charles", "expect": "Peaceful stone path through olive groves leading to a simple chapel with panoramic valley views. Morning mist often clings to distant mountains creating mystical atmosphere.", "tip": "Bring camera for golden hour lighting. The walk takes 20 minutes uphill but rewards with 360° views. Often you'll have the place entirely to yourselves.", "town": "Saint-Paul-de-Vence", "emoji": "🌄", "duration": "45 min", "address": "Chemin de Saint-Claire, 06570 Saint-Paul-de-Vence, France", "mapsLink": "https://maps.app.goo.gl/dNXTo4TGw458Gz5H6"},

        {"time": "09:15", "title": "Drive through Gorges du Loup to Fayence", "expect": "Spectacular mountain road carved through limestone cliffs. Dramatic waterfalls, medieval bridges, and hairpin turns through the Loup River valley. One of France's most scenic drives.", "tip": "Stop at Saut du Loup waterfall for photos. The road is narrow - take your time. Village of Gourdon offers stunning viewpoint if you have extra time.", "town": "Saint-Paul-de-Vence → Fayence", "emoji": "🚗", "duration": "1h15"},

        {"time": "10:30", "title": "Fayence traditional market & clock tower", "expect": "Authentic Provençal village market with local farmers selling seasonal produce. 19th-century clock tower offers panoramic views over the Pre-Alps and Esterel mountains.", "tip": "Monday is market day - perfect timing! Try local olives and tapenades. Climb the clock tower (€2) for best views. Public toilets are rare - use the café facilities.", "town": "Fayence", "emoji": "🕰️", "duration": "45 min", "address": "Place Léon Roux, 83440 Fayence, France", "mapsLink": "https://maps.app.goo.gl/mLVMw9JjfBmsUPVo7"},

        {"time": "11:15", "title": "Coffee at Place de l'Église with local pastries", "expect": "Quiet village square shaded by plane trees, with traditional fountain and café tables. Perfect spot to observe slow-paced Provençal life while savoring fresh croissants.", "tip": "Try 'café gourmand' - coffee with mini desserts. The boulangerie makes exceptional fougasse bread. Ask locals about hiking trails if you're interested in walking later.", "town": "Fayence", "emoji": "☕", "duration": "30 min", "address": "Place de l'Église, 83440 Fayence, France", "mapsLink": "https://maps.app.goo.gl/ANyDVknqHb5eHw8m9"},

        {"time": "11:45", "title": "Drive to Valensole via Route Napoléon", "expect": "Historic route taken by Napoleon in 1815, winding through Alpine foothills. Landscape transitions from Mediterranean to mountain vegetation, with glimpses of lavender fields ahead.", "tip": "Follow N85 signs for Route Napoléon. Fill up with fuel in Draguignan. The approach to Valensole reveals endless purple fields - have camera ready for first glimpse.", "town": "Fayence → Valensole", "emoji": "🚗", "duration": "1h15"},

        {"time": "13:00", "title": "Valensole lavender fields photography session", "expect": "Peak lavender season creates purple seas stretching to horizon. Rows of lavender plants buzz with bees while their perfume fills the warm air. Most iconic Provence landscape.", "tip": "Park at Plateau de Valensole for classic shots. Respect crops - don't walk through fields. Best light is when sun is lower. Bring hat and water - no shade available.", "town": "Valensole", "emoji": "💜", "duration": "1 hour", "priority": "must-see", "address": "Plateau de Valensole, 04210 Valensole, France", "mapsLink": "https://maps.app.goo.gl/ZkCYcdFUFGTeAS9N9"},

        {"time": "14:00", "title": "Lavender farm visit & essential oil demonstration", "expect": "Working lavender farm where you can see distillation process, learn about cultivation, and purchase pure essential oils directly from producers.", "tip": "Distillerie des 4 Vallées offers free tours. Buy lavender sachets for luggage - they last for years. Ask about difference between fine lavender and lavandin.", "town": "Valensole", "emoji": "🌿", "duration": "45 min", "cost": "Free", "address": "Route de Manosque, 04210 Valensole, France", "mapsLink": "https://maps.app.goo.gl/K8Hm9FQA9nU6eSGr9"},

        {"time": "14:45", "title": "Drive to Moustiers-Sainte-Marie", "expect": "Scenic route through Verdon Regional Park. Pass hilltop villages, olive groves, and limestone cliffs. Approach to Moustiers reveals dramatic cliff setting.", "tip": "Stop at Lac de Sainte-Croix viewpoint for turquoise lake photos. The final approach to Moustiers is spectacular - famous star becomes visible between cliffs.", "town": "Valensole → Moustiers", "emoji": "🚗", "duration": "45 min"},

        {"time": "15:30", "title": "Check-in & village exploration", "expect": "Medieval village built into cliff face, famous for faience pottery and mysterious suspended star. Narrow streets lined with ceramic workshops and mountain streams.", "tip": "Drop bags first, then explore on foot. Village is car-free in center. Get map from tourist office showing pottery workshops and hiking trails.", "town": "Moustiers-Sainte-Marie", "emoji": "🏨", "duration": "30 min", "address": "Chemin de Quinson, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/vFkz8fBpmy6s6g1t7"},

        {"time": "16:00", "title": "Faience pottery workshops & artisan visits", "expect": "Traditional pottery workshops where artisans hand-paint ceramics using techniques from 1668. Watch masters create intricate patterns on plates, vases, and tiles.", "tip": "Atelier Soleil offers demonstrations. Prices range €15-200 for authentic pieces. Cheaper items may be imports - look for 'Moustiers' signature. Buy early to ship home.", "town": "Moustiers-Sainte-Marie", "emoji": "🏺", "duration": "45 min", "address": "Rue de la Diane, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/KwcADB9QZfq73nbP8"},

        {"time": "16:45", "title": "Hike to Notre-Dame de Beauvoir chapel", "expect": "Steep but rewarding 20-minute climb to 12th-century chapel built into cliff face. Panoramic views over village, Verdon valley, and surrounding mountains reward the effort.", "tip": "Wear good shoes - path is rocky. Carry water - climb is steep. Chapel contains ex-votos from grateful pilgrims. Best views are from chapel terrace, not interior.", "town": "Moustiers-Sainte-Marie", "emoji": "⛪", "duration": "1h15", "priority": "must-see", "address": "Chemin de Notre-Dame de Beauvoir, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/cPqEqZidwG9wEb8G9"},

        {"time": "18:00", "title": "Pre-dinner drinks with Bastille Day preparations", "expect": "Village coming alive with tricolor decorations, locals setting up for evening festivities. Café terraces fill with families and tourists anticipating national holiday celebrations.", "tip": "Try pastis - traditional French aperitif that turns cloudy with water. Watch village preparations for fireworks. Ask locals about Bastille Day traditions in small villages.", "town": "Moustiers-Sainte-Marie", "emoji": "🇫🇷", "duration": "1 hour", "cost": "€6-10", "address": "Place de l'Église, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/vFkz8fBpmy6s6g1t7"},

        {"time": "19:00", "title": "Bastille Day feast - traditional French dinner", "expect": "Special holiday menu featuring regional specialties: Sisteron lamb, ratatouille, local cheeses, and wines. Restaurant terraces decorated with French flags and lights.", "tip": "Restaurants offer special Bastille Day menus - book ahead. Try the 'menu du 14 juillet' for authentic celebration meal. Share dishes to taste more specialties.", "town": "Moustiers-Sainte-Marie", "emoji": "🍽️", "duration": "1h30", "cost": "€35-45", "reservation": true, "address": "Place de l'Église, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/vFkz8fBpmy6s6g1t7"},

        {"time": "20:30", "title": "Join village Bastille Day celebrations", "expect": "Authentic small-town French celebration with local band, traditional dancing, and community spirit. Families gather in square while children run around with sparklers.", "tip": "Participate! Locals love sharing their national holiday with visitors. Learn some French phrases of celebration. Dance the traditional folk dances if invited.", "town": "Moustiers-Sainte-Marie", "emoji": "🎊", "duration": "1 hour", "address": "Place de la Mairie, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/vFkz8fBpmy6s6g1t7"},

        {"time": "21:30", "title": "Bastille Day fireworks over the cliffs", "expect": "Spectacular fireworks display set against dramatic cliff backdrop. Small village fireworks have intimate charm while surrounding mountains amplify the sound.", "tip": "Best viewing from village square or church steps. Bring chairs if provided by hotel. Small villages often have more personal, charming displays than big cities.", "town": "Moustiers-Sainte-Marie", "emoji": "🎆", "duration": "30 min", "address": "Place de l'Église, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/vFkz8fBpmy6s6g1t7"},

        {"time": "22:00", "title": "After-celebration drinks & live music", "expect": "Village continuing celebration with live music, dancing, and late-night café service. Perfect opportunity to mingle with locals and experience authentic French joie de vivre.", "tip": "Café des Arts usually has live music on Bastille Day. Try digestif (brandy) to end the celebration properly. Some cafés stay open until midnight on holidays.", "town": "Moustiers-Sainte-Marie", "emoji": "🎵", "duration": "1 hour+", "cost": "€5-12", "address": "Rue de la Diane, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/KwcADB9QZfq73nbP8"}
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
        "mapsLink": "https://maps.app.goo.gl/R5KJ6mosfiEqcXW9A"
      },
      "highlights": [
        {
          "title": "Cotignac Troglodyte Dwellings",
          "description": "Ancient cave homes carved directly into 80-meter limestone cliffs. Some still inhabited, others turned into wine cellars. A unique blend of natural architecture and human ingenuity spanning centuries.",
          "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
          "tips": [
            "Follow the yellow trail markers for complete circuit",
            "Some caves are private property - respect signs",
            "Best photography in late afternoon when cliffs glow golden",
            "Visit the 16th-century Notre-Dame de Grâces chapel in the cliff"
          ],
          "address": "Chemin des Falaises, 83570 Cotignac, France",
          "mapsLink": "https://maps.app.goo.gl/YXRJHZZnewXmUuMq9"
        },
        {
          "title": "Hyères Villa Noailles",
          "description": "Modernist masterpiece from 1923, designed for art patrons Charles and Marie-Laure de Noailles. This cubic villa revolutionized architecture and hosted artists like Picasso, Cocteau, and Man Ray.",
          "image": "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&q=80",
          "tips": [
            "Free entry - one of France's best architectural bargains",
            "The roof terrace offers 360° views over Hyères and coast",
            "Indoor swimming pool was revolutionary for 1920s",
            "Photography exhibitions often feature in the villa"
          ],
          "address": "Montée Noailles, 83400 Hyères, France",
          "mapsLink": "https://maps.app.goo.gl/BvQfwsNBsUnzW1sb9"
        }
      ],
      "localSpecialties": [
        "Côtes de Provence rosé wine - crisp, dry, perfect for warm weather",
        "Tapenade - olive paste with capers, anchovies, and herbs",
        "Bouillabaisse Toulonnaise - seafood stew with rouille sauce",
        "Fougasse aux grattons - bread with crispy pork pieces",
        "Calissons d'Aix - diamond-shaped marzipan sweets",
        "Bandol wines - robust reds from Mourvèdre grapes",
        "Fresh sea salt from Giens peninsula salt flats"
      ],
      "stops": [
        {"time": "08:00", "title": "Farewell breakfast with mountain views", "expect": "Final morning in the mountains with fresh pastries, local honey, and coffee while gazing at the mysterious suspended star one last time.", "tip": "Buy lavender honey from local producer as souvenir. Take final photos of the star - morning light makes it gleam. Check out by 9am to avoid rush.", "town": "Moustiers-Sainte-Marie", "emoji": "🥐", "duration": "45 min", "address": "Place de l'Église, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/vFkz8fBpmy6s6g1t7"},

        {"time": "08:45", "title": "Final visit to pottery ateliers & souvenir shopping", "expect": "Last chance to purchase authentic Moustiers faience. Artisans working on morning pieces, perfect opportunity to see painting techniques and ask questions.", "tip": "Buy small items for easy transport. Ask about shipping for larger pieces. Authentic pieces are signed by artist. Avoid obviously mass-produced items.", "town": "Moustiers-Sainte-Marie", "emoji": "🛍️", "duration": "30 min", "address": "Rue de la Diane, 04360 Moustiers-Sainte-Marie, France", "mapsLink": "https://maps.app.goo.gl/KwcADB9QZfq73nbP8"},

        {"time": "09:15", "title": "Drive to Cotignac through Verdon countryside", "expect": "Scenic route through oak forests and limestone plateaus. Pass Aups (truffle capital) and traditional Provençal villages perched on hillsides.", "tip": "Take D9 through Aups for most scenic route. Stop at viewpoints overlooking Verdon valley. Road winds significantly - take motion sickness precautions if needed.", "town": "Moustiers → Cotignac", "emoji": "🚗", "duration": "1h15"},

        {"time": "10:30", "title": "Cotignac cliff dwellings exploration", "expect": "Fascinating troglodyte village carved into 80m limestone cliffs. Ancient caves turned into homes, wine cellars, and chapels. Some still inhabited today.", "tip": "Follow yellow hiking trail for complete circuit (1 hour). Bring water and hat - little shade available. Some caves are private - respect property signs.", "town": "Cotignac", "emoji": "🏠", "duration": "1 hour", "priority": "must-see", "address": "Chemin des Falaises, 83570 Cotignac, France", "mapsLink": "https://maps.app.goo.gl/YXRJHZZnewXmUuMq9"},

        {"time": "11:30", "title": "Village market at Cours Gambetta", "expect": "Tuesday market with local farmers selling seasonal produce under plane trees. Fountain provides cooling sound while vendors offer tastings of olives, cheeses, and honey.", "tip": "Try local goat cheese with lavender honey. Buy picnic supplies for later. Market ends at noon - arrive early for best selection.", "town": "Cotignac", "emoji": "🛍️", "duration": "30 min", "address": "Cours Gambetta, 83570 Cotignac, France", "mapsLink": "https://maps.app.goo.gl/64ADz3F8JBwcT2CP7"},

        {"time": "12:00", "title": "Wine tasting at Château Margüi", "expect": "Family estate owned by film director Steven Spielberg. Organic wines produced in stunning valley setting. Tasting room offers several vintages including exclusive cuvées.", "tip": "Book ahead for cellar tour (€15). Their rosé is exceptional for summer drinking. Buy bottles for beach picnics later in trip.", "town": "Châteauvert", "emoji": "🍷", "duration": "1 hour", "cost": "€12", "priority": "recommended", "address": "Route de Cabasse, 83670 Châteauvert, France", "mapsLink": "https://maps.app.goo.gl/aK3Msz5PAQfuo6z28"},

        {"time": "13:00", "title": "Lunch at La Petite Fontaine with cliff views", "expect": "Charming restaurant terrace facing the famous cliffs. Traditional Provençal cuisine featuring local ingredients: goat cheese salads, grilled vegetables, and regional wines.", "tip": "Order the 'menu découverte' to try multiple local specialties. Ask for table with cliff view. Service is leisurely - embrace the slow pace.", "town": "Cotignac", "emoji": "🍽️", "duration": "1h15", "cost": "€18-25", "address": "Cours Gambetta, 83570 Cotignac, France", "mapsLink": "https://maps.app.goo.gl/64ADz3F8JBwcT2CP7"},

        {"time": "14:15", "title": "Drive to Hyères via wine country", "expect": "Route through famous Côtes de Provence wine region. Vineyards stretch between medieval villages while Mediterranean vegetation becomes more prominent.", "tip": "Stop in Lorgues for additional wine tasting if interested. A8 highway is faster but D roads are more scenic. Air conditioning recommended - temperatures rising.", "town": "Cotignac → Hyères", "emoji": "🚗", "duration": "1h15"},

        {"time": "15:30", "title": "Check-in & first glimpse of Mediterranean", "expect": "Hotel near coast with sea breezes and palm trees. First taste of true Côte d'Azur atmosphere after mountain days.", "tip": "Request room with sea view if available. Pool area perfect for cooling off. Beach is 10 minutes drive - perfect for afternoon swimming.", "town": "Hyères", "emoji": "🏨", "duration": "30 min", "address": "153 Avenue de Hyères, 83250 La Londe-les-Maures, France", "mapsLink": "https://maps.app.goo.gl/R5KJ6mosfiEqcXW9A"},

        {"time": "16:00", "title": "L'Almanarre Beach first swim", "expect": "Wide sandy beach with shallow, warm Mediterranean water. Popular with windsurfers due to consistent breezes. Natural environment with salt marshes behind beach.", "tip": "Northern section quieter for swimming. Free parking after 5pm in summer. Natural freshwater showers available. Perfect for romantic sunset later.", "town": "Hyères", "emoji": "🏖️", "duration": "1h15", "priority": "must-see", "address": "Plage de l'Almanarre, Route de l'Almanarre, 83400 Hyères, France", "mapsLink": "https://maps.app.goo.gl/LF3xTiSxjg7VtWTL7"},

        {"time": "17:15", "title": "Giens Peninsula salt flats walk", "expect": "Unique ecosystem where sea salt is harvested traditionally. Pink-tinged water, white salt mountains, and often flamingos feeding in shallow lagoons.", "tip": "Bring camera for unique landscape photos. Sometimes flamingos present - bring binoculars if bird lovers. Walking paths clearly marked. Sunset timing is perfect.", "town": "Hyères", "emoji": "🦩", "duration": "45 min", "priority": "recommended", "address": "Presqu'île de Giens, 83400 Hyères, France", "mapsLink": "https://maps.app.goo.gl/ykVR3ZDkQUfZtswS9"},

        {"time": "18:00", "title": "Villa Noailles architectural marvel", "expect": "Revolutionary 1920s modernist villa with cubic design, indoor pool, and roof terrace. Free entry to explore rooms where avant-garde artists once gathered.", "tip": "Don't miss the roof terrace with 360° views. Photography exhibitions change regularly. Villa represents birth of modern architecture. Amazing sunset spot.", "town": "Hyères", "emoji": "🏛️", "duration": "45 min", "cost": "Free", "priority": "must-see", "address": "Montée Noailles, 83400 Hyères, France", "mapsLink": "https://maps.app.goo.gl/BvQfwsNBsUnzW1sb9"},

        {"time": "18:45", "title": "Old Town Hyères medieval streets", "expect": "Ancient hilltop village with 12th-century ruins, narrow streets, and panoramic terraces. Less touristy than coastal areas, authentic Provençal atmosphere.", "tip": "Follow heritage trail markers for complete circuit. Église Saint-Louis has beautiful medieval architecture. Many shops close early - browse now for evening purchases.", "town": "Hyères", "emoji": "🏘️", "duration": "45 min", "address": "Place Massillon, 83400 Hyères, France", "mapsLink": "https://maps.app.goo.gl/PpZYUYGdV9pzAKxQ7"},

        {"time": "19:30", "title": "Sunset apéro at Port Saint-Pierre", "expect": "Working fishing port with colorful boats, fresh fish market, and waterfront cafés. Perfect spot for evening drinks while watching boats return from day's fishing.", "tip": "Order local rosé wine and fresh oysters if available. Watch fishermen preparing nets for next day. Port becomes romantic as lights reflect on water.", "town": "Hyères", "emoji": "🌅", "duration": "1 hour", "cost": "€8-15", "address": "Port Saint-Pierre, 83400 Hyères, France", "mapsLink": "https://maps.app.goo.gl/easBVr84TU1PgUFn6"},

        {"time": "20:30", "title": "Seafood dinner at Le Poisson Rouge", "expect": "Fresh catch restaurant with terrace overlooking harbor. Daily menu depends on morning's fish market. Traditional bouillabaisse and grilled fish specialties.", "tip": "Ask for catch of the day recommendation. Share bouillabaisse if offered - it's a meal for two. Don't miss the rouille sauce with bread.", "town": "Hyères", "emoji": "🦞", "duration": "1h30", "cost": "€35-50", "reservation": true, "address": "Port Saint-Pierre, 83400 Hyères, France", "mapsLink": "https://maps.app.goo.gl/easBVr84TU1PgUFn6"},

        {"time": "22:00", "title": "Evening stroll along harbor lights", "expect": "Romantic harbor walk with boats gently bobbing, restaurant lights reflecting on water, and couples enjoying the warm evening breeze.", "tip": "Perfect for romantic photos with harbor lights. Ice cream vendors often present in summer. Walk to end of pier for best harbor views.", "town": "Hyères", "emoji": "💕", "duration": "45 min", "address": "Port Saint-Pierre, 83400 Hyères, France", "mapsLink": "https://maps.app.goo.gl/easBVr84TU1PgUFn6"}
      ]
    },
    {
      "date": "2025-07-16",
      "title": "Hyères → Porquerolles → Toulon",
      "concept": "Island bikes, turquoise bays, mellow coastal finale.",
      "drivingDistance": "~40km",
      "weather": "Sunny, 29°C",
      "emoji": "🏝️",
      "highlights": [
        {
          "title": "Porquerolles National Park Island",
          "description": "Largest of the Golden Islands, protected national park with pristine beaches, pine forests, and crystal-clear waters. Car-free paradise perfect for cycling and swimming.",
          "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
          "tips": [
            "Rent bikes at the port - island is perfect for cycling",
            "Plage Notre-Dame ranked among world's most beautiful beaches",
            "Bring picnic supplies - island restaurants are expensive",
            "Last ferry back is at 18:30 in summer - don't miss it!"
          ],
          "address": "Port de Porquerolles, 83400 Porquerolles, France",
          "mapsLink": "https://maps.app.goo.gl/Rrbcj1QpkWNfadwB6"
        },
        {
          "title": "Mont Faron Cable Car",
          "description": "Spectacular cable car ride to 584m summit offering panoramic views over Toulon harbor, French Riviera coast, and surrounding mountains. Historic military significance and natural beauty combined.",
          "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
          "tips": [
            "Best views in late afternoon when light is golden",
            "Zoo at summit specializes in big cat conservation",
            "Memorial to Allied landings in Provence during WWII",
            "Restaurant at top perfect for romantic sunset dinner"
          ],
          "address": "Téléphérique du Mont Faron, Rue Raoul Henry, 83200 Toulon, France",
          "mapsLink": "https://maps.app.goo.gl/pdYzboHmyzZBh8nz5"
        }
      ],
      "localSpecialties": [
        "Bouillabaisse - Marseille's gift to the world, with rouille and croutons",
        "Pastis de Marseille - anise aperitif, traditional Provence drink",
        "Bourride - white fish stew with aioli sauce",
        "Anchoiade - anchovy paste served with raw vegetables",
        "Chichi frégi - fried doughnut spiral, popular beach snack",
        "Navettes - orange-flavored boat-shaped cookies from Marseille",
        "Côtes de Provence wines - especially crisp rosés"
      ],
      "stops": [
        {"time": "07:30", "title": "Early breakfast & ferry preparation", "expect": "Quick hotel breakfast before adventure day. Pack beach essentials: swimwear, sunscreen, water, and light snacks for island picnic.", "tip": "Bring waterproof bag for electronics. Ferry can be choppy - take motion sickness precautions if sensitive. Wear comfortable shoes for cycling.", "town": "Hyères", "emoji": "🥐", "duration": "30 min", "address": "153 Avenue de Hyères, 83250 La Londe-les-Maures, France", "mapsLink": "https://maps.app.goo.gl/R5KJ6mosfiEqcXW9A"},

        {"time": "08:00", "title": "Drive to Tour Fondue ferry terminal", "expect": "Short drive to Giens peninsula ferry departure point. Modern terminal with ticket office, parking, and small café. Views of Porquerolles island ahead.", "tip": "Arrive early for parking - spaces fill quickly in summer. Buy return tickets immediately. Check last ferry time - usually 18:30 in summer. Leave car windows slightly open.", "town": "Hyères", "emoji": "🚗", "duration": "20 min", "address": "Tour Fondue, Giens, 83400 Hyères, France", "mapsLink": "https://maps.app.goo.gl/on9w3Y1tzzPNRjDr9"},

        {"time": "08:20", "title": "Ferry crossing to Porquerolles paradise", "expect": "Scenic 20-minute ferry ride across turquoise Mediterranean waters. Island grows larger revealing white beaches, green pine forests, and charming port village.", "tip": "Sit on right side (starboard) for best island approach views. Sea can be choppy - sit low in boat if prone to seasickness. Have camera ready for arrival photos.", "town": "Hyères → Porquerolles", "emoji": "⛴️", "duration": "20 min", "cost": "€21 round-trip", "priority": "must-see", "address": "Tour Fondue, Giens, 83400 Hyères, France", "mapsLink": "https://maps.app.goo.gl/on9w3Y1tzzPNRjDr9"},

        {"time": "08:40", "title": "Bike rental at port & island orientation", "expect": "Charming port village with bike rental shops, cafés, and tourist information. Car-free environment with sandy paths leading to beaches and forests.", "tip": "Rent bikes immediately - popular beaches require 30-45 minute cycling. Get free island map showing bike paths. Check bike brakes and seat height before leaving.", "town": "Porquerolles", "emoji": "🚲", "duration": "20 min", "cost": "€18/day", "address": "Place d'Armes, 83400 Porquerolles, France", "mapsLink": "https://maps.app.goo.gl/Rrbcj1QpkWNfadwB6"},

        {"time": "09:00", "title": "Fort Sainte-Agathe historic exploration", "expect": "16th-century fortress protecting island harbor. Maritime museum inside with naval artifacts, old maps, and exhibits on island history. Panoramic views from ramparts.", "tip": "Climb to fort's roof terrace for 360° views. Museum is small but interesting for history buffs. Perfect spot for port photography before heading to beaches.", "town": "Porquerolles", "emoji": "🏰", "duration": "30 min", "cost": "€3", "priority": "optional", "address": "Fort Sainte-Agathe, 83400 Porquerolles, France", "mapsLink": "https://maps.app.goo.gl/xUQsVDg96npY46Pc7"},

        {"time": "09:30", "title": "Cycle to world-famous Plage Notre-Dame", "expect": "Scenic 30-minute bike ride through pine forests and maquis vegetation. Gradually climb then descend to reveal one of Mediterranean's most beautiful beaches.", "tip": "Follow clear bike path signs - routes well marked. Bring plenty of water - no facilities until beach. Last public toilets are at village before departing.", "town": "Porquerolles", "emoji": "🚲", "duration": "30 min", "address": "Chemin de la Plage Notre-Dame, 83400 Porquerolles, France", "mapsLink": "https://maps.app.goo.gl/RZnSK1Z6xkDwaxzW6"},

        {"time": "10:00", "title": "Paradise beach swimming & snorkeling", "expect": "Pristine white sand beach with crystal-clear turquoise water. Pine trees provide natural shade while gentle waves lap the shore. Often ranked among world's most beautiful beaches.", "tip": "Eastern end of beach is quieter for romantic moments. Water is shallow and perfect for swimming. Snorkeling gear reveals Mediterranean fish near rocks.", "town": "Porquerolles", "emoji": "🏖️", "duration": "2 hours", "priority": "must-see", "address": "Plage Notre Dame, 83400 Porquerolles, France", "mapsLink": "https://maps.app.goo.gl/RZnSK1Z6xkDwaxzW6"},

        {"time": "12:00", "title": "Romantic beach picnic under pine trees", "expect": "Natural pine forest shade provides perfect picnic spot. Gentle sea breeze, cicada songs, and stunning beach views create magical Mediterranean moment.", "tip": "Find spot with sea view but some shade. Freshwater shower available at bike parking area. Perfect time for romantic photos with pristine beach background.", "town": "Porquerolles", "emoji": "🧺", "duration": "1 hour", "address": "Plage Notre Dame, 83400 Porquerolles, France", "mapsLink": "https://maps.app.goo.gl/RZnSK1Z6xkDwaxzW6"},

        {"time": "13:00", "title": "Explore Plage d'Argent & lighthouse route", "expect": "Cycle to second beautiful beach with different character - more rocky, wilder setting. Continue to island's lighthouse for panoramic views over neighboring islands.", "tip": "Plage d'Argent has small beach bar if need refreshments. Lighthouse requires 10-minute walk from bike parking. Views include Port-Cros and Le Levant islands.", "town": "Porquerolles", "emoji": "🔭", "duration": "1h15", "priority": "recommended", "address": "Phare de Porquerolles, 83400 Porquerolles, France", "mapsLink": "https://maps.app.goo.gl/ZpF7utn3CBgFAyxr6"},

        {"time": "14:15", "title": "Island lunch at village restaurant", "expect": "Return to port village for late lunch at terrace restaurant. Fresh seafood, salads, and cold rosé wine while planning afternoon activities.", "tip": "Le Pescador offers good value set menus. Service is relaxed island-style - don't rush. Try local fish with ratatouille for authentic Provençal experience.", "town": "Porquerolles", "emoji": "🍽️", "duration": "1h15", "cost": "€25-35", "address": "Place d'Armes, 83400 Porquerolles, France", "mapsLink": "https://maps.app.goo.gl/Rrbcj1QpkWNfadwB6"},

        {"time": "15:30", "title": "Final beach time or village exploration", "expect": "Choose between returning to beach for more swimming or exploring village shops and galleries. Island life moves slowly - perfect for relaxation.", "tip": "Village has small boutiques selling local crafts. If returning to beach, remember ferry departure time. Return bikes 30 minutes before ferry departure.", "town": "Porquerolles", "emoji": "🌴", "duration": "1h15", "address": "Place d'Armes, 83400 Porquerolles, France", "mapsLink": "https://maps.app.goo.gl/Rrbcj1QpkWNfadwB6"},

        {"time": "16:45", "title": "Return bikes & catch ferry to mainland", "expect": "Return bikes and prepare for ferry departure. Last chance for island photos and ice cream before leaving paradise behind.", "tip": "Return bikes early to avoid queues. Buy return ferry tickets if not already purchased. Sit on left side of ferry for coastal views during return journey.", "town": "Porquerolles → Hyères", "emoji": "⛴️", "duration": "45 min", "address": "Port de Porquerolles, 83400 Porquerolles, France", "mapsLink": "https://maps.app.goo.gl/Rrbcj1QpkWNfadwB6"},

        {"time": "17:30", "title": "Drive to Toulon harbor city", "expect": "Short coastal drive to France's major naval port. Landscape changes from islands and beaches to urban harbor setting with impressive military heritage.", "tip": "Follow signs to 'Centre Ville' for harbor area. Parking can be challenging - use paid lots near harbor. Toulon is working port - very different atmosphere from resort towns.", "town": "Hyères → Toulon", "emoji": "🚗", "duration": "30 min"},

        {"time": "18:00", "title": "Toulon harbor walk & naval history", "expect": "France's principal naval base with impressive military vessels, modern harbor facilities, and maritime museums. Wide waterfront promenade perfect for evening strolls.", "tip": "Naval Museum showcases French maritime history. Free to walk along harbor and observe naval vessels. Evening light beautiful for photography of ships and harbor.", "town": "Toulon", "emoji": "⚓", "duration": "45 min", "address": "Quai de la Sinse, 83000 Toulon, France", "mapsLink": "https://maps.app.goo.gl/wA4jqCT1sH7wFoTUA"},

        {"time": "18:45", "title": "Mount Faron cable car adventure", "expect": "Spectacular cable car ride climbing 584m above Toulon harbor. Panoramic views over entire Côte d'Azur, surrounding mountains, and naval installations below.", "tip": "Last cable car up usually 19:00 in summer. Views are stunning in golden hour. Restaurant at summit if want dinner with a view. Return trip included in ticket.", "town": "Toulon", "emoji": "🚡", "duration": "1h15", "cost": "€9", "priority": "must-see", "address": "Téléphérique du Mont Faron, Rue Raoul Henry, 83200 Toulon, France", "mapsLink": "https://maps.app.goo.gl/pdYzboHmyzZBh8nz5"},

        {"time": "20:00", "title": "Sunset dinner at Le Mourillon district", "expect": "Trendy seaside district with beach restaurants, modern apartments, and lively evening atmosphere. Popular with young locals and perfect for final romantic dinner.", "tip": "Restaurant L'Aromatic offers excellent seafood with sea views. Book terrace table for sunset views. Le Mourillon beach nearby for after-dinner walk.", "town": "Toulon", "emoji": "🌅", "duration": "1h30", "cost": "€40-55", "reservation": true, "address": "Le Mourillon, 83000 Toulon, France", "mapsLink": "https://maps.app.goo.gl/r5jPnNSovvVvGbDn6"},

        {"time": "21:30", "title": "Final romantic harbor walk", "expect": "Evening stroll along illuminated harbor with naval vessels lit up like floating cities. Perfect end to coastal adventure with gentle sea breeze and twinkling lights.", "tip": "Harbor lights create romantic atmosphere for final trip photos. Small bars near Carré du Port open late for nightcap. Perfect spot to reflect on amazing journey.", "town": "Toulon", "emoji": "💫", "duration": "1 hour", "address": "Carré du Port, 83000 Toulon, France", "mapsLink": "https://maps.app.goo.gl/BiP4hCTR6zvZRYXW9"}
      ]
    }
  ],
  "emergencyContacts": {
    "police": "17 or +33 4 93 62 17 17",
    "ambulance": "15 or 112",
    "tourist": "Office de Tourisme: +33 4 93 01 73 68",
    "pharmacies": "3237 (French pharmacy finder)",
    "roadside": "0800 05 05 24 (free roadside assistance)"
  },
  "generalTips": [
    "Most shops close between 12:30-2:30pm for lunch break - plan accordingly",
    "Credit cards widely accepted, but carry €50-100 cash for small vendors and tips",
    "Always greet with 'Bonjour/Bonsoir' when entering shops - it's considered rude not to",
    "Water from public fountains marked 'eau potable' is safe and free to drink",
    "Many restaurants offer 'menu du jour' (daily set menu) which is often excellent value",
    "Topless sunbathing is common and accepted at most beaches - don't be surprised",
    "Museum entries often reduced/free first Sunday of month - check before paying",
    "Parking meters often accept only coins - keep €1 and €2 coins handy",
    "French drivers can be aggressive - defensive driving recommended on mountain roads",
    "Restaurants typically serve dinner from 19:30 onwards - earlier may find them closed",
    "Tipping 5-10% is appreciated but not mandatory - round up bills or leave small change",
    "Learn basic French phrases - locals appreciate the effort and are more helpful"
  ],
  "culturalInsights": {
    "artHistory": "This region inspired Impressionist and Post-Impressionist masters. Picasso's Mediterranean period, Matisse's color experiments, and Chagall's dreamlike works all emerged from these landscapes.",
    "perfumeHeritage": "Grasse became perfume capital due to Renaissance glove-making industry. Gloves were scented to mask leather odors, eventually becoming more valuable than the gloves themselves.",
    "culinaryTradition": "Provençal cuisine reflects Mediterranean influences: olive oil (not butter), fresh herbs, garlic, tomatoes, and seafood. Romans introduced wine-making 2000 years ago.",
    "languageNotes": "Many locals speak Provençal (Occitan) alongside French. Street names often appear in both languages. 'Mas' means farmhouse, 'Bastide' means country house."
  },
  "packingEssentials": [
    "Comfortable walking shoes for cobblestone streets and hiking",
    "Swimwear and beach towel for multiple beach days",
    "Light layers - evenings can be cool even in summer",
    "Sun hat and high-SPF sunscreen - Mediterranean sun is intense",
    "Comfortable day pack for hiking and beach supplies",
    "Camera with extra batteries/memory cards - endless photo opportunities",
    "Light rain jacket - afternoon storms possible in mountains",
    "Dressier outfit for romantic dinners and nice restaurants"
  ]
};
