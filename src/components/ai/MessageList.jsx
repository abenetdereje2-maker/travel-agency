import { useEffect, useRef } from "react";

import AIMessage from "./AIMessage";
import TypingIndicator from "./TypingIndicator";

const MessageList = ({ messages, loading }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <AIMessage
          key={index}
          sender={message.sender}
          text={message.text}
        />
      ))}

      {loading && <TypingIndicator />}

      <div ref={bottomRef}></div>
    </div>
  );
};

export default MessageList;