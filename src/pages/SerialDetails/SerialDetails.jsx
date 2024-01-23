import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { fetchSerialDetails } from 'service/API';

import { Details } from 'components/Details/Details';

const SerialDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [serialDetails, setSerialDetails] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  const back = useRef(location.state?.from || '/');

  useEffect(() => {
    const serialDetails = async () => {
      try {
        const serial = await fetchSerialDetails(id);
        setSerialDetails(serial);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    };
    serialDetails();
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <Details data={serialDetails} back={back} id={id} />
  );
};

export default SerialDetails;
