

export const getGifts = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI=( category )}&limit=10&api_key=YRStV78KN0LQB9c2JnnEzZgWJB38cwUd`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;

  };

  
