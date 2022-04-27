type Transaction = {
  id: string;
  type: 'WITHDRAWAL' | 'DEPOSIT';
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  amount: number
  date: string
};

const transactions: Transaction[] = [
  {
    id: 'a7s6df',
    type: 'DEPOSIT',
    status: 'ACCEPTED',
    amount: 100000,
    date: '2021-01-01'
  },
  {
    id: 'fds8sds',
    type: 'DEPOSIT',
    status: 'PENDING',
    amount: 4321,
    date: '2021-01-02'
  },
  {
    id: 'k453b3gg',
    type: 'WITHDRAWAL',
    status: 'ACCEPTED',
    amount: 12000,
    date: '2021-01-03'
  },
  {
    id: 'fdg709sad',
    type: 'DEPOSIT',
    status: 'REJECTED',
    amount: 6690,
    date: '2021-01-04'
  },
  {
    id: 'v7df9g8u',
    type: 'WITHDRAWAL',
    status: 'ACCEPTED',
    amount: 5000,
    date: '2021-01-05'
  },
  {
    id: 'nklj345ss',
    type: 'DEPOSIT',
    status: 'ACCEPTED',
    amount: 2300,
    date: '2021-01-06'
  },
  {
    id: 'gh76dfg9h8',
    type: 'DEPOSIT',
    status: 'ACCEPTED',
    amount: 4550,
    date: '2021-01-07'
  },
  {
    id: 'njk3lhg23',
    type: 'WITHDRAWAL',
    status: 'PENDING',
    amount: 8900,
    date: '2021-01-08'
  },
  {
    id: 'pfdg67dsl3',
    type: 'WITHDRAWAL',
    status: 'REJECTED',
    amount: 3000,
    date: '2021-01-09'
  },
  {
    id: 'vfds5643hv9',
    type: 'DEPOSIT',
    status: 'ACCEPTED',
    amount: 4300,
    date: '2021-01-10'
  },
];