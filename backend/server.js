const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Base Real Data
const areas = [
  // 🇮🇳 INDIA
  { name: "Delhi", lat: 28.6139, lng: 77.2090, infra: 9, priceGrowth: 8, rentDemand: 9, oversupply: 6 },
  { name: "Mumbai", lat: 19.0760, lng: 72.8777, infra: 9, priceGrowth: 9, rentDemand: 10, oversupply: 8 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946, infra: 8, priceGrowth: 9, rentDemand: 9, oversupply: 7 },
  { name: "Hyderabad", lat: 17.3850, lng: 78.4867, infra: 8, priceGrowth: 8, rentDemand: 8, oversupply: 6 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707, infra: 7, priceGrowth: 7, rentDemand: 8, oversupply: 6 },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639, infra: 7, priceGrowth: 6, rentDemand: 7, oversupply: 5 },
  { name: "Pune", lat: 18.5204, lng: 73.8567, infra: 8, priceGrowth: 8, rentDemand: 8, oversupply: 6 },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714, infra: 7, priceGrowth: 7, rentDemand: 7, oversupply: 5 },
  { name: "Jaipur", lat: 26.9124, lng: 75.7873, infra: 7, priceGrowth: 6, rentDemand: 6, oversupply: 5 },
  { name: "Lucknow", lat: 26.8467, lng: 80.9462, infra: 7, priceGrowth: 6, rentDemand: 7, oversupply: 5 },
  { name: "Chandigarh", lat: 30.7333, lng: 76.7794, infra: 8, priceGrowth: 7, rentDemand: 7, oversupply: 4 },
  { name: "Mohali", lat: 30.7046, lng: 76.7179, infra: 8, priceGrowth: 6, rentDemand: 7, oversupply: 4 },
  { name: "Zirakpur", lat: 30.6425, lng: 76.8173, infra: 7, priceGrowth: 6, rentDemand: 8, oversupply: 3 },
  { name: "Panchkula", lat: 30.6942, lng: 76.8606, infra: 7, priceGrowth: 6, rentDemand: 7, oversupply: 4 },
  { name: "Indore", lat: 22.7196, lng: 75.8577, infra: 7, priceGrowth: 7, rentDemand: 7, oversupply: 5 },
  { name: "Bhopal", lat: 23.2599, lng: 77.4126, infra: 6, priceGrowth: 6, rentDemand: 6, oversupply: 5 },
  { name: "Patna", lat: 25.5941, lng: 85.1376, infra: 6, priceGrowth: 6, rentDemand: 7, oversupply: 5 },
  { name: "Ranchi", lat: 23.3441, lng: 85.3096, infra: 6, priceGrowth: 5, rentDemand: 6, oversupply: 4 },
  { name: "Nagpur", lat: 21.1458, lng: 79.0882, infra: 7, priceGrowth: 6, rentDemand: 6, oversupply: 5 },
  { name: "Surat", lat: 21.1702, lng: 72.8311, infra: 8, priceGrowth: 7, rentDemand: 7, oversupply: 6 },

  // 🌍 WORLD
  { name: "New York", lat: 40.7128, lng: -74.0060, infra: 10, priceGrowth: 9, rentDemand: 10, oversupply: 8 },
  { name: "London", lat: 51.5074, lng: -0.1278, infra: 10, priceGrowth: 9, rentDemand: 9, oversupply: 7 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, infra: 9, priceGrowth: 8, rentDemand: 9, oversupply: 7 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, infra: 10, priceGrowth: 9, rentDemand: 9, oversupply: 6 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, infra: 10, priceGrowth: 8, rentDemand: 9, oversupply: 7 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, infra: 9, priceGrowth: 8, rentDemand: 8, oversupply: 6 },
  { name: "Paris", lat: 48.8566, lng: 2.3522, infra: 9, priceGrowth: 8, rentDemand: 8, oversupply: 6 },
  { name: "Berlin", lat: 52.5200, lng: 13.4050, infra: 9, priceGrowth: 7, rentDemand: 8, oversupply: 6 },
  { name: "Toronto", lat: 43.6510, lng: -79.3470, infra: 9, priceGrowth: 8, rentDemand: 9, oversupply: 7 },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437, infra: 9, priceGrowth: 8, rentDemand: 9, oversupply: 7 },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, infra: 10, priceGrowth: 9, rentDemand: 10, oversupply: 8 },
  { name: "Chicago", lat: 41.8781, lng: -87.6298, infra: 8, priceGrowth: 7, rentDemand: 8, oversupply: 6 },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694, infra: 10, priceGrowth: 9, rentDemand: 10, oversupply: 7 },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737, infra: 10, priceGrowth: 9, rentDemand: 9, oversupply: 8 },
  { name: "Beijing", lat: 39.9042, lng: 116.4074, infra: 9, priceGrowth: 8, rentDemand: 9, oversupply: 7 },
  { name: "Moscow", lat: 55.7558, lng: 37.6173, infra: 8, priceGrowth: 7, rentDemand: 7, oversupply: 6 },
  { name: "Istanbul", lat: 41.0082, lng: 28.9784, infra: 8, priceGrowth: 7, rentDemand: 8, oversupply: 6 },
  { name: "Bangkok", lat: 13.7563, lng: 100.5018, infra: 8, priceGrowth: 7, rentDemand: 8, oversupply: 6 },
  { name: "Kuala Lumpur", lat: 3.1390, lng: 101.6869, infra: 8, priceGrowth: 7, rentDemand: 7, oversupply: 6 },
  { name: "Johannesburg", lat: -26.2041, lng: 28.0473, infra: 7, priceGrowth: 6, rentDemand: 7, oversupply: 5 }
];

// 🔥 AUTO GENERATE 1000+ ZONES (WORLD COVERAGE)
for (let i = 0; i < 1000; i++) {
  areas.push({
    name: "Zone " + i,
    lat: -60 + Math.random() * 140,   // full world latitude
    lng: -180 + Math.random() * 360,  // full world longitude
    infra: Math.floor(Math.random() * 10),
    priceGrowth: Math.floor(Math.random() * 10),
    rentDemand: Math.floor(Math.random() * 10),
    oversupply: Math.floor(Math.random() * 10)
  });
}

// Growth Score
function calculateScore(a) {
  return Number(
    (0.4 * a.infra +
      0.3 * a.priceGrowth +
      0.2 * a.rentDemand -
      0.1 * a.oversupply
    ).toFixed(2)
  );
}

// API
// API
app.get("/api/areas", (req, res) => {
  const result = areas.map(a => ({
    ...a,
    score: calculateScore(a)
  }));
  res.json(result);
});

// ✅ FIXED FOR DEPLOY
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
