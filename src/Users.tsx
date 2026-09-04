export interface UsersProps {
  name: string;
  age: number;
}

export default function Users({ name, age }: UsersProps) {
  return <div>
    <h3>Name: {name}</h3>
    <h3>Age: {age}</h3>
  </div>;
}
