import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a JavaScript framework',
  },
  {
    title: 'Why use React?',
    content: 'To easily get a fun job paying lots of money',
  },
  {
    title: 'How do you use React?',
    content: 'Very well, thank you!',
  },
];

const options = [
  {
    label: 'The colour red',
    value: 'red',
  },
  {
    label: 'The colour green',
    value: 'green',
  },
  {
    label: 'The colour blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a colour'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
