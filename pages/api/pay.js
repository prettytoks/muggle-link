import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.muggle.link/api/products/283a8736-004e-4b72-a871-149dc8303576');
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching some products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
