const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

async function getInstagramImage(postUrl) {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(postUrl, { waitUntil: 'domcontentloaded' });

        // Extract the image URL using meta tag
        const imageUrl = await page.evaluate(() => {
            const imageElement = document.querySelector('meta[property="og:image"]');
            return imageElement ? imageElement.content : null;
        });

        await browser.close();
        return imageUrl;
    } catch (error) {
        console.error("Error fetching image:", error);
        return null;
    }
}

app.post('/get-instagram-image', async (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(400).json({ error: "Missing 'url' query parameter" });
    }

    const imageUrl = await getInstagramImage(url);
    
    if (!imageUrl) {
        return res.status(500).json({ error: "Failed to fetch image" });
    }

    res.json({ imageUrl });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
