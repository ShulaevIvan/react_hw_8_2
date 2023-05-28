import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export function GetDataExepmle({ endpoint, title }) {
  const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_TEST_URL}${endpoint}`);

  return (
    <React.Fragment>
      <p>{title}: {(loading && 'Загрузка...') || (data && data.status) || (error && 'Ошибка!')}</p>
    </React.Fragment>
  );
}

