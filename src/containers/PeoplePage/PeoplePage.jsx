import styles from './PeoplePage.module.css';
import { changeHTTP, getApiResource } from './../../utils/network';
import { useEffect, useState } from 'react';
import { API_PEOPLE } from '../../constants/api';
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PropTypes from 'prop-types';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
