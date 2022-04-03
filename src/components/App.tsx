import { useEffect, useState } from 'react';

function App() {
  const [extruded, setExtruded] = useState('');
  const [esteps, setEsteps] = useState('');
  const [newEsteps, setNewEsteps] = useState(0);

  useEffect(() => {
    const extrudedFloat = parseFloat(extruded);
    const estepsFloat = parseFloat(esteps);

    if (isNaN(extrudedFloat) || isNaN(estepsFloat)) {
      setNewEsteps(0);
    } else {
      setNewEsteps(estepsFloat * (100 / (110 - extrudedFloat)));
    }
  }, [extruded, esteps]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-purple-400">
      <div className="w-full max-w-2xl mx-3 bg-white rounded-lg">
        <div className="p-4 bg-indigo-900 rounded-t-lg">
          <h1 className="text-xl text-white">E-Steps Calculator</h1>
        </div>

        <div className="p-6">
          <ol>
            <li>1. Mark your filament <strong>110mm</strong> from the extruder.</li>
            <li>2. Instruct your printer to extrude <strong>100mm</strong>.</li>
            <li>3. Measure the exposed length and enter below.</li>
            <li>4. Find your current e-steps and enter below.</li>
            <li>5. Update your e-steps with the new value.</li>
          </ol>

        </div>

        <hr />

        <div className="p-6 pt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-600">Exposed Length</label>
            <input
              className="w-full block border p-2 rounded text-center text-xl"
              type="number" min="0" step="0.1"
              placeholder="???"
              value={extruded} onChange={(e) => setExtruded(e.target.value) }
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">Current E-Steps</label>
            <input
              className="w-full block border p-2 rounded text-center text-xl"
              type="number" min="0" step="0.1"
              placeholder="???"
              value={esteps} onChange={(e) => setEsteps(e.target.value) }
            />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center p-4 bg-slate-700 rounded-b-lg">
          <label className="text-white">New E-Steps</label>

          <div className="w-1/2 block bg-white p-2 rounded text-center text-xl">
            {newEsteps ? newEsteps.toFixed(1) : <span className="text-slate-400">???</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
