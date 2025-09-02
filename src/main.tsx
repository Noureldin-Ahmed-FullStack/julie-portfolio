// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/fonts.css'
import './styles/Post.css'
import './styles/ExtraComponents.css'
import './styles/navbar.css'
import './styles/socials.css'
import { ToastContainer } from 'react-toastify';
import "yet-another-react-lightbox/styles.css";
import { createHashRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.tsx'
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react'
import CenteredPage from './components/CenteredPage.tsx'
import NotFoundPage from './components/NotFoundPage.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'react-toastify/dist/ReactToastify.css';
import Favouritespage from './components/Pages/Favouritespage.tsx'
import ArtDetailsPage from './components/Pages/ArtDetailsPage.tsx'
import SocialPage from './components/Pages/SocialPage.tsx'
import Products from './components/Pages/Products.tsx'
import AboutPage from './components/Pages/AboutPage.tsx'
import Requests from './components/Pages/Requests.tsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const queryClient = new QueryClient()
const router = createHashRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/Julie", element: <HomePage /> },
      { path: "/browse", element: <CenteredPage className="my-10"><Products /></CenteredPage> },
      { path: "/blog", element: <SocialPage /> },
      { path: "/requests", element: <Requests /> },
      { path: "/artpiece/:artID", element: <ArtDetailsPage /> },
      { path: "/favourites", element: <Favouritespage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/sign-in", element: <CenteredPage className="my-10"><SignIn routing='hash' forceRedirectUrl={'/Julie'} /></CenteredPage> },
      { path: "/sign-up", element: <CenteredPage className="my-10"><SignUp routing='hash' forceRedirectUrl={'/Julie'} /></CenteredPage> },
      { path: "*", element: <CenteredPage><NotFoundPage /></CenteredPage> },
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ClerkProvider>
  // </StrictMode>
)
