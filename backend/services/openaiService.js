require('dotenv').config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generatePrompt = (movies) => {
    let prompt = "Based on the user's interest in the following movies:\n";
    movies.forEach(movie => {
        prompt += `- ${movie.title} (${movie.release_date ? movie.release_date.getFullYear() : "Year Unknown"})\n`;
    });
    prompt += "What are some similar movies you would recommend? Just list it out in a list format";
    return prompt;
};

const runPrompt = async (prompt) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "user",
                "content": prompt
            }],
            max_tokens: 1024,
            temperature: 0.9,
        });

        console.log(response.choices[0].message.content);
        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error with OpenAI request:', error);
        throw error; 
    }
};


module.exports = { generatePrompt, runPrompt };
