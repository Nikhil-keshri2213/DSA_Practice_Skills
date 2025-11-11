# Chatbot implementation: call chatbot(question) -> answer.
import datetime

def chatbot(question: str) -> str:
    q = (question or "").strip().lower()
    if not q:
        return "Please ask a question."
    if q in ("hi", "hello", "hey"):
        return "Hello!"
    if "time" in q:
        return datetime.datetime.now().strftime("Current time: %Y-%m-%d %H:%M:%S")
    if "help" in q:
        return "I can answer simple queries (greetings, time). Type STOP to end the session."
    return "Sorry, I don't know the answer to that."

if __name__ == "__main__":
    print('Type "START" to begin the chatbot, or "STOP" to exit.')
    while True:
        cmd = input("> ").strip().upper()
        if cmd == "START":
            print('Chatbot started. Type your questions. Type "STOP" to end the session.')
            while True:
                user_q = input("You: ")
                if user_q.strip().upper() == "STOP":
                    print("Chatbot session stopped.")
                    break
                print("Bot:", chatbot(user_q))
            print('Type "START" to begin again, or "EXIT" to exit.')
        elif cmd == "EXIT":
            print("Goodbye.")
            break
        else:
            print('Please type "START" or "STOP".')