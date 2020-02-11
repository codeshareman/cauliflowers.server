
export declare type AsyncReply<T = any> = Promise<Reply<T>>;

export declare type Reply<T = never> = Result<T> & {
  code: number;
  msg: string;
};

export type Result<T = any> = T extends never ? {} : {
    data: T;
};
