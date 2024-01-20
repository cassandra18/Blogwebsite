import React, { useState, SetStateAction, Dispatch } from 'react';

const LoginForm: React.FC =  () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage]: [string | null, Dispatch<SetStateAction<string | null>>] = useState(null);

    //INitiate the login process when the user clicks the submit button.
    const handleLogin = async () => {
        try {
            //use the url to fech input data from the client
            const response = await fetch('http://localhost:3000/api/user/create-user', {
                method: 'POST',
                headers: { //object representing the headers part of the HTTP request
                    'content-type': 'application/json', // type of content being sent to the server is in JSON format
                },
                body: JSON.stringify({ //convert JS objects into JSON string.
                    username,
                    email,
                    password
                }),
            });

            if(!response.ok) {
                // Handle non-successful response
                const errorMessage = await response.text();
                setErrorMessage('Error: ${response.status} - ${errorMessage}');
                return;
                console.error('Error:', response.status);
                return;
            }

            //If the response is susccessful the form is submitted sucessfully
            const data = await response.json();
            console.log('Form submitted successfully:', data);
        
        } catch (error) {
            //Handle errors that might occur during non-successful response
           
            console.log('Error submitting form:', error);

            if (error instanceof TypeError && error.message === 'Failed to fetch') {
            
                setErrorMessage('Network error. PLease check your connection.');
            
            } else if (error instanceof SyntaxError) {
                
                setErrorMessage('Failed to parse server response. Please try again.');

            } else {
                setErrorMessage('An unexpeted error occured. Please try again later.');

            }
        }
    };


    return (
        <div>
            <h1>Create Account</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
                Submit
            </button>
        </form>
        </div>
    )
};


export default LoginForm;