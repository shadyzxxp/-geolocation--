import { useState } from "react";

function App() {
  const [selectedStore, setSelectedStore] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const stores = [
    { id: 1, name: "Zara", category: "Одежда", floor: 1 },
    { id: 2, name: "KFC", category: "Еда", floor: 2 },
    { id: 3, name: "Cinema", category: "Развлечения", floor: 3 },
  ];

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Навигатор по ТЦ</h1>
        <p>Geolocation-сервис с умной навигацией внутри торгового центра</p>
      </header>

      <main style={styles.main}>
        <section style={styles.left}>
          <StoreSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            stores={filteredStores}
            onSelectStore={setSelectedStore}
          />

          <RoutePanel selectedStore={selectedStore} />
        </section>

        <section style={styles.right}>
          <MallMap selectedStore={selectedStore} />
          <PromotionsPanel />
        </section>
      </main>
    </div>
  );
}


function StoreSearch({ searchQuery, setSearchQuery, stores, onSelectStore }) {
  return (
    <div style={styles.card}>
      <h2>Поиск по магазинам</h2>
      <input
        type="text"
        placeholder="Введите название магазина..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />
      <ul style={styles.list}>
        {stores.map((store) => (
          <li
            key={store.id}
            style={styles.listItem}
            onClick={() => onSelectStore(store)}
          >
            <strong>{store.name}</strong> — {store.category}, этаж {store.floor}
          </li>
        ))}
        {stores.length === 0 && <li>Ничего не найдено</li>}
      </ul>
    </div>
  );
}

function MallMap({ selectedStore }) {
  return (
    <div style={styles.card}>
      <h2>Карта ТЦ (прототип)</h2>
      <div style={styles.mapPlaceholder}>
        {selectedStore ? (
          <p>
            Маршрут к: <strong>{selectedStore.name}</strong> (этаж{" "}
            {selectedStore.floor})
          </p>
        ) : (
          <p>Выберите магазин, чтобы увидеть маршрут на карте</p>
        )}
      </div>
    </div>
  );
}

function RoutePanel({ selectedStore }) {
  return (
    <div style={styles.card}>
      <h2>Маршрут</h2>
      {selectedStore ? (
        <p>
          Строим маршрут до <strong>{selectedStore.name}</strong>...  
          <br />
          (здесь позже будет алгоритм навигации)
        </p>
      ) : (
        <p>Выберите магазин, чтобы построить маршрут</p>
      )}
    </div>
  );
}

function PromotionsPanel() {
  const promotions = [
    { id: 1, title: "Скидка 30% на обувь", store: "Zara" },
    { id: 2, title: "2 по цене 1", store: "KFC" },
  ];

  return (
    <div style={styles.card}>
      <h2>Акции и мероприятия</h2>
      <ul style={styles.list}>
        {promotions.map((promo) => (
          <li key={promo.id}>
            <strong>{promo.title}</strong> — {promo.store}
          </li>
        ))}
      </ul>
    </div>
  );
}


const styles = {
  app: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    minHeight: "100vh",
    background: "#f3f4f6",
  },
  header: {
    padding: "16px 24px",
    background: "#111827",
    color: "#f9fafb",
  },
  main: {
    display: "flex",
    gap: "16px",
    padding: "16px",
    alignItems: "flex-start",
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "8px 10px",
    marginTop: "8px",
    marginBottom: "8px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "8px 6px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "1px solid transparent",
    marginBottom: "4px",
  },
  mapPlaceholder: {
    borderRadius: "12px",
    border: "2px dashed #9ca3af",
    padding: "24px",
    textAlign: "center",
    color: "#4b5563",
    background: "#f9fafb",
  },
};

export default App;
