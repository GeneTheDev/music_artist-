// pages/api/sanity.js
export default async function handler(req, res) {
  const query = req.query.query; // Get the query from the request
  const sanityUrl = `https://s776d4ag.apicdn.sanity.io/v2024-07-03/data/query/production?query=${encodeURIComponent(
    query
  )}&returnQuery=false`;

  try {
    const response = await fetch(sanityUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Sanity");
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
