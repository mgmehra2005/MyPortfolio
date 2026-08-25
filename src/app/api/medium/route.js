import Parser from "rss-parser";
import { NextResponse } from "next/server.js";

export async function GET() {
  try {
    // Configure parser to grab the 'content:encoded' XML node
    const parser = new Parser({
      customFields: {
        item: [["content:encoded", "encodedContent"]],
      },
    });

    const feed = await parser.parseURL("https://medium.com/feed/@matangmehra");

    const posts = feed.items.map((item) => {
      const contentString = item.encodedContent || item.content || "";

      // 1. Extract the thumbnail image
      const imgRegex = /<img[^>]+src="([^">]+)"/;
      const match = contentString.match(imgRegex);
      const thumbnailUrl = match ? match[1] : null;

      // 2. Generate a reliable snippet
      let snippet = item.contentSnippet;

      // If the default snippet is empty or missing, create our own
      if (!snippet || snippet.trim() === "") {
        // Strip all HTML tags to get pure text
        const plainText = contentString
          .replace(/<[^>]+>/g, "")
          .replace(/\s+/g, " ")
          .trim();
        // Cut it down to the first 100 characters
        snippet =
          plainText.length > 0
            ? plainText.substring(0, 100) + "..."
            : "No description available.";
      }

      return {
        id: item.guid,
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        categories: item.categories,
        snippet: snippet,
        thumbnail: thumbnailUrl,
      };
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Medium feed" },
      { status: 500 },
    );
  }
}
