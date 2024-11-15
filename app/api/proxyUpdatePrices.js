export const maxDuration = 60;

export default async function handler(req, res) {
    const externalUrl = 'https://www.modex-admin.nl/api/clrgi1xkm0000gawknqwc2rl4/updatePrices?productModel=all';
    
    try {
        const response = await fetch(externalUrl);
        const data = await response.json(); // Handle the response as needed

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch from external API' });
    }
}
