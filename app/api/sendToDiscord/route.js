export async function POST(req) {
    try {
        const body = await req.json(); // Parse the JSON body
        const { content } = body;
        console.log(body)

        if (!content) {
            return new Response(
                JSON.stringify({ message: "Content is required" }), { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const webhookUrl = "https://discord.com/api/webhooks/1314159821427179530/3t0ZvLzD8hWPJ4bTbdte4NVZaja2FwAcXx9nig9pq-dMS787CjjQ8AY4GsvMzHgiU2jG";

        // Send the payload to Discord
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body), // Send the provided JSON as the payload
        });

        if (!response.ok) {
            return new Response(
                JSON.stringify({ message: `Failed to send: ${response.statusText}` }), { status: response.status, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({ success: true, message: "Embed sent successfully" }), { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: error.message || "Internal Server Error" }), { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}