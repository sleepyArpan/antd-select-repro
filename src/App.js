import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

function renderOptions(options) {
  return options.map((current) => (
    <Option key={current.id} value={current.value}>
      <span>{current.value}</span>
    </Option>
  ));
}

function App() {
  const options = [
    { id: 220, value: 'Bitcoin' },
    { id: 221, value: 'Ethereum' },
    { id: 222, value: 'Cardano' },
  ];
  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <Select
        placeholder="Select a name"
        aria-label="cryptoName"
        onSelect={(option) => console.log(option)}
      >
        {renderOptions(options)}
      </Select>
    </div>
  );
}

export default App;
