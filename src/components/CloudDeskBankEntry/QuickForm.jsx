import { useState, useRef, useEffect } from "react";

const PORTS = [
  "INIXZ1 - Port Blair, Andaman & Nicobar Islands (Sea)",
  "INKAK1 - Kakinada Custom House",
  "INVTZ1 - Visakhapatnam Custom House",
  "INGGV1 - Gangavaram Port, Andhra Pradesh",
  "INGNR6 - ICD Marripalam, Guntur, A.P.",
  "INKRI1 - Krishnapatnam Port, Nellore",
  "INVTZ4 - Air Cargo Complex Visakhapatnam",
  "INTMX6 - ICD Thimmapur, A.P.",
  "INAMG6 - ICD Amingaon, Guwahati",
  "INGAU4 - Guwahati Air Cargo, Borjhar",
  "INPBLB - LCS Kamardwisa",
  "INDRGB - LCS Darranga, Assam",
  "INKGJ1 - Custom House Karimganj Steamerghat",
  "INSTRB - LCS Sutarkandi, Karimganj",
  "INGKJB - LCS Golakganj",
  "INHTSB - LCS Hatisar",
  "INMKCB - LCS Manikarchar",
  "INDHB1 - Dhubari Steamerghat",
  "INGHW1 - Guwahati Steamerghat Pandu Port",
  "INMNUB - Manu LCS",
  "INKGJB - LCS Karimganj",
  "INVKNB - Valimikinagar",
  "INRXLB - LCS Raxaul, Bihar",
  "INJBNB - LCS Jogbani, Bihar",
  "INBGUB - LCS Bairgania, Bihar",
  "INBTMB - LCS Bhitamore, Bihar",
  "INGALB - LCS Galgalia, Bihar",
  "INJAYB - LCS Jayanagar, Bihar",
  "INKNLB - LCS Kunauli, Bihar",
  "INBNRB - LCS Bhimnagar, Bihar",
  "INSNBB - LCS Sonbarsa, Bihar",
  "INLKQB - LCS Laukaha, Bihar",
  "INKJIB - LCS Pipraun, Bihar",
  "INRAI6 - ICD Raipur, Chhattisgarh",
  "INRML6 - ICD Naya Raipur, Chhattisgarh",
  "INPPG6 - ICD Patparganj",
  "INTKD6 - ICD Tuglakabad",
  "INDEL4 - ACC Delhi",
  "INBWS6 - AFS Kapashera Bijwasan Road, New Delhi",
  "INMRM1 - New Custom House Marmagoa, Goa",
  "INGOI4 - Goa Air Cargo Complex, Marmagoa",
  "INMDG6 - ICD Verna, Margoa, Goa",
  "INPAN1 - Panaji Port, Goa",
  "INBLO6 - ICD Balli",
  "INGOX4 - ACC Manohar International Airport, Mopa, Goa",
  "INSBI6 - ICD Sabarmati, Ahmedabad",
  "INAMD4 - ACC Ahmedabad",
  "INMUN1 - CH Mundra",
  "INIXY1 - Custom House Kandla",
  "INBRC6 - ICD Dasrath, Vadodara",
  "INVPI6 - ICD Valvada, Valsad, Gujarat",
  "INPAV1 - Custom House GPPL Pipavav, Gujarat",
  "INMDA1 - Magdalla Port, Surat",
  "INDAH1 - Dahej Port, Gujarat",
  "INSAU6 - ICD Thar Dry Port, Sanand, Ahmedabad",
  "INSAC6 - Surat Diamond Park, Sachin",
  "INAKV6 - ICD Ankleshwar, Gujarat",
  "INKBC6 - Kribhco Infstr Ltd, Hazira, Surat",
  "INHZA1 - Hazira Port, Surat",
  "INBED1 - Bedi Port, Jamnagar",
  "INPBD1 - Porbandar Port, Gujarat",
  "INBHU1 - Bhavnagar Port, Gujarat",
  "INOKH1 - Okha Port, Gujarat",
  "INNAV1 - Navlakhi Port, Gujarat",
  "INALA1 - Alang Port, Gujarat",
  "INSAJ6 - ICD Tumb, Valsad, Gujarat",
  "INHIR6 - Surat Hira Bourse, Katargam",
  "INJKA6 - ICD Sachana, Ahmedabad",
  "INSIK1 - Sikka Port, Jamnagar",
  "INVAD1 - Vadinar Port, Gujarat",
  "INOMU1 - Old Mundra Port, Gujarat",
  "INJAK1 - Jakhau Port, Gujarat",
  "INJGA4 - Jamnagar Air Cargo, Gujarat",
  "INKDN1 - Kodinar Port, Gujarat",
  "INTUN1 - Tuna Port, Kandla",
  "INSAL1 - Essar Bulk Terminal, Salaya, Gujarat",
  "INVGR6 - ICD Viramgam, Ahmedabad",
  "INWDH6 - ICD Morbi",
  "INVRM6 - ICD Varnama",
  "INFBD6 - ICD Ballabhgarh, Faridabad",
  "INREA6 - ICD Rewari, Haryana",
  "INGHR6 - ICD Gari Harasaru",
  "INPTL6 - ICD Patli, Gurgaon",
  "INPNP6 - ICD Panipat",
  "INBVC6 - ICD Concor Sector 25, Faridabad",
  "INBFR6 - ICD Piyala",
  "INPKR6 - Kribhco Logistics Park, Rewari",
  "INBDM6 - Panchi Gujaran, Sonepat, Haryana",
  "INBAW6 - ICD Bawal, Rewari, Haryana",
  "INDWN6 - ICD Jattipur, Panipat, Haryana",
  "INPWL6 - ICD Palwal, Haryana",
  "INRUG6 - ICD Barhi, Sonepat, Haryana",
  "INBDI6 - Concor Baddi, Himachal Pradesh",
  "INSXR4 - Srinagar Air Cargo, J&K",
  "INIXW6 - ICD Jamshedpur, Jharkhand",
  "INWFD6 - ICD Bangalore",
  "INNML1 - New Custom House Mangalore",
  "INBLR4 - ACC Bangalore",
  "INHSU6 - SIPCOT ICD Hosur",
  "INKRW1 - Karwar Port, Karnataka",
  "INIXE1 - Old Mangalore Port",
  "INHAS6 - ICD Hassan, Karnataka",
  "INIXE4 - Mangalore Air Cargo",
  "INDRU6 - ICD Desur, Belgaum",
  "INKQZ6 - Sattva Bengaluru ICD, Koorgal",
  "INCOK1 - Cochin Custom House",
  "INTRV4 - ACC Thiruvananthapuram",
  "INCOK4 - Kochi Airport, Nedumbassery",
  "INCCJ4 - Kozhikode (Calicut) Air Cargo",
  "INKYM6 - ICD Kottayam, Kerala",
  "INTCR6 - ICD Mathilakam, Thrissur",
  "INKUK1 - Kollam, Kerala",
  "INBEY1 - Beypore Port, Calicut",
  "INAZK1 - Azhikkal Port, Kerala",
  "INVZJ1 - Vizhinjam Port, Kerala",
  "INCNN4 - ACC Kannur International Airport",
  "ININD6 - ICD Pithampur, Dhar, M.P.",
  "INMDD6 - ICD Madideep, Raisen, M.P.",
  "INIDR4 - ACC Indore Airport",
  "INRTM6 - ICD Ratlam, M.P.",
  "INDHA6 - ICD Dhannad",
  "INPRK6 - ICD Powarkheda, Hoshangabad",
  "INKHD6 - ICD Kheda, Pithampur, M.P.",
  "INMPR6 - ICD Malanpur, Bhind, M.P.",
  "INBOM1 - New Custom House, Mumbai",
  "INBOM4 - ACC Sahar, Mumbai",
  "INNSA1 - JNCH Nhava Sheva",
  "INMWA6 - ICD Maliwada, Aurangabad",
  "INWAL6 - ICD Waluj, Aurangabad",
  "INNGP6 - ICD Nagpur",
  "INNSK6 - CFS Nasik",
  "INJNR6 - ICD Janori, Nasik",
  "INDIG6 - ICD Dighi, Pune",
  "INTLG6 - ICD Talegaon, Pune",
  "INCCH6 - ICD Chinchwad, Pune",
  "INBSL6 - ICD Bhusawal, Maharashtra",
  "INJNR4 - ACC Janori, Nasik",
  "INPMP6 - ICD Pimpri, Pune",
  "INDPC4 - PCCCC, Bandra-Kurla Complex",
  "INDMT1 - Dharamtar Port, Alibag",
  "INCHJ6 - ICD Wardha, Maharashtra",
  "INBNG6 - ICD Tarapur, Thane",
  "INNGB6 - ICD Butibori, Nagpur",
  "INBOK6 - ICD Borkhedi, Nagpur",
  "INJGD1 - Jaigad Port, Ratnagiri",
  "INDIG1 - Dighi Port, Raigad",
  "INRVD1 - Revdanda Port, Raigad",
  "INPNQ4 - ACC Lohegam, Pune",
  "INDHP1 - Dabhol Port, Ratnagiri",
  "INKSH1 - Kelshi Port, Dapoli",
  "INBKT1 - Bankot Port, Maharashtra",
  "INRNR1 - Ranpar Port, Ratnagiri",
  "INVYD1 - Vijaydurg Port, Maharashtra",
  "INDHU1 - Dahanu Port, Maharashtra",
  "INNAG4 - Nagpur Air Cargo",
  "INRED1 - Redi Port, Ratnagiri",
  "INGRW6 - ICD Bhamboli-APM, Chakan, Pune",
  "INKPK6 - Concor ICD, MIHAN, Nagpur",
  "INBOA6 - ICD Borkhedi Adani, Nagpur",
  "INMREB - LCS Moreh, Manipur",
  "INDWKB - LCS Dawki",
  "INMGHB - LCS Mehendraganj",
  "INDLUB - LCS Dalu",
  "INBGMB - LCS Baghmara",
  "INBOLB - LCS Bholaganj",
  "INGHPB - LCS Ghasuapara",
  "INSBZB - LCS Shellabazar",
  "INBRAB - LCS Borsora",
  "INCHPB - LCS Zokhawthar, Champhai, Mizoram",
  "INPRT1 - Paradeep Port, Odisha",
  "INSKD6 - ICD Kalinganagar, Odisha",
  "INDMA1 - Dhamra Port, Bhadrakh, Odisha",
  "INBBI4 - Bhubaneswar Air Cargo",
  "INGPR1 - Gopalpur Port, Odisha",
  "INBLE6 - ICD Balasore, Odisha",
  "INJSG6 - ICD Jharsuguda, Odisha",
  "INJJK6 - Rail Linked ICD Jajpur, Odisha",
  "INPNY1 - Custom House Pondicherry",
  "INKRK1 - MKP Pvt Ltd, Karaikal",
  "INPNY6 - ICD Pulichapallam, Pondicherry",
  "INLDH6 - ICD Dhandari Kalan, Ludhiana",
  "INATQ4 - SGRD International Airport, Amritsar",
  "INJUC6 - ICD Jalandhar",
  "INASR6 - ICD Chehertta, Amritsar",
  "INATRB - LCS Attari Road, Amritsar",
  "INSNI6 - ICD Kanech, Sahnewal, Ludhiana",
  "INCPR6 - ICD Chawapayal, Ludhiana",
  "INSGF6 - ICD GRFL, Sahnewal, Ludhiana",
  "INDDL6 - ICD PSWC, Dhandari Kalan, Ludhiana",
  "INASR2 - Amritsar Rail Cargo",
  "INQRP6 - Adani ICD Kilaraipur, Ludhiana",
  "INDPR6 - ICD PSWC, Dappar, Derabassi",
  "INQRH6 - HTPL Kilaraipur ICD, Ludhiana",
  "INGPL6 - ICD PLIL, Ghungrana",
  "INJAI6 - ICD Sanganer, Jaipur",
  "INKKU6 - ICD Concor Kanakpura, Jaipur",
  "INBGK6 - ICD Bhagat Ki Kothi, Jodhpur",
  "INBWD6 - ICD Rajsico, Bhiwadi, Rajasthan",
  "INJUX6 - ICD Rajsico, Jodhpur",
  "INTHA6 - ICD Thar Dry Port, Jodhpur",
  "INBHL6 - ICD Bhilwara, Rajasthan",
  "INKTT6 - ICD Concor, Kota",
  "INJAI4 - ACC Sanganer, Jaipur",
  "INCML6 - ICD Kathuwas, Alwar, Rajasthan",
  "INTUT6 - ICD Tuticorin",
  "INTUT1 - CH Tuticorin",
  "INMAA1 - CH Chennai",
  "INMAA4 - ACC Chennai",
  "INTDE6 - ICD Thudialur, Coimbatore",
  "INCHE6 - ICD Chettipalayam, Tirupur",
  "INTUP6 - ICD Tirupur",
  "INIGU6 - ICD Irugur, Coimbatore",
  "INTHO6 - ICD Veerapandi, Tirupur",
  "INAJJ6 - ICD Arakkonam, Tamil Nadu",
  "INNPT1 - CH Nagapattinam",
  "INKAR6 - ICD Karur, Tamil Nadu",
  "INILP6 - ICD Irungattukottal, Sriperumbudur",
  "INCJB4 - ACC Coimbatore",
  "INENR1 - Kamarajar Port, Chennai",
  "INTVT6 - Concor, Tiruvottiyur, Chennai",
  "INKAT1 - Kattupalli Port, Tiruvellore",
  "INCDL1 - Cuddalore Port",
  "INIXM4 - Madurai Air Cargo",
  "INTRZ4 - Tiruchirapalli Air Cargo",
  "INMDU6 - ICD Kern, Madurai",
  "INSXE6 - ICD ELCOT Ammapalayam, Tamil Nadu",
  "INSNF6 - ICD Sanathnagar, Hyderabad",
  "INHYD4 - ACC Hyderabad",
  "INSMPB - LCS Srimantapur, Tripura",
  "INAGTB - LCS Agartala, Tripura",
  "INMHGB - LCS Muhurighat",
  "INRGBB - LCS Old Raghna Bazar",
  "INKWGB - LCS Khowaighat",
  "INAPL6 - Albatross ICD Dadri",
  "INSTT6 - Star Track Terminal ICD Dadri",
  "INTTP6 - Trident Dadri",
  "INCPL6 - CGM Dadri",
  "INDER6 - ICD Dadri, Gautam Budh Nagar",
  "INLOK4 - Lucknow Air Cargo",
  "INKNU6 - ICD Kanpur",
  "INCPC6 - ICD Chakeri, Kanpur",
  "INMBD6 - ICD Locoshed, Moradabad",
  "INBLJ6 - ICD Agra",
  "INLON6 - ICD Loni, Ghaziabad",
  "INPNK6 - KLPL ICD, Panki, Kanpur",
  "INAIK6 - ICD Khurja, Bulandshahr",
  "INMUZ6 - Modinagar ICD, Noida",
  "INBNYB - Berhni LCS, Uttar Pradesh",
  "INTKNB - Tikonia LCS, Uttar Pradesh",
  "INVNS4 - ACC Varanasi",
  "INLKO4 - Lucknow Air Cargo",
  "INMBS6 - Madhosingh ICD, Uttar Pradesh",
  "INSNLB - LCS Sonauli, Maharajganj",
  "INNGRB - LCS Nepalgunj Road",
  "INNTVB - LCS Thoothibari",
  "INHDD6 - ICD Pantnagar, Uttarakhand",
  "INHPI6 - ICD KIFTPL Kashipur, Uttarakhand",
  "INJHOB - LCS Jhulaghat, Pithoragarh",
  "INDLAB - LCS Dharchula, Pithoragarh",
  "INBSAB - LCS Banbasa, Champawat",
  "INCCU4 - ACC Kolkata",
  "INPTPB - LCS Petrapole, Bongaon",
  "INCCU1 - Custom House, Kolkata",
  "INDUR6 - ICD Durgapur, West Bengal",
  "INJIGB - LCS Jaigaon, Alipurduar",
  "INCHMB - LCS Chamurchi, Siliguri",
  "INCBDB - LCS Changrabandha, Siliguri",
  "INFBRB - LCS Fulbari, Siliguri",
  "INRDP2 - LCS Radhikapur Railway Station",
  "INPNTB - LCS Panitanki (Naxalbari)",
  "INDLOB - LCS Birpara, Siliguri",
  "INCRXB - LCS Loksan",
  "INRNG2 - Ranaghat Railway Station, Nadia",
  "INSNG2 - Singhabad Railway Station, Malda",
  "INTTS1 - Custom House T.T Shed, Kidderpore",
  "INGJXB - LCS Ghojadanga, West Bengal",
  "INHLIB - LCS Hilli, West Bengal",
  "INMHDB - LCS Mahadipur, Malda",
  "INRGJ2 - Raiganj Railway Station, West Bengal",
  "INNJP6 - ICD Dabgram, West Bengal",
  "INHLD2 - Haldibari Railway Station, Coochbehar",
  "INKMAB - LCS Kulkuli",
  "INGED2 - LCS Gede Railway Station",
  "INHND1 - LCS Hemnagar Port",
  "INNGKB - Nagrakata LCS",
  "INLGL1 - Maia Riverine Port",
];

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    port: "",
    cargo: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Position dropdown using fixed coords to escape any overflow:hidden parent
  const positionDropdown = () => {
    if (!inputRef.current) return;
    const rect = inputRef.current.getBoundingClientRect();
    setDropdownStyle({
      position: "fixed",
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
      zIndex: 99999,
    });
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Reposition on scroll/resize
  useEffect(() => {
    if (!showDropdown) return;
    const reposition = () => positionDropdown();
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", reposition);
    return () => {
      window.removeEventListener("scroll", reposition, true);
      window.removeEventListener("resize", reposition);
    };
  }, [showDropdown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const filteredPorts = PORTS.filter((port) =>
    port.toLowerCase().includes(form.port.toLowerCase())
  ).slice(0, 50);

  const handlePortSelect = (selectedPort) => {
    setForm((prev) => ({ ...prev, port: selectedPort }));
    setShowDropdown(false);
    setErrors((prev) => ({ ...prev, port: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (form.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    if (!form.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact person name is required";
    } else if (form.contactPersonName.trim().length < 2) {
      newErrors.contactPersonName = "Contact person name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email ID";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);
      const payload = {
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        personName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile,
        port: form.port,   // ✅ matches backend: port field
        cargo: form.cargo, // ✅ matches backend: cargo field
        type: "QUICK_FORM",
      };
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/bill-of-entry-filing`,
        // "http://localhost:5000/api/bill-of-entry-filing", // ✅ http:// is required
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "API failed");
      }
      alert("Request submitted successfully");
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        port: "",
        cargo: "",
        mobile: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Submit error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5">

      <h3 className="text-lg font-bold text-brand-900 mb-1">
        Get Quote for Clearance
      </h3>

      <p className="text-slate-500 mb-3 text-xs">
        Need help with HS Code or Duty?
      </p>

      <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-3">

        {/* COMPANY NAME */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="e.g. Acme Exports Pvt Ltd"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.companyName ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
        </div>

        {/* CONTACT PERSON NAME */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Contact Person Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="contactPersonName"
            value={form.contactPersonName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.contactPersonName ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.contactPersonName && <p className="text-red-500 text-xs mt-1">{errors.contactPersonName}</p>}
        </div>

        {/* EMAIL */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. rahul@acmeexports.com"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* PORT OF IMPORT */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold mb-1">
            Port of Import
          </label>

          <input
            ref={inputRef}
            type="text"
            name="port"
            value={form.port}
            onChange={(e) => {
              handleChange(e);
              positionDropdown();
              setShowDropdown(true);
            }}
            onFocus={() => {
              positionDropdown();
              setShowDropdown(true);
            }}
            placeholder="Type to search port or code..."
            autoComplete="off"
            className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500"
          />

          {/* DROPDOWN — rendered via fixed position to escape parent overflow */}
          {showDropdown && (
            <div
              ref={dropdownRef}
              style={{
                ...dropdownStyle,
                background: "#fff",
                border: "1px solid #cbd5e1",
                borderRadius: "6px",
                maxHeight: "220px",
                overflowY: "auto",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              {filteredPorts.length > 0 ? (
                filteredPorts.map((port) => (
                  <div
                    key={port}
                    onMouseDown={() => handlePortSelect(port)}
                    style={{
                      padding: "8px 12px",
                      cursor: "pointer",
                      fontSize: "13px",
                      color: "#1e293b",
                      borderBottom: "1px solid #f1f5f9",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#f1f5f9")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {port}
                  </div>
                ))
              ) : (
                <div style={{ padding: "8px 12px", fontSize: "13px", color: "#94a3b8" }}>
                  No port found
                </div>
              )}
            </div>
          )}
        </div>

        {/* NATURE OF CARGO */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold mb-1">
            Nature of Cargo
          </label>
          <input
            type="text"
            name="cargo"
            value={form.cargo}
            onChange={handleChange}
            placeholder="e.g. Machinery parts, Fabric"
            className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* MOBILE NUMBER */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            maxLength={10}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`md:col-span-2 w-full text-white font-bold py-2 text-sm rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get Estimate"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;
