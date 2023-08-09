let accessKey = "_-4tf-IIS8mWhCDdBhNIm5YYhA4UpeEczcowAqr7V5I";
let API_URL = "https://api.unsplash.com/";

export const getPhotosAPI = async (page) => {
  try {
    let res = await fetch(
      API_URL +
        "photos/" +
        `?page=${page}&per_page=12` +
        `&client_id=${accessKey}`,
      {
        method: "GET",
        headers: { "Accept-Version": "v1" },
      }
    );
    if (!res.ok) {
      throw new Error("Server response is not ok");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
