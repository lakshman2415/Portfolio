import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Bot, User, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIchatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm an AI assistant for Lakshman's portfolio. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const lastMessageTime = useRef<number>(0);
  const { toast } = useToast();

  const MAX_INPUT_LENGTH = 500;
  const RATE_LIMIT_MS = 3000; // 3 seconds between messages

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const portfolioContext = `
Portfolio Information for K. Lakshmana Kumar:

ABOUT:
- B.Tech student at NRI Institute of Technology
- Passionate Software & Web Developer
- Mission: "Learning by building. Growing by solving."

TECHNICAL SKILLS:
- HTML, CSS, JavaScript
- Python, Java, SQL
- React

SOFT SKILLS:
- Teamwork, Leadership, Problem-Solving
- Communication, Time Management

PROJECTS:
1. PyMind Quiz Game (https://py-mind-arena-quest-lakshman.lovable.app/)
   - Multiplayer Python quiz platform
   - Tests coding skills from basics to advanced
   - Tech: HTML, CSS, JS, Python
   - Features: Gamified UI

2. Bitcoin Guidebook (https://bitcoin-guidebook.lovable.app/)
   - Visual beginner-friendly guide to Bitcoin
   - Explains what Bitcoin is, how it works, why it matters
   - Tech: HTML, CSS, JS
   - Focus: Education-first design

CERTIFICATIONS:
- Python Programming Course
- Java Programming Course  
- AI Basics Course
- HTML & Web Development Course

CURRENT STATUS:
- Actively building real-world skills through self-driven projects
- Certification learning
- Preparing for freelance and internship roles
- Seeking internship opportunities in web and app development

CONTACT:
- Email: lakshmankoriwada@gmail.com
- LinkedIn: https://www.linkedin.com/in/lakshman-koriwada-985a032b9
- GitHub: https://github.com/account
- Instagram: https://www.instagram.com/lakshman_alone_boy
  `;

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Skills questions
    if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
      return "Lakshman has strong technical skills in HTML, CSS, JavaScript, Python, Java, SQL, and React. He also excels in soft skills like teamwork, leadership, problem-solving, communication, and time management.";
    }
    
    // Projects questions
    if (input.includes('project')) {
      return "Lakshman has built two impressive projects:\n\n1. PyMind Quiz Game - A multiplayer Python quiz platform that tests coding skills from basics to advanced levels with a gamified UI.\n\n2. Bitcoin Guidebook - A visual beginner-friendly guide explaining what Bitcoin is, how it works, and why it matters with an education-first design.\n\nYou can explore them through the Projects section!";
    }
    
    // Education questions
    if (input.includes('education') || input.includes('student') || input.includes('college')) {
      return "Lakshman is a B.Tech student at NRI Institute of Technology. He's passionate about software and web development, following the mission: 'Learning by building. Growing by solving.'";
    }
    
    // Certifications
    if (input.includes('certification') || input.includes('certificate') || input.includes('course')) {
      return "Lakshman has completed several certifications including Python Programming, Java Programming, AI Basics, and HTML & Web Development. He's actively building real-world skills through certification learning and self-driven projects.";
    }
    
    // Contact questions
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return "You can reach Lakshman at:\n📧 Email: lakshmankoriwada@gmail.com\n💼 LinkedIn: linkedin.com/in/lakshman-koriwada-985a032b9\n💻 GitHub: github.com/account\n📸 Instagram: @lakshman_alone_boy";
    }
    
    // Experience/Internship
    if (input.includes('experience') || input.includes('internship') || input.includes('work')) {
      return "Lakshman is currently seeking internship opportunities in web and app development. He's actively building real-world skills through self-driven projects and preparing for freelance and internship roles.";
    }
    
    // About/Who questions
    if (input.includes('who') || input.includes('about') || input.includes('tell me')) {
      return "K. Lakshmana Kumar is a passionate B.Tech student and Software & Web Developer at NRI Institute of Technology. He believes in 'Learning by building. Growing by solving.' and is actively working on real-world projects while preparing for freelance and internship opportunities.";
    }
    
    // Default response
    return "I can help you learn about Lakshman's skills, projects, education, certifications, and experience. What would you like to know? Try asking about his projects, technical skills, or how to contact him!";
  };

  const handleSend = () => {
    const trimmedInput = input.trim();
    
    // Validation: Empty input
    if (!trimmedInput) return;

    // Validation: Maximum length
    if (trimmedInput.length > MAX_INPUT_LENGTH) {
      toast({
        title: "Message too long",
        description: `Please keep your message under ${MAX_INPUT_LENGTH} characters.`,
        variant: "destructive"
      });
      return;
    }

    // Validation: Rate limiting
    const currentTime = Date.now();
    const timeSinceLastMessage = currentTime - lastMessageTime.current;
    
    if (timeSinceLastMessage < RATE_LIMIT_MS && lastMessageTime.current !== 0) {
      const secondsRemaining = Math.ceil((RATE_LIMIT_MS - timeSinceLastMessage) / 1000);
      toast({
        title: "Please slow down",
        description: `Wait ${secondsRemaining} second${secondsRemaining > 1 ? 's' : ''} before sending another message.`,
        variant: "destructive"
      });
      return;
    }

    // Validation: Basic character set (allow most characters but sanitize)
    const sanitizedInput = trimmedInput.replace(/[^\w\s.,!?@#$%&*()\-+=:;'"<>]/gi, '');
    
    if (sanitizedInput.length === 0) {
      toast({
        title: "Invalid input",
        description: "Please use standard characters only.",
        variant: "destructive"
      });
      return;
    }

    lastMessageTime.current = currentTime;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: sanitizedInput,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate thinking time for better UX
    setTimeout(() => {
      const response = getResponse(sanitizedInput);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full shadow-glow hover:shadow-elegant transition-all duration-300"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 h-96">
          <Card className="h-full flex flex-col shadow-card bg-card-gradient border border-border">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Portfolio Assistant</h3>
                  <p className="text-xs text-muted-foreground">Ask about Lakshman</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>


            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.isUser ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div className={`p-1 rounded-full ${message.isUser ? "bg-primary/10" : "bg-muted"}`}>
                        {message.isUser ? (
                          <User className="h-3 w-3 text-primary" />
                        ) : (
                          <Bot className="h-3 w-3 text-muted-foreground" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-lg text-sm ${
                          message.isUser
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="p-1 rounded-full bg-muted">
                        <Bot className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <div className="p-3 rounded-lg text-sm bg-muted text-muted-foreground flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
                  placeholder="Ask about Lakshman's portfolio..."
                  className="flex-1"
                  disabled={isLoading}
                  maxLength={MAX_INPUT_LENGTH}
                />
                <Button 
                  onClick={handleSend} 
                  size="icon" 
                  className="h-10 w-10"
                  disabled={isLoading || !input.trim()}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default AIchatbot;