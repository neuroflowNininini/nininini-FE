
const API_BASE_URL = "http://180.210.83.227:8888/nail";

export const fetchNailMeasure = async (file) => {
  const apiUrl = API_BASE_URL;
  try {
    const data = new FormData();
    data.append("image", file)
    const response = await fetch(apiUrl, {
      method: "POST",
      body: data
    });
    return response.blob()
  }
  catch (e) {
    console.error("Error fetching measure pic", e);
  }
}