export type EventBasicProps = {
  type: string
}

export function EventBasic({ type }: EventBasicProps) {
  const current = () => {
    const d = new Date();
    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
      case "time":
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
        break;
    }
  }
  return (
    <div>
      <button type="button" onClick={current}>현재 시각 가져오기</button>
    </div>
  );
 }