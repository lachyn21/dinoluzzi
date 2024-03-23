 {/* Script for chatbot */}
 useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/lajckmxmipp2wtemvuou2vge9ma51un1.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script);
    };
  }, []); 