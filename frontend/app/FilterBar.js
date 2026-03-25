export default function FilterBar({ filters, onChange }) {
  const handleInput = (e) =>
    onChange({ ...filters, [e.target.name]: e.target.value });

  return (
    <div className="flex gap-4 justify-center mb-6">
      <input
        name="title"
        placeholder="Filtrer par titre"
        value={filters.title}
        onChange={handleInput}
        className="border rounded px-3 py-1 w-40"
      />
      <input
        name="minRating"
        type="number"
        placeholder="Min Note"
        step="0.5"
        max="10"
        min="0"
        value={filters.minRating}
        onChange={handleInput}
        className="border rounded px-3 py-1 w-20"
      />
      <input
        name="maxRating"
        type="number"
        placeholder="Max Note"
        step="0.5"
        max="10"
        min="0"
        value={filters.maxRating}
        onChange={handleInput}
        className="border rounded px-3 py-1 w-20"
      />
    </div>
  );
}
