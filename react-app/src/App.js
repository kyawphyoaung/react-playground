import "./App.css";

const moutain_data = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={data.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={moutain_data}
      renderEmpty={<p> The data is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation}ft.
        </>
      )}
    />
  );
}

export default App;
