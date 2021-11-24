import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList'



function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/get-meetups")
    .then(response => response.json())
    .then(meetups_data => {
      setMeetups(meetups_data);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {

    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  }

  return (
      <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={meetups}/>
      </section>
  )
}

export default AllMeetupsPage;