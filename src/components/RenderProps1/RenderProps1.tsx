type ChildComponentProps = {
  render: (name: string) => JSX.Element
}

const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name = "Mauro"
  return (
    <div>
      {render(name)}
    </div>
  );
};


export const ParentComponent = () => {
  return (
    <ChildComponent render={(name) => <p>Hello, {name} !</p>} />
  );
};
