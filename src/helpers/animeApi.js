export const animeApi = async (nameAnime) => {
  let url;
  if (nameAnime === "") {
    url = "https://api.jikan.moe/v3/search/anime?q=kekkai";
  } else {
    url = "https://api.jikan.moe/v3/search/anime?q=" + nameAnime;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw Error(`Error : ${res.url}${res.status}${res.statusText}`);
  }
  const data = await res.json();
  return data;
};
