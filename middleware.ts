// Middleware that keep the session alive
// It will update the session expiry every time its called
// It's used inside our project root layout
export {auth as middleware} from "@/auth";
