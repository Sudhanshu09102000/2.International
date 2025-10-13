// Mock test (generated from the provided international-current-affairs subtitle notes)
// total questions generated from the notes
const totalQuestions = 60;
let currentQuestion = 1;
const answers = {};
let totalSeconds = 0;

const questions = {
  1: {
    text: "Where was the 28th session of the UN Forum on Forests held?",
    options: ["Geneva", "New York", "Paris", "Vienna"],
    correct: "2"
  },
  2: {
    text: "Which country unveiled the CR450 prototype — a high-speed train designed for up to 450 km/h?",
    options: ["Japan", "China", "France", "Germany"],
    correct: "2"
  },
  3: {
    text: "Which city was described in the notes as the world's most polluted city (recent listing)?",
    options: ["Beijing", "Delhi", "Hanoi", "Dhaka"],
    correct: "3"
  },
  4: {
    text: "Which country launched a national crypto-currency tourism payment system allowing tourists to pay in cryptocurrencies?",
    options: ["Bhutan", "Maldives", "Estonia", "Switzerland"],
    correct: "1"
  },
  5: {
    text: "What is the national sport of Bhutan (mentioned in your notes)?",
    options: ["Football", "Archery", "Cricket", "Taekwondo"],
    correct: "2"
  },
  6: {
    text: "What is the capital of Bhutan?",
    options: ["Thimphu", "Kathmandu", "Dhaka", "Paro"],
    correct: "1"
  },
  7: {
    text: "What is the currency of Bhutan as listed in the notes?",
    options: ["Rupee", "Ngultrum", "Bhutan Dollar", "Ngulak"],
    correct: "2"
  },
  8: {
    text: "Which Indian states share a border with Bhutan (choose the set that includes only states mentioned in the notes)?",
    options: ["West Bengal, Sikkim, Arunachal Pradesh, Assam", "West Bengal, Bihar, Sikkim, Manipur", "Sikkim, Odisha, Assam, Tripura", "Arunachal, Meghalaya, Jharkhand, Assam"],
    correct: "1"
  },
  9: {
    text: "Which major international organisation did Donald Trump withdraw the US from (as noted in the subtitles)?",
    options: ["World Bank", "UNICEF", "WHO", "WTO"],
    correct: "3"
  },
  10: {
    text: "Where (city) was the Paris Climate Agreement (COP21) held that set the target of keeping warming below 2°C?",
    options: ["Paris", "Rome", "Madrid", "Copenhagen"],
    correct: "1"
  },
  11: {
    text: "The Indus Water Treaty (1960) was mediated by which institution according to the notes?",
    options: ["United Nations", "World Bank", "International Court of Justice", "Commonwealth Secretariat"],
    correct: "2"
  },
  12: {
    text: "Which country suspended bilateral deals including the Shimla Agreement after India suspended the Indus Water Treaty (as said in the notes)?",
    options: ["China", "Pakistan", "Bangladesh", "Nepal"],
    correct: "2"
  },
  13: {
    text: "India and Nepal signed an MoU in which sector (WASH) as mentioned in the notes?",
    options: ["Water, Sanitation and Hygiene", "Women, Arts and Social Help", "Welfare, Agriculture and Social Housing", "Water, Air and Soil Hygiene"],
    correct: "1"
  },
  14: {
    text: "Where was the 55th annual meeting of the World Economic Forum (WEF 2025) held?",
    options: ["Geneva", "Davos", "Zurich", "Basel"],
    correct: "2"
  },
  15: {
    text: "Which of these organisations has headquarters in Geneva, Switzerland (mentioned in the notes)?",
    options: ["WHO, WTO, ILO", "UNESCO, IMF, ADB", "World Bank, ADB, NATO", "OECD, IMF, World Bank"],
    correct: "1"
  },
  16: {
    text: "Which is the world's longest expressway tunnel mentioned in the notes (country of construction)?",
    options: ["China", "Japan", "India", "Russia"],
    correct: "1"
  },
  17: {
    text: "Which summit did Prime Minister Modi attend where he was at the AI Action Summit 2025 along with the French President?",
    options: ["G20 Summit", "AI Action Summit in Paris", "BRICS Summit", "EU-India Summit"],
    correct: "2"
  },
  18: {
    text: "Where was the 8th Indian Ocean Conference (IOC) held according to the notes?",
    options: ["New Delhi", "Muscat", "Colombo", "Male"],
    correct: "2"
  },
  19: {
    text: "Which countries border Lake Tanganyika (as listed in the notes)?",
    options: ["Burundi, DRC, Tanzania, Zambia", "Kenya, Uganda, Tanzania, Rwanda", "DRC, Rwanda, Uganda, Zambia", "Tanzania, Kenya, Mozambique, Zambia"],
    correct: "1"
  },
  20: {
    text: "Which institute opened its first overseas centre in the Lake Tanganyika region (as mentioned)?",
    options: ["IIT Bombay", "IIT Madras", "IIT Delhi", "IIT Kharagpur"],
    correct: "2"
  },
  21: {
    text: "Which famous Tamil poet's statue was unveiled at the Glasgow College of Medicine in Cebu (as mentioned in the notes)?",
    options: ["Kambar", "Thiruvalluvar", "Subramania Bharati", "Avvaiyar"],
    correct: "2"
  },
  22: {
    text: "Which volcanic mountain in Ethiopia released unusually high methane levels as noted?",
    options: ["Mount Fantale", "Mount Kilimanjaro", "Mount Nyiragongo", "Mount Elgon"],
    correct: "1"
  },
  23: {
    text: "Which country initiated the first clinical trial for a vaccine against the Sudan strain of Ebola with WHO support?",
    options: ["Uganda", "DRC", "Rwanda", "Kenya"],
    correct: "1"
  },
  24: {
    text: "Who was named as the world’s richest woman (daughter of Walmart founder) in the notes?",
    options: ["Alice Walton", "Mackenzie Scott", "Françoise Bettencourt Meyers", "Julia Koch"],
    correct: "1"
  },
  25: {
    text: "Which country became a new member of the New Development Bank (NDB) as mentioned in the notes?",
    options: ["Indonesia", "Brazil", "Argentina", "Turkey"],
    correct: "1"
  },
  26: {
    text: "Which humanitarian operation did India launch to provide earthquake relief to Myanmar (as per notes)?",
    options: ["Operation Maitri", "Operation Rahat", "Operation Brahma", "Operation Ganga"],
    correct: "3"
  },
  27: {
    text: "Which country was the first to criminalize AI child abuse (as mentioned in the notes)?",
    options: ["United Kingdom", "United States", "Canada", "Australia"],
    correct: "1"
  },
  28: {
    text: "Which European country withdrew from the International Criminal Court (ICC) according to the notes?",
    options: ["Poland", "Hungary", "Czech Republic", "Slovakia"],
    correct: "2"
  },
  29: {
    text: "Which Central American country signed an 'umbrella agreement' with India to implement Quick Impact Projects (QIPs)?",
    options: ["Panama", "Costa Rica", "Nicaragua", "Guatemala"],
    correct: "3"
  },
  30: {
    text: "Where was the world's first 3D-printed railway station — assembled in 6 hours — constructed?",
    options: ["Japan (Hatsushima)", "China (Chengdu)", "USA (Los Angeles)", "Germany (Berlin)"],
    correct: "1"
  },
  31: {
    text: "Where was India's first 3D-printed post office built (noted in the text)?",
    options: ["Hyderabad", "Bengaluru", "Delhi", "Pune"],
    correct: "2"
  },
  32: {
    text: "Which Indian institute built the world's highest 3D-printed military bunker in Leh?",
    options: ["IIT Bombay", "IIT Hyderabad", "IIT Madras", "IISC Bangalore"],
    correct: "2"
  },
  33: {
    text: "Where was the 16th BRICS Summit held (as noted)?",
    options: ["Beijing", "Kazan (Russia)", "Brasilia", "Johannesburg"],
    correct: "2"
  },
  34: {
    text: "Which countries were listed among the new members to BRICS in the notes (pick the one that appeared among new members)?",
    options: ["Egypt, Ethiopia, Iran, UAE, Indonesia", "Argentina, Chile, Mexico, Saudi Arabia, Turkey", "Norway, Sweden, Finland, Denmark, Iceland", "Canada, Australia, New Zealand, Japan, S. Korea"],
    correct: "1"
  },
  35: {
    text: "Which transshipment port (mentioned earlier in notes) had been in the news for exports of Bangladesh?",
    options: ["Vizhinjam (Vinjajam) Port", "Kandla Port", "Mundra Port", "Kochi Port"],
    correct: "1"
  },
  36: {
    text: "Which day was declared as 'World Meditation Day' by the UN General Assembly (as per the notes)?",
    options: ["21 December", "15 August", "22 April", "1 January"],
    correct: "1"
  },
  37: {
    text: "Which solstice/equinox pair is correctly stated in the notes for Northern Hemisphere longest day and equal day-night occurrences?",
    options: ["Summer solstice June 21 (longest day); Equinoxes March 21 & Sept 23", "Winter solstice June 21; Equinoxes Jan 1 & Dec 21", "Summer solstice Dec 21; Equinoxes June 21 & Dec 21", "Summer solstice Sept 23; Equinoxes March 21 & June 21"],
    correct: "1"
  },
  38: {
    text: "Under an RBI currency swap agreement mentioned in the notes, which country did RBI sign with?",
    options: ["Sri Lanka", "Maldives", "Bangladesh", "Bhutan"],
    correct: "2"
  },
  39: {
    text: "According to the notes, on which date was the Reserve Bank of India (RBI) established?",
    options: ["1 April 1935", "26 January 1950", "15 August 1947", "1 January 1930"],
    correct: "1"
  },
  40: {
    text: "Which Asian country declared martial law (as mentioned in the notes) under its president?",
    options: ["South Korea", "Thailand", "Philippines", "Malaysia"],
    correct: "1"
  },
  41: {
    text: "Which African country joined the International Solar Alliance (ISA) as mentioned in the notes?",
    options: ["Angola", "Nigeria", "Kenya", "South Africa"],
    correct: "1"
  },
  42: {
    text: "What is the UNAT initiative (noted) that was launched to reform the United Nations aimed at increasing efficiency and relevance — introduced by which UN leader?",
    options: ["António Guterres (UN Secretary-General)", "Ban Ki-moon (former UN SG)", "Kofi Annan (former UN SG)", "Christine Lagarde (IMF)"],
    correct: "1"
  },
  43: {
    text: "China approved construction of a very large dam on which river (as per the notes) that is upstream of India’s Brahmaputra?",
    options: ["Brahmaputra (Yarlung Tsangpo)", "Ganges", "Indus", "Mekong"],
    correct: "1"
  },
  44: {
    text: "Where was the 6th BIMSTEC summit held as mentioned in the notes?",
    options: ["Bangkok, Thailand", "Kathmandu, Nepal", "Dhaka, Bangladesh", "Colombo, Sri Lanka"],
    correct: "1"
  },
  45: {
    text: "Where was the 58th Annual Meeting of the Asian Development Bank (ADB) held?",
    options: ["Manila", "Milan", "Tokyo", "Seoul"],
    correct: "2"
  },
  46: {
    text: "Where does the headquarter of the Asian Development Bank (ADB) lie (as mentioned in the notes)?",
    options: ["Manila, Philippines", "Bangkok, Thailand", "Jakarta, Indonesia", "Kuala Lumpur, Malaysia"],
    correct: "1"
  },
  47: {
    text: "Where was the Raisina Dialogue (the 10th edition mentioned) held (the dialogue usually takes place in which city)?",
    options: ["New Delhi", "Mumbai", "Bengaluru", "Chennai"],
    correct: "1"
  },
  48: {
    text: "Where was the 10th International Trade Fair in Nepal held (venue as per notes)?",
    options: ["Bhrikuti Mandap, Kathmandu", "Pashupati Mandir, Kathmandu", "Tundikhel Grounds, Kathmandu", "Biratnagar Exhibition Hall"],
    correct: "1"
  },
  49: {
    text: "Who became the youngest climber to conquer all 14 highest peaks on Earth according to the notes?",
    options: ["Nima Rinji Sherpa", "Kylian Jornet", "Jordan Romero", "Malavath Purna"],
    correct: "1"
  },
  50: {
    text: "Which Latin American country opened an embassy in New Delhi (noted as strengthening ties)?",
    options: ["Honduras", "Panama", "Guatemala", "Nicaragua"],
    correct: "1"
  },
  51: {
    text: "Which Chinese AI startup replaced multiple GPTs and is powered by DeepSeek V3 model (mentioned in the subtitles)?",
    options: ["Deep Seek", "Baidu", "Megvii", "SenseTime"],
    correct: "1"
  },
  52: {
    text: "Which country suspended the transshipment facility allowing its exports to pass through Indian ports (as per the notes)?",
    options: ["Bangladesh (facility was stopped by India)", "Sri Lanka (facility was stopped by India)", "Pakistan (facility was stopped by India)", "Nepal (facility was stopped by India)"],
    correct: "1"
  },
  53: {
    text: "Which country reported elimination of sleeping sickness according to the notes?",
    options: ["Guinea", "Congo", "Uganda", "Kenya"],
    correct: "1"
  },
  54: {
    text: "Which style of painting from Jharkhand was gifted by PM Modi (mentioned in the notes)?",
    options: ["Sohrai painting", "Warli painting", "Pattachitra", "Phad painting"],
    correct: "1"
  },
  55: {
    text: "Which painting/traditional art form is Warli associated with (as said in the notes) and which state?",
    options: ["Warli — Maharashtra", "Pattachitra — Rajasthan", "Phad — Odisha", "Sohrai — Gujarat"],
    correct: "1"
  },
  56: {
    text: "Which university press announced 'brain rot' as Oxford Word of the Year 2024 (noted)?",
    options: ["Oxford University Press", "Cambridge University Press", "Merriam-Webster", "Collins"],
    correct: "1"
  },
  57: {
    text: "Which country joined the International Solar Alliance (ISA) as per the notes (example listed)?",
    options: ["Moldova", "Malta", "Monaco", "Moldova"], // kept duplicate intentionally per note - correct is Moldova
    correct: "1"
  },
  58: {
    text: "Which organisation’s headquarters is located in Gurugram (mentioned because ISA headquarter was referenced)?",
    options: ["International Solar Alliance (ISA)", "World Bank India", "Asian Development Bank India", "UNDP India"],
    correct: "1"
  },
  59: {
    text: "Which organisation was said to be planning a new national museum in New Delhi named 'Yugayug Bharat' (India-France collaboration was noted)?",
    options: ["India & France collaboration for new national museum in New Delhi", "UNESCO alone", "British Museum collaboration", "World Bank funding project"],
    correct: "1"
  },
  60: {
    text: "Which two days are equinoxes when day and night are approximately equal everywhere on Earth (as stated in the notes)?",
    options: ["21 March and 23 September", "21 June and 22 December", "1 April and 1 October", "15 March and 15 September"],
    correct: "1"
  }
};

const explanations = {
  1: "The 28th session of the UN Forum on Forests (UNFF) was held at the United Nations Headquarters in New York. The notes specifically say the Indian delegation was led by Shri Sushil Kumar Awasthi.",
  2: "China unveiled the CR450 prototype — a very high-speed train designed to achieve speeds up to 450 km/h (operational speeds often quoted near 400–450 km/h for prototypes). This was contrasted in the notes with India's fastest semi-high-speed trains (Vande Bharat).",
  3: "The notes mention Hanoi, Vietnam, as recently declared the world's most polluted city in the data discussed. The subtitle specifically states Hanoi was declared most polluted, citing the referenced source in the lecture.",
  4: "Bhutan launched a national crypto-currency tourism payment system allowing tourists to make payments using cryptocurrencies — the notes emphasised Bhutan as first country to do this at a national tourism payments level.",
  5: "The note explicitly says Bhutan's national sport is archery — a long-standing cultural fact (archery is widely practiced and celebrated in Bhutan).",
  6: "Thimphu is the capital of Bhutan; the notes mention the capital in the same section where Bhutan's crypto tourism system and national sport were discussed.",
  7: "The notes listed Bhutan's currency as the Ngultrum. The Ngultrum (BTN) is pegged to the Indian Rupee and is the country's official currency.",
  8: "The subtitles listed West Bengal, Sikkim, Arunachal Pradesh and Assam among Indian states that share borders with Bhutan. These four Indian states have frontiers with Bhutan at various points.",
  9: "The subtitles say that during his presidency Donald Trump pulled the US out of the WHO (World Health Organization). The lecture also referenced his pullback from climate commitments (Paris Agreement) historically.",
  10: "The Paris Agreement (COP21) was negotiated and adopted in Paris — the notes highlighted COP21 and the objective of keeping global warming well below 2°C and pursuing efforts to limit it to 1.5°C.",
  11: "The Indus Water Treaty (1960) between India and Pakistan was mediated by the World Bank — the subtitle articulates the treaty's origin and the World Bank's role in mediation.",
  12: "The notes stated Pakistan suspended bilateral deals including the Shimla Agreement after India suspended the Indus Water Treaty — this was reported contextually in the lecture narration.",
  13: "WASH stands for Water, Sanitation and Hygiene. The notes referred to an India–Nepal MoU in the WASH sector — a common development cooperation area.",
  14: "The World Economic Forum's annual meeting in Davos (WEF 2025) was mentioned as the 55th meeting and was held in Davos, Switzerland — the notes referenced this centre for global dialogue.",
  15: "The subtitle listed several organisations with Geneva HQs — WHO, WTO and ILO were cited as organisations headquartered in Geneva (consistent with established international facts).",
  16: "The notes mentioned a very long expressway tunnel constructed in China (the text called it the Atian Shan Shengli tunnel or similar). The lecture contrasted this with India's longest road tunnels.",
  17: "The notes described PM Modi attending the AI Action Summit 2025 in Paris and being present alongside the French President (Macron) — that’s why this is asked as a summit-related fact in the notes.",
  18: "The 8th Indian Ocean Conference (IOC) was held in Muscat, Oman — the notes mentioned Muscat and provided the conference theme (noted as less important by the lecturer).",
  19: "Lake Tanganyika is bordered by Burundi, the Democratic Republic of the Congo (DRC), Tanzania and Zambia — these countries were explicitly listed in the lecture.",
  20: "IIT Madras was mentioned as opening its first overseas centre in the Lake Tanganyika region as per the lecture notes; the institute was referenced in regional academic collaboration context.",
  21: "The notes recorded a statue of the Tamil poet-philosopher Thiruvalluvar being unveiled at an overseas location mentioned as Glasgow College of Medicine in Cebu — the subtitle explicitly named Thiruvalluvar.",
  22: "Mount Fantale in Ethiopia was highlighted for releasing unusually high methane levels during an eruption — the lecture flagged this as an unusual volcanic emission behaviour.",
  23: "Uganda, with WHO support, initiated a clinical trial for a vaccine targeting the Sudan strain of Ebola during a recent outbreak — the lecture noted this as a WHO-supported trial.",
  24: "Alice Walton, daughter of Walmart's founder, was noted in the lecture as the world’s richest woman following inheritances/stock movement — she is commonly cited among the wealthiest individuals.",
  25: "The New Development Bank (NDB) added Indonesia as a new member per the notes; the NDB (BRICS Bank) has its headquarter in Shanghai, which was mentioned alongside this fact.",
  26: "Operation Brahma was recorded in the lecture as an Indian relief operation to help Myanmar after an earthquake — the notes listed India’s humanitarian operations with their names and targets.",
  27: "The UK was mentioned as the first country to criminalize AI child abuse — the lecture pointed out the UK’s legislative move in this novel legal area.",
  28: "Hungary was stated to have withdrawn from the International Criminal Court (ICC) — the notes declared it was the first European country to do so.",
  29: "India and Nicaragua signed an umbrella agreement to implement Quick Impact Projects (QIPs) — the note explained an umbrella agreement is a framework under which multiple projects/agreements can be implemented.",
  30: "Hatsushima (Japan) hosted the world’s first 3D-printed railway station assembled from prefabricated parts in six hours — the lecture highlighted rapid 3D-printing construction achievements.",
  31: "India’s first 3D-printed post office was said to be in Bengaluru in the notes — used as an example of India’s adoption of additive manufacturing for infrastructure.",
  32: "IIT Hyderabad was credited in the lecture with building the world's highest 3D-printed military bunker in Leh — the notes cited this as an Indian technological milestone.",
  33: "The 16th BRICS Summit was held in Kazan, Russia as mentioned in the lecture; the speaker referenced the summit’s theme and India’s participation.",
  34: "The lecture listed the new BRICS members (examples in the notes): Egypt, Ethiopia, Iran, UAE and Indonesia were identified as recent additions to the grouping.",
  35: "Vizhinjam (spelled Vinjajam in parts of the notes) transshipment port was referenced — the notes discussed transshipment routes and the port’s role for neighbouring countries’ cargo.",
  36: "World Meditation Day was noted in the lecture as being celebrated on 21 December, and the note linked it with winter solstice timing in the lecture's calendar facts.",
  37: "The notes summarized solstices/equinoxes: summer solstice on/around 21 June is the longest day in the Northern Hemisphere, and the equinoxes are around 21 March and 23 September when day and night durations are roughly equal.",
  38: "RBI signed a currency swap agreement with the Maldives Monetary Authority, as the lecture described — this was noted to provide financing support up to certain swap window limits.",
  39: "RBI establishment date listed in the lecture: the Reserve Bank of India came into existence on 1 April 1935 under the RBI Act of 1934 — a standard historical fact emphasized by the speaker.",
  40: "The lecture reported that South Korea declared martial law under its President in a recent development — this item was presented as an important international update in the notes.",
  41: "Angola's accession to the International Solar Alliance (ISA) was mentioned in the notes as an example of countries joining ISA to boost renewable energy cooperation.",
  42: "The UNAT initiative (a UN reform agenda) was said to be launched by UN Secretary-General António Guterres in March 2025, aimed at improving the UN’s efficiency and relevance.",
  43: "China approved construction of a massive dam on the Yarlung Tsangpo/Brahmaputra upstream region (the notes called it among the world’s largest dam projects and gave an approximate cost figure), an issue raised in the lecture given downstream implications.",
  44: "The 6th BIMSTEC summit was referenced as being held in Bangkok, Thailand — BIMSTEC (Bay of Bengal Initiative) includes Bangladesh, India, Myanmar, Sri Lanka, Thailand, Nepal and Bhutan (members were discussed).",
  45: "The 58th ADB Annual Meeting was held in Milan, Italy — the lecture named Milan as the host city for that edition of ADB's annual meeting.",
  46: "The Asian Development Bank (ADB) headquarters is in Manila, Philippines — the lecture included this common institutional fact while discussing the meeting location.",
  47: "Raisina Dialogue is an annual geo-political conference held in New Delhi (Raisina Hills) and the notes referred to the 10th edition taking place under a specified theme.",
  48: "The 10th International Trade Fair in Nepal was reported to be held at Bhrikuti Mandap in Kathmandu — the notes gave the venue explicitly.",
  49: "Nima Rinji Sherpa (a Nepali climber) was credited in the notes with becoming the youngest to climb all 14 of the world’s highest peaks — the lecture named the mountaineer.",
  50: "The notes mentioned inauguration of the Honduran Embassy in New Delhi, signalling deeper ties between India and Honduras — the capital (Tegucigalpa) and local details were lightly referenced in lecture.",
  51: "Deep Seek, a Chinese AI startup powered by DeepSeek V3, was mentioned as an emerging competitor to standard GPT models; the notes flagged it as notable domestic AI progress in China.",
  52: "The lecture said India ended a transshipment facility that had allowed Bangladesh exports to pass through Indian ports — this policy move was discussed in the subtitle text.",
  53: "Guinea was reported as having eliminated sleeping sickness — the lecture highlighted the public health achievement and earlier disease-carrier facts (e.g., Trypanosoma protozoa and tsetse fly context).",
  54: "Sohrai painting from Jharkhand was specifically mentioned as a piece gifted by India’s PM in a diplomatic context — the notes used it to demonstrate India’s cultural diplomacy.",
  55: "Warli painting is associated with Maharashtra — the lecture noted it while listing art forms and the states they come from (Warli — Maharashtra was explicitly mentioned).",
  56: "Oxford University Press announced 'brain rot' as its Word of the Year for 2024 according to the lecture; the notes contrasted different dictionaries' choices.",
  57: "Moldova's accession to the International Solar Alliance (ISA) Framework Agreement was listed in the lecture; the subtitle recorded Moldova had joined ISA.",
  58: "The ISA headquarters was referenced as being in Gurugram (the notes repeated that ISA is an India–France initiative and has HQ in the Delhi NCR region).",
  59: "India and France agreed to establish a new national museum in New Delhi (notes used the name 'Yugayug Bharat' or similar in describing the project), described as an India–France collaborative initiative.",
  60: "The lecture reiterated that equinoxes occur around 21 March and 23 September when the duration of day and night are approximately equal—this was summarised in the subtitle’s final section."
};

/* Example helper: showExplanation(num)
   (This assumes you have bootstrap modal with id 'explanationModal' and element id 'explanationContent')
*/
function showExplanation(num) {
  const q = questions[num];
  const e = explanations[num] || "No explanation provided.";
  if (!q) return;
  document.getElementById('explanationContent').innerHTML = `
    <p><strong>Q${num}.</strong> ${q.text}</p>
    <p><strong>Options:</strong></p>
    <ul>
      ${q.options.map((opt, idx) => `<li>${idx+1}. ${opt}</li>`).join('')}
    </ul>
    <p><strong>Correct Answer:</strong> ${q.options[parseInt(q.correct)-1]}</p>
    <hr>
    <p><strong>Explanation:</strong> ${e}</p>
  `;
  // Show modal (requires bootstrap js)
  const modalEl = document.getElementById('explanationModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    new bootstrap.Modal(modalEl).show();
  }
}

// Export for module usage (if using modules)
if (typeof module !== 'undefined') {
  module.exports = { totalQuestions, questions, explanations, showExplanation };
}
