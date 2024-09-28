import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

type Row = {
  first_name: { id: string; rich_text: { text: { content: string } }[] };
  name: { id: string; title: { text: { content: string } }[] };
  image: {
    id: string;
    files: {
      name: string;
      file: {
        url: string;
      };
    }[];
  };
};

export const fetchEvents = async () => {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Notion secret or database id is missing");

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  console.log(JSON.stringify(query.results, null, 2));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const rows = query.results.map((res) => res.properties) as Row[];

  const rowsStructured: Member = rows.map((row) => ({
    name: row.name.title[0].text.content,
    first_name: row.first_name.rich_text[0].text.content,
    imageUrl: row.image.files[0]?.file.url,
  }));

  console.log(rowsStructured);

  return rowsStructured;
};
