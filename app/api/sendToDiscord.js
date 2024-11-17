export default async function handler(req, res) {
    console.log("Test")
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Only POST requests allowed' });
        return;
    }

    const { content } = req.body;

    if (!content) {
        res.status(400).json({ message: 'Content is required' });
        return;
    }
    //const webhookUrl = process.env.DISCORD_WEBHOOK_URL; // Store the webhook URL in environment variables for security.
    const webhookUrl = "https://discord.com/api/webhooks/1307844630376615956/ZhcBPjfDhysbJVlxxctr2k0ZZUTh8gIFEpJvYv_HomykiNv5QYC5kPLBPezsE8nDkooC";

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });

        if (!response.ok) {
            throw new Error(`Error sending message: ${response.statusText}`);
        }

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to send message' });
    }
}