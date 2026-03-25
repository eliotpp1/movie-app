import { useState, useEffect } from "react";

export default function FilmForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    title: "",
    rating: 5,
    summary: "",
    review: "",
    poster_url: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "rating") {
      value = Math.min(10, Math.max(0, parseFloat(value))).toFixed(1);
    }
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: "", rating: 5, summary: "", review: "", poster_url: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-4 justify-center mb-6"
    >
      <input
        required
        name="title"
        placeholder="Titre"
        value={form.title}
        onChange={handleChange}
        className="border rounded px-3 py-1 w-40"
      />
      <input
        required
        name="rating"
        type="number"
        step="0.5"
        max="10"
        placeholder="Note"
        value={form.rating}
        onChange={handleChange}
        className="border rounded px-3 py-1 w-20"
      />
      <input
        required
        name="summary"
        placeholder="Résumé"
        value={form.summary}
        onChange={handleChange}
        className="border rounded px-3 py-1 w-40"
      />
      <input
        required
        name="review"
        placeholder="Avis"
        value={form.review}
        onChange={handleChange}
        className="border rounded px-3 py-1 w-40"
      />
      <input
        required
        name="poster_url"
        placeholder="URL Affiche"
        value={form.poster_url}
        onChange={handleChange}
        className="border rounded px-3 py-1 w-60"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
      >
        {initialData ? "Mettre à jour" : "Ajouter"}
      </button>
    </form>
  );
}
