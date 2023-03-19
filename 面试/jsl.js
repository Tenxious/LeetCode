// Given an array, 
const data = [
    {
      id: 1,
      name: 'A',
      pid: 0,
      children: [
        {
          id: 2,
          name: 'A1',
          pid: 1,
          children: [{ id: 4, name: 'A11', pid: 2, children: [] }]
        },
        { id: 3, name: 'A2', pid: 1, children: [] }
      ]
    },
    {
      id: 5,
      name: 'B',
      pid: 0,
      children: [
        {
          id: 6,
          name: 'B1',
          pid: 5,
          children: [
            { id: 7, name: 'B11', pid: 6, children: [] },
            {
              id: 8,
              name: 'B12',
              pid: 6,
              children: []
            }
          ]
        }
      ]
    }
  ];
  
  
  // Please complete the getDataPathByKey method, to find a node in the tree and output the id path
  function getDataPathByKey(key, value, arr){
    const path = [];
    arr.map((item, index) => {
        path.push(item.name);
        if (item[key] === value) {
            return path;
        } else if (item.children.length > 0) {
            getDataPathByKey(key, value, item.children)
        }
    })
    return path;
  }
  
  // [5, 6, 8]
  console.log(getDataPathByKey('id', 8, data));
  
  // [1, 3]
  console.log(getDataPathByKey('id', 3, data));