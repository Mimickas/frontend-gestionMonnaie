import axios from "axios";

export default async function createContrat(data) {
  try {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key] ?? "");
    }

    console.log("Données envoyées à l'API :", data);

    const response = await axios.post(
      "http://localhost:8000/embaucher/submit",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erreur API :", error);
    throw error;
  }
}
