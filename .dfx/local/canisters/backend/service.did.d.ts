import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'getServiceDetails' : ActorMethod<
    [string],
    {
      'serviceCode' : string,
      'serviceDate' : string,
      'carLicensePlate' : string,
      'servicedBy' : string,
    }
  >,
  'storeServiceDetails' : ActorMethod<[string, string], string>,
}
