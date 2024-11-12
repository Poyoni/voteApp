export interface Candidate {
    _id: string;
    name: string;
    image: string;
    votes: number;
}


export interface User {
    username: string;
    password: string;
    isAdmin: boolean;
    hasVoted: boolean;
    votedFor: string | null;
}

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';