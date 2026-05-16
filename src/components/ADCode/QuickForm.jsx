import { useState, useRef, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────
//  COMPLETE PORT DATA (Sea, Air, ICD, CFS, LCS)
//  ✅ All entries from your latest data are included
// ─────────────────────────────────────────────────────────────────────────
const portData = {
  "Sea Port": [
    { code: "INIXZ1", location: "SEA PORT-PORT BLAIR, ANDAMAN & NICOBAR ISLANDS." },
    { code: "INKAK1", location: "CUSTOM HOUSE, PORT AREA, KAKINADA - 533007" },
    { code: "INVTZ1", location: "CUSTOM HOUSE, PORT AREA VISAKHAPATNAM 530035" },
    { code: "INGGV1", location: "GANGAVARAM PORT, ANDHRA PRADESH" },
    { code: "INKRI1", location: "ICES, KRISHNAPATNAM PORT, NELLORE-524003" },
    { code: "INKGJ1", location: "CUSTOM HOUSE-KARIMGANJ STEAMERGHAT & FERRY STATION" },
    { code: "INMRM1", location: "NEW CUSTOM HOUSE MARMAGOA, GOA PIN-403803" },
    { code: "INPAN1", location: "PANAJI PORT, PANAJI, GOA" },
    { code: "INMUN1", location: "CH Mundra" },
    { code: "INIXY1", location: "CUSTOM HOUSE, NEAR BALAJI TEMPLE, KANDLA - 370210" },
    { code: "INPAV1", location: "CUSTOM HOUSE, GPPL PIPAVAV RAJULA, AMRELI GUJARAT" },
    { code: "INMDA1", location: "MAGDALLA PORT URMI COMPLEX SANGRAMPURA SURAT" },
    { code: "INDAH1", location: "DAHEJ PORT CUSTOM HOUSE DIST: BAROACH GUJARAT" },
    { code: "INHZA1", location: "HAZIRA PORT, CHORYASHI, BYPASS RD., HAZIRA, SURAT" },
    { code: "INBED1", location: "BEDI PORT JAMNAGAR GUJRAT" },
    { code: "INPBD1", location: "PORBANDAR PORT,OPP-CIVIL AIRPORT,PORBANDAR,GUJARAT" },
    { code: "INBHU1", location: "BHAVNAGAR PORT, PARAMAL CHOWK, BHAVNAGAR, GUJARAT" },
    { code: "INOKH1", location: "OKHA PORT, JAMNAGAR DIST, GUJARAT" },
    { code: "INNAV1", location: "NAVLAKHI PORT, GUJARAT" },
    { code: "INALA1", location: "ALANG PORT, PARIMAL CHOWK, BHAVNAGAR, GUJARAT" },
    { code: "INSIK1", location: "SIKKA PORT, CUSTOM HOUSE, SIKKA, JAMNAGAR, GUJARAT" },
    { code: "INVAD1", location: "VADINAR PORT, GUJARAT" },
    { code: "INOMU1", location: "OLD MUNDRA PORT, MUNDRA, GUJARAT" },
    { code: "INJAK1", location: "JAKHAU PORT, MUNDRA, GUJARAT" },
    { code: "INKDN1", location: "KODINAR PORT, MULDWARKA, GUJARAT" },
    { code: "INTUN1", location: "TUNA PORT, KANDLA, GUJARAT" },
    { code: "INSAL1", location: "ESSAR BULK TERMINAL, SEAPORT- SALAYA, GUJARAT" },
    { code: "INNML1", location: "NEW CUSTOM HOUSE, PANAMBUR, MANGALORE 575010" },
    { code: "INKRW1", location: "KARWAR PORT, KARNATAKA." },
    { code: "INIXE1", location: "OLD MANGALORE PORT, MANGALORE, KARNATAKA" },
    { code: "INCOK1", location: "COCHIN CUSTOM HOUSE WILLINGDON ISLAND COCHIN682009" },
    { code: "INKUK1", location: "Pallithottam P.O., Kollam, Kerala, 691006" },
    { code: "INBEY1", location: "BEYPORE PORT, CALICUT, KERALA" },
    { code: "INAZK1", location: "AZHIKKAL PORT, KERALA" },
    { code: "INVZJ1", location: "VIZHINJAM PORT, KERALA" },
    { code: "INBOM1", location: "NEW CUSTOM HOUSE, BALLARD ESTATE, MUMBAI - 400038" },
    { code: "INNSA1", location: "JNCH Nhava Sheva" },
    { code: "INDMT1", location: "DHARAMTAR PORT, ALIBAG, MAHARASHTRA" },
    { code: "INJGD1", location: "JAIGAD PORT, RATNAGIRI DISTRICT, MAHARASHTRA" },
    { code: "INDIG1", location: "DIGHI PORT,TK SHRIWARDHAN-DIST RAIGAD, MAHARASHTRA" },
    { code: "INRVD1", location: "REVDANDA PORT,VILL.BAVALE-DIST. RAIGAD,MAHARASHTRA" },
    { code: "INDHP1", location: "DABHOL PORT,ANJANVEL PO,RATNAGIRI DIST,MAHARASHTRA" },
    { code: "INKSH1", location: "KELSHI PORT, UMBERSHET VIL, DAPOLI TK, MAHARASHTRA" },
    { code: "INBKT1", location: "BANKOT PORT, UMROLI VILL, MANDANGAD TK,MAHARASHTRA" },
    { code: "INRNR1", location: "RANPAR PORT, RATNAGIRI DIST, MAHARASHTRA-415616" },
    { code: "INVYD1", location: "VIJAYDURG PORT, PUNE CUSTOMS, MAHARASHTRA" },
    { code: "INDHU1", location: "DAHANU PORT, MAHARASHTRA" },
    { code: "INRED1", location: "REDI PORT, RATNAGIRI, MAHARASHTRA" },
    { code: "INPRT1", location: "PARADEEP PORT CUSTOM HOUSE PARADEEP ORISSA 754142" },
    { code: "INDMA1", location: "DHAMRA PORT, DOSINGA, BHADRAKH, ODISHA 756171" },
    { code: "INGPR1", location: "GOPALPUR PORT, ORISSA" },
    { code: "INPNY1", location: "CUSTOM HOUSE NO.1 DUMAS STREET PONDICHEERY" },
    { code: "INKRK1", location: "MKP PVT LTD, TR PATTINAM POST, KARAIKAL 609606" },
    { code: "INTUT1", location: "CH Tuticorin" },
    { code: "INMAA1", location: "CH Chennai" },
    { code: "INNPT1", location: "C H, NO 4 FIRSTLINE BEACH NAGAPATTINAM 611001" },
    { code: "INENR1", location: "KAMARAJAR PORT LIMITED, 60, RAJAJI SALAI- CHENNAI." },
    { code: "INKAT1", location: "VILL.KATTUPALLI,TAL.PONNERI,DIST.TIRUVELLORE601120" },
    { code: "INCDL1", location: "CUDDALORE PORT, CUSTOM HOUSE CUDDALORE, TN-607003" },
    { code: "INCCU1", location: "15/1 STRAND ROAD, CUSTOM HOUSE, KOLKATA - 700001" },
    { code: "INTTS1", location: "CUSTOM HOUSE- T.T SHED (KIDDERPOR), WEST BENGAL" },
    { code: "INHND1", location: "LCS HEMNAGAR PORT" },
  ],
  "Air Port": [
    { code: "INVTZ4", location: "AIR CARGO COMPLEX VISAKHAPATNAM" },
    { code: "INGAU4", location: "GUWAHATI AIR CARGO, BORJHAR, ASSAM" },
    { code: "INDEL4", location: "ACC Delhi" },
    { code: "INBWS6", location: "Air Freight Station (AFS), Kapashera Bijwasan Road, New Delhi" },
    { code: "INGOI4", location: "GOA AIR CARGO COMPLEX, SADA COMPLEX, MARMAGOA" },
    { code: "INGOX4", location: "ACC Manohar International Airport, Mopa, Goa" },
    { code: "INAMD4", location: "ACC Ahmedabad" },
    { code: "INJGA4", location: "JAMNAGAR AIR CARGO, GUJARAT" },
    { code: "INSXR4", location: "SRINAGAR AIR CARGO, SRINAGAR, JAMMU AND KASHMIR" },
    { code: "INBLR4", location: "ACC Bangalore" },
    { code: "INIXE4", location: "MANGALORE AIR CARGO, KARNATAKA" },
    { code: "INTRV4", location: "ACC SHANGHUMUGHAM THIRUVANANTHAPURAM KERALA" },
    { code: "INCOK4", location: "KOCHI AIRPORT NEDUMBASSERY COCHIN KERALA 683111" },
    { code: "INCCJ4", location: "Kozhikode (Calicut) Air Cargo" },
    { code: "INCNN4", location: "AIR CARGO COMPLEX, KANNUR INTERNATIONAL AIRPORT," },
    { code: "INIDR4", location: "ACC DEVI AHILYABHAI HOLKAR AIRPORT INDORE MP" },
    { code: "INBOM4", location: "ACC Sahar" },
    { code: "INJNR4", location: "ACC JANORI, JANORI DINDORI, DIST NASIK, PIN-422207" },
    { code: "INPNQ4", location: "AIR CARGO COMPLEX, LOHEGAM, PUNE, MAHARASHTRA" },
    { code: "INNAG4", location: "NAGPUR AIR CARGO, MAHARASHTRA" },
    { code: "INBBI4", location: "BHUBANESWAR AIR CARGO, BHUBANESWAR, ORISSA" },
    { code: "INATQ4", location: "SGRD JEE INTERNATIONAL AIRPORT, AMRITSAR" },
    { code: "INJAI4", location: "AIR CARGO COMPLEX SANGANER JAIPUR" },
    { code: "INMAA4", location: "ACC Chennai" },
    { code: "INCJB4", location: "ACC COIMBATORE CIVIL AERODROME COIMBATORE - 04" },
    { code: "INIXM4", location: "MADURAI AIR CARGO COMPLEX, MADURAI, TAMIL NADU" },
    { code: "INTRZ4", location: "TIRUCHIRAPALLI AIR CARGO, TAMIL NADU" },
    { code: "INHYD4", location: "ACC Hyderabad" },
    { code: "INLOK4", location: "Lucknow Air Cargo" },
    { code: "INVNS4", location: "AIR CARGO COMPLEX, BABATPUR, VARANASI, UP" },
    { code: "INLKO4", location: "LUCKNOW AIR CARGO" },
    { code: "INCCU4", location: "ACC Kolkata" },
  ],
  "ICD Port": [
    { code: "INGNR6", location: "ICD, MARRIPALAM, DISTRICT - GUNTUR, A.P." },
    { code: "INTMX6", location: "ICD THIMMAPUR, 11-60/5-7, THIMMAPUR, 509325, AP" },
    { code: "INAMG6", location: "CONCOR, ICD AMINGAON, GUWAHATI - 781031" },
    { code: "INRAI6", location: "ICD RAIPUR NEAR GOODS-SHED KAPA RAIPUR 492009" },
    { code: "INRML6", location: "CONCOR ICD- NAYA RAIPUR, CHHATTISGARH-492101" },
    { code: "INPPG6", location: "ICD Patparganj" },
    { code: "INTKD6", location: "ICD Tuglakabad" },
    { code: "INMDG6", location: "ICD VERNA, MARGOA, GOA" },
    { code: "INBLO6", location: "ICD Balli" },
    { code: "INSBI6", location: "ICD Sabarmati, Ahmedabad" },
    { code: "INBRC6", location: "ICD DASRATH VADODARA GUJARAT - 391740" },
    { code: "INVPI6", location: "ICD VALVADA NH8 TALUKA:UMBERGAON VALSAD GUJARAT" },
    { code: "INSAU6", location: "ICD THAR DRY PORT KADI ROAD SANAND AHMEDABAD" },
    { code: "INSAC6", location: "SURAT DIAMOND PARK, GIDC, SACHIN, SURAT-394230" },
    { code: "INAKV6", location: "ICD ANKLESHWAR OPP ONGC TNSHIP OLD NH8 ANKLESHWAR" },
    { code: "INKBC6", location: "KRIBHCO INFSTR LTD,HAZIRA,KRIBHCO NGR,SURAT,GUJRAT" },
    { code: "INSAJ6", location: "ICD TUMB, TALUK UMBERGAON, DIST VALSAD, GUJARAT" },
    { code: "INHIR6", location: "SURAT HIRA BOURSE, KATARGAM, SURAT-395008 GUJARAT" },
    { code: "INJKA6", location: "ICD SACHANA, CWC(N),TK VIRAMGAM, AHMEDABAD,GUJARAT" },
    { code: "INVGR6", location: "ICD VIRAMGAM, BHOJWA, AHMEDABAD, GUJARAT" },
    { code: "INWDH6", location: "ICD MORBI" },
    { code: "INVRM6", location: "ICD Varnama" },
    { code: "INFBD6", location: "ICD BALLABHGARH, SECTOR 59, FARIDABAD, HARYANA" },
    { code: "INREA6", location: "ICD Rewari, Haryana" },
    { code: "INGHR6", location: "ICD Gari Harasaru" },
    { code: "INPTL6", location: "ICD PATLI, GURGAON, HARYANA" },
    { code: "INPNP6", location: "ICD PANIPAT, BABARPUR RAILWAY STATION, PANIPAT" },
    { code: "INBVC6", location: "ICD CONCOR, SECTOR 25 FARIDABAD" },
    { code: "INBFR6", location: "ICD Piyala" },
    { code: "INPKR6", location: "KRIBHCO LOGISTICS PARK, REWARI, HARYANA" },
    { code: "INBDM6", location: "Panchi Gujaran, Tehsil-Gannur, Sonepat District, Haryana" },
    { code: "INBAW6", location: "PLOT-1 SECTOR 9 GROWTH CENTRE BAWAL REWARI HARYANA" },
    { code: "INDWN6", location: "ICD JATTIPUR, SAMALKHA TEHSIL-PANIPAT DIST HARYANA" },
    { code: "INPWL6", location: "ICD PALWAL, VILL-JANOULI-BAGHOLA, HARYANA -121102" },
    { code: "INRUG6", location: "ICD BARHI, GANAUR, SONEPAT DISTRICT, HARYANA" },
    { code: "INBDI6", location: "CONCOR, Sheetalpur, Baddi, Himachal Pradesh, 173205." },
    { code: "INIXW6", location: "ICD JAMSHEDPUR,NEAR FCI GODOWN,TATANAGAR,JHARKHAND" },
    { code: "INWFD6", location: "ICD Banglore" },
    { code: "INHSU6", location: "PLOT 53, SIPCOT IND. COMPLEX, PHASE-1,HOSUR-635126" },
    { code: "INHAS6", location: "ICD HASSAN, KARNATAKA" },
    { code: "INDRU6", location: "ICD DESUR, BELGAUM, KARNATAKA-590014" },
    { code: "INKQZ6", location: "SATTVA BENGALURU ICD, VEMGAL INDST. AREA, KOORGAL" },
    { code: "INKYM6", location: "ICD KOTTAYAM, VILLAGE NATTAKAM, KOTTAYAM, KERALA" },
    { code: "INTCR6", location: "ICD MATHILAKAM, THRISSUR DIST, KERALA" },
    { code: "ININD6", location: "ICD 113 CONCOR COMPLEX SECTOR III PITHAMPUR DHAR" },
    { code: "INMDD6", location: "ICD MADIDEEP 34-A1 NIA DIST: RAISEN MP 462046" },
    { code: "INRTM6", location: "CONCOR ICD,NR LOCO SHED,JAORA RD.,RATLAM(MP)457001" },
    { code: "INDHA6", location: "ICD DHANNAD" },
    { code: "INPRK6", location: "ICD POWARKHEDA, BIAORA, DIST HOSHANGABAD, M.P." },
    { code: "INKHD6", location: "ICD, KHEDA, 13B,SECTOR 3, PITHAMPUR,MADHYA PRADESH" },
    { code: "INMPR6", location: "ICD, MALANPUR, DIST BHIND, MADHYA PRADESH" },
    { code: "INMWA6", location: "ICD MALIWADA, DAULATABAD, AURANGABAD" },
    { code: "INWAL6", location: "ICD WALUJ, AURANGABAD - 431030" },
    { code: "INNGP6", location: "ICD NAGPUR NR NARENDRA NAGAR NAGPUR 440027" },
    { code: "INNSK6", location: "CFS NASIK, COMPLEX OF CWC AMBAD NASIK MAHARASHTRA" },
    { code: "INJNR6", location: "ICD JANORI, JANORI DANDORI DIST: NASIK PIN-422207" },
    { code: "INDIG6", location: "ICD Dighi, Talera Nagar, Pune-Alandi Road, Pune, Maharashtra" },
    { code: "INTLG6", location: "ICD Talegaon, Pune" },
    { code: "INCCH6", location: "ICD CHINCHWAD CONCOR RLY GOODS SHED CHINCHWAD PUNE" },
    { code: "INBSL6", location: "ICD CONCOR BHUSAWAL B/H SAYALI HOTEL, BHUSAWAL" },
    { code: "INPMP6", location: "F-II Block, Yeshwant Nagar, Pimpri, Pune, Maharashtra" },
    { code: "INDPC4", location: "PCCCC, Bandra-Kurla Complex" },
    { code: "INCHJ6", location: "ICD WARDHA, BHUGAON LINK ROAD, WARDHA, MAHARASHTRA" },
    { code: "INBNG6", location: "ICD TARAPUR, MAHAGAON, TARAPUR,THANE, MAHARASHTRA" },
    { code: "INNGB6", location: "MIDC IND.AREA, BUTIBORI, NAGPUR, MH 441122" },
    { code: "INBOK6", location: "ICD BORKHEDI, DIST-NAGPUR, MAHARASHTRA" },
    { code: "INGRW6", location: "ICD BHAMBOLI-APM, CHAKAN INDUSTRIAL AREA, PUNE" },
    { code: "INKPK6", location: "CONCOR ICD, MIHAN, NAGPUR" },
    { code: "INBOA6", location: "ICD BORKHEDI, ADANI LOGISTICS LTD, NAGPUR" },
    { code: "INSKD6", location: "ICD KALINGANAGAR,KHURUNTI,KIC,JAJPUR,ODISHA 755026" },
    { code: "INBLE6", location: "CONCOR ICD, MOUZA-BAMPADA, REMUNA, BALASORE-756056" },
    { code: "INJSG6", location: "CONCOR ICD, DEBADIH, JHARSUGUDA DISTRICT, ODISHA" },
    { code: "INJJK6", location: "RAIL LINKED ICD- JAJPUR, ODISHA-755026" },
    { code: "INPNY6", location: "ICD PULICHAPALLAM, PONDY MAIN ROAD, PONDICHERRY" },
    { code: "INLDH6", location: "ICD Dhandari Kalan, Ludhiana" },
    { code: "INJUC6", location: "ICD JALANDHAR, DHOGRI ROAD NOORPUR JALANDHAR" },
    { code: "INASR6", location: "ICD CHEHERTTA AMRITSAR PUNJAB" },
    { code: "INSNI6", location: "ICD KANECH, SAHNEWAL, LUDHIANA" },
    { code: "INCPR6", location: "ICD CHAWAPAYAL, VILL. CHAWA, TEHSIL SAMRALA" },
    { code: "INSGF6", location: "ICD, GRFL, SAHNEWAL, LUDHIANA, PUNJAB" },
    { code: "INDDL6", location: "ICD (PSWC) Dhandari Kalan Ludhiana" },
    { code: "INQRP6", location: "ADANI ICD KILARAIPUR,DEHLON,LUDHIANA" },
    { code: "INDPR6", location: "ICD-PSWC, AMBALA-KALKA HIGHWAY, DAPPAR, DERABASSI" },
    { code: "INQRH6", location: "HTPL KILARAIPUR-ICD, KILARAIPUR, DEHLON, LUDHIANA" },
    { code: "INGPL6", location: "ICD PLIL, Ghungrana" },
    { code: "INJAI6", location: "ICD SANGANER PLOT NO. SP7 SIA JAIPUR PIN-302020" },
    { code: "INKKU6", location: "ICD Concor Kanakpura, Jaipur" },
    { code: "INBGK6", location: "ICD CONCOR NEW POWER HOUSE BHAGAT KI KOTHI JODHPUR" },
    { code: "INBWD6", location: "ICD RAJSICO SECTOR 9 UIT COLONY BHIWADI RAJASTHAN" },
    { code: "INJUX6", location: "ICD RAJSICO BASNI PHASE-II JODHPUR 342005" },
    { code: "INTHA6", location: "ICD THAR DRY PORT BARMER ROAD PAL GAON JODHPUR" },
    { code: "INBHL6", location: "ICD BHILWARA SECTOR 5 AZAD NAGAR BHILWARA 342005" },
    { code: "INKTT6", location: "ICD CONCOR RAWATHA ROAD POST: MANDANA KOTA" },
    { code: "INCML6", location: "ICD KATHUWAS, MADHAN VILL, DIST ALWAR, RAJASTHAN" },
    { code: "INTUT6", location: "ICD Tuticorin" },
    { code: "INTDE6", location: "ICD THUDIALUR 2/235C M'PALAYAM ROAD COIMBATORE" },
    { code: "INCHE6", location: "ICD CHETTIPALAYAM, SF129 AVINASHI TALUK TIRUPUR 52" },
    { code: "INTUP6", location: "ICD TIRUPUR RAAKIYAPALAYAM AVINASHI TIRUPUR 54" },
    { code: "INIGU6", location: "ICD IRUGUR OPP IOC TERMINAL IRUGUR COIMBATORE" },
    { code: "INTHO6", location: "ICD VEERAPANDI, SF 352 & 353 PALLADAM ROAD TIRUPUR" },
    { code: "INAJJ6", location: "ICD ARAKKONAM, MARUTI PARK NETAJI NAGAR KAINOOR-3" },
    { code: "INKAR6", location: "ICD KARUR, ANDANDKOIL WEST, KUTKADAI, KARUR, TN" },
    { code: "INILP6", location: "ICD IRUNGATTUKOTTAL, SRIPERUMBUDUR - 602105" },
    { code: "INTVT6", location: "M/S Concor, Ennore High Road, Tiruvottiyur, Chennai" },
    { code: "INMDU6", location: "ICD KERN, ARUPPUKOTTAI, MADURAI, TAMIL NADU" },
    { code: "INSXE6", location: "ICD ELCOT AMMAPALAYAM, Tamil Nadu" },
    { code: "INSNF6", location: "ICD SANATHNAGAR, HYDERABAD, 500018" },
    { code: "INDER6", location: "ICD Dadri, Gautam Budh Nagar, UP -203207" },
    { code: "INKNU6", location: "ICD JRY KANPUR, PO: RK NAGAR KANPUR - 208012" },
    { code: "INCPC6", location: "ICD CHAKERI, GT ROAD, KANPUR -208007" },
    { code: "INMBD6", location: "ICD LOCOSHED MORADABAD UP" },
    { code: "INBLJ6", location: "ICD AGRA, EAST BANK, MOTIMAHAL, AGRA UP" },
    { code: "INLON6", location: "ICD LONI, DISTRICT GHAZIABAD, UP" },
    { code: "INPNK6", location: "KLPL ICD, PANKI, KANPUR" },
    { code: "INAIK6", location: "VILLAGE IBRAHIMBUR, POST KHURJA, BULANDSHAHR, UP" },
    { code: "INMUZ6", location: "MODINAGAR ICD, NOIDA, UTTAR PRADESH" },
    { code: "INMBS6", location: "MADHOSINGH ICD, UTTAR PRADESH" },
    { code: "INHDD6", location: "ICD PANTNAGAR, UTTARAKHAND" },
    { code: "INHPI6", location: "ICD, KIFTPL KASHIPUR, US NAGAR-244713 UTTARAKHAND" },
    { code: "INDUR6", location: "ALLIED ICD SERVICES LTD, EPIP, BANSKOPA, DURGAPUR" },
    { code: "INNJP6", location: "ICD DABGRAM, GHORA MORE, WB" },
  ],
  "CFS Port": [
    { code: "INAPL6", location: "Albatross Inland Ports Pvt. Ltd. Dadri" },
    { code: "INSTT6", location: "Star Track Terminal Pvt Ltd ICD Dadri" },
    { code: "INTTP6", location: "Trident Dadri" },
    { code: "INCPL6", location: "CGM DADARI" },
  ],
  "LCS Port": [
    { code: "INPBLB", location: "LAND CUSTOMS STATION- KAMARDWISA" },
    { code: "INDRGB", location: "LAND CUSTOMS STATION, BAKSA-BTAD, DARRANGA, ASSAM" },
    { code: "INSTRB", location: "LCS SUTARKANDI KARIMGANJ" },
    { code: "INGKJB", location: "LCS Golakganj" },
    { code: "INHTSB", location: "LCS Hatisar" },
    { code: "INMKCB", location: "LCS Manikarchar" },
    { code: "INDHB1", location: "Dhubari Steamerghat" },
    { code: "INGHW1", location: "Guwahati Steamerghat Pandu Port" },
    { code: "INMNUB", location: "Manu LCS" },
    { code: "INKGJB", location: "LCS Karimganj" },
    { code: "INVKNB", location: "Valimikinagar" },
    { code: "INRXLB", location: "LCS RAXAUL, DIST: EAST CHAPARAN, BIHAR" },
    { code: "INJBNB", location: "LCS JOGBANI, DIST: ARARIA, BIHAR" },
    { code: "INBGUB", location: "LAND CUSTOMS STATION, BAIRGANIA, DIST. SITAMARHI," },
    { code: "INBTMB", location: "LAND CUSTOMS STATION, BHITAMORE, BIHAR" },
    { code: "INGALB", location: "LAND CUSTOMS STATION, GALGALIA,BIHAR" },
    { code: "INJAYB", location: "LCS JAYANAGAR, DIST-MADHUBANI, BIHAR" },
    { code: "INKNLB", location: "LAND CUSTOMS STATION- KUNAULI, BIHAR" },
    { code: "INBNRB", location: "LCS BHIMNAGAR, DIST-SUPUAL, BIHAR" },
    { code: "INSNBB", location: "LAND CUSTOMS STATION-SONBARSA, SITAMARHI, BIHAR" },
    { code: "INLKQB", location: "LCS LAUKAHA, DIST- MADHUBANI, BIHAR" },
    { code: "INKJIB", location: "LAND CUSTOMS STATION PIPRAUN, BIHAR" },
    { code: "INMREB", location: "LCS MOREH, TENGNOUPAL DISTRICT, MANIPUR" },
    { code: "INDWKB", location: "LCS Dawki" },
    { code: "INMGHB", location: "LCS Mehendraganj" },
    { code: "INDLUB", location: "LCS Dalu" },
    { code: "INBGMB", location: "LCS Baghmara" },
    { code: "INBOLB", location: "LCS Bholaganj" },
    { code: "INGHPB", location: "LCS Ghasuapara" },
    { code: "INSBZB", location: "LCS SHELLABAZAR" },
    { code: "INBRAB", location: "LCS Borsora" },
    { code: "INCHPB", location: "LCS Zokhawthar, Champhai district, Mizoram, India" },
    { code: "INATRB", location: "LCS ROAD CARGO, ATTARI ROAD, AMRITSAR, PUNJAB" },
    { code: "INASR2", location: "AMRITSAR RAIL CARGO" },
    { code: "INSMPB", location: "LAND CUSTOMS STATION- SRIMANTAPUR, TRIPURA" },
    { code: "INAGTB", location: "LAND CUSTOMS STATION- AGARTALA, TRIPURA" },
    { code: "INMHGB", location: "LAND CUSTOMS STATION- MUHURIGHAT" },
    { code: "INRGBB", location: "LCS OLD RAGHNA BAZAR" },
    { code: "INKWGB", location: "LCS Khowaighat" },
    { code: "INBNYB", location: "BERHNI LCS, LUCKNOW CUSTOMS, UTTAR PRADESH" },
    { code: "INTKNB", location: "TIKONIA LCS, LUCKNOW CUSTOMS, UTTAR PRADESH" },
    { code: "INSNLB", location: "LCS SONAULI, MAHARAJGANJ DIST, UP" },
    { code: "INNGRB", location: "LAND CUSTOMS STATION, NEPALGUNJ ROAD" },
    { code: "INNTVB", location: "LAND CUSTOMS STATION, THOOTHIBARI" },
    { code: "INJHOB", location: "LCS JHULAGHAT, DIST. PITHORAGARH, UTTARAKHAND." },
    { code: "INDLAB", location: "LCS DHARCHULA, DIST. PITHORAGARH, UTTARAKHAND" },
    { code: "INBSAB", location: "LCS BANBASA, CHAMPAWAT, UTTARAKHAND" },
    { code: "INPTPB", location: "LCS PETRAPOLE, BONGAON, WEST BENGAL" },
    { code: "INJIGB", location: "LCS JAIGAON, ALIPURDUAR DIST, WEST BENGAL" },
    { code: "INCHMB", location: "LCS CHAMURCHI, SILIGURI, WEST BENGAL" },
    { code: "INCBDB", location: "LCS CHANGRABANDHA, SILIGURI, WEST BENGAL" },
    { code: "INFBRB", location: "LCS FULBARI, SILIGURI, WEST BENGAL" },
    { code: "INRDP2", location: "LCS RADHIKAPUR RAILWAY STATION, WEST BENGAL" },
    { code: "INPNTB", location: "LCS PANITANKI (NAXALBARI), WEST BENGAL" },
    { code: "INDLOB", location: "LCS BIRPARA, SILIGURI, WEST BENGAL" },
    { code: "INCRXB", location: "LAND CUSTOMS STATION - LOKSAN" },
    { code: "INRNG2", location: "RANAGHAT RAILWAY STATION, NADIA, WEST BENGAL" },
    { code: "INSNG2", location: "SINGHABAD RAILWAY STATION, MALDA, WEST BENGAL" },
    { code: "INGJXB", location: "LCS - GHOJADANGA, PANITOR, WEST BENGAL" },
    { code: "INHLIB", location: "LCS- HILLI, BASUDEVPUR, WEST BENGAL" },
    { code: "INMHDB", location: "LAND CUSTOMS STATION-MAHADIPUR, MALDA, WEST BENGAL" },
    { code: "INRGJ2", location: "RAIGANJ RAILWAY STATION- SUDARSHANPUR, WEST BENGAL" },
    { code: "INHLD2", location: "HALDIBARI RAILWAY STATION, COOCHBEHAR, WEST BENGAL" },
    { code: "INKMAB", location: "LCS KULKULI" },
    { code: "INGED2", location: "LCS GEDE RAILWAY STATION, WEST BENGAL" },
    { code: "INNGKB", location: "Nagrakata LCS" },
    { code: "INLGL1", location: "Maia Riverine Port" },
  ],
};

export default function QuickForm() {
  const [portCategory, setPortCategory] = useState("");
  const [selectedPortCode, setSelectedPortCode] = useState("");
  const [portLocation, setPortLocation] = useState("");
  const [bank, setBank] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Custom autocomplete state
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCodes, setFilteredCodes] = useState([]);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  // Get the list of codes for the selected category
  const currentCodes = portCategory ? (portData[portCategory] || []).map(p => p.code) : [];

  // Filter codes based on input
  useEffect(() => {
    if (selectedPortCode.trim() === "") {
      setFilteredCodes(currentCodes);
    } else {
      const filtered = currentCodes.filter(code =>
        code.toLowerCase().includes(selectedPortCode.toLowerCase())
      );
      setFilteredCodes(filtered);
    }
  }, [selectedPortCode, currentCodes]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryChange = (e) => {
    setPortCategory(e.target.value);
    setSelectedPortCode("");
    setPortLocation("");
    setShowSuggestions(false);
    setErrors((p) => ({ ...p, portCategory: "", selectedPortCode: "" }));
  };

  const handlePortCodeChange = (e) => {
    const code = e.target.value.toUpperCase().trim();
    setSelectedPortCode(code);
    const found = (portData[portCategory] || []).find((p) => p.code === code);
    setPortLocation(found ? found.location : "");
    setErrors((p) => ({ ...p, selectedPortCode: "" }));
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (code) => {
    setSelectedPortCode(code);
    const found = (portData[portCategory] || []).find((p) => p.code === code);
    setPortLocation(found ? found.location : "");
    setShowSuggestions(false);
    setErrors((p) => ({ ...p, selectedPortCode: "" }));
  };

  const handleMobileChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(digits);
    setErrors((p) => ({ ...p, mobile: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!portCategory) newErrors.portCategory = "Please select a port category";
    if (!selectedPortCode) newErrors.selectedPortCode = "Please select/enter a port code";
    else {
      const validCodes = (portData[portCategory] || []).map(p => p.code);
      if (!validCodes.includes(selectedPortCode)) {
        newErrors.selectedPortCode = "Invalid port code for selected category";
      }
    }
    if (!bank.trim()) newErrors.bank = "Bank name is required";
    if (!mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const payload = {
        portCategory,
        portCode: selectedPortCode,
        portLocation,
        bank: bank.trim(),
        mobile: mobile.trim(),
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/ad-code-registration`,
        // "http://localhost:5000/api/ad-code-registration", // ✅ http:// is required        
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Something went wrong");
      }

      alert("✅ Request submitted successfully");

      setPortCategory("");
      setSelectedPortCode("");
      setPortLocation("");
      setBank("");
      setMobile("");
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Check Port Status</h3>
      <p className="text-slate-500 mb-6 text-sm">Verify if your AD Code is active.</p>

      <form onSubmit={handleSubmit}>
        {/* Port Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Port Category</label>
          <select
            value={portCategory}
            onChange={handleCategoryChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.portCategory ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">-- Select Port Category --</option>
            <option value="Sea Port">Sea Port</option>
            <option value="Air Port">Air Port</option>
            <option value="ICD Port">ICD Port</option>
            <option value="CFS Port">CFS Port</option>
            <option value="LCS Port">LCS Port</option>
          </select>
          {errors.portCategory && <p className="text-red-500 text-xs mt-1">{errors.portCategory}</p>}
        </div>

        {/* Port Code with custom left-aligned dropdown */}
        {portCategory && (
          <div className="mb-4 relative" ref={wrapperRef}>
            <label className="block text-sm font-semibold mb-1">Port Code</label>
            <input
              ref={inputRef}
              type="text"
              value={selectedPortCode}
              onChange={handlePortCodeChange}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Type or select port code"
              className={`w-full border rounded px-3 py-2 text-left focus:outline-none focus:border-brand-500 ${
                errors.selectedPortCode ? "border-red-500" : "border-slate-300"
              }`}
              autoComplete="off"
            />
            {showSuggestions && filteredCodes.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-slate-300 rounded mt-1 max-h-60 overflow-auto shadow-lg">
                {filteredCodes.map(code => (
                  <li
                    key={code}
                    onClick={() => handleSuggestionClick(code)}
                    className="px-3 py-2 hover:bg-brand-50 cursor-pointer text-left"
                  >
                    {code}
                  </li>
                ))}
              </ul>
            )}
            {errors.selectedPortCode && <p className="text-red-500 text-xs mt-1">{errors.selectedPortCode}</p>}
          </div>
        )}

        {/* Port Location */}
        {portLocation && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <label className="block text-sm font-semibold mb-1 text-blue-800">Port Location</label>
            <p className="text-slate-700 text-sm">{portLocation}</p>
          </div>
        )}

        {/* Bank Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Bank Name</label>
          <input
            type="text"
            placeholder="e.g. HDFC Bank"
            value={bank}
            onChange={(e) => {
              setBank(e.target.value);
              setErrors((p) => ({ ...p, bank: "" }));
            }}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.bank ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.bank && <p className="text-red-500 text-xs mt-1">{errors.bank}</p>}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            placeholder="9876543210"
            value={mobile}
            maxLength={10}
            onChange={handleMobileChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading ? "bg-brand-400 cursor-not-allowed" : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get Status Update"}
        </button>
      </form>
    </div>
  );
}