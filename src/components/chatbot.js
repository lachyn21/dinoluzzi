import { useEffect } from 'react'; // Importing React and useEffect
// Add other imports if necessary

// Define your component
function Chatbot() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/lajckmxmipp2wtemvuou2vge9ma51un1.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null; // Since Chatbot component is responsible for adding script only, returning null
}

export default Chatbot; // Export the Chatbot component
