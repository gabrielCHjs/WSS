
<script>
    // Inicializar el chatbot
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotContent = document.querySelector('.chatbot-content');
    const chatbotInput = document.querySelector('.chatbot-input input');
    const chatbotButton = document.querySelector('.chatbot-input button');

    // Función para agregar un mensaje al chatbot
    function addMessage(message, isUser) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatbotContent.appendChild(messageElement);
        chatbotContent.scrollTop = chatbotContent.scrollHeight;
    }

    // Función para manejar la entrada del usuario
    function handleUserInput() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, true);
            chatbotInput.value = '';
            processUserMessage(userMessage);
        }
    }

    // Función para procesar el mensaje del usuario
    function processUserMessage(message) {
        // Analizar el mensaje del usuario y determinar la respuesta del chatbot
        let botResponse;
        switch (message.toLowerCase()) {
            case 'hola':
            case 'hey':
                botResponse = '¡Hola! ¿Cómo puedo ayudarte con los servicios de seguridad de Wolf?';
                break;
            case 'qué servicios ofrecen':
                botResponse = 'Wolf ofrece soluciones de seguridad personalizadas, monitoreo las 24 horas, cámaras de seguridad y control de acceso. ¿Quieres que te dé más detalles sobre alguno de estos servicios?';
                break;
            case 'cómo puedo contactarlos':
                botResponse = 'Puedes contactarnos a través de nuestro sitio web en wolf.com, enviándonos un correo electrónico a info@wolf.com o llamando a nuestro número de atención al cliente al 0800-123-4567.';
                break;
            default:
                botResponse = 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla o darme más detalles sobre lo que necesitas?';
                break;
        }

        addMessage(botResponse, false);
    }

    // Agregar evento de clic al botón de envío
    chatbotButton.addEventListener('click', handleUserInput);

    // Agregar evento de presionar Enter al campo de entrada
    chatbotInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });
</script>
