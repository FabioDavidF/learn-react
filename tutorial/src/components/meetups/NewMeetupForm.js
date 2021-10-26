
import { useRef } from 'react';
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

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

        console.log(meetupData)
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label for="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>

            <div className={classes.control}>
                <label for="image">Image URL</label>
                <input type="url" required id="image" ref={imageInputRef} />
            </div>

            <div className={classes.control}>
                <label for="address">Address</label>
                <input type="text" required id="address" ref={addressInputRef} />
            </div>

            <div className={classes.control}>
                <label for="Description">Description</label>
                <textarea required id="Description" rows="5" ref={descriptionInputRef}></textarea>
            </div>

            <div className={classes.actions}>
                <button>Submit</button>
            </div>
        </form>
    </Card>

}
export default NewMeetupForm;