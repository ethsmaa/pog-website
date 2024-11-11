import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

type Row = {
  header: { id: string; title: { text: { content: string } }[] };
  content: { id: string; rich_text: { text: { content: string } }[] };
  date: { id: string; date: { start: string } };
};

export type EventData = {
  header: string;
  content: string;
  date: string;
};

const cleanContent = (content: string) => {
  return content.trim().replace(/\n+/g, "<br />");
};


export const fetchEvents = async (): Promise<EventData[]> => {
  if (!notionSecret || !notionDatabaseId) {
    throw new Error("Notion secret or database id is missing");
  }

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const rows = query.results.map((res) => res.properties) as Row[];

  const rowsStructured: EventData[] = rows.map((row) => ({
    header: row.header.title[0].text.content,
    content: cleanContent(row.content.rich_text[0].text.content), // Apply cleanContent here
    date: row.date.date.start,
  }));

  return rowsStructured;
};


