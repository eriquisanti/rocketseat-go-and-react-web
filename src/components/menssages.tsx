import { useParams } from "react-router-dom";
import { Message } from "./message";
import { getRoomMessages } from "../http/get-room-messages";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Messages() {
  const { roomId } = useParams<{roomId: string}>();
  console.log("🚀 ~ Messages ~ roomId:", roomId)

  if (!roomId) {
    throw new Error('Messeges componests must be used inside a room page');
  }

  // const { messages } = use(getRoomMessages({ roomId }));
  // console.log("🚀 ~ Messages ~ messages:", messages)

  const { data } = useSuspenseQuery({
    queryKey: ['messages', roomId],
    queryFn: () => getRoomMessages({ roomId }),
  })

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {data.messages.map((message) => {
        return (
          <Message
              key={message.id}
              text={message.text}
              amountOfReactions={message.amountOfReactions}
              answred={message.answered}
          />
        )
      })}
    </ol>
  );
}
