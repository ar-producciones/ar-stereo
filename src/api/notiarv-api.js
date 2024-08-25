import { NOTIARVE_URL } from "@/common/constants";
import {decode} from 'html-entities';
import axios from "axios";

export default class NotiArVe {
  constructor() {
    this.baseUrl = NOTIARVE_URL;
  }

  async getArticles() {
    const url = `${this.baseUrl}/wp-json/wp/v2/posts/?per_page=4`
    try {
      const { data, status } = await axios.get(url)
      if (status !== 200) {
        throw new Error(`Response status: ${status}`);
      }
      const results = await Promise.all(
        data.map(async (item) => {
          const data = {
            id: item.id,
            date: item.date,
            status: item.status,
            title: decode(item.title.rendered),
            url: item.guid.rendered,
            author: await this.getAuthor(item.author),
            mediaUrl: await this.getImages(
              item._links["wp:featuredmedia"][0].href
            ),
          };
          return data;
        })
      );
      
      return results
    } catch (error) {
      console.error(error.message);
    }
  }

  async getAuthor(authorId) {
    const url = `https://notiarve.com/wp-json/wp/v2/users/${authorId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json.name;
    } catch (error) {
      console.error(error.message);
    }
  }
  async getImages(mediaUrl) {
    try {
      const response = await fetch(mediaUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json.source_url;
    } catch (error) {
      console.error(error.message);
    }
  }
}

/* getArticles().then(async (data) => {
  const result = data;
  const results = await Promise.all(
    result.map(async (item) => {
      const data = {
        id: item.id,
        date: item.date,
        status: item.status,
        title: item.title.rendered,
        url: item.guid.rendered,
        author: await getAuthor(item.author),
        mediaUrl: await getImages(item._links["wp:featuredmedia"][0].href),
      };
      return data
    })
  );
  console.log(results)
});
 */
