export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getServiceDetails' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'serviceCode' : IDL.Text,
            'serviceDate' : IDL.Text,
            'carLicensePlate' : IDL.Text,
            'servicedBy' : IDL.Text,
          }),
        ],
        ['query'],
      ),
    'storeServiceDetails' : IDL.Func([IDL.Text, IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
