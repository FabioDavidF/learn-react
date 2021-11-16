import NewMeetupForm from '../components/meetups/NewMeetupForm'


function NewMeetupPage() {
    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm fetchUrl="locahlost:8000"/>
        </section>
    )
}

export default NewMeetupPage;