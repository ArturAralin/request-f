import {
  RequestAPI,
  RequiredUriUrl,
  CoreOptions,
  RequestAsJSON,
} from 'request';
import {
  Future,
} from 'fluture';
import {
  Left,
  Right,
} from 'sanctuary';

declare module "request-f" {
  type Options = RequiredUriUrl & CoreOptions;
    export function get(uri: string): Future<Left<any>, Right<Request>>;
    export function get(o: Options): Future<Left<any>, Right<Request>>;

    export function post(uri: string): Future<Left<any>, Right<Request>>;
    export function post(o: Options): Future<Left<any>, Right<Request>>;

    export function head(uri: string): Future<Left<any>, Right<Request>>;
    export function head(o: Options): Future<Left<any>, Right<Request>>;

    export function options(uri: string): Future<Left<any>, Right<Request>>;
    export function options(o: Options): Future<Left<any>, Right<Request>>;

    export function put(uri: string): Future<Left<any>, Right<Request>>;
    export function put(o: Options): Future<Left<any>, Right<Request>>;

    export function patch(uri: string): Future<Left<any>, Right<Request>>;
    export function patch(o: Options): Future<Left<any>, Right<Request>>;

    export function del(uri: string): Future<Left<any>, Right<Request>>;
    export function del(o: Options): Future<Left<any>, Right<Request>>;

    export function delete(uri: string): Future<Left<any>, Right<Request>>;
    export function delete(o: Options): Future<Left<any>, Right<Request>>;

  export const requestOrig: RequestAPI;
}
