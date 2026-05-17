import PageShell from '../components/PageShell';

export const LoginPage = ()=> <PageShell title="Login" items={['Email/password form validation','JWT-ready auth UX','Social login buttons','Animated travel backdrop']} />;
export const SignupPage = ()=> <PageShell title="Signup" items={['Create account flow','Password strength meter','Terms acceptance','OAuth providers']} />;
export const ForgotPage = ()=> <PageShell title="Forgot Password" items={['Email reset request','Success/error handling','Security messaging']} />;
export const Dashboard = ()=> <PageShell title="Dashboard" items={['Hero travel search','Recommended destinations','Recent trips','Budget highlights','Trending cards','Animated stats','Plan New Trip CTA']} />;
export const CreateTrip = ()=> <PageShell title="Create Trip" items={['Trip name/date/description','Cover image upload','Travel type + budget','Live trip preview']} />;
export const MyTrips = ()=> <PageShell title="My Trips" items={['Search & filter cards','Edit/Delete/View itinerary','Destination count + duration','Empty state illustration']} />;
export const ItineraryBuilder = ()=> <PageShell title="Itinerary Builder" items={['Multi-city stops','Drag/drop reorder','Day planner timeline','Expandable activity cards']} />;
export const ItineraryView = ()=> <PageShell title="Itinerary View" items={['Day-wise timeline','Calendar/list toggle','Activity time/cost','Map block','Export PDF + print']} />;
export const CitySearch = ()=> <PageShell title="City Search" items={['Global city search','Country/region filters','Popularity and cost index','Gallery + add city']} />;
export const ActivitySearch = ()=> <PageShell title="Activity Search" items={['Category chips','Cost/duration filters','Rated activity cards','Add/remove actions']} />;
export const Budget = ()=> <PageShell title="Budget & Cost Breakdown" items={['Total calculation','Transport/hotel/activity/food','Pie/bar chart slots','Average per day + alerts']} />;
export const Packing = ()=> <PageShell title="Packing Checklist" items={['Add item','Toggle packed','Category buckets','Reset list']} />;
export const Shared = ()=> <PageShell title="Shared Public Itinerary" items={['Public URL presentation','Read-only itinerary','Social share + copy trip']} />;
export const Profile = ()=> <PageShell title="Profile & Settings" items={['Edit profile + photo','Language preference','Saved destinations','Privacy + delete account']} />;
export const Notes = ()=> <PageShell title="Trip Notes / Journal" items={['Rich text notes','Timestamped entries','Trip reminders','Memories gallery']} />;
export const Admin = ()=> <PageShell title="Admin Analytics Dashboard" items={['User stats','Top destinations','Popular activities','Engagement charts','Management tools']} />;
