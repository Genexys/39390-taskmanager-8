const generateFilters = () => {
  return [
    {
      name: `all`,
      count: 2
    },
    {
      name: `overdue`,
      count: 13
    },
    {
      name: `today`,
      count: 5
    },
    {
      name: `favorites`,
      count: 10
    },
    {
      name: `repeating`,
      count: 3
    },
    {
      name: `tags`,
      count: 0
    },
    {
      name: `archive`,
      count: 65
    },
  ];
};

export {generateFilters};
