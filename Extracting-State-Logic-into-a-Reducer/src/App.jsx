import { useReducer } from './MyReact.jsx';
import Chat from './Chat.jsx';
import ContactList from './ContactList.jsx';
import { initialState, messengerReducer } from './messengerReducer.jsx';

export default function Messenger() {
const [state, dispatch] = useReducer(messengerReducer, initialState);
const message = state.messages[state.selectedId];
const contact = contacts.find((c) => c.id === state.selectedId);
 
return (
  <div>
  <ContactList contacts={contacts} selectedId={state.selectedId} dispatch={dispatch} />
  <Chat key={contact.id} message={message} contact={contact} dispatch={dispatch} />
  </div>
)
} 
const contacts = [
  {id: 0, name: 'Viktor', email: 'Viktor@mail.com'},
  {id: 1, name: 'Mama', email: 'Mama@mail.com'},
  {id: 2, name: 'Papa', email: 'Papa@mail.com'},
];
