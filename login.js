document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    document.getElementById('login-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            // Replace the URL with your backend server URL
            const response = await fetch('https://yourbackendserver.com/api/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            if (response.ok) {
                const data = await response.json();
                // Handle successful authentication (e.g., store token, redirect to another page)
                console.log('Authenticated:', data);
            } else {
                // Handle unsuccessful authentication (e.g., show an error message)
                console.error('Authentication failed:', response.status);
            }
        } catch (error) {
            // Handle errors in the fetch function (e.g., network issues)
            console.error('Error:', error);
        }
    });
    
    console.log('Username:', username);
    console.log('Password:', password);
});
