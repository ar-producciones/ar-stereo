import axios from "axios";
import { decode } from "html-entities";
import { NOTIARVE_URL } from "~/common/constants";
import { Articles } from "~/features/news/data/news.interface";

async function getAuthor(authorId: string) {
  const url = `${NOTIARVE_URL}/wp-json/wp/v2/users/${authorId}`;
  try {
    const { data, status } = await axios.get(url);
    if (status !== 200) {
      throw new Error(`Response status: ${status}`);
    }
    const json = await data;
    return json.name;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
async function getImages(mediaUrl: string) {
  try {
    const { data, status } = await axios.get(mediaUrl);
    if (status !== 200) {
      throw new Error(`Response status: ${status}`);
    }
    const json = await data;
    return json.source_url;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
export default defineEventHandler(async (event) => {
  const url = `${NOTIARVE_URL}/wp-json/wp/v2/posts/?per_page=4`;
  try {
    const { data, status } = await axios.get(url);
    if (status !== 200) {
      throw new Error(`Response status: ${status}`);
    }
    const results = await Promise.all(
      data.map(
        async (item: {
          id: any;
          date: any;
          status: any;
          title: { rendered: string | null | undefined };
          guid: { rendered: any };
          author: any;
          _links: { [x: string]: { href: any }[] };
          excerpt: { rendered: string | null | undefined };
        }) => {
          const data = {
            id: item.id,
            date: item.date,
            status: item.status,
            title: decode(item.title.rendered),
            url: item.guid.rendered,
            author: await getAuthor(item.author),
            mediaUrl: await getImages(item._links["wp:featuredmedia"][0].href),
            content: decode(item.excerpt.rendered),
          } as Articles;
          return data;
        }
      )
    );

    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
