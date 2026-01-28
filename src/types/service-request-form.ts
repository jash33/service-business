/**
 * Service Request Form Type Definitions
 * Type definitions for the multi-step service request form component including
 * service selection, scheduling preferences, project details, and file uploads.
 */

/**
 * Service type options for the service selection step
 */
export type ServiceType =
  | ''
  | 'residential-cleaning'
  | 'commercial-cleaning'
  | 'deep-cleaning'
  | 'move-in-out-cleaning'
  | 'post-construction'
  | 'carpet-cleaning'
  | 'window-cleaning'
  | 'pressure-washing'
  | 'other';

/**
 * Property type options
 */
export type PropertyType =
  | ''
  | 'house'
  | 'apartment'
  | 'condo'
  | 'office'
  | 'retail'
  | 'warehouse'
  | 'other';

/**
 * Property size options
 */
export type PropertySize =
  | ''
  | 'under-1000'
  | '1000-2000'
  | '2000-3000'
  | '3000-4000'
  | '4000-plus';

/**
 * Frequency options for recurring services
 */
export type ServiceFrequency =
  | ''
  | 'one-time'
  | 'weekly'
  | 'bi-weekly'
  | 'monthly'
  | 'quarterly';

/**
 * Preferred time slot options
 */
export type TimeSlot =
  | ''
  | 'morning'
  | 'afternoon'
  | 'evening'
  | 'flexible';

/**
 * Budget range options
 */
export type BudgetRange =
  | ''
  | 'under-100'
  | '100-250'
  | '250-500'
  | '500-1000'
  | '1000-plus'
  | 'not-sure';

/**
 * Urgency level options
 */
export type UrgencyLevel =
  | ''
  | 'flexible'
  | 'within-week'
  | 'within-days'
  | 'urgent';

/**
 * File upload item
 */
export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  preview?: string;
}

/**
 * Step 1: Service Selection Data
 */
export interface ServiceSelectionData {
  serviceType: ServiceType;
  propertyType: PropertyType;
  propertySize: PropertySize;
  additionalServices: string[];
}

/**
 * Step 2: Scheduling Preferences Data
 */
export interface SchedulingData {
  frequency: ServiceFrequency;
  preferredDate: string;
  preferredTimeSlot: TimeSlot;
  alternateDate: string;
  urgency: UrgencyLevel;
}

/**
 * Step 3: Project Details Data
 */
export interface ProjectDetailsData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  specialInstructions: string;
  budgetRange: BudgetRange;
  uploadedFiles: UploadedFile[];
}

/**
 * Complete service request form data
 */
export interface ServiceRequestFormData {
  serviceSelection: ServiceSelectionData;
  scheduling: SchedulingData;
  projectDetails: ProjectDetailsData;
}

/**
 * Validation errors for each step
 */
export interface ServiceRequestFormErrors {
  // Step 1 errors
  serviceType?: string;
  propertyType?: string;
  propertySize?: string;
  // Step 2 errors
  frequency?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  urgency?: string;
  // Step 3 errors
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  specialInstructions?: string;
  budgetRange?: string;
  files?: string;
  // General form error
  form?: string;
}

/**
 * Form submission status
 */
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Form step information
 */
export interface FormStep {
  id: number;
  title: string;
  description: string;
}

/**
 * Complete form state
 */
export interface ServiceRequestFormState {
  currentStep: number;
  data: ServiceRequestFormData;
  errors: ServiceRequestFormErrors;
  touched: Set<string>;
  status: FormStatus;
  serverError?: string;
}

/**
 * Service type option for dropdown
 */
export interface ServiceTypeOption {
  value: ServiceType;
  label: string;
  description?: string;
}

/**
 * Property type option
 */
export interface PropertyTypeOption {
  value: PropertyType;
  label: string;
}

/**
 * Property size option
 */
export interface PropertySizeOption {
  value: PropertySize;
  label: string;
}

/**
 * Frequency option
 */
export interface FrequencyOption {
  value: ServiceFrequency;
  label: string;
  description?: string;
}

/**
 * Time slot option
 */
export interface TimeSlotOption {
  value: TimeSlot;
  label: string;
  timeRange?: string;
}

/**
 * Budget range option
 */
export interface BudgetRangeOption {
  value: BudgetRange;
  label: string;
}

/**
 * Urgency level option
 */
export interface UrgencyLevelOption {
  value: UrgencyLevel;
  label: string;
  description?: string;
}

/**
 * Additional service option
 */
export interface AdditionalServiceOption {
  id: string;
  label: string;
  description?: string;
}

/**
 * Validation configuration
 */
export interface ServiceFormValidationConfig {
  maxFileSize: number; // bytes
  maxFiles: number;
  allowedFileTypes: string[];
  minMessageLength: number;
  maxMessageLength: number;
  maxNameLength: number;
  maxAddressLength: number;
  maxPhoneLength: number;
  maxEmailLength: number;
  minSubmitTime: number; // milliseconds
}

/**
 * Default validation configuration
 */
export const DEFAULT_SERVICE_FORM_VALIDATION_CONFIG: ServiceFormValidationConfig = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  maxFiles: 5,
  allowedFileTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'],
  minMessageLength: 10,
  maxMessageLength: 2000,
  maxNameLength: 100,
  maxAddressLength: 200,
  maxPhoneLength: 20,
  maxEmailLength: 254,
  minSubmitTime: 3000, // 3 seconds
};

/**
 * Form steps configuration
 */
export const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    title: 'Select Service',
    description: 'Choose your service type and property details',
  },
  {
    id: 2,
    title: 'Schedule',
    description: 'Set your preferred date and time',
  },
  {
    id: 3,
    title: 'Details',
    description: 'Provide contact and project information',
  },
];

/**
 * Service type options
 */
export const SERVICE_TYPE_OPTIONS: ServiceTypeOption[] = [
  { value: '', label: 'Select a service type' },
  { value: 'residential-cleaning', label: 'Residential Cleaning', description: 'Regular home cleaning' },
  { value: 'commercial-cleaning', label: 'Commercial Cleaning', description: 'Office and business spaces' },
  { value: 'deep-cleaning', label: 'Deep Cleaning', description: 'Thorough top-to-bottom clean' },
  { value: 'move-in-out-cleaning', label: 'Move In/Out Cleaning', description: 'Prepare for moving' },
  { value: 'post-construction', label: 'Post-Construction Cleaning', description: 'After renovation cleanup' },
  { value: 'carpet-cleaning', label: 'Carpet Cleaning', description: 'Professional carpet care' },
  { value: 'window-cleaning', label: 'Window Cleaning', description: 'Interior and exterior windows' },
  { value: 'pressure-washing', label: 'Pressure Washing', description: 'Exterior surface cleaning' },
  { value: 'other', label: 'Other Services', description: 'Custom cleaning request' },
];

/**
 * Property type options
 */
export const PROPERTY_TYPE_OPTIONS: PropertyTypeOption[] = [
  { value: '', label: 'Select property type' },
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo/Townhouse' },
  { value: 'office', label: 'Office' },
  { value: 'retail', label: 'Retail Space' },
  { value: 'warehouse', label: 'Warehouse/Industrial' },
  { value: 'other', label: 'Other' },
];

/**
 * Property size options
 */
export const PROPERTY_SIZE_OPTIONS: PropertySizeOption[] = [
  { value: '', label: 'Select property size' },
  { value: 'under-1000', label: 'Under 1,000 sq ft' },
  { value: '1000-2000', label: '1,000 - 2,000 sq ft' },
  { value: '2000-3000', label: '2,000 - 3,000 sq ft' },
  { value: '3000-4000', label: '3,000 - 4,000 sq ft' },
  { value: '4000-plus', label: '4,000+ sq ft' },
];

/**
 * Service frequency options
 */
export const FREQUENCY_OPTIONS: FrequencyOption[] = [
  { value: '', label: 'Select frequency' },
  { value: 'one-time', label: 'One-Time Service', description: 'Single visit' },
  { value: 'weekly', label: 'Weekly', description: 'Every week' },
  { value: 'bi-weekly', label: 'Bi-Weekly', description: 'Every 2 weeks' },
  { value: 'monthly', label: 'Monthly', description: 'Once a month' },
  { value: 'quarterly', label: 'Quarterly', description: 'Every 3 months' },
];

/**
 * Time slot options
 */
export const TIME_SLOT_OPTIONS: TimeSlotOption[] = [
  { value: '', label: 'Select preferred time' },
  { value: 'morning', label: 'Morning', timeRange: '8:00 AM - 12:00 PM' },
  { value: 'afternoon', label: 'Afternoon', timeRange: '12:00 PM - 5:00 PM' },
  { value: 'evening', label: 'Evening', timeRange: '5:00 PM - 8:00 PM' },
  { value: 'flexible', label: 'Flexible', timeRange: 'Any time works' },
];

/**
 * Budget range options
 */
export const BUDGET_RANGE_OPTIONS: BudgetRangeOption[] = [
  { value: '', label: 'Select budget range' },
  { value: 'under-100', label: 'Under $100' },
  { value: '100-250', label: '$100 - $250' },
  { value: '250-500', label: '$250 - $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-plus', label: '$1,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
];

/**
 * Urgency level options
 */
export const URGENCY_OPTIONS: UrgencyLevelOption[] = [
  { value: '', label: 'Select urgency' },
  { value: 'flexible', label: 'Flexible', description: 'No rush, schedule at convenience' },
  { value: 'within-week', label: 'Within a Week', description: 'Need service soon' },
  { value: 'within-days', label: 'Within 2-3 Days', description: 'Time sensitive' },
  { value: 'urgent', label: 'Urgent (ASAP)', description: 'Emergency or same-day needed' },
];

/**
 * Additional services options
 */
export const ADDITIONAL_SERVICES_OPTIONS: AdditionalServiceOption[] = [
  { id: 'inside-fridge', label: 'Inside Refrigerator', description: 'Clean shelves and drawers' },
  { id: 'inside-oven', label: 'Inside Oven', description: 'Deep clean oven interior' },
  { id: 'inside-cabinets', label: 'Inside Cabinets', description: 'Wipe cabinet interiors' },
  { id: 'laundry', label: 'Laundry Service', description: 'Wash, dry, and fold' },
  { id: 'dishes', label: 'Dishes', description: 'Wash and put away dishes' },
  { id: 'organization', label: 'Organization', description: 'Help organize spaces' },
  { id: 'pet-hair', label: 'Pet Hair Removal', description: 'Extra attention to pet hair' },
  { id: 'green-products', label: 'Green Products', description: 'Eco-friendly cleaning products' },
];

/**
 * Initial form data
 */
export const INITIAL_SERVICE_REQUEST_DATA: ServiceRequestFormData = {
  serviceSelection: {
    serviceType: '',
    propertyType: '',
    propertySize: '',
    additionalServices: [],
  },
  scheduling: {
    frequency: '',
    preferredDate: '',
    preferredTimeSlot: '',
    alternateDate: '',
    urgency: '',
  },
  projectDetails: {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    specialInstructions: '',
    budgetRange: '',
    uploadedFiles: [],
  },
};
