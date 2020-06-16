import React from 'react';
import ReactTable from 'react-table';
import roleFilter from '../../../helpers/roleFilter';

import './Table.css';

const columns = [
  {
    Header: 'Roles',
    accessor: 'roles',
  },
  {
    Header: 'Role percentage %',
    accessor: 'percentage',
  },
  {
    Header: 'Tasks done / planned',
    accessor: 'goals',
  },
];

const filteredData = (done, total) => {
  const role = roleFilter(done);

  const summ =
    (role.partner + role.learner + role.dotherSon + role.coWorker + role.none) /
    100;

  return [
    {
      roles: 'Learner',
      percentage: `${
        isNaN(Math.round(role.learner / summ))
          ? 0
          : Math.round(role.learner / summ)
      }%`,
      goals: `${role.learner}/${total[1]}`,
    },
    {
      roles: 'Partner',
      percentage: `${
        isNaN(Math.round(role.partner / summ))
          ? 0
          : Math.round(role.partner / summ)
      }%`,
      goals: `${role.partner}/${total[0]}`,
    },
    {
      roles: 'Co-worker',
      percentage: `${
        isNaN(Math.round(role.coWorker / summ))
          ? 0
          : Math.round(role.coWorker / summ)
      }%`,
      goals: `${role.coWorker}/${total[3]}`,
    },
    {
      roles: 'Daugther / Son',
      percentage: `${
        isNaN(Math.round(role.dotherSon / summ))
          ? 0
          : Math.round(role.dotherSon / summ)
      }%`,
      goals: `${role.dotherSon}/${total[2]}`,
    },
    {
      roles: 'None',
      percentage: `${
        isNaN(Math.round(role.none / summ)) ? 0 : Math.round(role.none / summ)
      }%`,
      goals: `${role.none}/${total[4]}`,
    },
  ];
};

const Table = ({ data, dataTotal }) => {
  return (
    <ReactTable
      data={filteredData(data, dataTotal)}
      columns={columns}
      showPagination={false}
      defaultPageSize={5}
    />
  );
};

export default Table;
