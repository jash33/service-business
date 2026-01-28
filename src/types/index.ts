/**
 * Type Exports
 * Re-exports all types for convenient importing
 */

export type {
  MetaTags,
  OpenGraphTags,
  TwitterTags,
  LanguageConfig,
  ArticleSchema,
  OrganizationSchema,
  ProductSchema,
  BreadcrumbSchema,
  WebPageSchema,
  JsonLdSchema,
  CustomMetaTag,
  SEOProps,
  SEOConfig,
} from './seo';

export type {
  ButtonVariant,
  ButtonSize,
  IconPosition,
  ButtonProps,
  ButtonState,
} from './button';

export type {
  Service,
  ServiceCTA,
  ServiceCardProps,
  ServicesSectionProps,
} from './service';

export type {
  ProjectType,
  BudgetRange,
  ContactFormData,
  ContactFormErrors,
  ContactFormTouched,
  FormStatus,
  ContactFormState,
  ProjectTypeOption,
  BudgetRangeOption,
  ValidationConfig,
} from './contact-form';

export {
  DEFAULT_VALIDATION_CONFIG,
  PROJECT_TYPE_OPTIONS,
  BUDGET_RANGE_OPTIONS,
  INITIAL_FORM_DATA,
  INITIAL_TOUCHED,
} from './contact-form';


export type {
  HeroCTA,
  HeroSectionProps,
} from './hero';

export type {
  TechnologyCategory,
  ProjectCategory,
  ProjectLink,
  TechnologyTag,
  ProjectImage,
  Project,
  ProjectCardProps,
  FilterOption,
  PortfolioSectionProps,
} from './portfolio';

export {
  PROJECT_CATEGORIES,
  TECHNOLOGY_CATEGORIES,
} from './portfolio';

export type {
  TrustSignal,
  CTAButton,
  ContactCTAProps,
} from './contact-cta';

export type {
  FAQItem,
  FAQCategory,
  FAQAccordionProps,
  FAQAccordionItemState,
} from './faq';

export {
  DEFAULT_FAQ_ITEMS,
} from './faq';

export type {
  ConsentCategory,
  ConsentStatus,
  ConsentPreferences,
  ConsentState,
  ConsentBannerConfig,
  GA4Config,
  GA4ConsentMode,
  GA4StandardEvent,
  CustomEventName,
  AnalyticsEvent,
  BaseEventParams,
  PageViewParams,
  ClickEventParams,
  FormEventParams,
  ScrollEventParams,
  CTAEventParams,
  LeadEventParams,
  EventParams,
  UserProperties,
  AnalyticsService,
  WebVitals,
  PerformanceEntry,
} from './analytics';

export type {
  Testimonial,
  TestimonialCardProps,
  TestimonialsSectionProps,
} from './testimonial';

export type {
  TrustBadgeCategory,
  TrustBadge,
  TrustBadgeCardProps,
  TrustBadgesSectionProps,
  VerificationStatus,
  LicenseInsuranceCredential,
  LicenseInsuranceCardProps,
  LicenseInsuranceSectionProps,
} from './trust-badge';

export type {
  BlogCategory,
  BlogTag,
  BlogAuthor,
  BlogImage,
  BlogArticle,
  BlogArticleCardProps,
  BlogFilterOption,
  BlogFilterProps,
  BlogSearchProps,
  BlogPaginationProps,
  BlogListingProps,
  RSSFeedConfig,
} from "./blog";

export {
  BLOG_CATEGORIES,
  DEFAULT_AUTHOR,
} from "./blog";

export type {
  BookingCalendarProvider,
  BookingCalendarDisplayMode,
  BookingEventType,
  BookingCalendarConfig,
  BookingPrefillData,
  BookingCalendarProps,
  BookingAnalyticsEvent,
  CalendlyEventData,
  BookingWidgetState,
} from './booking-calendar';

export {
  DEFAULT_BOOKING_CONFIG,
  MAX_LOAD_ATTEMPTS,
  WIDGET_LOAD_TIMEOUT,
} from './booking-calendar';

export type {
  VideoProvider,
  VideoTestimonial,
  VideoPlayerProps,
  VideoTestimonialCardProps,
  VideoTestimonialsSectionProps,
} from './video-testimonial';

export {
  getYouTubeThumbnail,
  getVimeoThumbnailPlaceholder,
  getVideoEmbedUrl,
  formatVideoDuration,
} from './video-testimonial';

export type {
  InstagramMediaType,
  InstagramFeedEventType,
  InstagramPost,
  InstagramFeedConfig,
  InstagramFeedSectionProps,
  InstagramFeedCardProps,
  InstagramFeedAnalyticsEvent,
  InstagramFeedWidgetState,
} from './instagram-feed';

export {
  DEFAULT_INSTAGRAM_FEED_CONFIG,
  MAX_INSTAGRAM_LOAD_ATTEMPTS,
  INSTAGRAM_FEED_LOAD_TIMEOUT,
  INSTAGRAM_API_BASE_URL,
  INSTAGRAM_FEED_LIMITS,
  INSTAGRAM_GRID_COLUMNS,
} from './instagram-feed';
