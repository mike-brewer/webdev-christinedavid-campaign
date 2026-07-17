import { Navigate, Route, Routes } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout.jsx'
import AthertonStoriesPage from './pages/AthertonStoriesPage.jsx'
import CivicRecordPage from './pages/CivicRecordPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MeetChristinePage from './pages/MeetChristinePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PrioritiesPage from './pages/PrioritiesPage.jsx'
import WhyRunningPage from './pages/WhyRunningPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/meet-christine" element={<MeetChristinePage />} />
        <Route path="/why-im-running" element={<WhyRunningPage />} />
        <Route path="/priorities" element={<PrioritiesPage />} />
        <Route path="/civic-record" element={<CivicRecordPage />} />
        <Route path="/atherton-stories" element={<AthertonStoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
