interface GetParams<T, D, K> {
  skip?: number;
  take?: number;
  cursor?: T;
  where?: D;
  orderBy?: K;
}

export { GetParams };
