const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = {
  uploadCandidate: async (data) => {
    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: data,
    });
    return res.json();
  },

  getCandidate: async (id) => {
    const res = await fetch(`${API_URL}/candidate/${id}`);
    return res.json();
  }
};

export default api;
