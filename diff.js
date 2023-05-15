function difference(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
  
    const diff = [...array1.filter(x => !set2.has(x)), ...array2.filter(x => !set1.has(x))];
  
    return diff.map(String);
  }
  
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
