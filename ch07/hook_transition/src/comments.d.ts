type Comment = {
    id: number;
    isbn: string;
    rank: number;
    body: string;
};

type Comments = Comment[];

export module "./comments" {
    const comments: Comments;
    export default comments;
}