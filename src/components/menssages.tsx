import { useParams } from "react-router-dom";
import { Message } from "./message";
import { useMessagesWebSockets } from "../hooks/use-messages-web-sockets";
// import { getRoomMessages } from "../http/get-room-messages";
// import { useSuspenseQuery } from "@tanstack/react-query";

export function Messages() {
  const { roomId } = useParams<{roomId: string}>();

  if (!roomId) {
    throw new Error('Messeges componests must be used inside a room page');
  }

  // const { messages } = use(getRoomMessages({ roomId }));
  // console.log("🚀 ~ Messages ~ messages:", messages)

  // const { data } = useSuspenseQuery({
  //   queryKey: ['messages', roomId],
  //   queryFn: () => getRoomMessages({ roomId }),
  // })
  
  useMessagesWebSockets({ roomId });

  // const sortedMessages = data.messages.sort((a, b) => {
  //   return b.amountOfReactions - a.amountOfReactions;
  // })

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {/* {sortedMessages.map((message) => {
        return (
          <Message
              key={message.id}
              id={message.id}
              text={message.text}
              amountOfReactions={message.amountOfReactions}
              answred={message.answered}
          />
        )
      })} */}
      <Message
              id="1"
              text="Qual a sua pergunta?"
              amountOfReactions={0}
              answred={false}
          />
    </ol>
  );
}
