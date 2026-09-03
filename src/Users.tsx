export interface UsersProps {
  name: string;
  age: string;
}

export default function Users({ name, age }: UsersProps) {
  return (
    <div>
      <h3>Name:{name}</h3>
      <h3>Name:{age}</h3>
    </div>
  );
}
