import {
  RequestAPI,
  Request,
  RequiredUriUrl,
  CoreOptions,
} from 'request';
import {
  Future,
} from 'fluture';

declare module "request-f" {
  type Options = RequiredUriUrl & CoreOptions;
  export interface requestF {
    get(uri: string): Future<any, Request>;
    get(o: Options): Future<any, Request>;

    post(uri: string): Future<any, Request>;
    post(o: Options): Future<any, Request>;

    head(uri: string): Future<any, Request>;
    head(o: Options): Future<any, Request>;

    options(uri: string): Future<any, Request>;
    options(o: Options): Future<any, Request>;

    put(uri: string): Future<any, Request>;
    put(o: Options): Future<any, Request>;

    patch(uri: string): Future<any, Request>;
    patch(o: Options): Future<any, Request>;

    del(uri: string): Future<any, Request>;
    del(o: Options): Future<any, Request>;

    delete(uri: string): Future<any, Request>;
    delete(o: Options): Future<any, Request>;
  }

  export const requestOrig: RequestAPI;
  export default requestF;
}
