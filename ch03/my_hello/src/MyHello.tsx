export type MyHelloProps = {
  myName: string;
};


export function MyHello({ myName }: MyHelloProps) {
  return (
    <div>안녕하세요, {myName}님!</div>
  );
}