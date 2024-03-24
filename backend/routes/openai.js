const express = require('express');
const { runPrompt } = require('../services/openaiService'); // Adjust the path as necessary
const router = express.Router();

router.get('/generate-joke', async (req, res) => {
    try {
        const joke = await runPrompt();
        res.json({ joke });
    } catch (error) {
        console.error('Error generating joke:', error);
        res.status(500).json({ error: 'Failed to generate a joke' });
    }
});

module.exports = router;