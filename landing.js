/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AyuRxiv</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 40px;
                text-align: center;
            }
            .header {
                font-size: 48px; /* Large text for the header */
                margin-bottom: 20px;
            }
            .quote {
                font-size: 18px; /* Appropriately smaller text size for the quote */
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="header">AyuRxiv.org</div>
        <div class="quote">
            “You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction. Perform work in this world, Arjuna, as a man established within himself - without selfish attachments, and alike in success and defeat.” 
            <br>- The Bhagavad Gita
        </div>
    </body>
    </html>
    
    `;

    return new Response(htmlContent, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
