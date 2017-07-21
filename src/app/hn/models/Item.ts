export class Item {
    comments_count: number;
    domain: string;
    id:number;
    points:number;
    time:number;
    time_ago: string;
    title: string;
    type: string;
    url: string;
    user: string;
    comments: Comment[];
}

export class Comment {
    id: number;
    level: number;
    user: string;
    time: number;
    time_ago: string;
    content: string;
    deleted: boolean;
    comments: Comment[];
}