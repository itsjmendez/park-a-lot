import React from 'react';
import * as S from './styles';
import { useEffect, useState, useContext } from 'react';
import { Button } from '../../components/Button';
import AuthContext from '../../context/AuthProvider';
import axios from 'axios';

const CREATE_RESERVATION_URL = 'http://localhost:3001/reservation/create';

const Reservation = () => {
  const { accessToken } = useContext(AuthContext);
  const [entryTime, setEntryTime] = useState(0);
  const [exitTime, setExitTime] = useState(0);
  const [parkingSpot, setparkingSpot] = useState(6);

  const createReservation = async (e) => {
    console.log(
      'start_time ' + entryTime,
      'exit_time ' + exitTime,
      'parking_spot ' + parkingSpot,
      'token' + accessToken
    );

    e.preventDefault();
    try {
      const response = await axios.post(
        CREATE_RESERVATION_URL,
        JSON.stringify({
          start_time: entryTime,
          stop_time: exitTime,
          parking_spot: parkingSpot,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(
      'Entry time: ' +
        entryTime +
        ' Exit time: ' +
        exitTime +
        ' Parking spot: ' +
        parkingSpot
    );
    console.log('auth = ' + accessToken);
  }, []);

  const localTimeToUnix = (time) => {
    const date = new Date(time);
    // const timeStampInMs = date.getTime();
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return parseInt(unixTimestamp);
  };

  return (
    <S.Box>
      <S.Container>
        <S.FormContainer>
          <h1>Make a Reservation</h1>
          <form onSubmit={createReservation}>
            <S.Label htmlFor="timeEntry">Entry Time:</S.Label>
            <S.Input
              type="datetime-local"
              id="entry-time"
              autoComplete="off"
              onChange={(e) => setEntryTime(localTimeToUnix(e.target.value))}
              required
            />
            <S.Label htmlFor="exit-time">Exit Time:</S.Label>
            <S.Input
              type="datetime-local"
              id="exit-time"
              onChange={(e) => setExitTime(localTimeToUnix(e.target.value))}
              required
            />
            <Button>Reserve</Button>
          </form>
        </S.FormContainer>
      </S.Container>
    </S.Box>
  );
};

export default Reservation;
