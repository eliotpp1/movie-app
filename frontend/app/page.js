"use client";

import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";
import FilmForm from "./FilmForm";
import FilterBar from "./FilterBar";

export default function Home() {
  const [films, setFilms] = useState([]);
  const [editingFilm, setEditingFilm] = useState(null);
  const [filters, setFilters] = useState({
    title: "",
    minRating: "",
    maxRating: "",
  });

  const fetchFilms = () => {
    fetch("http://localhost:3001/films")
      .then((res) => res.json())
      .then(setFilms);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  const handleAddOrUpdate = async (film) => {
    if (editingFilm) {
      await fetch(`http://localhost:3001/films/${editingFilm.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(film),
      });
      setEditingFilm(null);
    } else {
      await fetch("http://localhost:3001/films", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(film),
      });
    }
    fetchFilms();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/films/${id}`, { method: "DELETE" });
    fetchFilms();
  };

  const handleEdit = (film) => setEditingFilm(film);

  const filteredFilms = films.filter((f) => {
    const matchesTitle = f.title
      .toLowerCase()
      .includes(filters.title.toLowerCase());
    const matchesMin =
      filters.minRating === "" || f.rating >= parseFloat(filters.minRating);
    const matchesMax =
      filters.maxRating === "" || f.rating <= parseFloat(filters.maxRating);
    return matchesTitle && matchesMin && matchesMax;
  });

  return (
    <div className="p-6 font-sans">
      <h1 className="text-center text-3xl font-bold mb-6">🎬 Mes Films</h1>

      <FilterBar filters={filters} onChange={setFilters} />
      <FilmForm onSubmit={handleAddOrUpdate} initialData={editingFilm} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFilms.map((f) => (
          <FilmCard
            key={f.id}
            film={f}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
