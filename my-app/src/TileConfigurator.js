import React, { useState } from 'react';

export default function TileConfigurator({ onStart }) {
  const [input, setInput] = useState(36);

  const start = (e) => {
    e.preventDefault();
    const n = parseInt(input, 10);
    if (isNaN(n) || n < 0) return;
    onStart(n);
  };

  return (
    <div style={{ padding: 16, display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={start} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <label style={{ fontWeight: 600 }}>
          Total non-corner tiles:
          <input
            type="number"
            min={0}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginLeft: 8, width: 120 }}
          />
        </label>
        <button type="submit">Start Board</button>
      </form>
      <div style={{ fontSize: 13, color: '#444' }}>
        This will distribute the tiles equally across 4 sides.
      </div>
    </div>
  );
}
