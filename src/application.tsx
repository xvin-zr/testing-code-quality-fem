import Counter from './examples/counter';
import PackingList from './examples/packing-list';

const Application = () => {
  return (
    <main className="flex flex-col gap-8">
      <Counter />
      <PackingList />
    </main>
  );
};

export default Application;
