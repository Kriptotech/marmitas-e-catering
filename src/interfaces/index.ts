interface IGift {
    id: string;
    name: string;
    price: number;
    created_at: string;
    photo: string;
}

interface IManager {
    id: string;
    email: string;
    name: string;
    role: string;
}

interface IMessage {
    id: string;
    author: string;
    email: string;
    phone: string;
    created_at: string;
    message: string;
}

interface IGiftRequest {
    id: string;
    gift_id: string;
    author: string;
    email: string;
    phone: string;
    created_at: string;
}

export type { IGift, IManager, IGiftRequest, IMessage };
