import React, { useState } from "react";
import AddProperty from "./components/AddProperty";
import PropertyList from "./components/PropertyList";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = () => setRefreshKey(prev => prev + 1);

  return (
    <div>
      <h1>🏠 RentEase</h1>
      <AddProperty refresh={refresh} />
      <PropertyList refresh={refreshKey} />
    </div>
  );
}

export default App;
