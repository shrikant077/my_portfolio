import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '46jxtaxy',
  dataset: 'production',
  apiVersion: '2024-02-21',
  useCdn: true,
  token: 'sk5wnVsXB0uU08qSF9xHlkHx3tdog5HuIqDEuJMtqWue7qatF352mx00s1BuLxRQ4oLhvzljGmU3QldFk63wBO1QqbtWIhkF1AyPNcRA93I0GyncgvNEqneijrapsLfMdcQTUmyViYhtuov2bknG2lJ7dCydWQEfpvvMWPiVk2Yu2q6VP6zI',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);