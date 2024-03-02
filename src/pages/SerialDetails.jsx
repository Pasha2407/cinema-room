import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { fetchSerialDetails } from 'service/api';

import { Details } from 'components/Details/Details';
import availableSerials from 'data/serial/availableSerials.json';

const SerialDetails = ({ language }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [serialDetails, setSerialDetails] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  const back = useRef(location.state?.from || '/');

  useEffect(() => {
    const serialDetails = async () => {
      try {
        const serial = await fetchSerialDetails(id, language);
        setSerialDetails(serial);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    serialDetails();
  }, [id, language]);

  return isLoading ? (
    <Loader />
  ) : (
    <Details
      serialData={serialDetails}
      data={serialDetails}
      back={back}
      id={id}
      availableId={availableSerials}
    />
  );
};

export default SerialDetails;
