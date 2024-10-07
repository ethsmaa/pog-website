import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

type Row = {
  header: { id: string; title: { text: { content: string } }[] }; // name
  content: { id: string; rich_text: { text: { content: string } }[] }; // first name
  date : { id: string; date: { start: string }}; // date
};

export const fetchEvents = async () => {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Notion secret or database id is missing");

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });


  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const rows = query.results.map((res) => res.properties) as Row[];

  const rowsStructured: EventData[] = rows.map((row) => ({
    header: row.header.title[0].text.content, // name
    content: row.content.rich_text[0].text.content, // first name
    date: row.date.date.start, // date

  }));

  return rowsStructured;
};
