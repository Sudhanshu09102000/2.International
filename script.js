

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
    options: ["Moldova", "Malta", "Monaco", "Maldives"], // kept duplicate intentionally per note - correct is Moldova
    correct: "1"
  },
  58: {
    text: "Which organisation’s headquarters is located in Gurugram (mentioned because ISA headquarter was referenced)?",
    options: ["International Solar Alliance (ISA)", "World Bank India", "Asian Development Bank India", "UNDP India"],
    correct: "1"
  },
  59: {
    text: "Which organisation was said to be planning a new national museum in New Delhi named 'Yuga yugin Bharat' (India-France collaboration was noted)?",
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
  1: { text: "The 28th session of the UN Forum on Forests (UNFF) was held at the United Nations Headquarters in New York. The notes specifically say the Indian delegation was led by Shri Sushil Kumar Awasthi.", image: "" },
2: { text: "China unveiled the CR450 prototype — a very high-speed train designed to achieve speeds up to 450 km/h. This was contrasted with India's fastest semi-high-speed trains (Vande Bharat).", image: "" },
3: { text: "Hanoi, Vietnam, was recently declared the world's most polluted city.", image: "" },
4: { text: "Bhutan launched a national crypto-currency tourism payment system allowing tourists to make payments using cryptocurrencies.", image: "" },
5: { text: "Bhutan's national sport is archery — a long-standing cultural fact.", image: "" },
6: { text: "Thimphu is the capital of Bhutan.", image: "" },
7: { text: "Bhutan's currency is the Ngultrum (BTN), pegged to the Indian Rupee.", image: "" },
8: { text: "West Bengal, Sikkim, Arunachal Pradesh and Assam share borders with Bhutan.", image: "" },
9: { text: "During his presidency, Donald Trump pulled the US out of the WHO and the Paris Agreement.", image: "" },
10: { text: "The Paris Agreement (COP21) was negotiated in Paris to limit global warming below 2°C, aiming for 1.5°C.", image: "" },
11: { text: "The Indus Water Treaty (1960) between India and Pakistan was mediated by the World Bank.", image: "" },
12: { text: "Pakistan suspended bilateral deals including the Shimla Agreement after India suspended the Indus Water Treaty.", image: "" },
13: { text: "WASH stands for Water, Sanitation and Hygiene; India–Nepal MoU in WASH sector noted.", image: "" },
14: { text: "World Economic Forum's annual meeting in Davos (WEF 2025) was the 55th edition held in Davos, Switzerland.", image: "" },
15: { text: "WHO, WTO and ILO are headquartered in Geneva.", image: "" },
16: { text: "China constructed a very long expressway tunnel (Atian Shan Shengli tunnel), contrasted with India's longest road tunnels.", image: "" },
17: { text: "PM Modi attended the AI Action Summit 2025 in Paris alongside French President Macron.", image: "" },
18: { text: "The 8th Indian Ocean Conference (IOC) was held in Muscat, Oman.", image: "" },
19: { text: "Lake Tanganyika is bordered by Burundi, the Democratic Republic of the Congo, Tanzania and Zambia.", image: "" },
20: { text: "IIT Madras opened its first overseas centre in the Lake Tanganyika region.", image: "" },
21: { text: "A statue of Tamil poet-philosopher Thiruvalluvar was unveiled at Glasgow College of Medicine in Cebu.", image: "" },
22: { text: "Mount Fantale in Ethiopia released unusually high methane levels during an eruption.", image: "" },
23: { text: "Uganda, with WHO support, initiated a clinical trial for a vaccine targeting the Sudan strain of Ebola.", image: "" },
24: { text: "Alice Walton, daughter of Walmart's founder, was noted as the world’s richest woman.", image: "" },
25: { text: "The New Development Bank (NDB) added Indonesia as a new member; NDB HQ is in Shanghai.", image: "" },
26: { text: "Operation Brahma was an Indian relief operation to help Myanmar after an earthquake.", image: "" },
27: { text: "The UK was the first country to criminalize AI child abuse.", image: "" },
28: { text: "Hungary withdrew from the International Criminal Court (ICC), first European country to do so.", image: "" },
29: { text: "India and Nicaragua signed an umbrella agreement to implement Quick Impact Projects (QIPs).", image: "" },
30: { text: "Hatsushima (Japan) hosted the world’s first 3D-printed railway station assembled in six hours.", image: "" },
31: { text: "India’s first 3D-printed post office was established in Bengaluru.", image: "" },
32: { text: "IIT Hyderabad built the world's highest 3D-printed military bunker in Leh.", image: "" },
33: { text: "The 16th BRICS Summit was held in Kazan, Russia; India participated.", image: "" },
34: { text: "New BRICS members include Egypt, Ethiopia, Iran, UAE and Indonesia.", image: "" },
35: { text: "Vizhinjam transshipment port was referenced for neighbouring countries’ cargo routes.", image: "" },
36: { text: "World Meditation Day is celebrated on 21 December, linked with winter solstice.", image: "" },
37: { text: "Summer solstice on 21 June is the longest day in Northern Hemisphere; equinoxes around 21 March & 23 September.", image: "" },
38: { text: "RBI signed a currency swap agreement with Maldives Monetary Authority to provide financing support.", image: "" },
39: { text: "Reserve Bank of India came into existence on 1 April 1935 under RBI Act of 1934.", image: "" },
40: { text: "South Korea declared martial law under its President in a recent development.", image: "" },
41: { text: "Angola joined the International Solar Alliance (ISA) to boost renewable energy cooperation.", image: "" },
42: { text: "UNAT initiative launched by UN Secretary-General António Guterres in March 2025 to improve UN efficiency.", image: "" },
43: { text: "China approved construction of a massive dam on Yarlung Tsangpo/Brahmaputra upstream region.", image: "" },
44: { text: "The 6th BIMSTEC summit was held in Bangkok, Thailand; members include Bangladesh, India, Myanmar, Sri Lanka, Thailand, Nepal and Bhutan.", image: "" },
45: { text: "The 58th ADB Annual Meeting was held in Milan, Italy.", image: "" },
46: { text: "Asian Development Bank (ADB) headquarters is in Manila, Philippines.", image: "" },
47: { text: "Raisina Dialogue is an annual geo-political conference held in New Delhi; 10th edition noted.", image: "" },
48: { text: "The 10th International Trade Fair in Nepal was held at Bhrikuti Mandap, Kathmandu.", image: "" },
49: { text: "Nima Rinji Sherpa became the youngest to climb all 14 of the world’s highest peaks.", image: "" },
50: { text: "Honduran Embassy inaugurated in New Delhi, signalling deeper ties between India and Honduras.", image: "" },
51: { text: "Deep Seek, a Chinese AI startup powered by DeepSeek V3, emerged as a competitor to standard GPT models.", image: "" },
52: { text: "India ended a transshipment facility that allowed Bangladesh exports to pass through Indian ports.", image: "" },
53: { text: "Guinea eliminated sleeping sickness, a major public health achievement.", image: "" },
54: { text: "Sohrai painting from Jharkhand was gifted by India’s PM in a diplomatic context.", image: "" },
55: { text: "Warli painting is associated with Maharashtra.", image: "" },
56: { text: "Oxford University Press announced 'brain rot' as Word of the Year 2024.", image: "" },
57: { text: "Moldova joined the International Solar Alliance (ISA) Framework Agreement.", image: "" },
58: { text: "ISA headquarters is in Gurugram, India.", image: "" },
59: { text: "India and France agreed to establish a new national museum in New Delhi ('Yuga yugin Bharat').", image: "" },
60: { text: "Equinoxes occur around 21 March and 23 September when day and night are approximately equal.", image: "" }

};
