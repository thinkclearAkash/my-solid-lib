export const formatPhoneNumber = (value: string | number | undefined) => {
    if (value === undefined) return '';
    const strValue = String(value);
    const x = strValue.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    if (x) {
      return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    }
    return '';
  };

  export function addressFormatter(
    address1: string | undefined | null,
    city: string | undefined | null,
    stateOrProvince: string | undefined | null,
    zip: string | undefined | null,
  ) {
    let address: string = '';
    if (address1 == undefined) {
      return '';
    }
    address = address1 + ' ' + city + ', ' + stateOrProvince + ' ' + zip;
  
    return address;
  }