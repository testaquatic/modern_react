export type Props = {
    myName: string;
}

export default function MyHello({ myName }: Props) {
    return (
        <div>안녕하세요. { myName}님!</div>
    )
}