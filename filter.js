function filter_array_values(array) {
    return array.filter(value => {
      return value !== false && value !== null && value !== 0 && value !== '';
    });
  }
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
