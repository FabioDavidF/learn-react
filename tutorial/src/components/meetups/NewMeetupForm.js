import { useRef } from 'react';
import { useHistory } from 'react-router-dom'
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";


function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const history = useHistory();

    function submitHandler(event) {

        event.preventDefault();
        
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        fetch("http://localhost:8000/api/add-meetup", {
            method: "POST",
            body: JSON.stringify(meetupData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            history.replace('/')
        })
        
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>

            <div className={classes.control}>
                <label htmlFor="image">Image URL</label>
                <input type="url" required id="image" ref={imageInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={addressInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="Description">Description</label>
                <textarea required id="Description" rows="5" ref={descriptionInputRef}></textarea>
            </div>

            <div className={classes.actions}>
                <button>Submit</button>
            </div>
        </form>
    </Card>

}
export default NewMeetupForm;