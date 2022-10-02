interface GetParams<T, D, K> {
  skip?: number;
  take?: number;
  cursor?: T;
  where?: D;
  orderBy?: K;
}

interface UpdateParams<T, D> {
  where: T;
  data: D;
}

export { GetParams, UpdateParams };
