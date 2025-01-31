import React from "react";

// Sample JSON data for multiple vehicles
const vehiclesData = [
  {
    model: "TVS Ntorq 125",
    engine: {
      capacity: "124.8cc",
      type: "single-cylinder, air-cooled, 3-valve",
      power: "9.25 bhp at 7,500 rpm",
      torque: "10.5 Nm at 5,500 rpm",
      transmission: "CVT",
      top_speed: "95 km/h",
      acceleration: "0 to 60 km/h in 6.5 seconds",
    },
    dimensions: {
      kerb_weight: "118 kg",
      seat_height: "770 mm",
      wheelbase: "1,285 mm",
      fuel_tank_capacity: "5.8 liters",
    },
    braking_suspension: {
      front_brake: "220 mm disc",
      rear_brake: "130 mm drum",
      braking_system: "Combined Braking System (CBS)",
      front_suspension: "Telescopic forks",
      rear_suspension: "Gas-filled hydraulic type coil spring shock absorber",
    },
    features: {
      instrument_console: "Fully digital with Bluetooth connectivity",
      lighting: "LED headlamp and tail lamp",
      additional_features: [
        "Engine kill switch",
        "Pass switch",
        "External fuel filler cap",
        "USB charging port",
        "Under-seat storage light",
      ],
    },
    pricing: {
      standard_edition: "₹94,324",
      xt: "₹1,09,889",
    },
    fuel_efficiency: {
      mileage_arai: "48.5 kmpl",
    },
    competitors: [
      "Suzuki Avenis 125",
      "Honda Grazia",
      "Hero Maestro Edge 125",
      "Aprilia SR 125",
      "Yamaha Ray ZR 125",
    ],
    pros: ["Sporty design", "Advanced features", "Good handling"],
    cons: ["Fuel efficiency could be better", "Plastic quality could improve"],
  },
  {
    model: "Honda Activa 125",
    engine: {
      capacity: "124 cc",
      type: "Air-cooled, single-cylinder, 2-valve",
      power: "8.19 bhp at 6,250 rpm",
      torque: "10.4 Nm at 5,000 rpm",
      transmission: "Automatic (CVT)",
      top_speed: "90 km/h",
      acceleration: "",
    },
    dimensions: {
      kerb_weight: "110 kg",
      seat_height: "712 mm",
      wheelbase: "1,260 mm",
      fuel_tank_capacity: "5.3 liters",
    },
    braking_suspension: {
      front_brake: "130 mm drum",
      rear_brake: "130 mm drum",
      braking_system: "Combined Braking System (CBS)",
      front_suspension: "Telescopic Suspension",
      rear_suspension: "3-Step Adjustable Spring Loaded Hydraulic",
    },
    features: {
      instrument_console: "Semi-Digital",
      lighting: "LED headlamp",
      additional_features: [
        "External Fuel Filling",
        "Pass Switch",
        "Engine Kill Switch",
        "Underseat Storage",
        "Front Storage Box",
      ],
    },
    pricing: {
      standard_edition: "₹83,958",
      xt: "",
    },
    fuel_efficiency: {
      mileage_arai: "",
      mileage_owner_reported: "47 kmpl",
    },
    competitors: [
      "Suzuki Access 125",
      "TVS Jupiter 125",
      "Yamaha Fascino 125",
      "Hero Destini 125 Xtec",
      "Yamaha Ray ZR 125",
    ],
    pros: [],
    cons: [],
  },
  {
    model: "TVS Jupiter",
    engine: {
      capacity: "113.3cc",
      type: "single-cylinder, air-cooled, 4-stroke",
      power: "7.91 bhp at 7,500 rpm",
      torque: "9.8 Nm at 5,500 rpm",
      transmission: "CVT",
      top_speed: "80 km/h",
      acceleration: "0 to 60 km/h in 11.2 seconds",
    },
    dimensions: {
      kerb_weight: "106 kg",
      seat_height: "765 mm",
      wheelbase: "1,275 mm",
      fuel_tank_capacity: "5.1 liters",
    },
    braking_suspension: {
      front_brake: "130 mm drum (optional disc)",
      rear_brake: "130 mm drum",
      braking_system: "Combined Braking System (CBS)",
      front_suspension: "Telescopic forks",
      rear_suspension: "Gas-charged mono-shock",
    },
    features: {
      instrument_console:
        "Analog (optional digital with Bluetooth connectivity)",
      lighting: "LED headlamp and tail lamp",
      additional_features: [
        "External fuel filler cap",
        "USB charging port",
        "Under-seat storage light",
        "Econometer",
        "iGO assist feature",
      ],
    },
    pricing: {
      drum: "₹78,175",
      drum_alloy: "₹83,093",
      smartxonnect_drum: "₹86,672",
      smartxonnect_disc: "₹90,478",
    },
    fuel_efficiency: {
      mileage_arai: "53.84 kmpl",
    },
    competitors: [
      "Honda Activa 6G",
      "Suzuki Access 125",
      "Hero Maestro Edge 110",
      "Yamaha Fascino 125",
      "Honda Dio",
    ],
    pros: [
      "Comfortable ride quality",
      "Good fuel efficiency",
      "Practical features like external fuel filler",
    ],
    cons: [
      "Conservative styling compared to some rivals",
      "Lacks the performance of 125cc competitors",
    ],
  },
  {
    model: "Vespa VXL 125",
    engine: {
      capacity: "124.45cc",
      type: "single-cylinder, air-cooled",
      power: "9.65 bhp",
      torque: "10.11 Nm",
      transmission: "CVT",
      top_speed: "",
      acceleration: "",
    },
    dimensions: {
      kerb_weight: "115 kg",
      seat_height: "770 mm",
      wheelbase: "",
      fuel_tank_capacity: "7.4 liters",
    },
    braking_suspension: {
      front_brake: "200 mm disc",
      rear_brake: "140 mm drum",
      braking_system: "Combined Braking System (CBS)",
      front_suspension: "Single side arm suspension",
      rear_suspension: "Hydraulic monoshock",
    },
    features: {
      instrument_console: "Digital display with analogue speedometer",
      lighting: "Full-LED headlamp",
      additional_features: ["USB charger", "Under-seat light"],
    },
    pricing: {
      standard_edition: "₹1,31,940",
      xt: "",
    },
    fuel_efficiency: {
      mileage_arai: "38 kmpl",
    },
    competitors: ["Aprilia SXR 125", "Honda Activa 125", "Suzuki Access 125"],
    pros: [
      "Stylish retro design",
      "Premium build quality",
      "Easy handling due to light weight",
    ],
    cons: ["Stiff ride quality", "Brakes lack bite", "Limited service reach"],
  },
  {
    model: "Suzuki Access 125",
    engine: {
      capacity: "124 cc",
      type: "4-stroke, single-cylinder, air-cooled",
      power: "8.7 PS at 6,750 rpm",
      torque: "10 Nm at 5,500 rpm",
      transmission: "CVT",
      top_speed: "90 km/h",
      acceleration: "",
    },
    dimensions: {
      kerb_weight: "103 kg",
      seat_height: "773 mm",
      wheelbase: "1,265 mm",
      fuel_tank_capacity: "5 liters",
    },
    braking_suspension: {
      front_brake: "Drum (Disc in higher variants)",
      rear_brake: "Drum",
      braking_system: "Combined Braking System (CBS)",
      front_suspension: "Telescopic",
      rear_suspension: "Swing Arm",
    },
    features: {
      instrument_console: "Analogue (Digital in higher variants)",
      lighting: "LED headlamp and tail lamp",
      additional_features: [
        "External fuel filler cap",
        "USB charging port",
        "Under-seat storage of 21.8 liters",
        "Bluetooth-enabled digital console (in Ride Connect Edition)",
        "Inbuilt navigation system (in Ride Connect Edition)",
      ],
    },
    pricing: {
      drum_variant: "₹83,061",
      disc_variant: "₹88,098",
      special_edition: "₹89,899",
      ride_connect_edition: "₹93,909",
    },
    fuel_efficiency: {
      mileage_arai: "45 kmpl",
    },
    competitors: ["Honda Activa 125", "TVS Jupiter 125", "Yamaha Fascino 125"],
    pros: [
      "Good mileage",
      "Comfortable ride quality",
      "Easy to maneuver in city traffic",
    ],
    cons: [
      "Instrument cluster looks dated",
      "Lacks features like engine idle start-stop system",
    ],
  },
  {
    model: "Royal Enfield Classic 350",
    engine: {
      capacity: "349 cc",
      type: "Single-cylinder, air/oil-cooled, 4-stroke",
      power: "20.2 bhp at 6,100 rpm",
      torque: "27 Nm at 4,000 rpm",
      transmission: "5-speed manual",
      top_speed: "115 km/h",
      acceleration: "Not specified",
    },
    dimensions: {
      kerb_weight: "195 kg",
      seat_height: "805 mm",
      wheelbase: "1,390 mm",
      fuel_tank_capacity: "13 liters",
    },
    braking_suspension: {
      front_brake: "300 mm disc with 2-piston caliper",
      rear_brake: "270 mm disc with 1-piston caliper",
      braking_system: "Dual-channel ABS",
      front_suspension: "Telescopic forks, 41 mm diameter, 130 mm travel",
      rear_suspension:
        "Twin tube emulsion shock absorbers with 6-step adjustable preload",
    },
    features: {
      instrument_console: "Semi-digital with LCD display",
      lighting: "LED headlight and halogen tail light",
      additional_features: [
        "USB charging port",
        "Gear position indicator",
        "Adjustable brake and clutch levers",
        "LED position lights",
      ],
    },
    pricing: {
      heritage: "₹1,99,499",
      heritage_premium: "₹2,03,992",
      signals: "₹2,16,000",
      dark: "₹2,25,000",
      chrome: "₹2,30,000",
    },
    fuel_efficiency: {
      mileage_owner_reported: "35 kmpl",
    },
    competitors: [
      "Honda CB350",
      "Royal Enfield Bullet 350",
      "Royal Enfield Meteor 350",
      "Jawa 42",
      "Harley-Davidson X440",
    ],
    pros: [
      "Revised styling looks fantastic",
      "350cc motor churns out lots of torque",
      "Great seating comfort & ergonomics",
    ],
    cons: [
      "Stiff ride quality",
      "Top-end variant is quite expensive",
      "Pillion seat needs to be purchased separately",
    ],
  },
  
];

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 my-4">
      <div className="bg-gray-900 p-4">
        <h2 className="text-2xl font-bold text-yellow-400">{vehicle.model}</h2>
      </div>
      <div className="p-4 space-y-4">
        {/* Engine Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Engine</h3>
          <p className="text-gray-300">
            Capacity: {vehicle.engine?.capacity || "N/A"}, Type:{" "}
            {vehicle.engine?.type || "N/A"}, Power:{" "}
            {vehicle.engine?.power || "N/A"}, Torque:{" "}
            {vehicle.engine?.torque || "N/A"}, Transmission:{" "}
            {vehicle.engine?.transmission || "N/A"}
          </p>
          {vehicle.engine?.top_speed && (
            <p className="text-gray-300">
              Top Speed: {vehicle.engine.top_speed}
            </p>
          )}
        </div>

        {/* Dimensions Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Dimensions</h3>
          <p className="text-gray-300">
            Weight: {vehicle.dimensions?.kerb_weight || "N/A"}, Seat Height:{" "}
            {vehicle.dimensions?.seat_height || "N/A"}, Wheelbase:{" "}
            {vehicle.dimensions?.wheelbase || "N/A"}, Fuel Tank:{" "}
            {vehicle.dimensions?.fuel_tank_capacity || "N/A"}
          </p>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Features</h3>
          <p className="text-gray-300">
            Instrument Console: {vehicle.features?.instrument_console || "N/A"}
          </p>
          <ul className="list-disc list-inside text-gray-300 marker:text-yellow-400">
            {vehicle.features?.additional_features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Pricing Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Pricing</h3>
          <p className="text-gray-300">
            Standard Edition: {vehicle.pricing?.standard_edition || "N/A"}, XT
            Edition: {vehicle.pricing?.xt || "N/A"}
          </p>
        </div>

        {/* Fuel Efficiency Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">
            Fuel Efficiency
          </h3>
          <p className="text-gray-300">
            Mileage: {vehicle.fuel_efficiency?.mileage_arai || "N/A"}
          </p>
        </div>

        {/* Pros and Cons */}
        <div className="flex justify-between">
          {vehicle.pros && vehicle.pros.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-yellow-400">Pros</h3>
              <ul className="list-disc list-inside text-gray-300 marker:text-yellow-400">
                {vehicle.pros.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
            </div>
          )}
          {vehicle.cons && vehicle.cons.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-yellow-400">Cons</h3>
              <ul className="list-disc list-inside text-gray-300 marker:text-yellow-400">
                {vehicle.cons.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const VehicleCardComponent = () => {
  return (
    <div className="bg-gray-500 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Vehicle Descriptions
      </h1>
      {vehiclesData.map((vehicle, index) => (
        <VehicleCard key={index} vehicle={vehicle} />
      ))}
    </div>
  );
};


export default VehicleCardComponent;
