// // import React, { useState } from 'react';

// // const ChatBoot = () => {
// //   const [openChat, setOpenChat] = useState(false);

// //   return (
// //     <div className=''>
// //       {openChat ? (
// //               <div className='fixed bottom-12 right-6 w-full min-w-[100px] max-w-[40] h-80 bg-white shadow-lg rounded-lg border z-50 transition-all'>
// //         </div>
// //       ) : (
// //         <div
// //           className="fixed bottom-6 right-6 w-16 h-16 bg-green-200/40 hover:bg-green-400/40 rounded-full shadow-lg z-50 flex items-center justify-center cursor-pointer"
// //           onClick={() => setOpenChat(prev => !prev)}
// //         >
// //           a
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ChatBoot;




// import React, { useState } from 'react';
// import { IoChatbubblesOutline } from 'react-icons/io5';
// import { IoClose } from 'react-icons/io5';

// const ChatBoot = () => {
//     const [openChat, setOpenChat] = useState(false);
//     const [message, setMessage] = useState('');

//   return (
//     <>
//       {/* Chat Window */}
//       {openChat && (
//         <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-xl rounded-lg border z-50 flex flex-col overflow-hidden">
//           <div className="flex items-center justify-between px-4 py-2 border-b bg-green-100">
//             <h2 className="text-sm font-medium text-gray-700">Chat Assistant</h2>
//             <button
//               onClick={() => setOpenChat(false)}
//               className="text-gray-500 hover:text-red-500 transition"
//             >
//               <IoClose size={20} />
//             </button>
//           </div>
//           <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-600">
//             <p>Hello! How can I help you today?</p>
//           </div>
//           <div className="border-t p-2">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>
//         </div>
//       )}

//       {/* Floating Button */}
//       <div
//         className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl z-50 flex items-center justify-center cursor-pointer transition"
//         onClick={() => setOpenChat(prev => !prev)}
//       >
//         <IoChatbubblesOutline size={24} />
//       </div>
//     </>
//   );
// };

// export default ChatBoot;














// import React, { useState } from 'react';
// import { IoChatbubblesOutline, IoClose } from 'react-icons/io5';

// const ChatBoot = () => {
//   const [openChat, setOpenChat] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hello! How can I help you today?' }
//   ]);

//   const handleSendMessage = () => {
//     if (!message.trim()) return;

//     const userMessage = { sender: 'user', text: message };
//     setMessages(prev => [...prev, userMessage]);
//     setMessage('');

//     // Simulate bot response
//     setTimeout(() => {
//       const botReply = { sender: 'bot', text: "I'm just a demo bot 🤖" };
//       setMessages(prev => [...prev, botReply]);
//     }, 1000);
//   };

//   return (
//     <>
//       {openChat && (
//         <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-xl rounded-lg border z-50 flex flex-col overflow-hidden">
//           <div className="flex items-center justify-between px-4 py-2 border-b bg-green-100">
//             <h2 className="text-sm font-medium text-gray-700">Chat Assistant</h2>
//             <button
//               onClick={() => setOpenChat(false)}
//               className="text-gray-500 hover:text-red-500 transition"
//             >
//               <IoClose size={20} />
//             </button>
//           </div>

//           {/* Chat messages */}
//           <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-600 space-y-2">
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`p-2 rounded-md max-w-[70%] ${
//                   msg.sender === 'user'
//                     ? 'bg-green-100 self-end ml-auto text-right'
//                     : 'bg-gray-100'
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="border-t p-2">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//               placeholder="Type your message..."
//               className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>
//         </div>
//       )}

//       {/* Floating Chat Button */}
//       <div
//         className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl z-50 flex items-center justify-center cursor-pointer transition"
//         onClick={() => setOpenChat(prev => !prev)}
//       >
//         <IoChatbubblesOutline size={24} />
//       </div>
//     </>
//   );
// };

// export default ChatBoot;





import React, { useState } from 'react';
import { IoChatbubblesOutline, IoClose } from 'react-icons/io5';

const ChatBoot = () => {
  const [openChat, setOpenChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! How can I help you today?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: 'user', text: message };
    setMessages((prev) => [...prev, userMsg]);
    setMessage('');
    setLoading(true);

      try {

      const res = await fetch('http://localhost:5678/webhook-test/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
      console.log("Message sent:", res) ;


          const data = await res.json();
          console.log("data sent:", data) ;



      const botReply = {
        sender: 'bot',
        text: data || "Sorry, I didn't understand that."
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: '⚠️ Error connecting to chatbot. Please try again.' }
      ]);
    } finally {
        setLoading(false);
    }
  };

  return (
    <>
      {openChat && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-xl rounded-lg border z-50 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b bg-green-100">
            <h2 className="text-sm font-medium text-gray-700">Chat Assistant</h2>
            <button
              onClick={() => setOpenChat(false)}
              className="text-gray-500 hover:text-red-500 transition"
            >
              <IoClose size={20} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-600 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md max-w-[70%] ${
                  msg.sender === 'user'
                    ? 'bg-green-100 self-end ml-auto text-right'
                    : 'bg-gray-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-xs text-gray-400">Bot is typing...</div>
            )}
          </div>

          <div className="border-t p-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !loading && handleSendMessage()}
              placeholder="Type your message..."
              className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              disabled={loading}
            />
          </div>
        </div>
      )}

      <div
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl z-50 flex items-center justify-center cursor-pointer transition"
        onClick={() => setOpenChat(prev => !prev)}
      >
        <IoChatbubblesOutline size={24} />
      </div>
    </>
  );
};

export default ChatBoot;
