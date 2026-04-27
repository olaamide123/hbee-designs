import portfolioItem from './portfolioItem'
import selectedJob from './selectedJob'
import testimonial from './testimonial'
import siteSettings from './siteSettings'
import heroSection from './heroSection'
import aboutSection from './aboutSection'
import servicesSection from './servicesSection'
import processSection from './processSection'
import contactSection from './contactSection'

export const schemaTypes = [
  // Singletons — site-wide content
  siteSettings,
  heroSection,
  aboutSection,
  servicesSection,
  processSection,
  contactSection,
  // Collections
  portfolioItem,
  selectedJob,
  testimonial,
]
