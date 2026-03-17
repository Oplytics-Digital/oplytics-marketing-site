import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Sparkles, Send, Loader2, User } from 'lucide-react';
import { Streamdown } from "streamdown";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

export default function AISupportEngineer() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });
      
      if (!response.ok) throw new Error("Failed to chat");
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry mate, I've hit a bit of a snag. Can you try again?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen ? (
        <div className="flex flex-col w-80 sm:w-96 h-[500px] bg-[#0D1220] border border-[#1E2738] rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-[#1E2738] bg-gradient-to-r from-[#8C34E9] to-[#5B1FA6] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/10 rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-none" style={{ fontFamily: 'Montserrat' }}>AI Support Engineer</h3>
                <p className="text-[10px] opacity-70 mt-1">Your knowledgeable factory mate</p>
              </div>
            </div>
            <button className="p-1 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-8 space-y-2">
                <div className="w-12 h-12 bg-[#1E2738] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-[#8C34E9] opacity-20" />
                </div>
                <p className="text-sm font-medium text-white">Alright mate! How can I help you today?</p>
                <p className="text-xs text-[#8890A0] px-8">I can help with platform features, pricing, or booking a demo.</p>
              </div>
            )}
            
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-[#8C34E9]/10 flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-[#C084FC]" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${msg.role === "user" ? "bg-[#8C34E9] text-white" : "bg-[#1E2738] text-[#E2E8F0]"}`}>
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm prose-invert max-w-none">
                      <Streamdown>{msg.content}</Streamdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-[#1E2738] flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 text-[#596475]" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#8C34E9]/10 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-[#C084FC]" />
                </div>
                <div className="bg-[#1E2738] rounded-lg px-3 py-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#596475]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#1E2738] bg-[#080C16]">
            <div className="flex gap-2 items-end">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-[#0D1220] border border-[#1E2738] rounded-lg px-3 py-2 text-sm text-white placeholder-[#596475] focus:outline-none focus:border-[#8C34E9] min-h-[40px] max-h-[120px] resize-none"
                rows={1}
              />
              <button 
                className="h-10 w-10 shrink-0 bg-[#8C34E9] hover:bg-[#5B1FA6] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center justify-center text-white transition-colors"
                onClick={handleSend} 
                disabled={!input.trim() || isLoading}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
          style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
