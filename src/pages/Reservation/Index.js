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
  const [resEntry, setResEntry] = useState('');
  const [resExit, setResExit] = useState('');
  const [reservationFlag, setReservationFlag] = useState(false);

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
      console.log(JSON.stringify(response?.data));
      const data = response?.data;
      const resEntryTime = response?.data?.start_time;
      const resExitTime = response?.data?.exit_time;
      const parkSpotNum = response?.data?.parking_spot;
      setResEntry(resEntryTime);
      setResExit(resExitTime);
      setReservationFlag(true);
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
    <>
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
      {reservationFlag && <ReservationDash entry={resEntry} exit={resExit} />}
    </>
  );
};

const ReservationDash = ({ entry, exit }) => {
  const entryDate = new Date(entry);
  const exitDate = new Date(exit);

  console.log(entryDate);
  console.log(exitDate);

  return (
    <>
      <S.ReservationBox>
        <S.Container>
          <S.ResContainer>
            <S.HeaderReservedSpots>Reservation</S.HeaderReservedSpots>
            <S.DatesContainer>
              <S.ReservedLabel>Entry Time:</S.ReservedLabel>
              <S.DateLabel>{entryDate.toString()}</S.DateLabel>
              <S.ReservedLabel>Exit Time:</S.ReservedLabel>
              <S.DateLabel>{exitDate.toString()}</S.DateLabel>
            </S.DatesContainer>
          </S.ResContainer>
        </S.Container>
      </S.ReservationBox>
    </>
  );
};

export default Reservation;
