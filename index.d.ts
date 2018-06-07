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
    export function get(uri: string): Future<any, Request>;
    export function get(o: Options): Future<any, Request>;

    export function post(uri: string): Future<any, Request>;
    export function post(o: Options): Future<any, Request>;

    export function head(uri: string): Future<any, Request>;
    export function head(o: Options): Future<any, Request>;

    export function options(uri: string): Future<any, Request>;
    export function options(o: Options): Future<any, Request>;

    export function put(uri: string): Future<any, Request>;
    export function put(o: Options): Future<any, Request>;

    export function patch(uri: string): Future<any, Request>;
    export function patch(o: Options): Future<any, Request>;

    export function del(uri: string): Future<any, Request>;
    export function del(o: Options): Future<any, Request>;

    export function delete(uri: string): Future<any, Request>;
    export function delete(o: Options): Future<any, Request>;

  export const requestOrig: RequestAPI;
}
