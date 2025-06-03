import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import {ClerkProvider} from '@clerk/clerk-react'
import AddListing from './add-listing'
import { Toaster } from 'sonner'
import SearchByCategory from './search/[category]'
import SearchByOptions from './search'
import ListingDetail from './listing-details/[id]'
import MyListing from './profile/components/MyListing'
import ChatInbox from './profile'
import Guides from './footer/Guides'
import FAQs from './footer/components/FAQs'
import AboutUs from './footer/AboutUs'
import ErrorBoundary from './ErrorBoundary'
import NotFound from './NotFound'
import Layout from './Layout'
import LegalPolicy from './components/LegalPolicy'
import RadioSearch from './search/RadioSearch'
import SearchByHighestViews from './search/highest-view'
import SearchSameSellers from './search/same-seller/same-seller'
import SearchItemsNearby from './search/items-near-you'
import ComingSoon from './ComingSoon'
import Keywords from './search/Keywords'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/inbox',
        element: <ChatInbox/>
      },
      {
        path: '/add-listing',
        element: <AddListing/>
      },
      {
        path: '/search-category',
        element: <SearchByCategory/>
      },
      {
        path: '/key',
        element: <Keywords/>
      },
      {
        path: '/search',
        element: <SearchByOptions/>
      },
      {
        path: '/search-highest-view',
        element: <SearchByHighestViews/>
      },
      {
        path: '/search-location',
        element: <SearchItemsNearby/>
      },
      {
        path: '/search-by-criteria',
        element: <RadioSearch/>
      },
      {
        path: '/listing-details/:id',
        element: <ListingDetail/>
      },
      {
        path: '/my-listing',
        element: <MyListing/>
      },
      {
        path: '/search-same-seller',
        element: <SearchSameSellers/>
      },
      {
        path: '/guide',
        element: <Guides/>
      },
      {
        path: '/faq',
        element: <FAQs/>
      },
      {
        path: '/about-us',
        element: <AboutUs/>
      },
      {
        path: '/legal-policy',
        element: <LegalPolicy/>
      },
      {
        path: '/coming-soon',
        element: <ComingSoon/>
      },
      {
        path: '*',
        element: (
          <ErrorBoundary>
            <NotFound />
          </ErrorBoundary>
        )
      }
    ]
  }
])

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    <Toaster/>
    </ClerkProvider>
  </StrictMode>,
)
